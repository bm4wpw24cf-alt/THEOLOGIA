"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./evig-dom.module.css";

/**
 * Mekanisk port av temaer/fundament/artikler/evig-dom.html sitt inline
 * <script>: samme IntersectionObserver-oppsett (threshold/rootMargin) og
 * samme section.chapter/.lede-seleksjon som originalen, kun omskrevet til
 * useEffect siden dette er en klientkomponent i stedet for en <script>-tag
 * på siden. MERK: threshold/rootMargin her (0.1 / "0px 0px -40px 0px") er
 * hentet fra DENNE artikkelens egen <script>, ikke fra dap-i-vann sin
 * (som bruker threshold 0.15) – verdiene skal ikke gjenbrukes på tvers.
 */
function useFadeInOnScroll(containerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    container.querySelectorAll(`.${styles.chapter}, .${styles.lede}`).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef]);
}

/** Portert fra .verse-card / .verse-card .ref / .verse-card p – samme markup gjentatt ~20 ganger i originalen. */
function VerseCard({ reference, children }: { reference: string; children: React.ReactNode }) {
  return (
    <div className={styles.verseCard}>
      <span className={styles.verseCardRef}>{reference}</span>
      <p className={styles.verseCardText}>{children}</p>
    </div>
  );
}

/** Portert fra .summary-step / .step-title / .step-desc. desc er valgfri – det andre summary-box-et i originalen (kapittel 11C) har kun step-title, ingen step-desc. */
function SummaryStep({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className={styles.summaryStep}>
      <div className={styles.stepTitle}>{title}</div>
      {desc && <div className={styles.stepDesc}>{desc}</div>}
    </div>
  );
}

