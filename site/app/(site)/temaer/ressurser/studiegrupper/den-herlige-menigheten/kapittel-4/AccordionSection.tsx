"use client";

import { useId, useState } from "react";
import { Icon, type IconName } from "@/components/icons/Icon";
import styles from "./accordion.module.css";

/**
 * Erstatter js/study.js sin initAccordionGroup(".accordion-header"): originalen
 * toggler kun aria-expanded på knappen, og css/study.css viser/skjuler
 * innholdet via en tilstøtende selector (button[aria-expanded=true] +
 * .accordion-content). Her styres synligheten direkte av React-state i
 * stedet, med samme resultat. Hver seksjon er uavhengig (ikke "kun én åpen
 * om gangen"), som i originalen.
 */
export function AccordionSection({
  id,
  icon,
  iconText,
  title,
  description,
  count,
  defaultOpen = false,
  children,
}: {
  /** Original har id på selve .accordion-item-seksjonen (f.eks. id="commentary"), brukt som same-page anchor-mål andre steder på siden. */
  id?: string;
  icon?: IconName;
  /** Original bruker bokstavelig "?" som tekst i stedet for et SVG-ikon for Studiespørsmål. */
  iconText?: string;
  title: string;
  description: string;
  count?: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <section
      id={id}
      className={`overflow-hidden rounded-radius border bg-white transition-[box-shadow,border-color] duration-300 ${
        open ? "border-gold/30 shadow" : "border-border shadow-sm"
      }`}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-5 p-[26px_30px] text-left max-[720px]:flex-wrap max-[720px]:p-5"
      >
        <div className="flex min-w-0 items-center gap-4.5">
          <span
            aria-hidden={iconText ? "true" : undefined}
            className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full bg-navy font-sans text-[1.2rem] font-bold text-white"
          >
            {icon && <Icon name={icon} className="h-5 w-5 text-white" />}
            {iconText}
          </span>
          <div className="min-w-0">
            <h2 className="mb-0.5 text-[1.2rem]">{title}</h2>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap font-sans text-[.86rem] text-text-light max-[720px]:whitespace-normal">
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-none items-center gap-4">
          {count !== undefined && (
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-gold px-1.5 font-sans text-[.8rem] font-bold text-white">
              {count}
            </span>
          )}
          <span
            aria-hidden="true"
            className={`flex text-[.8rem] transition-transform duration-300 ${open ? "-rotate-180 text-gold" : "text-text-light"}`}
          >
            ▼
          </span>
        </div>
      </button>

      {/* Alltid montert (ikke betinget rendret) slik at innhold i lukkede
          seksjoner fortsatt finnes i HTML-en – samme prinsipp som originalens
          display:none-baserte skjuling, som aldri fjerner innhold fra DOM-en. */}
      <div
        id={panelId}
        className={`${open ? `block ${styles.fadeIn}` : "hidden"} font-sans text-text [&_h3:first-child]:mt-0 [&_h3]:mt-8 [&_h3]:mb-3.5 [&_h3]:text-[1.25rem] [&_hr]:my-8 [&_hr]:border-t [&_hr]:border-border [&_p]:mb-5 [&_p]:text-[.98rem] [&_p]:leading-[1.85] [&_p:last-child]:mb-0 [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-[22px] [&_li]:mb-1.5 [&_li]:text-[.98rem] [&_li]:leading-[1.85] [&_li:last-child]:mb-0 px-[30px] pb-[30px] max-[720px]:px-5 max-[720px]:pb-6`}
      >
        {children}
      </div>
    </section>
  );
}
