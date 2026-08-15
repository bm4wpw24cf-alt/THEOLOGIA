import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Icon } from "@/components/icons/Icon";

export const metadata: Metadata = {
  title: "Den herlige menigheten – Studieoversikt | THEOLOGIA",
  description: "Studieoversikt for «Den herlige menigheten» av Watchman Nee. Se alle kapitler og fortsett der du slapp.",
};

const BASE = "/temaer/ressurser/studiegrupper/den-herlige-menigheten";

/**
 * Erstatter js/study-overview.js: originalen leser .book-toc (DOM) i
 * nettleseren for å regne ut fremdrift/paginering fra hvilket kapittel som
 * har klassen "active-chapter", slik at disse aldri kommer i utakt med
 * kapittellisten. I Next.js er kapittellisten allerede datastrukturen bak
 * rendringen, så samme utregning gjøres direkte her ved rendring – ingen
 * klient-JS nødvendig for dette (kategori 3: mekanismen er overflødig i
 * React, ikke funksjonaliteten den ga).
 */
interface Chapter {
  title: string;
  description: string;
  href: string;
  status: "done" | "active" | "upcoming";
}

const CHAPTERS: Chapter[] = [
  { title: "Kapittel 1", description: "Guds plan og Guds hvile", href: `${BASE}/kapittel-1`, status: "done" },
  { title: "Kapittel 2", description: "Eva – et forbilde på menigheten", href: `${BASE}/kapittel-2`, status: "done" },
  { title: "Kapittel 3", description: "Kristi kropp og Kristi brud", href: `${BASE}/kapittel-3`, status: "done" },
  { title: "Kapittel 4", description: "«Og hun fødte … et guttebarn»", href: `${BASE}/kapittel-4`, status: "active" },
  { title: "Kapittel 5", description: "Den hellige stad – Det nye Jerusalem", href: `${BASE}/kapittel-5`, status: "upcoming" },
];

const activeIndex = CHAPTERS.findIndex((c) => c.status === "active");
const total = CHAPTERS.length;
const position = activeIndex + 1;
const percent = Math.round((position / total) * 100);
const activeChapter = CHAPTERS[activeIndex];
const previousChapter = CHAPTERS[activeIndex - 1];
const nextChapter = CHAPTERS[activeIndex + 1];

function PaginationCard({ chapter, label, align }: { chapter?: Chapter; label: string; align?: "end" }) {
  if (!chapter) return <div />;
  const disabled = chapter.status !== "active";
  return (
    <Link
      href={chapter.href}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      className={`relative flex flex-col justify-center rounded-radius border border-border bg-white p-[30px_34px] shadow-sm transition-[transform,box-shadow] duration-300 ease-[var(--ease)] hover:-translate-y-1 hover:border-[rgba(184,135,43,.3)] hover:shadow ${
        align === "end" ? "items-end text-right" : ""
      } ${disabled ? "pointer-events-none cursor-default opacity-60" : ""}`}
    >
      <span className="mb-1.5 font-sans text-[.78rem] font-bold tracking-[1px] text-gold-dark uppercase">{label}</span>
      <strong className="font-serif text-[1.3rem] font-semibold text-ink">{chapter.title}</strong>
    </Link>
  );
}

