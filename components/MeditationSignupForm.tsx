"use client";

import { FormEvent, useState } from "react";

const SUPABASE_URL = "https://uftpwopqxrhqsrpcguex.supabase.co";
const SUPABASE_KEY = "sb_publishable_-9tR57jqc0K4dexcv4mJ2A_Zlxu8kxb";

type FormState = "idle" | "loading" | "success" | "error";

export default function MeditationSignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [expectation, setExpectation] = useState("");
  const [selfLearning, setSelfLearning] = useState("");
  const [state, setState] = useState<FormState>("idle");

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!name || !email) return;
    setState("loading");

    const response = await fetch(`${SUPABASE_URL}/rest/v1/sunday_meditation_signups`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({
        name,
        email,
        meditation_expectation: expectation,
        self_learning_interest: selfLearning,
        source: "website-meditacion"
      })
    });

    if (response.ok || response.status === 409) {
      setName("");
      setEmail("");
      setExpectation("");
      setSelfLearning("");
      setState("success");
    } else {
      setState("error");
    }
  }

  return (
    <form className="meditation-form" onSubmit={submit}>
      <div className="meditation-field">
        <label htmlFor="meditation-name">Nombre</label>
        <input
          id="meditation-name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          required
        />
      </div>

      <div className="meditation-field">
        <label htmlFor="meditation-email">Correo</label>
        <input
          id="meditation-email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />
      </div>

      <div className="meditation-field meditation-field-full">
        <label htmlFor="meditation-expectation">¿Qué esperas de la meditación?</label>
        <textarea
          id="meditation-expectation"
          name="expectation"
          rows={4}
          value={expectation}
          onChange={(e) => setExpectation(e.target.value)}
        />
      </div>

      <div className="meditation-field meditation-field-full">
        <label htmlFor="meditation-self">¿Qué te gustaría aprender de ti mismo?</label>
        <textarea
          id="meditation-self"
          name="selfLearning"
          rows={4}
          value={selfLearning}
          onChange={(e) => setSelfLearning(e.target.value)}
        />
      </div>

      <div className="meditation-form-actions">
        <button type="submit" disabled={state === "loading"}>
          {state === "loading" ? "guardando..." : "registrarme"}
        </button>
        <p className="meditation-form-note" aria-live="polite">
          {state === "success" && "Listo. Tu lugar quedó registrado."}
          {state === "error" && "No pude guardar tu registro. Intenta de nuevo."}
        </p>
      </div>
    </form>
  );
}
