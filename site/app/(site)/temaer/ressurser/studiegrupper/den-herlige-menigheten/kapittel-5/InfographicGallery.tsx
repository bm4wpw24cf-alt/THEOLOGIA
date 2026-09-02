"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const TRANSITION_MS = 200;

/**
 * De elleve infografikkene for kapittel 5, i visningsrekkefolge. Bildefilene
 * ligger urort i public/images/studiegrupper/. Thumbnail-galleriet er uendret;
 * "Se stor versjon" apner original-PNG-en i en fullskjerms lightbox (object-fit:
 * contain – hele infografikken synlig, ingen beskjaering, skalerer med skjermen,
 * zoombar pa mobil). Escape / klikk utenfor bildet / lukkeknapp lukker.
 */
const INFOGRAPHICS: { slug: string; title: string; w: number; h: number }[] = [
  { slug: "102-103", title: "Den hellige stad, Det nye Jerusalem", w: 1672, h: 941 },
  { slug: "103-117", title: "Babylons fall", w: 1672, h: 941 },
  { slug: "117-123", title: "Den nye himmel og den nye jord", w: 1672, h: 941 },
  { slug: "123-127", title: "Den hellige staden som stiger ned fra himmelen", w: 1672, h: 941 },
  { slug: "127-128", title: "Den hellige stadens lys", w: 1536, h: 1024 },
  { slug: "128-130", title: "Den hellige stads innbyggere", w: 1536, h: 1024 },
  { slug: "130-134", title: "Staden, portene og muren", w: 1536, h: 1024 },
  { slug: "134-143", title: "Det nye Jerusalems herlighet og dybde", w: 1536, h: 1024 },
  { slug: "143-146", title: "Templet og stadens lys", w: 1536, h: 1024 },
  { slug: "146-149", title: "Elven med livets vann og livets tre", w: 1536, h: 1024 },
  { slug: "149-152", title: "For evig og alltid", w: 1672, h: 941 },
];

const srcFor = (slug: string) => `/images/studiegrupper/kapittel-5-infografikk-${slug}.png`;
const pagesFor = (slug: string) => slug.replace("-", "–");

/** Ekte nettleser-fullskjerm. Feiler stille der API-et ikke finnes (f.eks. iOS
 *  Safari) – da dekker lightboxen uansett hele viewporten. */
function enterFullscreen(el: HTMLElement) {
  if (!el.requestFullscreen || document.fullscreenElement) return;
  void el.requestFullscreen().catch(() => {});
}
function exitFullscreen() {
  if (!document.fullscreenElement || !document.exitFullscreen) return;
  void document.exitFullscreen().catch(() => {});
}

