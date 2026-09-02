"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type AdminComment = {
  id: string;
  article: string;
  author: string;
  body: string;
  approved: boolean;
  createdAt: string;
  updatedAt: string;
};

type Editor =
  | { mode: "closed" }
  | { mode: "create" }
  | { mode: "edit"; comment: AdminComment };

const dateFormatter = new Intl.DateTimeFormat("nb-NO", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

const AUTHOR_MAX = 60;
const BODY_MAX = 4000;

const inputClass =
  "w-full rounded-radius-sm border border-border bg-white px-4 py-3 text-text outline-none transition-colors focus:border-gold";
const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-[.74rem] font-semibold tracking-[1px] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0";
const ghostButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-[.74rem] font-semibold tracking-[1px] text-text uppercase transition-colors duration-200 hover:border-gold hover:text-gold-dark disabled:cursor-not-allowed disabled:opacity-60";

export function AdminDashboard() {
  const router = useRouter();
  const [comments, setComments] = useState<AdminComment[]>([]);
  const [loadState, setLoadState] = useState<"loading" | "loaded" | "error">("loading");
  const [listError, setListError] = useState("");
  const [editor, setEditor] = useState<Editor>({ mode: "closed" });
  const [pendingDelete, setPendingDelete] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/comments?status=all", { cache: "no-store" });
      if (res.status === 401) {
        router.refresh();
        return;
      }
      if (!res.ok) throw new Error("bad status");
      const data = (await res.json()) as { comments: AdminComment[] };
      setComments(data.comments ?? []);
      setLoadState("loaded");
    } catch {
      setLoadState("error");
      setListError("Kunne ikke hente kommentarer. Prøv igjen.");
    }
  }, [router]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void load();
  }, [load]);

  async function handleLogout() {
    await fetch("/api/admin/session", { method: "DELETE" }).catch(() => {});
    router.refresh();
  }

  async function handleDelete(id: string) {
    setBusyId(id);
    setListError("");
    try {
      const res = await fetch(`/api/admin/comments/${id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setListError(data.error ?? "Kunne ikke slette kommentaren.");
        return;
      }
      setPendingDelete(null);
      await load();
    } catch {
      setListError("Kunne ikke slette kommentaren. Prøv igjen.");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="m-0 font-serif text-[1.5rem] text-ink">Kommentarer</h2>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className={primaryButton}
            onClick={() => setEditor(editor.mode === "create" ? { mode: "closed" } : { mode: "create" })}
          >
            + Ny kommentar
          </button>
          <button type="button" className={ghostButton} onClick={handleLogout}>
            Logg ut
          </button>
        </div>
      </div>

      {editor.mode !== "closed" && (
        <CommentForm
          key={editor.mode === "edit" ? editor.comment.id : "create"}
          initial={editor.mode === "edit" ? editor.comment : null}
          onCancel={() => setEditor({ mode: "closed" })}
          onSaved={async () => {
            setEditor({ mode: "closed" });
            await load();
          }}
        />
      )}

      {loadState === "loading" && <p className="text-text-light">Laster kommentarer …</p>}

      {loadState === "error" && (
        <p className="text-text-light">
          {listError}{" "}
          <button
            type="button"
            onClick={() => {
              setLoadState("loading");
              void load();
            }}
            className="font-semibold text-gold-dark underline underline-offset-2 hover:text-gold"
          >
            Prøv igjen
          </button>
        </p>
      )}

      {loadState === "loaded" && (
        <>
          {listError && (
            <p role="alert" className="m-0 font-semibold text-[#a3282b]">
              {listError}
            </p>
          )}

          {comments.length === 0 ? (
            <p className="text-text-light">Ingen kommentarer ennå.</p>
          ) : (
            <>
              {/* Desktop: tabell */}
              <div className="hidden overflow-x-auto rounded-radius border border-border bg-white md:block">
                <table className="w-full border-collapse text-left text-[0.92rem]">
                  <thead>
                    <tr className="border-b border-border text-[0.72rem] tracking-[0.12em] text-text-light uppercase">
                      <th className="px-4 py-3 font-semibold">Artikkel</th>
                      <th className="px-4 py-3 font-semibold">Kommentar</th>
                      <th className="px-4 py-3 font-semibold">Forfatter</th>
                      <th className="px-4 py-3 font-semibold">Dato</th>
                      <th className="px-4 py-3 font-semibold">Status</th>
                      <th className="px-4 py-3 font-semibold">Handling</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comments.map((comment) => (
                      <tr key={comment.id} className="border-b border-border/60 align-top last:border-0">
                        <td className="max-w-[180px] px-4 py-3 break-words text-text-light">{comment.article}</td>
                        <td className="max-w-[320px] px-4 py-3 break-words text-text">{comment.body}</td>
                        <td className="px-4 py-3 text-text">{comment.author}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-text-light">
                          {dateFormatter.format(new Date(comment.createdAt))}
                        </td>
                        <td className="px-4 py-3">
                          <StatusBadge approved={comment.approved} />
                        </td>
                        <td className="px-4 py-3">
                          <RowActions
                            busy={busyId === comment.id}
                            confirming={pendingDelete === comment.id}
                            onEdit={() => setEditor({ mode: "edit", comment })}
                            onAskDelete={() => setPendingDelete(comment.id)}
                            onCancelDelete={() => setPendingDelete(null)}
                            onConfirmDelete={() => handleDelete(comment.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobil: kort */}
              <ul className="flex list-none flex-col gap-4 p-0 md:hidden">
                {comments.map((comment) => (
                  <li key={comment.id} className="rounded-radius border border-border bg-white p-4">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="font-serif font-semibold text-ink">{comment.author}</span>
                      <StatusBadge approved={comment.approved} />
                    </div>
                    <p className="m-0 mb-2 text-[0.8rem] break-words text-text-light">{comment.article}</p>
                    <p className="m-0 mb-3 break-words whitespace-pre-wrap text-text">{comment.body}</p>
                    <p className="m-0 mb-3 text-[0.8rem] text-text-light">
                      {dateFormatter.format(new Date(comment.createdAt))}
                    </p>
                    <RowActions
                      busy={busyId === comment.id}
                      confirming={pendingDelete === comment.id}
                      onEdit={() => setEditor({ mode: "edit", comment })}
                      onAskDelete={() => setPendingDelete(comment.id)}
                      onCancelDelete={() => setPendingDelete(null)}
                      onConfirmDelete={() => handleDelete(comment.id)}
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
}

function StatusBadge({ approved }: { approved: boolean }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.06em] uppercase ${
        approved ? "bg-gold/15 text-gold-dark" : "border border-border text-text-light"
      }`}
    >
      {approved ? "Godkjent" : "Venter"}
    </span>
  );
}

