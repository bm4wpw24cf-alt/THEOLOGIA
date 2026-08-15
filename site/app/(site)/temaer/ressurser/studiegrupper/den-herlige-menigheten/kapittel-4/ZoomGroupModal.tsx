"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons/Icon";

const TRANSITION_MS = 250;
const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/**
 * Erstatter den generiske js/modal.js + css/modal.css for THIS ene modalen
 * (originalen er en delt, dokument-delegert komponent for et vilkårlig
 * antall modaler på tvers av siten; her trengs kun én, så mekanikken er
 * portert isolert til denne komponenten i stedet for en global løsning).
 *
 * Overlay/modal-markup er alltid montert i DOM-en (samme prinsipp som
 * originalens [hidden]-attributt, som aldri fjerner innholdet – kun skjuler
 * det) slik at modalteksten alltid finnes i HTML-en, ikke bare når åpen.
 *
 * Bevarer nøyaktig samme faser som originalen:
 * - åpne: fjern [hidden] → neste frame legg til "is-open" (fade+scale inn)
 * - lukke: fjern "is-open" (fade+scale ut) → etter 250ms sett [hidden] igjen
 * - Escape lukker
 * - klikk på overlay (utenfor modal-boksen) lukker
 * - fokus fanges i modalen (Tab/Shift+Tab) mens den er åpen
 * - fokus gis tilbake til elementet som åpnet modalen ved lukking
 */
export function ZoomGroupModal() {
  const [hiddenAttr, setHiddenAttr] = useState(true);
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openModal() {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    previouslyFocused.current = document.activeElement as HTMLElement;
    setHiddenAttr(false);
    requestAnimationFrame(() => setOpen(true));
  }

  function closeModal() {
    setOpen(false);
    closeTimeout.current = setTimeout(() => setHiddenAttr(true), TRANSITION_MS);
    previouslyFocused.current?.focus();
  }

  useEffect(() => {
    if (!open) return;

    const modal = modalRef.current;
    const target = modal?.querySelector<HTMLElement>(".modal-close-target") ?? modal?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)[0];
    target?.focus();

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
        return;
      }
      if (event.key === "Tab" && modal) {
        const focusable = Array.prototype.slice.call(modal.querySelectorAll(FOCUSABLE_SELECTOR)) as HTMLElement[];
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        tabIndex={-1}
        onClick={openModal}
        className="cursor-pointer rounded-radius border border-border bg-white p-7 shadow-sm"
      >
        <div className="mb-3.5 flex items-center gap-3">
          <Icon name="video" aria-hidden="true" className="h-[22px] w-[22px] flex-none text-gold" />
          <h3 className="mb-0 font-serif text-[1.05rem] font-semibold text-ink">Bli med i vår Zoom-gruppe</h3>
        </div>

        <p className="mb-4.5 font-sans text-[.92rem] leading-[1.6] text-text">
          Bli med i vår Zoom-gruppe for samtale og fellesskap om dette kapitlet.
        </p>

        <button
          type="button"
          onClick={openModal}
          className="mb-4.5 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-6 py-4 text-[.88rem] font-semibold tracking-[1px] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-dark"
        >
          <Icon name="video" aria-hidden="true" className="h-4 w-4" />
          Bli med i Zoom-gruppen
        </button>

        <p className="mb-0 font-sans text-[.92rem] leading-[1.6] text-text">Alle er velkomne – vi ser frem til å ha deg med!</p>
      </div>

      <div
        hidden={hiddenAttr}
        className={`fixed inset-0 z-[1000] flex items-center justify-center bg-[rgba(6,13,23,.6)] p-6 transition-opacity duration-[250ms] ease-[var(--ease)] ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
      >
        <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-zoom-title"
            className={`relative max-h-[calc(100vh-48px)] w-full max-w-[480px] origin-center overflow-y-auto rounded-radius bg-white p-10 shadow-lg transition-transform duration-[250ms] ease-[var(--ease)] max-[560px]:p-[28px_24px] ${
              open ? "translate-y-0 scale-100" : "translate-y-2 scale-95"
            }`}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Lukk"
              className="modal-close-target absolute top-4.5 right-4.5 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-parchment text-[1.1rem] leading-none text-text-light transition-colors duration-200 hover:bg-parchment-dark hover:text-gold-dark"
            >
              &times;
            </button>

            <h2 id="modal-zoom-title" className="mb-4 pr-8 text-[1.4rem]">
              Bli med i vår Zoom-gruppe
            </h2>

            <div className="font-sans text-[.96rem] leading-[1.75] text-text">
              <p className="mb-4">
                Vi møtes jevnlig for bibelstudium, samtale, bønn og fellesskap rundt «Den herlige menigheten».
                Samlingene er åpne for alle, enten du ønsker å delta aktivt eller bare lytte.
              </p>
              <p className="mb-4">Du får mulighet til å:</p>
              <ul className="mb-5 flex list-none flex-col gap-2 p-0">
                {["stille spørsmål", "dele refleksjoner", "be sammen med andre", "bli bedre kjent med Bibelen", "møte kristne fra ulike steder"].map(
                  (item) => (
                    <li key={item} className="relative pl-[22px] before:absolute before:top-[9px] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold">
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div className="mb-5.5 flex flex-col gap-2.5 rounded-radius-sm border border-border bg-parchment p-[18px_20px]">
                <p className="m-0 text-[.92rem]">
                  <strong className="text-ink">📅 Tidspunkt:</strong> Publiseres fortløpende.
                </p>
                <p className="m-0 text-[.92rem]">
                  <strong className="text-ink">🔗 Zoom-lenke:</strong> Sendes til påmeldte.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 max-[560px]:flex-col">
              <button
                type="button"
                onClick={closeModal}
                className="flex-1 rounded-full bg-gold px-6 py-4 text-center text-[.88rem] font-semibold tracking-[1px] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-dark"
              >
                Meld meg på
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="flex-1 rounded-full border border-border bg-white px-6 py-4 text-center text-[.88rem] font-semibold tracking-[1px] text-ink uppercase transition-all duration-200 hover:border-gold hover:bg-parchment hover:text-gold-dark"
              >
                Lukk
              </button>
            </div>
          </div>
        </div>
    </>
  );
}