export default function EvigDomPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useFadeInOnScroll(rootRef);

  return (
    <div className={styles.page} ref={rootRef}>
      <header className={styles.siteNav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.navBrand}>
            THEOLOGIA
          </Link>
          <Link href="/temaer/fundament" className={styles.navBack}>
            ← Fundament
          </Link>
        </div>
      </header>

      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Evig dom: Guds fullkomne rettferdighet</h1>
        <p className={styles.heroSubtitle}>Guds evne til å skille mellom lys og mørke, rett og galt, liv og død</p>
        <div className={styles.heroDivider} />
      </div>

      <article className={styles.article}>
        <p className={styles.lede}>
          Evig dom er ikke bare en fremtidig hendelse, men en tidløs realitet som gjennomsyrer Guds natur og hans
          forhold til verden. Den handler om Guds evne til å skille mellom lys og mørke, rett og galt, liv og død
          med fullkommen rettferdighet. For å forstå evig dom, må vi se på dens betydning, dens forskjell fra
          fordømmelse, dens rolle i den tidlige kristne lære, dens kvalitative natur, dens røtter i Guds skapende
          handling, og dens uttrykk i Guds evne til å skille — inkludert skillet mellom nærhet til hans godhet og
          atskillelse som fører til fortapelse.
        </p>

        <div className={styles.divider}>
          <span className={styles.dividerSpan}>✦</span>
        </div>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>01</span>
          <h2 className={styles.chapterHeading}>Dom er forskjellig fra fordømmelse</h2>
          <p className={styles.paragraph}>
            Evig dom må ikke forveksles med fordømmelse. Fordømmelse innebærer en endelig avvisning eller
            fortapelse, mens dom er Guds prosess for å vurdere og skille basert på hans rettferdige standard. Guds
            dom kan føre til korrigering, renselse eller belønning, avhengig av hjertets tilstand og handlingenes
            natur.
          </p>
          <p className={styles.paragraph}>
            Gjennom Kristus, som Faderen har gitt all dom til (Joh 5,22), blir Guds dom preget av både rettferdighet
            og nåde, og gir håp om frelse for dem som omvender seg.
          </p>
        </section>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>02</span>
          <h2 className={styles.chapterHeading}>Det vi først lærte om Kristus</h2>
          <p className={styles.paragraph}>
            Hebreerne 6,1–3 gir oss innsikt i de grunnleggende læresetningene om Kristus, som danner fundamentet for
            troen. Blant disse er undervisningen om evig dom, sammen med omvendelse fra døde gjerninger, tro på
            Gud, renselsesbad, håndspåleggelse og de dødes oppstandelse.
          </p>
          <p className={styles.paragraph}>
            At evig dom er en del av «det første vi lærte» viser dens sentrale plass i tidlig kristen undervisning.
            Kristus er ikke bare frelser, men også dommer (Apg 10,42), og hans dom reflekterer Guds karakter —
            rettferdig, men barmhjertig.
          </p>
          <p className={styles.emphasis}>
            Denne læren minner oss om at Guds dom er en realitet som både advarer mot synd og peker mot håpet om
            forsoning gjennom Kristus.
          </p>
          <p className={styles.paragraph}>
            Samtidig oppfordrer Hebreerne 6 oss til å gå videre fra disse grunnleggende sannhetene mot modenhet, der
            evig dom ikke bare er en doktrine, men en levende veiledning for tro og liv.
          </p>
        </section>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>03</span>
          <h2 className={styles.chapterHeading}>Betydningen av «evig»: Ikke bare framtidig</h2>
          <p className={styles.paragraph}>
            Ordet «evig» (gresk <em>aionios</em>) i evig dom handler ikke bare om uendelig tid, men om en kvalitet
            som tilhører Guds rike. Evig dom er en tidløs handling som reflekterer Guds uforanderlige rettferdighet
            og sannhet. Den er ikke begrenset til en fremtidig dommedag, men er til stede i Guds skapende og
            ordnende verk her og nå.
          </p>
          <p className={styles.paragraph}>
            I 1. Mosebok 1,1–4 ser vi Guds første dom: han så at lyset var godt, og skilte lys fra mørke. Denne
            handlingen er «evig» fordi den definerer virkelighetens natur i samsvar med Guds vilje, gyldig til alle
            tider.
          </p>
        </section>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>04</span>
          <h2 className={styles.chapterHeading}>En annen type dom — kvalitet</h2>
          <p className={styles.paragraph}>
            Evig dom er kvalitativ, ikke bare en mekanisk vurdering av handlinger som «riktig» eller «galt». Den
            handler om å bedømme essensen av noe i lys av Guds fullkomne standard.
          </p>
          <p className={styles.paragraph}>
            I skapelsen vurderte Gud lyset som «godt» (1 Mos 1,4), en dom som bekreftet dets harmoni med hans
            vilje. På samme måte skiller Gud mellom det som lyder hans befaling og det som ignorerer den. Evig dom
            er dermed en skapende og ordnende handling som bringer klarhet, rettferdighet og mening til verden.
          </p>
        </section>

        <div className={styles.divider}>
          <span className={styles.dividerSpan}>✦</span>
        </div>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>05</span>
          <h2 className={styles.chapterHeading}>Betydningen av dom: Krisis</h2>
          <p className={styles.paragraph}>
            Det greske ordet for dom, <em>krisis</em>, betyr skille, beslutning eller vurdering. Dette ordet fanger
            essensen av Guds dom som en handling der sannheten åpenbares, og valg får konsekvenser. Guds dom er en
            krisis — et øyeblikk av klarhet der det som er i samsvar med hans vilje, skilles fra det som ikke er
            det.
          </p>
          <p className={styles.paragraph}>
            Det første glimtet av Guds dom finner vi i skapelsesberetningen i 1. Mosebok 1,1–4:
          </p>

          <div className={styles.summaryBox}>
            <h4 className={styles.summaryHeading}>Første glimt av Guds dom · 1 Mos 1,1–4</h4>
            <SummaryStep title="Gud sa: «Bli lys!»" desc="Hans befaling bringer noe nytt inn i tilværelsen." />
            <SummaryStep
              title="Gud så at lyset var godt"
              desc="Han vurderer sin skapelse og bekrefter dens kvalitet i lys av hans standard."
            />
            <SummaryStep
              title="Gud skilte lys fra mørke"
              desc="Han etablerer en grunnleggende orden ved å skille det som er i harmoni med hans vilje fra det som ikke er det."
            />
          </div>

          <p className={styles.paragraph}>
            Denne prosessen viser dommens natur: Gud taler, vurderer og skiller. Hans dom er ikke bare en passiv
            observasjon, men en aktiv, skapende handling som bringer orden og mening. I denne første dommen ser vi
            at Gud skiller mellom det som lyder hans befaling og det som står utenfor hans vilje. Dette skillet
            mellom lys og mørke blir et bilde på Guds evige dom, der han med fullkommen rettferdighet vurderer og
            ordner alt i samsvar med sin natur.
          </p>
        </section>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>06</span>
          <h2 className={styles.chapterHeading}>Gud skiller: Fullkommen rettferdighet i handling</h2>
          <p className={styles.paragraph}>
            Guds evne til å skille er hjertet i evig dom. Gjennom hele Skriften ser vi at Gud skiller mellom det
            som lyder hans befaling og det som ignorerer den. Dette skillet er ikke vilkårlig, men rotfestet i hans
            hellige og rettferdige natur.
          </p>

          <VerseCard reference="Lys og mørke · 1 Mos 1,4">
            Gud skiller lys fra mørke og etablerer en grunnleggende orden som reflekterer hans vilje. Lyset, som er
            «godt», representerer det som er i harmoni med Guds skapende hensikt, mens mørket symboliserer det som
            står utenfor denne hensikten.
          </VerseCard>
          <VerseCard reference="Rett og galt · 5 Mos 30,19">
            Gud oppfordrer sitt folk til å «velge livet» ved å følge hans bud, og viser at han skiller mellom
            lydighet, som fører til velsignelse, og ulydighet, som fører til forbannelse.
          </VerseCard>
          <VerseCard reference="Død og liv · Joh 3,18–19">
            Gjennom Kristus åpenbares Guds dom som et skille mellom de som tar imot frelsen og de som avviser den.
          </VerseCard>
        </section>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>07</span>
          <h2 className={styles.chapterHeading}>Atskillelse fra Guds godhet kontra evig fortapelse</h2>
          <p className={styles.paragraph}>
            Guds dom innebærer også et dypere skille — mellom de som lever i hans godhet og nærhet, og de som,
            gjennom sitt valg, blir atskilt fra ham. Guds godhet og nærhet er kilden til liv, glede og
            fullkommenhet (Sal 16,11). Å leve i hans nærvær er å oppleve frelsen og fellesskapet med ham, som
            Kristus tilbyr (Joh 17,3).
          </p>
          <p className={styles.paragraph}>
            Men Guds dom respekterer menneskets frie vilje. De som vedvarende avviser Guds kall og nåde, velger en
            tilstand av atskillelse fra hans godhet — det som ofte beskrives som evig fortapelse.
          </p>
          <p className={styles.paragraph}>
            Evig fortapelse er ikke bare en straff pålagt utenfra, men en konsekvens av å vende seg bort fra Guds
            livgivende nærvær. Jesus beskriver dette i Matteus 25,46, der de rettferdige går til «evig liv», mens
            de som avviser Gud, går til «evig straff». Denne straffen kan forstås som en tilstand av total
            atskillelse fra Guds godhet, der mørket, smerten og tomheten råder fordi Guds lys og kjærlighet er
            fraværende (2 Tess 1,9).
          </p>
          <p className={styles.emphasis}>
            Likevel er Guds dom alltid rettferdig; han tvinger ingen til fellesskap med seg, men lar menneskets
            valg få evige konsekvenser. Gjennom Kristus tilbyr Gud en vei tilbake til hans nærhet, slik at ingen
            trenger å oppleve fortapelse (2 Pet 3,9).
          </p>
          <p className={styles.paragraph}>
            Guds skille er alltid preget av fullkommen rettferdighet. Han ser ikke bare de ytre handlingene, men
            hjertets intensjoner (1 Sam 16,7), og hans dom er fri for partiskhet eller feil. Evig dom er dermed Guds
            evne til å skille med en klarhet og rettferdighet som overgår menneskelig forstand — en handling som
            bringer orden, avslører sannhet og åpner veien for frelse for dem som søker Gud.
          </p>
        </section>

        <div className={styles.partMarker}>
          <span className={styles.partMarkerSpan}>Utvidet skriftstudium</span>
        </div>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>08</span>
          <h2 className={styles.chapterHeading}>Gud er dommeren</h2>
          <blockquote className={styles.blockquote}>
            «Himmelen forkynner hans rettferd. Han er en Gud som dømmer. Sela.»
            {" "}<cite className={styles.blockquoteCite}>Sal 50,6</cite>
          </blockquote>
          <p className={styles.paragraph}>
            Skriften vitner gjennomgående om at Gud er den som dømmer, og at hans dom konsekvent reflekterer hans
            rettferdige natur.
          </p>
          <div className={styles.refsInline}>
            <strong className={styles.refsInlineStrong}>Se også (uten sitat i kildematerialet):</strong> Dom 11,27 ·
            Sal 94,2 · Hebr 12,24 · Jak 4,12
          </div>

          <h3 className={styles.subheading}>Gud gir den rettferdige rett i sin sak</h3>
          <VerseCard reference="Sal 7,9">
            «HERREN dømmer folkene. Gi meg min rett, HERRE, for jeg er rettferdig og hel i min ferd.»
          </VerseCard>
          <VerseCard reference="Sal 9,5">
            «For du har gitt meg rett i min sak, du har satt deg på tronen, du rettferdige dommer.»
          </VerseCard>

          <h3 className={styles.subheading}>Gud gjør skille</h3>
          <VerseCard reference="5 Mos 32,36">
            «Men HERREN vil skaffe sitt folk rett og ha medfølelse med sine tjenere, for han ser at deres makt er
            borte, det er ute med både fange og fri.»
          </VerseCard>
          <VerseCard reference="1 Pet 4,17">
            «For nå er tiden kommet da dommen skal begynne, og den skal begynne med Guds hus. Men kommer dommen
            over oss først, hvordan går det da til slutt med dem som er ulydige mot Guds evangelium?»
          </VerseCard>
          <VerseCard reference="1 Sam 2,10">
            «HERREN knuser sine fiender. Han lar det tordne over dem fra himmelen, HERREN dømmer den vide jord. Han
            vil gi sin konge styrke og sin salvede stor kraft!»
          </VerseCard>
          <VerseCard reference="Sal 9,8–9">
            «Men HERREN troner til evig tid, til dom har han reist sin trone. Han dømmer verden med rettferd,
            feller rettferdig dom over folkene.»
          </VerseCard>
          <VerseCard reference="Sal 50,4">«Han kaller på himmelen der oppe og på jorden, for han vil dømme sitt folk.»</VerseCard>
        </section>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>09</span>
          <h2 className={styles.chapterHeading}>Rettferdig dom</h2>
          <p className={styles.paragraph}>
            Idet Gud utøver sin dom, blir hans rettferdige karakter åpenbart. I virkeligheten er det slik at
            uttrykkene «dom» og «rettferdighet» ofte blir brukt om hverandre.
          </p>
          <VerseCard reference="Sal 9,17 (NB11)">«HERREN gir seg til kjenne, han kommer med rettferd …»</VerseCard>
          <VerseCard reference="Sal 9,17 (NB)">«Herren har vist hvem han er, han har holdt dom …»</VerseCard>
          <p className={styles.paragraph}>
            I Salme 58 fordømmer David den motstridende urettferdighet fra menneskelige herskere og kaller på Gud
            om å gripe inn, og hevder i Sal 58,12: «Da skal menneskene si: Ja, den rettferdige får sin lønn. Det
            finnes en Gud som dømmer på jorden.»
          </p>
          <p className={styles.paragraph}>
            Jesaja 26,9 (BGO) forteller oss at «… når dine dommer råder på jorden, får alle som bor i verden, lære
            rettferdighet.» Og Guds ord til Edom var: «Jeg skal gi meg til kjenne blant dem når jeg dømmer deg»
            (Esek 35,11).
          </p>
          <p className={styles.paragraph}>
            Det følger derav at for dem som selv er rettferdige, er det å se Guds rettferdige dom satt ut i kraft,
            en grunn til stor glede:
          </p>
          <VerseCard reference="Ord 21,15">«At en gjør det rette, er en glede for den rettferdige …» (NASB: «Å utøve rett …»)</VerseCard>
          <VerseCard reference="Sal 101,1">«… Jeg vil synge om miskunn og rett, HERRE, for deg vil jeg synge og spille.»</VerseCard>
          <VerseCard reference="Sal 119,7">
            «Jeg priser deg av et oppriktig hjerte når jeg lærer dine rettferdige lover.» (BGO: «dommer»)
          </VerseCard>
          <p className={styles.emphasis}>
            Frydesang og takknemlighet fra et rettferdig hjerte er det menneskelige gjensvar til guddommelig dom.
            Dette er ikke bare et gjensvar fra en enkelt person — det bør være det samlede uttrykk fra det forløste
            fellesskapet.
          </p>
        </section>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>10</span>
          <h2 className={styles.chapterHeading}>Fjellet Sion</h2>
          <p className={styles.paragraph}>Fjellet Sion er en poetisk og profetisk måte å skildre Guds folk på (Hebr 12,22).</p>
          <blockquote className={styles.blockquote}>
            «Sion-fjellet skal glede seg og Judas døtre juble over dine dommer.»
            {" "}<cite className={styles.blockquoteCite}>Sal 48,12</cite>
          </blockquote>
        </section>

        <div className={styles.divider}>
          <span className={styles.dividerSpan}>✦</span>
        </div>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>11</span>
          <h2 className={styles.chapterHeading}>Evig dom — vi kjenner dommeren</h2>
          <p className={styles.paragraph}>Gud er satt til å dømme (Joh 3,17; 5,22–23; 5,26–27). Når du kjenner Jesus, får du gudsfrykt.</p>

          <div className={styles.threeAspects}>
            <div className={styles.aspect}>
              <span className={styles.aspectLabel}>A</span>
              <h4 className={styles.aspectHeading}>Dommen har vært</h4>
              <p className={styles.paragraph}>Nådens år er forkynt (Jes 61,2). Jesus holdt dom over synden i oss (Rom 8,3).</p>
              <p className={styles.paragraph}>
                <strong>Korset:</strong> Jesus er dømt på våre vegne (Jes 53,5–6). Han holdt dom over verden (Joh
                12,31; 3,15–21).
              </p>
              <p className={styles.paragraph}>
                Å vente på dom uten Kristus betyr fordømmelse. Satan er dømt (Joh 16,11; Hebr 2,14), hans makt og
                herredømme er avvæpnet (Kol 2,15), og synden er dømt (Rom 8,3).
              </p>
            </div>

            <div className={styles.aspect}>
              <span className={styles.aspectLabel}>B</span>
              <h4 className={styles.aspectHeading}>Dom her og nå</h4>
              <p className={styles.paragraph}>
                Gud gir en delegert autoritet: «Ja, der står troner for dommere, troner for Davids hus» (Sal
                122,5). En dommer er en redningsmann (Apg 7,35; Dom 2,14–18). Israel fikk utvelge dommere etter
                bestemte krav — dyktige menn, salvet og utrustet, gudfryktige, pålitelige og med hat mot urett
                vinning (2 Mos 18,13–27; 5 Mos 1,16–18).
              </p>
              <blockquote className={styles.blockquote}>
                «Da flammet Herrens vrede opp mot Israel, og han ga dem i hendene på røvere som plyndret dem … Da
                lot Herren det stå fram dommere som berget dem ut av hendene på røverne. Men heller ikke dommerne
                adlød de … For Herren fikk medlidenhet med dem når de sukket under dem som plaget og undertrykte
                dem.»
                {" "}<cite className={styles.blockquoteCite}>Dom 2,14–18</cite>
              </blockquote>
              <p className={styles.paragraph}>Kongehuset og dommerfunksjonen er bundet sammen:</p>
              <blockquote className={styles.blockquote}>
                «Da skal det i godhet reises en trone. På den skal det i troskap sitte en dommer i Davids telt, en
                som søker rett og fremmer rettferd.»
                {" "}<cite className={styles.blockquoteCite}>Jes 16,5</cite>
              </blockquote>
              <p className={styles.paragraph}>Vi finner et himmelsk mønster for dette i Åp 4,4:</p>
              <VerseCard reference="Ef 4,10">
                «Han som steg ned, er den samme som steg høyt opp over alle himler for å fylle alt.»
              </VerseCard>
              <p className={styles.emphasis}>Å styre uten kjærlighet er tyranni. Å styre med kjærlighet er harmoni.</p>
              <p className={styles.paragraph}>
                Jesus er selve mønsteret (Jes 11,2–4): «Døm ikke etter det dere ser, døm heller rettferdig!» (Joh
                7,24; jf. Matt 7,1–5). Vi skal ikke dømme den som er svak i troen (Rom 14), ikke dømme etter sosial
                standard (Jak 2,4), ikke dømme noen bak deres rygg (Matt 18), og ikke dømme før tiden (Apg 5,38–39;
                1 Kor 5,3–7).
              </p>
            </div>

            <div className={styles.aspect}>
              <span className={styles.aspectLabel}>C</span>
              <h4 className={styles.aspectHeading}>Framtidig dom</h4>
              <blockquote className={styles.blockquote}>
                «Slik alle mennesker må dø én gang og siden komme for dommen.»
                {" "}<cite className={styles.blockquoteCite}>Hebr 9,27</cite>
              </blockquote>
              <p className={styles.paragraph}>Dommen finner sted på en bestemt dag, utført av Jesus Kristus (Joh 5,22).</p>
              <VerseCard reference="Apg 17,31">
                «For han har fastsatt en dag da han skal dømme verden med rettferdighet. Dette skal skje ved den
                mannen som han har utvalgt til det, etter at han har gitt fullgodt bevis for alle ved å reise ham
                opp fra de døde.»
              </VerseCard>
              <VerseCard reference="Apg 10,42">
                «Han bød oss å forkynne for folket og vitne at han er den som Gud har satt til å være dommer over
                levende og døde.»
              </VerseCard>
              <VerseCard reference="Rom 2,16">
                «… på den dagen når Gud skal dømme det skjulte hos menneskene, etter mitt evangelium, ved Jesus
                Kristus.»
              </VerseCard>
              <VerseCard reference="2 Tim 4,1">
                «Jeg vitner for Gud og Kristus Jesus, som skal dømme levende og døde, og ved hans komme og hans
                rike.»
              </VerseCard>

              <h3 className={styles.subheading}>Fortapelsen</h3>
              <p className={styles.paragraph}>
                Å vedvarende nekte å godta Jesu herredømme, fører til den andre og evige død — et sted forberedt
                for å straffe Satan og hans engler.
              </p>
              <VerseCard reference="Matt 25,41">
                «Gå bort fra meg, dere som er forbannet, til den evige ild som er gjort i stand for djevelen og
                englene hans.»
              </VerseCard>
              <VerseCard reference="Åp 19,19–20">«… Begge ble kastet levende i ildsjøen som brenner med svovel.»</VerseCard>
              <VerseCard reference="Åp 20,11–15">«… Og om noen ikke var skrevet inn i livets bok, ble han kastet i ildsjøen.»</VerseCard>
              <VerseCard reference="Åp 21,6–8">
                «Men de feige, de vantro og vanhellige, de som myrder, driver med hor og trolldom, avgudsdyrkere og
                alle løgnere, deres plass skal være i sjøen som brenner med ild og svovel. Det er den annen død.»
              </VerseCard>
              <VerseCard reference="Jud 7">«… De ble straffet med evig ild og er blitt et advarende eksempel.»</VerseCard>
              <div className={styles.refsInline}>
                <strong className={styles.refsInlineStrong}>Se også (uten sitat i kildematerialet):</strong> 2 Tess
                1,6–10 · Hebr 10,26–27
              </div>
              <blockquote className={styles.blockquote}>
                «Gud sendte ikke sin Sønn til verden for å dømme verden, men for at verden skulle bli frelst ved
                ham.»
                {" "}<cite className={styles.blockquoteCite}>Joh 3,16–17</cite>
              </blockquote>

              <h3 className={styles.subheading}>Kristi domstol</h3>
              <p className={styles.paragraph}>
                Ugudelighet og urettferdighet er å ikke tjene Gud (Mal 3,18). For de frelste venter en prøvelse av
                det som er gjort (2 Kor 4,14–5,10) — lønn eller tap av lønn (1 Mos 15,1; Hebr 11,6; 1 Kor 3,15; Rom
                14,10.12), men med frimodighet på dommens dag (1 Joh 4,17).
              </p>

              <div className={styles.summaryBox}>
                <h4 className={styles.summaryHeading}>Det du har gjort skal prøves · 1 Kor 3,10–23</h4>
                <SummaryStep title="Er du på en grunnvoll som er lagt av apostler?" />
                <SummaryStep title="Bygger du på grunnvollen med rette materialer?" />
                <SummaryStep title="Få lønn — ikke ødelegg Guds hus" />
              </div>

              <p className={styles.paragraph}>Hva gir lønn?</p>
              <ul className={styles.reflectionList}>
                <li>Vise godhet — Luk 6,35</li>
                <li>Forfølgelse og motstand — Matt 5,10–12</li>
                <li>Gi til «de små» — Matt 10,42</li>
                <li>Den som høster, får lønn — Joh 4,36</li>
                <li>Gjøre alt vi gjør for Herren — Kol 3,23–25</li>
                <li>Stole på Gud og gjøre godt — 1 Tim 6,17–19</li>
              </ul>

              <p className={styles.paragraph}>
                Jesus talte mye om lønn (Matt 5,12.46; 6,1–2.5; 10,41–42). Løpet er målrettet, ikke i det uvisse (1
                Kor 9,25–26) — mot seiersprisen (Fil 3,14) og rettferdighetens krans (2 Tim 4,7–8). Vi skal ikke
                miste kronen (Åp 3,11): Jesus kommer med lønn (Åp 22,12), og vi skal ikke miste lønnen (2 Joh v.8).
              </p>
            </div>
          </div>
        </section>

        <section className={styles.chapter}>
          <span className={styles.chapterNumber}>12</span>
          <h2 className={styles.chapterHeading}>Ikke døm andre</h2>
          <p className={styles.paragraph}>
            «Det mål du måler med, det du sier» (Luk 6,37–45). Døm ikke etter det du ser (Joh 7,24), og ikke før
            tiden (1 Kor 4,5). Godta hverandres samvittighet (Rom 14,1ff).
          </p>
          <blockquote className={styles.blockquote}>
            «For det finnes intet skjult som ikke skal bli synlig, og intet hemmelig som ikke skal bli kjent og
            komme for dagen. Pass derfor på hvordan dere hører! For den som har, skal få. Men den som ikke har,
            skal bli fratatt selv det han tror han har.»
            {" "}<cite className={styles.blockquoteCite}>Luk 8,17–18</cite>
          </blockquote>
          <blockquote className={styles.blockquote}>
            «Men alt kommer for dagen når det blir avslørt av lyset.»
            {" "}<cite className={styles.blockquoteCite}>Ef 5,13</cite>
          </blockquote>
        </section>

        <div className={styles.divider}>
          <span className={styles.dividerSpan}>✦</span>
        </div>

        <section className={styles.chapter}>
          <h2 className={styles.chapterHeading}>Husk</h2>
          <p className={styles.emphasis}>Rettferdig dom er livsatmosfæren som menigheten er skapt til å fungere i.</p>
          <p className={styles.paragraph}>
            Å leve i Guds evige dom er et treningsprogram for Guds folk, som forbereder oss på vår rolle i den
            kommende tidsalder. Vi er forvaltere av Guds store plan og hensikt.
          </p>
        </section>

        <section className={styles.chapter}>
          <h2 className={styles.chapterHeading}>Konklusjon</h2>
          <p className={styles.paragraph}>
            Evig dom er Guds tidløse og fullkomne prosess for å skille og vurdere i samsvar med hans rettferdighet.
            Den er forskjellig fra fordømmelse ved sin mulighet for nåde og frelse, spesielt gjennom Kristus. Som en
            del av det første vi lærte om Kristus (Hebr 6,1–3), minner evig dom oss om Guds rolle som dommer og om
            vårt kall til å vokse i tro mot modenhet.
          </p>
          <p className={styles.paragraph}>
            Dens evige natur peker på dens tidløse kvalitet, og dens fokus på kvalitet viser at Guds dom er en
            skapende handling som bringer orden og håp. Gjennom krisis — Guds skille mellom lys og mørke, som vi
            ser allerede i skapelsen (1 Mos 1,1–4) — åpenbares Guds rettferdighet.
          </p>
          <p className={styles.paragraph}>
            Guds evne til å skille mellom det som lyder hans befaling og det som ignorerer den, mellom lys og
            mørke, rett og galt, død og liv, kulminerer i skillet mellom nærhet til hans godhet og atskillelse som
            fører til fortapelse. Ved å leve i lys av denne dommen, formes vi til å søke Guds vei og reflektere
            hans rettferdighet i våre liv.
          </p>
        </section>

        <div className={styles.closing}>
          <p className={styles.closingParagraph}>
            «Å, dyp av rikdom og visdom og kunnskap hos Gud! Hvor uransakelige hans dommer er, hvor ufattelige hans
            veier!»
            <br />— Rom 11,33
          </p>
        </div>
      </article>

      <footer className={styles.siteFooter}>
        <p className={styles.footerParagraph}>
          THEOLOGIA — en bibelsk-teologisk ressurs ·{" "}
          <Link href="/" className={styles.footerLink}>
            Til forsiden
          </Link>{" "}
          ·{" "}
          <Link href="/temaer/fundament" className={styles.footerLink}>
            Fundament
          </Link>
        </p>
      </footer>
    </div>
  );
}
