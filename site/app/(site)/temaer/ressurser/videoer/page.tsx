import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { Icon } from "@/components/icons/Icon";
import { videoCategories } from "@/lib/videoCategories";

export const metadata: Metadata = {
  title: "Videoer | THEOLOGIA",
  description: "Bibelundervisning, konferanser, apologetikk, dokumentarer og islamsk-kritiske videoressurser.",
};

export default function VideoerPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Videoer" },
        ]}
      />

      <ArticleLayout category="RESSURSER · VIDEOER" title="Videoer" subtitle="Bibelundervisning, konferanser, debatter og dokumentarer.">
        <h2>Videokategorier</h2>
        <p className="max-w-[70ch]">Utforsk videoressurser organisert etter kategori.</p>

        <ul
          className="mt-8 grid grid-cols-3 gap-4 max-[1000px]:grid-cols-2 max-[640px]:grid-cols-1"
          style={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          {videoCategories.map((category) => {
            const isLive = category.href.startsWith("/");
            const content = (
              <>
                <span className="mb-3 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-parchment">
                  <Icon name="video" className="h-5 w-5 text-gold" />
                </span>
                <h3 className="mb-1.5 text-[1.05rem] text-navy">{category.label}</h3>
                <p className="mb-4 flex-1 text-[.82rem] leading-[1.55] text-text-light">{category.sub}</p>
                {isLive ? (
                  <span className="inline-flex items-center gap-1.5 text-[.78rem] font-semibold text-gold-dark">
                    Åpne kategori{" "}
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                ) : (
                  <span aria-disabled="true" className="inline-flex items-center gap-1.5 text-[.78rem] font-medium text-text-light italic">
                    Kommer snart
                  </span>
                )}
              </>
            );
            return (
              <li key={category.label} style={{ margin: 0 }}>
                {isLive ? (
                  <Link
                    href={category.href}
                    className="group flex h-full flex-col rounded-radius-sm border border-border bg-white p-5 text-text transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease)] hover:-translate-y-1 hover:border-gold/35 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-[3px]"
                  >
                    {content}
                  </Link>
                ) : (
                  <div
                    aria-disabled="true"
                    className="flex h-full flex-col rounded-radius-sm border border-border bg-white p-5 text-text opacity-70"
                  >
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </ArticleLayout>
    </main>
  );
}
