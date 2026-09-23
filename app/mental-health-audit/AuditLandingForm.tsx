"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { ContactState } from "@/app/actions/contact";
import HoneypotField from "@/components/HoneypotField";
import styles from "./landing.module.css";

const initialState: ContactState = { status: "idle" };

function SubmitBtn({ pending }: { pending: boolean }) {
  return (
    <button type="submit" disabled={pending} className={styles.submitBtn}>
      {pending ? "Sending…" : "Send My Free Audit Request →"}
    </button>
  );
}

export default function AuditLandingForm() {
  const router = useRouter();
  const [state, setState] = useState<ContactState>(initialState);
  const [pending, setPending] = useState(false);
  const sending = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setPending(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      formRef.current?.reset();
      setState({ status: "success", firstName: data.firstName });
      router.push("/thank-you");
    } catch (err) {
      setState({ status: "error", error: err instanceof Error ? err.message : "Something went wrong." });
      setPending(false);
      sending.current = false;
    }
  }

  if (state.status === "success") {
    return (
      <div className={styles.successBox}>
        <div className={styles.successTitle}>You&rsquo;re on the list, {state.firstName}.</div>
        <p>Liam or Gio will have your audit in your inbox within 48 hours.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} action="/api/contact" method="POST" noValidate>
      <div className={styles.formRow}>
        <label htmlFor="mha-name">Your Name *</label>
        <input id="mha-name" name="name" type="text" required placeholder="Jane Smith" />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="mha-phone">Phone *</label>
        <input id="mha-phone" name="phone" type="tel" required placeholder="(555) 123-4567" />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="mha-practice">Practice Name *</label>
        <input id="mha-practice" name="practiceName" type="text" required placeholder="Smith Behavioral Health" />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="mha-email">Email</label>
        <input id="mha-email" name="email" type="email" placeholder="jane@practice.com" />
      </div>
      <input type="hidden" name="callTime" value="Audit request via mental-health-audit landing page" />
      <HoneypotField />

      {state.status === "error" && <p className={styles.formError}>{state.error}</p>}

      <SubmitBtn pending={pending} />
      <div className={styles.formFine}>No spam. No sales pitch. Just the audit.</div>
    </form>
  );
}
