"use client";

import { useId, useState } from "react";
import styles from "./accordion.module.css";

/**
 * Sammenleggbar variant av sidens lokale <Section>-kort (samme border,
 * bakgrunn, font-serif-tittel), brukt for «Kommentar»-feltet slik at
 * mange kommentarer under det ikke gjør siden uendelig lang. Chevronen og
 * fadeIn-overgangen gjenbruker samme mønster som AccordionSection i
 * den-herlige-menigheten/kapittel-4.
 */
export function CommentarySection({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <section className="mx-auto w-full max-w-[780px] rounded-radius border border-border bg-white shadow-sm">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold"
      >
        <h2 className="mb-0 font-serif text-[1.8rem] text-ink">{title}</h2>
        <span
          aria-hidden="true"
          className={`flex-none text-[1rem] text-gold transition-transform duration-300 ${open ? "-rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      <div
        id={panelId}
        className={`${open ? `block ${styles.fadeIn}` : "hidden"} space-y-3 px-6 pb-6`}
      >
        {children}
      </div>
    </section>
  );
}
