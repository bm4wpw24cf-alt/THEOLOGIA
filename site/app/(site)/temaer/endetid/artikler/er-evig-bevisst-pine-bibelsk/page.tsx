import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { Icon } from "@/components/icons/Icon";
import { getArticleBySlug } from "@/lib/articles";
import ErEvigBevisstPineBibelskContent from "@/content/articles/er-evig-bevisst-pine-bibelsk.mdx";
import styles from "@/components/articles/article.module.css";

const article = getArticleBySlug("er-evig-bevisst-pine-bibelsk")!;
const pdfHref = "/pdf/er-evig-bevisst-pine-bibelsk.pdf";

export const metadata: Metadata = {
  title: `${article.title} | THEOLOGIA`,
  description: article.description,
  alternates: {
    canonical: article.href,
  },
  openGraph: {
    type: "article",
    title: article.title,
    description: article.description,
    url: article.href,
    siteName: "THEOLOGIA",
  },
};

const TOC = [
  { id: "disposisjon", label: "Artikkeldisposisjon" },
  { id: "innledning", label: "Innledning" },
  { id: "kapittel-1", label: "Kapittel 1: Gud er Dommer" },
  { id: "kapittel-2", label: "Kapittel 2: Sjelesøvn og annihilasjonisme" },
  { id: "kapittel-3", label: "Kapittel 3: Rettferdighet krever straff" },
  { id: "kapittel-4", label: "Kapittel 4: Helvete som bevisst pine" },
  { id: "kapittel-5", label: "Kapittel 5: Evighetens natur" },
  { id: "kapittel-6", label: "Kapittel 6: Innvendinger imøtegått" },
  { id: "kapittel-7", label: "Kapittel 7: Positive implikasjoner" },
  { id: "kapittel-8", label: "Kapittel 8: Historisk utvikling" },
  { id: "kapittel-9", label: "Kapittel 9: Bibelvers analysert" },
  { id: "konklusjon", label: "Konklusjon" },
];

/* Solid variant (Les som PDF / Åpne PDF-en): bg-gold-dark i stedet for
   bg-gold, fordi hvit tekst/ikon på bg-gold kun gir ~3.2:1 kontrast (under
   WCAG AA sin 4.5:1-grense for normal tekst). bg-gold-dark gir ~4.5:1.
   `!text-white` (viktig-modifikator) er nødvendig fordi disse knappene
   rendres inne i ArticleLayout sin `intro`-prop, som ligger inne i
   `.articleContent` — og `.articleContent :global(a)` i article.module.css
   (spesifisitet 0,1,1) tvinger `color: var(--gold-dark)` på enhver <a> der,
   noe som slår Tailwinds `.text-white` (spesifisitet 0,1,0) uansett
   kilderekkefølge. Uten `!` ble teksten (og ikonet, via currentColor)
   gold-dark på gold-dark bakgrunn — usynlig. */
const pdfButtonSolidClass =
  "inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-transparent bg-gold-dark px-6 py-3 text-[.78rem] font-semibold tracking-[1px] !text-white uppercase shadow-[0_10px_24px_-6px_rgba(150,112,31,.55)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-90 max-[640px]:w-full max-[640px]:justify-center";

/* Outline variant (Last ned PDF): hvit bunn med tydelig gold-dark kant/tekst
   (samme ~4.5:1-kontrast), samme border-bredde som solid-varianten
   (border-transparent der) slik at knappehøyden blir identisk. `!text-gold-dark`
   av samme årsak som over — her var det tilfeldigvis samme farge som
   overstyringen tvang frem, men uten `!` ville f.eks. hover-fargen
   (`.articleContent :global(a:hover)` → var(--gold)) vunnet over en eventuell
   `hover:text-*`-utility i stedet for den tiltenkte stilen. */
const pdfButtonOutlineClass =
  "inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-gold-dark bg-white px-6 py-3 text-[.78rem] font-semibold tracking-[1px] !text-gold-dark uppercase transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:bg-parchment max-[640px]:w-full max-[640px]:justify-center";

export default function ErEvigBevisstPineBibelskPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Endetid", href: "/temaer/endetid" },
          { label: "Er evig bevisst pine bibelsk?" },
        ]}
      />

      <ArticleLayout
        category="TEMAER · ENDETID · HELVETE"
        title={article.title}
        subtitle="Et svar til læren om utslettelse"
        meta="Av THEOLOGIA"
        toc={TOC}
        intro={
          <>
            <p>
              En grundig bibelsk og teologisk gjennomgang av spørsmålet om helvete er et sted for evig bevisst pine,
              eller om læren om utslettelse (annihilasjonisme) er den bibelske forståelsen av de ufrelstes endelige
              skjebne.
            </p>

            <div className={styles.pdfActions}>
              <a href={pdfHref} className={pdfButtonSolidClass} target="_blank" rel="noopener">
                <Icon name="document" className="h-4 w-4 !text-white" aria-hidden="true" />
                Les som PDF
              </a>
              <a href={pdfHref} className={pdfButtonOutlineClass} download>
                <Icon name="document" className="h-4 w-4 !text-gold-dark" aria-hidden="true" />
                Last ned PDF
              </a>
            </div>
          </>
        }
      >
        <ErEvigBevisstPineBibelskContent />

        <div className={styles.pdfEmbed}>
          <h2>Les originaldokumentet som PDF</h2>
          <p>Denne artikkelen er en HTML-versjon av et opprinnelig PDF-dokument. Du kan lese eller laste ned originalen under.</p>
          <iframe
            className={styles.pdfEmbedFrame}
            src={pdfHref}
            title="Er evig bevisst pine bibelsk? (PDF)"
          />
          <p className={styles.pdfEmbedFallback}>
            <a href={pdfHref} className={pdfButtonSolidClass} target="_blank" rel="noopener">
              Åpne PDF-en
            </a>
          </p>
        </div>
      </ArticleLayout>
    </main>
  );
}
