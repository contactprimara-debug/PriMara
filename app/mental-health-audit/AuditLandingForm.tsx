"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions/contact";
import HoneypotField from "@/components/HoneypotField";
import styles from "./landing.module.css";

const initialState: ContactState = { status: "idle" };

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={styles.submitBtn}>
      {pending ? "Sending…" : "Send My Free Audit Request →"}
    </button>
  );
}

export default function AuditLandingForm() {
  const [state, formAction] = useFormState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className={styles.successBox}>
        <div className={styles.successTitle}>You&rsquo;re on the list, {state.firstName}.</div>
        <p>Liam or Gio will have your audit in your inbox within 48 hours.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} noValidate>
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

      <SubmitBtn />
      <div className={styles.formFine}>No spam. No sales pitch. Just the audit.</div>
    </form>
  );
}
