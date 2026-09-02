import Link from "next/link";

export interface ChapterNavTarget {
  href: string;
  title: string;
}

const CARD_BASE =
  "group relative flex flex-col justify-center rounded-radius border border-border bg-white p-[30px_34px] shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease)] hover:-translate-y-1 hover:border-gold/35 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-gold";

function NavCard({ target, label, align }: { target: ChapterNavTarget; label: string; align?: "end" }) {
  return (
    <Link
      href={target.href}
      className={`${CARD_BASE} ${align === "end" ? "items-end text-right max-[720px]:items-start max-[720px]:text-left" : ""}`}
    >
      <span className="mb-1.5 font-sans text-[.78rem] font-bold tracking-[1px] text-gold-dark uppercase">{label}</span>
      <strong className="font-serif text-[1.3rem] font-semibold text-ink transition-colors duration-200 group-hover:text-gold-dark">
        {target.title}
      </strong>
    </Link>
  );
}

/**
 * Kapittelnavigasjon nederst på kapittelsidene i studiegruppene. Begge kortene
 * er alltid fullt klikkbare Next.js-<Link>. «Forrige» utelates i første
 * kapittel, «Neste» i siste (send inn `undefined`).
 */
export function ChapterNav({ prev, next }: { prev?: ChapterNavTarget; next?: ChapterNavTarget }) {
  return (
    <section className="border-t border-border pt-[70px] pb-[100px]">
      <div className="mx-auto w-[min(1280px,92%)]">
        <nav aria-label="Kapittelnavigasjon" className="grid grid-cols-[1fr_1.4fr_1fr] gap-5 max-[720px]:grid-cols-1">
          {prev ? <NavCard target={prev} label="← Forrige" /> : <div className="max-[720px]:hidden" />}
          <div className="max-[720px]:hidden" />
          {next ? <NavCard target={next} label="Neste →" align="end" /> : <div className="max-[720px]:hidden" />}
        </nav>
      </div>
    </section>
  );
}
