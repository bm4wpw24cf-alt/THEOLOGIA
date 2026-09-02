# Kommentarfeltet + adminside

Egen løsning (erstattet Giscus). Ingen innlogging for lesere. Nye kommentarer
er skjult til de er godkjent. Administrasjon skjer på `/admin`.

## Arkitektur

| Del | Fil |
| --- | --- |
| Offentlig frontend | `components/comments/Comments.tsx` (i `<section id="kommentarer">` på hver artikkel) |
| Offentlig API | `app/api/comments/route.ts` – `GET` (godkjente) og `POST` (ny, ikke godkjent) |
| Adminside | `app/admin/page.tsx` + `components/admin/AdminLogin.tsx` + `components/admin/AdminDashboard.tsx` |
| Admin-innlogging | `app/api/admin/session/route.ts` – `GET` (status), `POST` (logg inn), `DELETE` (logg ut) |
| Admin CRUD | `app/api/admin/comments/route.ts` (`GET` alle, `POST` opprett) · `app/api/admin/comments/[id]/route.ts` (`PATCH` rediger, `DELETE` slett) |
| Datalag + validering | `lib/comments.ts` |
| Admin-auth (cookie) | `lib/admin-auth.ts` |
| Skjema | `db/schema.sql` |
| Tester | `npm run test:comments` (datalag) · `npm run test:route` (API-ruter) |

Artikkelen identifiseres av `usePathname()` (samme nøkkel som Giscus brukte).

## Miljøvariabler

| Variabel | Beskrivelse |
| --- | --- |
| `DATABASE_URL` | Postgres-tilkobling. Settes automatisk av Neon/Vercel Postgres-integrasjonen. |
| `COMMENT_IP_SALT` | Tilfeldig streng. Brukes til å hashe IP for rate limiting (IP lagres aldri i klartekst). |
| `ADMIN_TOKEN` | Beskytter `/api/admin/*` (Bearer-token) **og** er passordet for innlogging på `/admin`. |

Generer hemmeligheter: `openssl rand -hex 32`

## Oppsett lokalt

```bash
vercel env pull .env.local        # henter DATABASE_URL m.m. fra Vercel
npm run db:init                   # oppretter/oppdaterer comments-tabellen
npm run build && npm start        # produksjonslignende
```

Åpne `http://localhost:3000/admin` og logg inn med verdien av `ADMIN_TOKEN`.

## Adminside – `/admin`

- Serverkomponenten sjekker session-cookie. Uten gyldig session vises kun
  innloggingsskjemaet – dashboardet sendes ikke til klienten.
- Innlogging: passord = `ADMIN_TOKEN`. Ved suksess settes en `httpOnly`,
  `secure`, `sameSite=lax`-cookie (verdi = SHA-256 av tokenet, ikke tokenet selv),
  levetid 12 timer.
- Dashboard: liste over alle kommentarer (tabell på desktop, kort på mobil),
  «+ Ny kommentar», «Rediger», «Slett» (med bekreftelse), «Logg ut».
- Ikke i offentlig navigasjon. `noindex`.

## Sikkerhet

- **Alle** admin-API-ruter kaller `isAuthorizedAdmin(request)` først – gyldig
  session-cookie **eller** `Authorization: Bearer <ADMIN_TOKEN>`. Å gå direkte
  til et endepunkt uten dette gir `401`.
- All validering skjer på serveren: artikkel-sti mot regex, navn 2–60 tegn,
  tekst 3–4000 tegn. Kontrolltegn fjernes.
- Tekst lagres som ren tekst og rendres som React-tekst (aldri
  `dangerouslySetInnerHTML`) → ingen XSS.
- Offentlig `POST`: honeypot-felt + rate limiting (maks 3 per 10 min per hashet
  IP, ingen duplikater innen 24 t).
- Nye offentlige kommentarer: `approved = false`. Admin-opprettede: `approved = true`.
- Passord/token sammenlignes konstanttids. Ingen hemmeligheter i klientkoden.

## Moderere med curl (alternativ til /admin)

```bash
curl -H "Authorization: Bearer $ADMIN_TOKEN" "https://<domenet>/api/admin/comments?status=all"

curl -X POST -H "Authorization: Bearer $ADMIN_TOKEN" -H "Content-Type: application/json" \
  -d '{"article":"/veien-til-jesus/rett-forhold-til-gud","author":"Navn","body":"Tekst","approved":true}' \
  "https://<domenet>/api/admin/comments"

curl -X PATCH -H "Authorization: Bearer $ADMIN_TOKEN" -H "Content-Type: application/json" \
  -d '{"article":"/veien-til-jesus/rett-forhold-til-gud","author":"Navn","body":"Ny tekst","approved":true}' \
  "https://<domenet>/api/admin/comments/123"

curl -X DELETE -H "Authorization: Bearer $ADMIN_TOKEN" "https://<domenet>/api/admin/comments/123"
```
