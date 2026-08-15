import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { BibleBox } from "@/components/articles/BibleBox";
import { Icon } from "@/components/icons/Icon";

export const metadata: Metadata = {
  title: "Gratis kristne bøker | THEOLOGIA",
  description:
    "Pålitelige nettsteder hvor du kan lese og laste ned kristne bøker gratis – for personlig oppbyggelse, dypere forståelse av Bibelen og teologisk innsikt.",
};

const SOURCES = [
  {
    href: "https://www.rhemabooks.org/no/home/#order-m",
    icon: "book-open" as const,
    title: "Rhema Books",
    description:
      "Et stort utvalg av kristne bøker tilgjengelig gratis. Rhema Books tilbyr undervisning, andaktsbøker, teologiske emner og mer – til oppbyggelse for troen.",
  },
  {
    href: "https://www.monergism.com/1100-free-ebooks-listed-alphabetically-author",
    icon: "books" as const,
    title: "Monergism",
    description:
      "Mer enn 1100 gratis e-bøker listet alfabetisk etter forfatter. Et verdifullt bibliotek med klassiske og moderne kristne bøker innen mange fagområder.",
  },
];

export default function BokerPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressursbiblioteket", href: "/temaer/ressurser" },
          { label: "Gratis kristne bøker" },
        ]}
      />

      {/* "Tilbake"-knapp, side-scoped: originalen har denne som en pillknapp i
          brødsmulesti-raden (.boker-breadcrumb-row), et unikt mønster som
          ikke finnes andre steder i prosjektet ennå. */}
      <div className="mx-auto w-[min(1280px,92%)] flex justify-end pt-3">
        <Link
          href="/temaer/ressurser"
          className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-6 py-3 text-[.78rem] font-semibold tracking-[1px] text-text uppercase transition-all duration-200 hover:border-gold hover:bg-parchment hover:text-gold-dark"
        >
          ← Tilbake
        </Link>
      </div>

      <ArticleLayout
        category={
          <>
            <Icon name="book-open" aria-hidden="true" className="mr-1.5 inline-block h-3.5 w-3.5 -translate-y-px align-middle" />
            Ressursbiblioteket
          </>
        }
        title="Gratis kristne bøker"
        subtitle="Gode bøker. Gratis tilgang. Til oppbyggelse og innsikt."
      >
        <p>
          Her finner du pålitelige nettsteder hvor du kan lese og laste ned kristne bøker gratis – for personlig
          oppbyggelse, dypere forståelse av Bibelen og teologisk innsikt.
        </p>

        <h2>Anbefalte kilder</h2>

        <ul className="mt-8 mb-12 flex list-none flex-col gap-5 pl-0">
          {SOURCES.map((source) => (
            <li key={source.href}>
              <a
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 rounded-radius border border-border bg-white p-[30px_32px] text-text shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease)] hover:-translate-y-1 hover:border-gold/35 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-[3px] max-[640px]:flex-col max-[640px]:items-start max-[640px]:p-[26px_24px] max-[640px]:text-left"
              >
                <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-parchment">
                  <Icon name={source.icon} className="h-[26px] w-[26px] text-gold" />
                </span>
                <span className="min-w-0 flex-1">
                  <h3 className="mb-1.5 text-[1.25rem]">{source.title}</h3>
                  <p className="mb-0 font-sans text-[.95rem] text-text-light">{source.description}</p>
                </span>
                <span
                  aria-hidden="true"
                  className="pointer-events-none inline-flex flex-none items-center gap-2.5 rounded-full bg-gold px-6 py-3 text-[.78rem] font-semibold tracking-[1px] text-white uppercase max-[640px]:w-full max-[640px]:justify-center max-[640px]:self-stretch"
                >
                  Besøk nettsted
                </span>
              </a>
            </li>
          ))}
        </ul>

        <h2>Hvorfor lese kristne bøker?</h2>

        <div className="mt-8 mb-10 grid grid-cols-3 gap-8 max-[640px]:grid-cols-1 max-[640px]:gap-6">
          <div>
            <h4 className="text-gold-dark">Dypere forståelse</h4>
            <p>Bygg kunnskap om Bibelen, teologi og den kristne tro.</p>
          </div>
          <div>
            <h4 className="text-gold-dark">Åndelig vekst</h4>
            <p>La Guds ord og sunne lærere forme ditt liv.</p>
          </div>
          <div>
            <h4 className="text-gold-dark">Til tjeneste</h4>
            <p>Bli utrustet til å oppmuntre andre i troen.</p>
          </div>
        </div>

        <BibleBox>
          <em>«Dine ord er en lykt for min fot og et lys på min sti.»</em>
          <br />
          <strong>Salme 119,105</strong>
        </BibleBox>
      </ArticleLayout>
    </main>
  );
}
