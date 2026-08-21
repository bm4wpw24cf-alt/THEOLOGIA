import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Veien til Jesus | THEOLOGIA",
  description: "Velg mellom de to hovedveiene til Jesus: Kom til Kristus og Hvordan oppnå rett forhold til Gud?",
};

const articles = [
  {
    title: "Kom til Kristus",
    description: "Guds karakter, menneskets situasjon, Kristi kors og hvordan Gud inviterer oss inn i frelsen.",
    href: "/veien-til-jesus/kom-til-kristus",
  },
  {
    title: "Hvordan oppnå rett forhold til Gud?",
    description: "Hva Bibelen sier om nåde, tro, omvendelse og hvordan vi kan bli rettferdiggjort for Gud.",
    href: "/veien-til-jesus/rett-forhold-til-gud",
  },
];

export default function VeienTilJesusOverviewPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Hjem", href: "/" }, { label: "Veien til Jesus" }]} />

      <section className="mx-auto w-[min(1280px,92%)] py-[90px]">
        <div className="mb-12 max-w-[780px]">
          <p className="mb-4 text-[0.8rem] font-semibold tracking-[0.14em] text-gold uppercase">Veien til Jesus</p>
          <h1 className="text-[2.8rem] font-semibold leading-[1.12] text-ink max-[640px]:text-[2.2rem]">
            To veier inn i evangeliet
          </h1>
          <p className="mt-5 max-w-[700px] text-[1.08rem] leading-[1.8] text-ink-soft">
            Når du søker Gud, er det godt å være tydelig på hva Bibelen lærer. Her finner du to nøkkelartikler som
            sammen forklarer både Guds frelsesplan og hvordan mennesket responderer på evangeliet.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <div
              key={article.href}
              className="group flex h-full flex-col rounded-[22px] border border-border bg-white p-8 shadow-[0_16px_40px_rgba(17,17,17,0.04)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(17,17,17,0.08)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/[.12] text-gold">
                <span aria-hidden="true" className="text-2xl">✦</span>
              </div>

              <h2 className="mb-4 text-[2rem] leading-[1.2] text-ink">{article.title}</h2>
              <p className="mb-7 flex-1 text-[1.02rem] leading-[1.7] text-ink-soft">{article.description}</p>

              <Link
                href={article.href}
                className="inline-flex items-center justify-center self-start rounded-full bg-gold px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-gold-dark"
              >
                Les artikkelen
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
