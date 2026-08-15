"use client";

import { useEffect, useRef } from "react";

/**
 * Mekanisk port av <script src="https://giscus.app/client.js" ...> fra
 * temaer/apologetikk/artikler/den-forste-arsaken.html. Giscus leser sin egen
 * plassering i DOM-en (via document.currentScript) for å vite hvor
 * kommentar-iframen skal settes inn, så scriptet må opprettes og appendes
 * her i klienten i stedet for å inkluderes statisk. Isolert til denne ene
 * artikkelen – ikke et generisk kommentarsystem for hele siten.
 */
export function GiscusComments() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", "bm4wpw24cf-alt/THEOLOGIA");
    script.setAttribute("data-repo-id", "R_kgDOTCkYrA");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOTCkYrM4C_y2J");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "no");

    container.appendChild(script);
  }, []);

  return <div ref={containerRef} />;
}
