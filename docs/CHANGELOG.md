# Changelog

Alle vesentlige endringer i **THEOLOGIA** skal dokumenteres i denne filen.

Denne changeloggen følger prinsippene fra **Keep a Changelog** og bruker **Semantic Versioning (SemVer)**.

---

## [Unreleased]

### Added

* Ingen endringer ennå.

### Changed

* Ingen endringer ennå.

### Fixed

* Ingen feilrettinger ennå.

### Removed

* Ingen endringer ennå.

---

## [1.0.0] - 2026-07-23

### Added

* Opprettet THEOLOGIA-prosjektet.
* Etablert prosjektstruktur.
* Opprettet dokumentasjon under `docs/`.
* Innført **THEOLOGIA Design Standard v1.0**.
* Definert den offisielle designfilosofien.
* Etablert komponentstruktur for forsiden.
* Definert de åtte offisielle temakortene.
* Dokumentert arbeidsflyt for utvikling.
* Dokumentert regler for implementering og vedlikehold.

### Changed

* Første offisielle prosjektversjon.

### Fixed

* Ingen.

### Removed

* Ingen.

---

# Retningslinjer

## Når skal changeloggen oppdateres?

Oppdater changeloggen når det skjer vesentlige endringer i prosjektet, for eksempel:

* Nye funksjoner
* Nye sider
* Nye komponenter
* Endringer i designstandarden
* Forbedringer av brukeropplevelsen
* Feilrettinger
* Refaktorering som påvirker prosjektets struktur

Små interne kodeendringer trenger normalt ikke å dokumenteres.

## Arbeidsflyt

1. Legg nye endringer under **Unreleased**.
2. Ved en ny utgivelse flyttes disse til en ny versjonsseksjon.
3. Opprett deretter en ny tom **Unreleased**-seksjon øverst.

Eksempel:

```md
## [1.1.0] - 2026-08-05

### Added
- Ny artikkelside om bibeltolkning.

### Changed
- Forbedret Hero-komponenten.

### Fixed
- Rettet spacing på temakort.
```

## Prinsipper

* Beskriv **hva** som er endret, ikke hvordan koden ble skrevet.
* Skriv korte og presise punkter.
* Dokumenter bare endringer som er relevante for prosjektets utvikling.
* Hold changeloggen kronologisk med nyeste versjon øverst.
