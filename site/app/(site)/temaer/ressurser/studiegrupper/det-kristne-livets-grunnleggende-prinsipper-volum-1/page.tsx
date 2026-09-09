import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Icon } from "@/components/icons/Icon";
import { STUDY_BASE, studyChapters } from "@/lib/volum1";

export const metadata: Metadata = {
  title: "Det kristne livets grunnleggende prinsipper – Volum 1 | THEOLOGIA",
  description: "Studieoversikt for Det kristne livets grunnleggende prinsipper – Volum 1. Fem kapitler om mennesket, frelsen, Kristi blod, bønn og den menneskelige ånd.",
};

const FORORD_HREF = `${STUDY_BASE}/forord`;
const APPENDIX_HREF = `${STUDY_BASE}/om-to-herrens-tjenere`;

const CHAPTERS = studyChapters.map((chapter) => ({
  title: chapter.title,
  description: chapter.description,
  href: `${STUDY_BASE}/${chapter.slug}`,
  status: chapter.status,
}));

const activeIndex = CHAPTERS.findIndex((chapter) => chapter.status === "active");
const total = CHAPTERS.length;
const position = activeIndex + 1;
const percent = Math.round((position / total) * 100);
const activeChapter = CHAPTERS[activeIndex];
const previousChapter = CHAPTERS[activeIndex - 1];
const nextChapter = CHAPTERS[activeIndex + 1];

function PaginationCard({ chapter, label, align }: { chapter?: { title: string; href: string }; label: string; align?: "end" }) {
  if (!chapter) return <div />;

  return (
    <Link
      href={chapter.href}
      className={`relative flex flex-col justify-center rounded-radius border border-border bg-white p-[30px_34px] shadow-sm transition-[transform,box-shadow] duration-300 ease-[var(--ease)] hover:-translate-y-1 hover:border-[rgba(184,135,43,.3)] hover:shadow ${
        align === "end" ? "items-end text-right" : ""
      }`}
    >
      <span className="mb-1.5 font-sans text-[.78rem] font-bold tracking-[1px] text-gold-dark uppercase">{label}</span>
      <strong className="font-serif text-[1.3rem] font-semibold text-ink">{chapter.title}</strong>
    </Link>
  );
}

