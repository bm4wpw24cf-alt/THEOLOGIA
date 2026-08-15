import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ContentList } from "@/components/articles/ContentList";
import styles from "@/components/articles/article.module.css";

export const metadata: Metadata = {
  title: "Om meg | THEOLOGIA",
  description:
    "Eirik Storesletten, personen bak THEOLOGIA, og tanken bak dette bibelsk-teologiske biblioteket.",
};

export default function OmMegPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Om meg" }]} />

      <ArticleLayout category="OM MEG" title="Om meg" subtitle="Eirik Storesletten" meta="Personen bak THEOLOGIA">
        <p>
          Bak THEOLOGIA står Eirik Storesletten – én person med et ønske om å gjøre bibelsk kunnskap tilgjengelig,
          forståelig og godt strukturert, slik at flere kan vokse i tro, innsikt og kjærlighet til Gud.
        </p>
        <p>
          THEOLOGIA er bygget som et digitalt bibliotek og kunnskapssted, ikke primært som en blogg eller en
          nyhetsside. Målet er å samle bibelsk og teologisk kunnskap på ett sted, og gjøre den lett å finne, lese,
          studere og bruke i eget bibelstudium.
        </p>

        <h2>Hvorfor THEOLOGIA</h2>
        <p>
          THEOLOGIA er født ut av en kjærlighet til Bibelen, en interesse for teologi og mange timer brukt på
          grundig bibelstudium. Underveis vokste det frem et ønske om å gjøre denne kunnskapen tilgjengelig for
          flere – å formidle den klart og strukturert, slik at andre som ønsker å studere Bibelen grundig også kan
          finne god hjelp på veien.
        </p>

        <h2>Hva du finner på THEOLOGIA</h2>
        <p>Nettstedet samler flere typer ressurser for bibelsk og teologisk studium, blant annet:</p>
        <ContentList>
          <li>Bibelstudier</li>
          <li>Teologiske artikler</li>
          <li>Bibelske temaer</li>
          <li>Apologetikk</li>
          <li>Kristent liv</li>
          <li>Bøker og digitale ressurser</li>
          <li>Studiegrupper</li>
          <li>Ressurser til personlig bibelstudium</li>
        </ContentList>

        <h2>Grunnlag og formål</h2>
        <p>
          THEOLOGIA ønsker å begynne med Bibelen selv, og undersøke hva Skriften faktisk sier. Formålet er ikke
          først og fremst å presentere ferdige teologiske systemer, men å hjelpe leseren til selv å lese, undersøke
          og forstå Bibelen, med et solid bibelsk og teologisk grunnlag som utgangspunkt.
        </p>

        <h2>Kontakt</h2>
        <p>Har du spørsmål, tilbakemeldinger eller ønsker å ta kontakt?</p>
        <p>
          <a href="mailto:eistore@icloud.com" className={styles.contactEmail}>
            eistore@icloud.com
          </a>
        </p>
      </ArticleLayout>
    </main>
  );
}