function RowActions({
  busy,
  confirming,
  onEdit,
  onAskDelete,
  onCancelDelete,
  onConfirmDelete,
}: {
  busy: boolean;
  confirming: boolean;
  onEdit: () => void;
  onAskDelete: () => void;
  onCancelDelete: () => void;
  onConfirmDelete: () => void;
}) {
  if (confirming) {
    return (
      <div className="flex flex-col gap-1.5 text-[0.82rem]">
        <span className="text-text">Er du sikker på at du vil slette denne kommentaren?</span>
        <div className="flex gap-3">
          <button
            type="button"
            disabled={busy}
            onClick={onConfirmDelete}
            className="font-semibold text-[#a3282b] underline underline-offset-2 disabled:opacity-60"
          >
            {busy ? "Sletter …" : "Ja, slett"}
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={onCancelDelete}
            className="font-semibold text-text-light underline underline-offset-2"
          >
            Avbryt
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 text-[0.82rem]">
      <button
        type="button"
        onClick={onEdit}
        className="font-semibold text-gold-dark underline underline-offset-2 hover:text-gold"
      >
        Rediger
      </button>
      <button
        type="button"
        onClick={onAskDelete}
        className="font-semibold text-text-light underline underline-offset-2 hover:text-[#a3282b]"
      >
        Slett
      </button>
    </div>
  );
}

function CommentForm({
  initial,
  onCancel,
  onSaved,
}: {
  initial: AdminComment | null;
  onCancel: () => void;
  onSaved: () => void | Promise<void>;
}) {
  const [article, setArticle] = useState(initial?.article ?? "");
  const [author, setAuthor] = useState(initial?.author ?? "");
  const [body, setBody] = useState(initial?.body ?? "");
  const [approved, setApproved] = useState(initial ? initial.approved : true);
  const [state, setState] = useState<"idle" | "saving" | "error">("idle");
  const [error, setError] = useState("");

  const isEdit = initial !== null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "saving") return;

    const trimmedArticle = article.trim();
    const trimmedAuthor = author.trim();
    const trimmedBody = body.trim();
    if (!/^\/[a-z0-9\-/]{1,150}$/.test(trimmedArticle.toLowerCase())) {
      setState("error");
      setError("Artikkel-stien må være på formen /tema/artikkel.");
      return;
    }
    if (trimmedAuthor.length < 2) {
      setState("error");
      setError("Forfatternavnet må ha minst 2 tegn.");
      return;
    }
    if (trimmedBody.length < 3) {
      setState("error");
      setError("Kommentarteksten kan ikke være tom.");
      return;
    }

    setState("saving");
    setError("");
    try {
      const res = await fetch(
        isEdit ? `/api/admin/comments/${initial.id}` : "/api/admin/comments",
        {
          method: isEdit ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            article: trimmedArticle,
            author: trimmedAuthor,
            body: trimmedBody,
            approved,
          }),
        },
      );
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setState("error");
        setError(
          data.error ??
            (isEdit ? "Kunne ikke oppdatere kommentaren." : "Kunne ikke lagre kommentaren."),
        );
        return;
      }
      await onSaved();
    } catch {
      setState("error");
      setError("Fikk ikke kontakt med serveren. Prøv igjen.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-radius border border-gold/40 bg-white p-6 shadow-sm"
    >
      <h3 className="m-0 font-serif text-[1.2rem] text-ink">
        {isEdit ? "Rediger kommentar" : "Ny kommentar"}
      </h3>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-article" className="font-sans text-[0.9rem] font-semibold text-ink">
          Artikkel / side
        </label>
        <input
          id="cf-article"
          type="text"
          required
          placeholder="/veien-til-jesus/rett-forhold-til-gud"
          value={article}
          onChange={(event) => setArticle(event.target.value)}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-author" className="font-sans text-[0.9rem] font-semibold text-ink">
          Forfatter / navn
        </label>
        <input
          id="cf-author"
          type="text"
          required
          maxLength={AUTHOR_MAX}
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cf-body" className="font-sans text-[0.9rem] font-semibold text-ink">
          Kommentar
        </label>
        <textarea
          id="cf-body"
          required
          rows={5}
          maxLength={BODY_MAX}
          value={body}
          onChange={(event) => setBody(event.target.value)}
          className={`${inputClass} resize-y`}
        />
      </div>

      <label className="flex items-center gap-2.5 text-[0.9rem] text-text">
        <input
          type="checkbox"
          checked={approved}
          onChange={(event) => setApproved(event.target.checked)}
          className="h-4 w-4 accent-gold"
        />
        Vis offentlig (godkjent)
      </label>

      {state === "error" && (
        <p role="alert" className="m-0 font-semibold text-[#a3282b]">
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button type="submit" disabled={state === "saving"} className={primaryButton}>
          {state === "saving"
            ? "Lagrer …"
            : isEdit
              ? "Lagre endringer"
              : "Lagre kommentar"}
        </button>
        <button type="button" onClick={onCancel} disabled={state === "saving"} className={ghostButton}>
          Avbryt
        </button>
      </div>
    </form>
  );
}
