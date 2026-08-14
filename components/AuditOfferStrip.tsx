'use client';

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/actions/contact";
import HoneypotField from "@/components/HoneypotField";

const initialState: ContactState = { status: "idle" };

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        backgroundColor: "var(--ember)",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
        fontWeight: 700,
        fontSize: "13px",
        letterSpacing: "0.1em",
        textTransform: "uppercase" as const,
        padding: "14px 24px",
        borderRadius: "3px",
        border: "none",
        cursor: pending ? "not-allowed" : "pointer",
        opacity: pending ? 0.7 : 1,
        minHeight: "52px",
      }}
    >
      {pending ? "Sending…" : "Send My Free Audit Request →"}
    </button>
  );
}

export default function AuditOfferStrip() {
  const router = useRouter();
  const [state, formAction] = useFormState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      router.push("/thank-you");
    }
  }, [state.status, router]);

  return (
    <section
      aria-label="Get your free GBP audit"
      style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--wire)",
        borderBottom: "1px solid var(--wire)",
        padding: "clamp(40px, 5vw, 64px) clamp(24px, 8vw, 120px)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(32px, 5vw, 80px)",
          alignItems: "center",
        }}
        className="offer-strip-grid"
      >
        {/* Left: offer */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(201,168,76,0.10)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "2px",
              padding: "4px 12px",
              marginBottom: "16px",
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.16em",
              textTransform: "uppercase" as const,
              color: "var(--gold)",
            }}
          >
            Free — No Obligation
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 400,
              color: "var(--chalk)",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Get your free GBP audit in 48 hours.
          </h2>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              "GBP completeness score vs. your top 3 local competitors",
              "Review velocity gap — how far behind you are and how long to close it",
              "5 highest-leverage changes specific to your practice",
              "Delivered by Liam or Gio directly — not an intern, not a template",
            ].map((item) => (
              <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--gold)", flexShrink: 0, fontSize: "0.75rem", marginTop: "3px" }}>▸</span>
                <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.875rem", color: "var(--ash)", lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: quick form */}
        <div>
          {state.status === "success" ? (
            <div
              style={{
                border: "1px solid rgba(201,168,76,0.3)",
                borderRadius: "4px",
                padding: "32px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "1.25rem",
                  color: "var(--chalk)",
                  marginBottom: "12px",
                }}
              >
                You&rsquo;re on the list, {state.firstName}.
              </div>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.875rem", color: "var(--ash)", lineHeight: 1.6 }}>
                Liam or Gio will have your audit in your inbox within 48 hours.
              </p>
            </div>
          ) : (
            <form ref={formRef} action={formAction} noValidate>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label
                      htmlFor="audit-name"
                      style={{
                        display: "block",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase" as const,
                        color: "var(--smoke)",
                        marginBottom: "6px",
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="audit-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Dr. Jane Smith"
                      style={{
                        width: "100%",
                        backgroundColor: "var(--void)",
                        border: "1px solid var(--wire)",
                        borderRadius: "3px",
                        padding: "10px 12px",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "0.875rem",
                        color: "var(--chalk)",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="audit-phone"
                      style={{
                        display: "block",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase" as const,
                        color: "var(--smoke)",
                        marginBottom: "6px",
                      }}
                    >
                      Phone *
                    </label>
                    <input
                      id="audit-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(561) 000-0000"
                      style={{
                        width: "100%",
                        backgroundColor: "var(--void)",
                        border: "1px solid var(--wire)",
                        borderRadius: "3px",
                        padding: "10px 12px",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "0.875rem",
                        color: "var(--chalk)",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="audit-practice"
                    style={{
                      display: "block",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "10px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase" as const,
                      color: "var(--smoke)",
                      marginBottom: "6px",
                    }}
                  >
                    Practice Name *
                  </label>
                  <input
                    id="audit-practice"
                    name="practiceName"
                    type="text"
                    required
                    placeholder="Westside Family Medicine"
                    style={{
                      width: "100%",
                      backgroundColor: "var(--void)",
                      border: "1px solid var(--wire)",
                      borderRadius: "3px",
                      padding: "10px 12px",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "0.875rem",
                      color: "var(--chalk)",
                      outline: "none",
                    }}
                  />
                </div>

                <input type="hidden" name="callTime" value="Audit request via homepage" />
                <HoneypotField />

                {state.status === "error" && (
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.8125rem", color: "var(--ember)" }}>
                    {state.error}
                  </p>
                )}

                <SubmitBtn />

                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", color: "var(--smoke)", letterSpacing: "0.06em" }}>
                  No spam. No sales pitch. Just the audit, delivered in 48 hours.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
