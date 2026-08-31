import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { omvendelseSeries, OMVENDELSE_SERIES_BASE } from "@/lib/omvendelseSeries";

export const metadata: Metadata = {
  title: "Omvendelse fra døde gjerninger | THEOLOGIA",
  description:
    "En bibelsk studie av hva omvendelse betyr, fra Det gamle testamentets kall til å vende tilbake til Herren til Det nye testamentets forkynnelse av omvendelse, tro og det nye livet.",
};

export default function OmvendelseFraDodeGjerningerPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Fundament", href: "/temaer/fundament" },
          { label: "Omvendelse fra døde gjerninger" },
        ]}
      />

      <ArticleLayout
        category="FUNDAMENT · OMVENDELSE FRA DØDE GJERNINGER"
        title="Omvendelse fra døde gjerninger"
        subtitle="Et oppgjør med gjerninger uten liv, og et bevisst vendepunkt mot et liv i samsvar med Guds vilje."
      >
        <p>
          En bibelsk studie av hva omvendelse betyr, fra Det gamle testamentets kall til å vende tilbake til Herren
          til Det nye testamentets forkynnelse av omvendelse, tro og det nye livet. Studien er delt inn i seks
          deler, som bør leses i rekkefølge.
        </p>

        <ol className="mt-8 list-none p-0">
          {omvendelseSeries.map((part) => (
            <li key={part.slug} className="border-b border-border py-6 last:border-b-0">
              <Link
                href={`${OMVENDELSE_SERIES_BASE}/${part.slug}`}
                className="group flex items-center justify-between gap-4 text-text focus-visible:rounded outline-2 outline-offset-4 outline-gold focus-visible:outline"
              >
                <span>
                  <span className="mb-1 block text-[1.15rem] font-semibold text-navy group-hover:text-gold">
                    {part.title}
                  </span>
                  <span className="block text-[.9rem] leading-[1.5] text-text-light">{part.question}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-[1.2rem] font-bold text-gold transition-transform duration-200 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </ArticleLayout>
    </main>
  );
}