export function InfographicGallery() {
  // To-fase åpne/lukke (samme prinsipp som ZoomGroupModal): behold i DOM, fade inn/ut.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = useCallback((index: number) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    previouslyFocused.current = document.activeElement as HTMLElement;
    // Kalles synkront i klikk-handleren => beholder "transient activation" som
    // Fullscreen API krever.
    enterFullscreen(document.documentElement);
    setActiveIndex(index);
    setMounted(true);
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const close = useCallback(() => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setVisible(false);
    closeTimeout.current = setTimeout(() => {
      setMounted(false);
      setActiveIndex(null);
      closeTimeout.current = null;
    }, TRANSITION_MS);
    previouslyFocused.current?.focus();
    exitFullscreen();
  }, []);

  const step = useCallback((delta: number) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + delta + INFOGRAPHICS.length) % INFOGRAPHICS.length;
    });
  }, []);

  // Escape / piltaster + fokus + scroll-lås mens lightboxen er åpen.
  useEffect(() => {
    if (!mounted) return;

    closeButtonRef.current?.focus();

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      else if (event.key === "ArrowRight") step(1);
      else if (event.key === "ArrowLeft") step(-1);
    }

    // Escape i ekte fullskjerm fanges av nettleseren (avslutter fullskjerm) og
    // trigger som regel ikke keydown her – derfor lukker vi lightboxen når
    // fullskjerm forlates mens den er åpen.
    function handleFullscreenChange() {
      if (!document.fullscreenElement) close();
    }

    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.body.style.overflow = overflow;
    };
  }, [mounted, close, step]);

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, []);

  const active = activeIndex === null ? null : INFOGRAPHICS[activeIndex];

  return (
    <>
      <div className="@container">
      <ul className="grid list-none grid-cols-1 gap-4 p-0 @min-[380px]:grid-cols-2 @min-[560px]:grid-cols-3 @min-[780px]:grid-cols-5">
        {INFOGRAPHICS.map((ig, index) => {
          const src = srcFor(ig.slug);
          const pages = pagesFor(ig.slug);
          return (
            <li key={ig.slug} className="flex">
              <button
                type="button"
                onClick={() => open(index)}
                aria-haspopup="dialog"
                className="group flex h-full w-full flex-col overflow-hidden rounded-radius border border-border bg-white text-left shadow-sm transition-[box-shadow,border-color] duration-200 hover:border-gold/35 hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <span className="relative block aspect-[16/10] border-b border-border bg-parchment">
                  <Image
                    src={src}
                    alt={`Infografikk «${ig.title}», kapittel 5 side ${pages}`}
                    fill
                    sizes="(max-width: 480px) 88vw, (max-width: 900px) 44vw, 180px"
                    className="object-contain p-2"
                  />
                </span>
                <span className="flex flex-1 flex-col gap-1.5 p-3.5">
                  <span className="font-sans text-[.62rem] font-bold tracking-[.12em] text-gold uppercase">
                    Side {pages}
                  </span>
                  <span className="font-serif text-[.9rem] font-semibold leading-[1.3] text-ink">{ig.title}</span>
                  <span className="mt-auto flex w-full items-center justify-center gap-1.5 rounded-full border border-gold px-3 py-2 font-sans text-[.62rem] font-semibold tracking-[.12em] text-gold-dark uppercase transition-colors duration-200 group-hover:bg-parchment">
                    Se stor versjon
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      </div>

      {mounted &&
        active &&
        createPortal(
          <div
            className={`fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-[rgba(6,13,23,.93)] transition-opacity duration-200 ease-[var(--ease)] ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            onClick={(event) => {
              if (event.target === event.currentTarget) close();
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`Infografikk: ${active.title} (side ${pagesFor(active.slug)})`}
              className="relative"
              style={{
                // Storste boks med bildets sideforhold som far plass i viewporten
                // (skalerer bade opp og ned – object-contain alene oppskalerer ikke).
                width: `min(100vw, calc(100dvh * ${active.w} / ${active.h}))`,
                height: `min(100dvh, calc(100vw * ${active.h} / ${active.w}))`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- original PNG i full opplosning, ikke optimalisert */}
              <img
                src={srcFor(active.slug)}
                alt={`Infografikk «${active.title}», kapittel 5 side ${pagesFor(active.slug)}`}
                className="block h-full w-full object-contain select-none"
              />
            </div>

            {INFOGRAPHICS.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Forrige infografikk"
                  className="absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-[1.4rem] leading-none text-white/90 transition-colors duration-200 hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white max-[560px]:h-9 max-[560px]:w-9"
                >
                  &#8249;
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Neste infografikk"
                  className="absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-[1.4rem] leading-none text-white/90 transition-colors duration-200 hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white max-[560px]:h-9 max-[560px]:w-9"
                >
                  &#8250;
                </button>
              </>
            )}

            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Lukk"
              className="absolute top-3 right-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/45 text-[1.5rem] leading-none text-white transition-colors duration-200 hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white max-[560px]:h-9 max-[560px]:w-9"
            >
              &times;
            </button>
          </div>,
          document.body,
        )}
    </>
  );
}
