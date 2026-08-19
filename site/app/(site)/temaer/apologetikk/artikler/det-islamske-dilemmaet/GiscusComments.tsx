"use client";

import { useEffect, useRef } from "react";

/**
 * Ko-lokalisert Giscus-klientkomponent, samme mønster og konfigurasjon som
 * ../den-forste-arsaken/GiscusComments.tsx (isolert per artikkel, ikke et
 * generisk kommentarsystem for hele siten – se kommentaren der).
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