export default function Volum1OverviewPage() {
  return (
    <main>
      <Breadcrumbs
        items={[
          { label: "Hjem", href: "/" },
          { label: "Temaer", href: "/temaer" },
          { label: "Ressurser", href: "/temaer/ressurser" },
          { label: "Studiegrupper", href: "/temaer/ressurser/studiegrupper" },
          { label: "Det kristne livets grunnleggende prinsipper – Volum 1" },
        ]}
      />

      <section className="pb-6">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="grid grid-cols-[1fr_240px] items-start gap-12 max-[1100px]:grid-cols-[1fr_200px] max-[720px]:grid-cols-1">
            <section>
              <span className="mb-3.5 inline-block font-sans text-[.76rem] font-bold tracking-[2.4px] text-gold uppercase">★ AKTUELT STUDIE</span>
              <h1 className="mb-4 text-[clamp(1.9rem,3vw,2.5rem)]">Det kristne livets grunnleggende prinsipper</h1>
              <p className="mb-4.5 max-w-[60ch] font-serif text-[1.15rem] text-text">Volum 1</p>
              <p className="mb-4.5 max-w-[60ch] text-[1.02rem] leading-[1.8] text-text">
                En bibelsk og undervisningsmessig introduksjon til det kristne livets grunnleggende prinsipper: hvem mennesket er, hva Gud har gjort i Kristus, hvordan frelsen er vist og hvordan den troende kan erfare Kristus i sin ånd.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={activeChapter.href}
                  className="inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-[.88rem] font-semibold tracking-[1px] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-dark"
                >
                  Start med kapittel 1 <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href={FORORD_HREF}
                  className="inline-flex items-center gap-2.5 rounded-full border border-border bg-white px-8 py-4 text-[.88rem] font-semibold tracking-[1px] text-ink uppercase transition-all duration-200 hover:border-gold hover:text-gold-dark"
                >
                  Les forordet
                </Link>
              </div>
            </section>

            <aside>
              <Image
                src="/images/studiegrupper/volum-1.png"
                alt="Bokomslag: Det kristne livets grunnleggende prinsipper – Volum 1"
                width={1122}
                height={1402}
                className="block w-full rounded-xl shadow-[0_12px_30px_rgba(0,0,0,.15)]"
              />
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-6">
        <div className="mx-auto w-[min(1280px,92%)]">
          <div className="flex flex-col gap-5 rounded-radius border border-border bg-white p-7 shadow-sm">
            <div className="flex flex-wrap items-center gap-6 max-[720px]:gap-[18px]">
              <div className="flex flex-1 basis-[220px] items-center gap-3.5">
                <Icon name="book" aria-hidden="true" className="h-[30px] w-[30px] flex-none text-gold" />
                <div>
                  <h2 className="mb-0.5 text-[1.1rem]">Det kristne livets grunnleggende prinsipper</h2>
                  <p className="font-sans text-[.86rem] text-text-light">{total} hovedkapitler</p>
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
                <span className="font-sans text-[.9rem] font-semibold text-ink">Kapittel {position} av {total}</span>
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

      <section className="pt-15 pb-[50px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <header className="mb-8">
            <span className="font-sans text-[.76rem] font-bold tracking-[2px] text-gold-dark uppercase">Forord</span>
            <h2 className="mt-2 text-[2.2rem]">Introduksjon</h2>
          </header>

          <Link
            href={FORORD_HREF}
            className="mb-10 flex items-center justify-between gap-4 rounded-radius-sm border border-border bg-white p-[24px_28px] text-text shadow-sm transition-colors duration-200 hover:border-gold hover:bg-parchment"
          >
            <div>
              <strong className="mb-1 block font-sans text-[.8rem] font-semibold tracking-[.4px] text-gold-dark uppercase">Forord</strong>
              <span className="font-serif text-[1.1rem] font-semibold text-ink">Om Guds hensikt med mennesket, frelsen i Kristus og livet i ånden</span>
            </div>
            <span aria-hidden="true" className="text-[1.4rem] text-gold">→</span>
          </Link>
        </div>
      </section>

      <section className="pt-0 pb-[90px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <header className="mb-8">
            <span className="font-sans text-[.76rem] font-bold tracking-[2px] text-gold-dark uppercase">Studiemateriale</span>
            <h2 className="mt-2 text-[2.6rem]">Kapitler</h2>
          </header>

          <nav aria-label="Kapitteloversikt" className="flex flex-col gap-3.5">
            {CHAPTERS.map((chapter) => {
              const isActive = chapter.status === "active";
              const isDone = chapter.status === "done";
              const isPublished = isDone || isActive;

              return (
                <Link
                  key={chapter.title}
                  href={chapter.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-4 rounded-radius-sm border p-[22px_26px] text-text transition-colors duration-200 max-[720px]:p-[18px_20px] ${
                    isActive
                      ? "flex-wrap border-gold bg-[linear-gradient(145deg,rgba(224,172,82,.16),rgba(224,172,82,.06))] shadow-sm hover:border-gold-dark"
                      : "border-border bg-white hover:border-gold hover:bg-parchment hover:shadow-sm"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 text-[.8rem] font-bold ${
                      isPublished ? "border-gold bg-gold text-white" : "border-border text-text-light"
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
                    {isDone && (
                      <span className="mb-2 inline-block rounded-full border border-gold/45 px-2.5 py-[3px] font-sans text-[.68rem] font-bold tracking-[1px] text-gold-dark uppercase">
                        Publisert
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

                  {!isActive && <span aria-hidden="true" className="flex-none text-[1.1rem] text-gold">›</span>}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      <section className="pt-0 pb-[100px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <header className="mb-8">
            <span className="font-sans text-[.76rem] font-bold tracking-[2px] text-gold-dark uppercase">Tillegg</span>
            <h2 className="mt-2 text-[2.2rem]">Om to Herrens tjenere</h2>
          </header>

          <Link
            href={APPENDIX_HREF}
            className="flex items-center justify-between gap-4 rounded-radius-sm border border-dashed border-gold/60 bg-[linear-gradient(145deg,rgba(224,172,82,.08),rgba(255,255,255,.85))] p-[26px_28px] text-text shadow-sm transition-colors duration-200 hover:border-gold hover:bg-[linear-gradient(145deg,rgba(224,172,82,.14),rgba(255,255,255,.9))]"
          >
            <div>
              <strong className="mb-1 block font-sans text-[.8rem] font-semibold tracking-[.4px] text-gold-dark uppercase">Tillegg</strong>
              <span className="font-serif text-[1.1rem] font-semibold text-ink">Om to Herrens tjenere</span>
            </div>
            <span aria-hidden="true" className="text-[1.4rem] text-gold">→</span>
          </Link>
        </div>
      </section>

      <section className="pt-0 pb-[100px]">
        <div className="mx-auto w-[min(1280px,92%)]">
          <nav aria-label="Kapittelnavigasjon" className="grid grid-cols-[1fr_1.4fr_1fr] gap-5">
            <PaginationCard chapter={previousChapter} label="← Forrige" />
            <Link href={activeChapter.href} className="relative flex flex-col items-center justify-center rounded-radius bg-[linear-gradient(145deg,var(--navy-light),var(--navy-deep))] p-[30px_34px] text-center shadow transition-[transform,box-shadow] duration-300 ease-[var(--ease)] hover:-translate-y-1 hover:shadow-lg">
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
