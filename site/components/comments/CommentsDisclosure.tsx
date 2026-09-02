"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons/Icon";
import { Comments } from "./Comments";

/**
 * Introduksjonsboks + utvidbart kommentarpanel for studiesidene.
 *
 * Beholder den eksisterende «Kommentarer»-boksen og designet. «Åpne
 * kommentarfeltet» er en ekte <button> som folder ut den gjenbrukte
 * <Comments />-komponenten rett under boksen – på samme side, uten
 * navigering. Samme API, moderering, validering og spam-beskyttelse som
 * artikkelsidene.
 *
 * `articleKey` er den stabile, unike identifikatoren kommentarene lagres
 * under. Utelates den, brukes URL-stien (som på artikkelsidene).
 */
export function CommentsDisclosure({ articleKey }: { articleKey?: string } = {}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const didMount = useRef(false);
  const panelId = useId();

  useEffect(() => {
    // Ikke flytt fokus ved første render (panelet starter lukket).
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    if (open) {
      // Fokus til første felt i kommentarskjemaet når panelet åpnes.
      panelRef.current?.querySelector<HTMLElement>("#comment-author")?.focus();
    } else {
      // Fokus tilbake til knappen når panelet lukkes.
      buttonRef.current?.focus();
    }
  }, [open]);

  function toggle() {
    setMounted(true); // behold <Comments /> montert etter første åpning (bevarer utkast)
    setOpen((wasOpen) => !wasOpen);
  }

  return (
    <div className="mx-auto max-w-[760px]">
      <div className="rounded-radius border border-border bg-white p-7 shadow-sm">
        <div className="mb-3.5 flex items-center gap-3">
          <Icon name="comment" aria-hidden="true" className="h-[22px] w-[22px] flex-none text-gold" />
          <h3 className="mb-0 font-serif text-[1.05rem] font-semibold text-ink">Kommentarer</h3>
        </div>
        <p className="mb-4.5 font-sans text-[.92rem] leading-[1.6] text-text">
          Del dine tanker om dette kapitlet med andre.
        </p>
        <button
          ref={buttonRef}
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-gold bg-transparent px-6 py-4 text-[.88rem] font-semibold tracking-[1px] text-gold-dark uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-parchment focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-gold"
        >
          {open ? "Lukk kommentarfeltet" : "Åpne kommentarfeltet"}
        </button>
      </div>

      <div id={panelId} ref={panelRef} hidden={!open} className="mt-8">
        {mounted && <Comments article={articleKey ?? pathname} />}
      </div>
    </div>
  );
}
