"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return;

    setState("submitting");
    setError("");
    try {
      const res = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setState("error");
        setError(data.error ?? "Kunne ikke logge inn. Prøv igjen.");
        return;
      }
      setPassword("");
      router.refresh();
    } catch {
      setState("error");
      setError("Fikk ikke kontakt med serveren. Sjekk nettforbindelsen og prøv igjen.");
    }
  }

  return (
    <div className="mx-auto max-w-[420px] rounded-radius border border-border bg-white p-7 shadow-sm">
      <h2 className="m-0 font-serif text-[1.4rem] text-ink">Logg inn</h2>
      <p className="mt-2 mb-6 text-[0.92rem] text-text-light">
        Skriv inn administratorpassordet for å administrere kommentarer.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="admin-password" className="font-sans text-[0.9rem] font-semibold text-ink">
            Passord
          </label>
          <input
            id="admin-password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-radius-sm border border-border bg-white px-4 py-3 text-text outline-none transition-colors focus:border-gold"
          />
        </div>

        {state === "error" && (
          <p role="alert" className="m-0 font-semibold text-[#a3282b]">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-3.5 text-[.78rem] font-semibold tracking-[1px] text-white uppercase transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {state === "submitting" ? "Logger inn …" : "Logg inn"}
        </button>
      </form>
    </div>
  );
}
