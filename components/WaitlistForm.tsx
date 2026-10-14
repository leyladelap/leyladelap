"use client";

import { FormEvent, useState } from "react";

const SUPABASE_URL = "https://uftpwopqxrhqsrpcguex.supabase.co";
const SUPABASE_KEY = "sb_publishable_-9tR57jqc0K4dexcv4mJ2A_Zlxu8kxb";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("loading");

    const response = await fetch(`${SUPABASE_URL}/rest/v1/waitlist_signups`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({ email, source: "website-home", locale: "es" })
    });

    if (response.ok || response.status === 409) {
      setEmail("");
      setState("success");
    } else {
      setState("error");
    }
  }

  return (
    <form className="waitlist" onSubmit={submit}>
      <label className="sr-only" htmlFor="email">Tu correo</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com"
        required
      />
      <button type="submit" disabled={state === "loading"}>
        {state === "loading" ? "entrando..." : "recibir novedades"}
      </button>
      <span className="form-note" aria-live="polite">
        {state === "success" && "Listo. Nos encontramos por aquí."}
        {state === "error" && "No pude guardar tu correo. Intenta otra vez."}
      </span>
    </form>
  );
}
