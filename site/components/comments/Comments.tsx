"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Kommentarfelt for artikler. Erstatter den tidligere Giscus-integrasjonen.
 *
 * - Henter godkjente kommentarer fra `/api/comments` (lagres i Postgres).
 * - Nye kommentarer sendes til samme endepunkt og lagres som «venter på
 *   godkjenning» – de vises ikke før en moderator godkjenner dem.
 * - Artikkelen identifiseres av `usePathname()` (samme nøkkel som Giscus
 *   sin `pathname`-mapping brukte).
 */

type Comment = {
  id: string;
  author: string;
  body: string;
  createdAt: string;
};

type SubmitState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

const AUTHOR_MAX = 60;
const BODY_MAX = 4000;

const dateFormatter = new Intl.DateTimeFormat("nb-NO", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function Comments() {
  const pathname = usePathname();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadState, setLoadState] = useState<"loading" | "loaded" | "error">("loading");
  const [submit, setSubmit] = useState<SubmitState>({ status: "idle" });
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const honeypotRef = useRef<HTMLInputElement>(null);

  const loadComments = useCallback(async () => {
    try {
      const res = await fetch(`/api/comments?article=${encodeURIComponent(pathname)}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("bad status");
      const data = (await res.json()) as { comments: Comment[] };
      setComments(data.comments ?? []);
      setLoadState("loaded");
    } catch {
      setLoadState("error");
    }
  }, [pathname]);

  useEffect(() => {
    // Henter kommentarer når komponenten monteres / stien endres. All
    // tilstand settes først etter `await`, så dette utløser ikke kaskade-renders.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void loadComments();
  }, [loadComments]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submit.status === "submitting") return;

    const trimmedAuthor = author.trim();
    const trimmedBody = body.trim();
    if (trimmedAuthor.length < 2) {
      setSubmit({ status: "error", message: "Skriv inn navnet ditt (minst 2 tegn)." });
      return;
    }
    if (trimmedBody.length < 3) {
      setSubmit({ status: "error", message: "Skriv en kommentar før du sender inn." });
      return;
    }

    setSubmit({ status: "submitting" });
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          article: pathname,
          author: trimmedAuthor,
          body: trimmedBody,
          website: honeypotRef.current?.value ?? "",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setSubmit({
          status: "error",
          message: data.error ?? "Noe gikk galt. Prøv igjen om litt.",
        });
        return;
      }
      setSubmit({ status: "success" });
      setAuthor("");
      setBody("");
    } catch {
      setSubmit({
        status: "error",
        message: "Fikk ikke kontakt med serveren. Sjekk nettforbindelsen og prøv igjen.",
      });
    }
  }

  return (
    <div className="mx-auto max-w-[760px]">
      {/* Liste over godkjente kommentarer */}
      {loadState === "loading" && <p className="text-text-light">Laster kommentarer …</p>}

      {loadState === "error" && (
        <p className="text-text-light">
          Klarte ikke å laste kommentarene.{" "}
          <button
            type="button"
            onClick={() => {
              setLoadState("loading");
              void loadComments();
            }}
            className="font-semibold text-gold-dark underline underline-offset-2 hover:text-gold"
          >
            Prøv igjen
          </button>
        </p>
      )}

      {loadState === "loaded" && comments.length === 0 && (
        <p className="text-text-light">Ingen kommentarer ennå. Bli den første til å dele en tanke.</p>
      )}

      {comments.length > 0 && (
        <ul className="mb-14 flex list-none flex-col gap-4 p-0">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="rounded-radius-sm border border-border bg-white p-6 shadow-sm"
            >
              <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-serif text-[1.05rem] font-semibold text-ink">{comment.author}</span>
                <time dateTime={comment.createdAt} className="text-[0.82rem] text-text-light">
                  {dateFormatter.format(new Date(comment.createdAt))}
                </time>
              </div>
              <p className="whitespace-pre-wrap break-words text-text">{comment.body}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Skjema */}
      {submit.status === "success" ? (
        <div
          role="status"
          className="rounded-radius-sm border border-gold/40 bg-white p-6 text-text"
        >
          <p className="m-0">
            <strong className="text-ink">Takk!</strong> Kommentaren din er sendt inn og blir synlig når den er
            godkjent av en moderator.
          </p>
          <button
            type="button"
            onClick={() => setSubmit({ status: "idle" })}
            className="mt-3 font-semibold text-gold-dark underline underline-offset-2 hover:text-gold"
          >
            Skriv en ny kommentar
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <h3 className="m-0 font-serif text-[1.4rem] text-ink">Legg igjen en kommentar</h3>
          <p className="m-0 text-[0.92rem] text-text-light">
            Kommentaren blir lest gjennom før den publiseres. E-post kreves ikke.
          </p>

          <div className="flex flex-col gap-2">
            <label htmlFor="comment-author" className="font-sans text-[0.9rem] font-semibold text-ink">
              Navn
            </label>
            <input
              id="comment-author"
              name="author"
              type="text"
              required
              maxLength={AUTHOR_MAX}
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              autoComplete="name"
              className="w-full rounded-radius-sm border border-border bg-white px-4 py-3 text-text outline-none transition-colors focus:border-gold"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="comment-body" className="font-sans text-[0.9rem] font-semibold text-ink">
              Kommentar
            </label>
            <textarea
              id="comment-body"
              name="body"
              required
              rows={6}
              maxLength={BODY_MAX}
              value={body}
              onChange={(event) => setBody(event.target.value)}
              className="w-full resize-y rounded-radius-sm border border-border bg-white px-4 py-3 text-text outline-none transition-colors focus:border-gold"
            />
          </div>

          {/* Honeypot – skjult for mennesker, ofte fylt ut av bots */}
          <div className="sr-only" aria-hidden="true">
            <label htmlFor="comment-website">Nettside (la stå tom)</label>
            <input
              ref={honeypotRef}
              id="comment-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {submit.status === "error" && (
            <p role="alert" className="m-0 font-semibold text-[#a3282b]">
              {submit.message}
            </p>
          )}

          <div>
            <button
              type="submit"
              disabled={submit.status === "submitting"}
              className="inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-[.78rem] font-semibold tracking-[1px] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {submit.status === "submitting" ? "Sender …" : "Send kommentar"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
