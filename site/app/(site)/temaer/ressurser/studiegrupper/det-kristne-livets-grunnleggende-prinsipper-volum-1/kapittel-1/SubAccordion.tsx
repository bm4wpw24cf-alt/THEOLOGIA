"use client";

import { useId, useState } from "react";
import styles from "./accordion.module.css";

/** Samme mønster som SubAccordion i den-herlige-menigheten/kapittel-4 (der
 * kommentaren i den filen sier den brukes «under Bibeltekster, Infografikk
 * og Kommentarer»). Hver instans har egen, uavhengig åpen/lukket-state. */
export function SubAccordion({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <section className="mb-3 overflow-hidden rounded-radius-sm border border-border bg-parchment last:mb-0">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-[18px_22px] text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold"
      >
        <div>
          <h3 className="mb-0.5 text-[1.02rem]">{title}</h3>
          {description && <p className="font-sans text-[.85rem] text-text-light">{description}</p>}
        </div>
        <span
          aria-hidden="true"
          className={`flex-none text-[.72rem] text-gold transition-transform duration-300 ${open ? "-rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>

      <div
        id={panelId}
        className={`${open ? `block ${styles.fadeIn}` : "hidden"} space-y-4 px-[22px] pb-[22px] font-sans text-[.94rem] leading-[1.8] text-text`}
      >
        {children}
      </div>
    </section>
  );
}