export default function DenHerligeMenighetenPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Den herlige menigheten" },
        ]}
      />

      {/* HERO */}
      <section className="pb-6">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="grid grid-cols-[1fr_240px] items-start gap-12">
            <section>
              <span className="mb-3.5 inline-block font-sans text-[.76rem] font-bold tracking-[2.4px] text-gold uppercase">
                ★ AKTUELT STUDIE
              </span>
              <h1 className="mb-4 text-[clamp(1.9rem,3vw,2.5rem)]">Den herlige menigheten</h1>
              <p className="mb-4.5 max-w-[60ch] font-serif text-[1.15rem] text-text">
                En kapittel-for-kapittel studie av <strong>Den herlige menigheten</strong> av Watchman Nee.
              </p>
              <div>
                <Link
                  href={activeChapter.href}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-[.88rem] font-semibold tracking-[1px] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-dark"
                >
                  Fortsett studiet <span aria-hidden="true">→</span>
                </Link>
              </div>
            </section>

            <aside>
              <Image
                src="/images/resources/den-herlige-menigheten-3d.png"
                alt="Bokomslag: Den herlige menigheten"
                width={1024}
                height={1536}
                className="block w-full rounded-xl shadow-[0_12px_30px_rgba(0,0,0,.15)]"
              />
            </aside>
          </div>
        </div>
      </section>

      {/* BOKSTATUS */}
      <section className="pb-6">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="flex flex-col gap-5 rounded-radius border border-border bg-white p-7 shadow-sm">
            <div className="flex flex-wrap items-center gap-6 max-[720px]:gap-[18px]">
              <div className="flex flex-1 basis-[220px] items-center gap-3.5">
                <Icon name="book" aria-hidden="true" className="h-[30px] w-[30px] flex-none text-gold" />
                <div>
                  <h2 className="mb-0.5 text-[1.1rem]">Den herlige menigheten</h2>
                  <p className="font-sans text-[.86rem] text-text-light">{total} kapitler</p>
                </div>
              </div>

              <div className="flex flex-1 basis-[220px] items-center gap-3.5">
                <Icon name="path" aria-hidden="true" className="h-[30px] w-[30px] flex-none text-gold" />
                <div>
                  <h2 className="mb-0.5 text-[1.1rem]">Pågår</h2>
                  <p className="font-sans text-[.86rem] text-text-light">Fortsett der du slapp</p>
                </div>
              </div>

              <div className="flex flex-1 basis-[220px] flex-col gap-2">
                <span className="font-sans text-[.9rem] font-semibold text-ink">
                  Kapittel {position} av {total}
                </span>
                <div
                  role="progressbar"
                  aria-valuenow={position}
                  aria-valuemin={1}
                  aria-valuemax={total}
                  aria-label="Fremdrift i studiet"
                  className="relative h-2 overflow-hidden rounded-full bg-parchment-dark"
                >
                  <span className="block h-full rounded-full bg-gold" style={{ width: `${percent}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KAPITTELOVERSIKT */}
      <section className="pt-15 pb-[90px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <header className="mb-8">
            <span>STUDIET</span>
            <h2 className="text-[2.6rem]">Kapitler</h2>
          </header>

          <nav aria-label="Kapitteloversikt" className="flex flex-col gap-3.5">
            {CHAPTERS.map((chapter) => {
              const isActive = chapter.status === "active";
              const isDone = chapter.status === "done";
              const disabled = !isActive;

              return (
                <Link
                  key={chapter.title}
                  href={chapter.href}
                  aria-disabled={disabled || undefined}
                  aria-current={isActive ? "page" : undefined}
                  tabIndex={disabled ? -1 : undefined}
                  className={`flex items-center gap-4 rounded-radius-sm border p-[22px_26px] text-text transition-colors duration-200 max-[720px]:p-[18px_20px] ${
                    disabled ? "pointer-events-none" : ""
                  } ${
                    isActive
                      ? "flex-wrap border-gold bg-[linear-gradient(145deg,rgba(224,172,82,.16),rgba(224,172,82,.06))] shadow-sm hover:border-gold-dark"
                      : "border-border bg-white hover:border-gold hover:bg-parchment hover:shadow-sm"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 text-[.8rem] font-bold ${
                      isDone || isActive ? "border-gold bg-gold text-white" : "border-border text-text-light"
                    }`}
                  >
                    {isDone ? "✓" : isActive ? "▶" : "○"}
                  </span>

                  <span className="min-w-0 flex-1">
                    {isActive && (
                      <span className="mb-2 inline-block rounded-full bg-gold px-2.5 py-[3px] font-sans text-[.68rem] font-bold tracking-[1px] text-white uppercase">
                        Aktivt
                      </span>
                    )}
                    <strong className="block font-sans text-[.78rem] font-semibold tracking-[.4px] text-gold-dark uppercase">{chapter.title}</strong>
                    <em className="mt-1 block font-serif text-[1.05rem] font-semibold text-ink not-italic">{chapter.description}</em>
                    {isActive && (
                      <>
                        <span className="mt-1.5 block font-sans text-[.88rem] text-text">Du leser dette kapittelet nå.</span>
                        <span className="mt-4 inline-flex items-center gap-1.5 rounded-radius-sm bg-gold px-5 py-2.5 font-sans text-[.86rem] font-semibold text-white transition-colors duration-200 max-[720px]:w-full max-[720px]:justify-center">
                          Fortsett å lese <span aria-hidden="true">→</span>
                        </span>
                      </>
                    )}
                  </span>

                  {!isActive && (
                    <span aria-hidden="true" className="flex-none text-[1.1rem] text-gold">
                      ›
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      {/* KAPITTELNAVIGASJON */}
      <section className="pt-0 pb-[100px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <nav aria-label="Kapittelnavigasjon" className="grid grid-cols-[1fr_1.4fr_1fr] gap-5">
            <PaginationCard chapter={previousChapter} label="← Forrige" />

            <Link
              href={activeChapter.href}
              className="relative flex flex-col items-center justify-center rounded-radius bg-[linear-gradient(145deg,var(--navy-light),var(--navy-deep))] p-[30px_34px] text-center shadow transition-[transform,box-shadow] duration-300 ease-[var(--ease)] hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mb-1.5 font-sans text-[.78rem] font-bold tracking-[1px] text-gold-light uppercase">Nåværende kapittel</span>
              <strong className="font-serif text-[1.4rem] font-semibold text-white">{activeChapter.title}</strong>
            </Link>

            <PaginationCard chapter={nextChapter} label="Neste →" align="end" />
          </nav>
        </div>
      </section>
    </main>
  );
}
