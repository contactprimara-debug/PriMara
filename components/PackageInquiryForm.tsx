"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  submitPackageInquiry,
  type PackageInquiryState,
} from "@/app/actions/packageInquiry";

const initialState: PackageInquiryState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        fontSize: "14px",
        letterSpacing: "0.06em",
        fontWeight: 600,
        color: "#ffffff",
        backgroundColor: "var(--ember)",
        padding: "0 28px",
        height: "52px",
        borderRadius: "2px",
        border: "none",
        cursor: pending ? "wait" : "pointer",
        opacity: pending ? 0.65 : 1,
        transition: "opacity 0.2s",
        width: "100%",
        marginTop: "8px",
      }}
    >
      {pending ? "Sending…" : "Request Package Details"}
    </button>
  );
}

export default function PackageInquiryForm({
  packageName,
}: {
  packageName: string;
}) {
  const router = useRouter();
  const [state, formAction] = useFormState(submitPackageInquiry, initialState);

  useEffect(() => {
    if (state.status === "success") router.push("/thank-you");
  }, [state.status, router]);

  if (state.status === "success") {
    return (
      <div
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--wire)",
          borderRadius: "4px",
          padding: "clamp(32px, 4vw, 48px)",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(28px, 3.5vw, 40px)",
            color: "var(--chalk)",
            fontWeight: 400,
            margin: "0 0 16px",
          }}
        >
          Thanks, {state.firstName}.
        </h3>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "15px",
            lineHeight: 1.65,
            color: "var(--ash)",
            margin: 0,
          }}
        >
          Your {packageName} inquiry is in. A co-founder will reach out within one business
          day. For anything urgent, call{" "}
          <a
            href="tel:+15612912681"
            style={{ color: "var(--gold)", textDecoration: "none" }}
          >
            (561) 291-2681
          </a>
          .
        </p>
      </div>
    );
  }

  const labelStyle = {
    fontFamily: "system-ui, sans-serif",
    fontSize: "10px",
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: "var(--smoke)",
    marginBottom: "6px",
    display: "block" as const,
  };

  const inputStyle = {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid var(--wire)",
    borderRadius: 0,
    color: "var(--chalk)",
    fontFamily: "var(--font-display), Georgia, serif",
    fontSize: "18px",
    padding: "10px 0",
    width: "100%",
    outline: "none",
    WebkitAppearance: "none" as const,
    appearance: "none" as const,
  };

  return (
    <form action={formAction}>
      <input type="hidden" name="package" value={packageName} />

      <div style={{ display: "grid", gap: "24px" }}>
        <div>
          <label htmlFor="pkg-name" style={labelStyle}>
            Your Name
          </label>
          <input
            id="pkg-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            style={inputStyle}
            placeholder="Dr. Jane Smith"
          />
        </div>

        <div>
          <label htmlFor="pkg-practice" style={labelStyle}>
            Practice Name
          </label>
          <input
            id="pkg-practice"
            name="practice"
            type="text"
            required
            autoComplete="organization"
            style={inputStyle}
            placeholder="Westside Family Medicine"
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
          }}
        >
          <div>
            <label htmlFor="pkg-email" style={labelStyle}>
              Email
            </label>
            <input
              id="pkg-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              style={inputStyle}
              placeholder="you@practice.com"
            />
          </div>
          <div>
            <label htmlFor="pkg-phone" style={labelStyle}>
              Phone
            </label>
            <input
              id="pkg-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              style={inputStyle}
              placeholder="(561) 555-0123"
            />
          </div>
        </div>

        <div>
          <label htmlFor="pkg-notes" style={labelStyle}>
            Notes (optional)
          </label>
          <textarea
            id="pkg-notes"
            name="notes"
            rows={3}
            style={{
              ...inputStyle,
              fontFamily: "system-ui, sans-serif",
              fontSize: "15px",
              resize: "vertical" as const,
              lineHeight: 1.5,
            }}
            placeholder="Anything we should know about your practice or current marketing?"
          />
        </div>

        {state.status === "error" && (
          <p
            role="alert"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "13px",
              color: "var(--ember)",
              margin: 0,
            }}
          >
            {state.error}
          </p>
        )}

        <SubmitButton />

        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: "12px",
            color: "var(--smoke)",
            lineHeight: 1.6,
            margin: 0,
            textAlign: "center",
          }}
        >
          Prefer email? Reach us at{" "}
          <a
            href="mailto:contactprimara@gmail.com"
            style={{ color: "var(--gold)", textDecoration: "none" }}
          >
            contactprimara@gmail.com
          </a>
        </p>
      </div>
    </form>
  );
}
