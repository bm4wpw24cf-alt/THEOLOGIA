import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { dapIVannArticles, DAP_I_VANN_BASE } from "@/lib/dapIVannArticles";

const title = "Dåp i vann";
const description =
  "Artikler om dåp i vann, dåpens betydning og spørsmålet om dåpen er en nødvendig del av den nytestamentlige frelsesresponsen.";

export const metadata: Metadata = {
  title: `${title} | THEOLOGIA`,
  description,
  alternates: {
    canonical: DAP_I_VANN_BASE,
  },
};

export default function DapIVannPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Fundament", href: "/temaer/fundament" },
          { label: title },
        ]}
      />

      <ArticleLayout
        category="TEMA · FUNDAMENT"
        title={title}
        subtitle="Dåpens betydning i Det nye testamente – og spørsmålet om den er en nødvendig del av frelsesresponsen."
      >
        <p>{description}</p>

        <ol className="mt-8 list-none p-0">
          {dapIVannArticles.map((article) => (
            <li key={article.slug} className="border-b border-border py-6 last:border-b-0">
              <Link
                href={`${DAP_I_VANN_BASE}/${article.slug}`}
                className="group flex items-center justify-between gap-4 text-text outline-2 outline-offset-4 outline-gold focus-visible:rounded focus-visible:outline"
              >
                <span>
                  <span className="mb-1 block text-[1.15rem] font-semibold text-navy group-hover:text-gold">
                    {article.title}
                  </span>
                  <span className="block text-[.9rem] leading-[1.5] text-text-light">{article.description}</span>
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
