"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className="w-full font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      style={{
        backgroundColor: "var(--color-accent)",
        height: "52px",
        borderRadius: "8px",
        fontSize: "1rem",
        cursor: pending ? "wait" : "pointer",
      }}
    >
      {pending ? "Sending…" : "Request My Free Consultation →"}
    </button>
  );
}
