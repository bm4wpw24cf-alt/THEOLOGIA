"use client";

import { useEffect, useRef, useState } from "react";

export function Kapittel1Infographic() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => undefined);
      }
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => undefined);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <div className="mx-auto w-full">
        <button
          type="button"
          aria-label="Se infografikk i full størrelse"
          onClick={() => setIsOpen(true)}
          className="group block w-full cursor-pointer rounded-radius border border-border bg-white p-2 text-left shadow-sm transition-all duration-200 hover:border-gold/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <img
            src="/images/studiegrupper/kapittel-1-infografikk.png"
            alt="Oversikt over menneskelivets mysterium"
            className="block h-auto w-full rounded-radius transition duration-200 group-hover:brightness-[0.98]"
            style={{ aspectRatio: "16 / 9", objectFit: "contain" }}
          />
        </button>
        <p className="mt-3 text-center font-sans text-[.82rem] text-text-light">
          Klikk på infografikken for å se den i full størrelse.
        </p>
      </div>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            width: "100vw",
            height: "100vh",
            margin: 0,
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(6, 13, 23, 0.82)",
            overflow: "hidden",
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Infografikk i full størrelse"
        >
          <div
            style={{
              position: "relative",
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Lukk infografikk"
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                right: 16,
                top: 16,
                zIndex: 10,
                width: 40,
                height: 40,
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(0, 0, 0, 0.55)",
                color: "#fff",
                fontSize: "1.5rem",
                lineHeight: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <img
              src="/images/studiegrupper/kapittel-1-infografikk.png"
              alt="Oversikt over menneskelivets mysterium i full størrelse"
              style={{
                display: "block",
                width: "100vw",
                height: "100vh",
                maxWidth: "100vw",
                maxHeight: "100vh",
                objectFit: "contain",
                objectPosition: "center",
                padding: 0,
                margin: 0,
                background: "rgba(255,255,255,0.04)",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
