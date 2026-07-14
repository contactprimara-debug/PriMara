"use client";

import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { submitContact, type ContactState } from "@/app/actions/contact";
import SubmitButton from "@/components/SubmitButton";
import { siteConfig } from "@/lib/siteConfig";

const initialState: ContactState = { status: "idle" };

// Label + input wrapper
function Field({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-1.5">{children}</div>;
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm font-medium"
      style={{ color: "#333333" }}
    >
      {children}
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "48px",
  padding: "0 14px",
  border: "1.5px solid var(--wire)",
  borderRadius: "8px",
  fontSize: "1rem",
  color: "#111111",           // dark text — inputs have white bg
  backgroundColor: "#ffffff",
  outline: "none",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  cursor: "pointer",
  appearance: "none",
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235c5650' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 14px center",
  paddingRight: "40px",
};

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="#F4B942" aria-hidden="true">
      <path d="M10 1l2.39 4.84 5.35.78-3.87 3.77.91 5.32L10 13.27l-4.78 2.51.91-5.32L2.26 6.62l5.35-.78L10 1z" />
    </svg>
  );
}

export default function ContactSection() {
  const router = useRouter();
  const [state, formAction] = useFormState(submitContact, initialState);

  useEffect(() => {
    if (state.status === "success") router.push("/thank-you");
  }, [state.status, router]);

  return (
    <>
      {/* ── SECTION 1: Final CTA Banner ── */}
      <section
        aria-labelledby="cta-heading"
        style={{
          backgroundColor: "var(--color-primary)",
          borderTop: "3px solid var(--ember)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8 py-20 text-center">
          <h2
            id="cta-heading"
            className="font-serif font-bold text-white text-balance"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            Ready to Grow Your Practice?
          </h2>
          <p
            className="mt-4 text-base max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Primara is now accepting new independent practices nationwide. Most
            new engagements begin within one week.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {/* Primary: call */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 rounded-lg px-8 font-bold text-white transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "var(--ember)",
                minHeight: "52px",
                fontSize: "1rem",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 2.5h2.5L6.5 5.5l-1.5 1.5a8 8 0 003.5 3.5L10 9l3 1v2.5A1.5 1.5 0 0111.5 14C5.7 14 1 9.3 1 3.5A1.5 1.5 0 013 2z" fill="white" />
              </svg>
              Call {siteConfig.phoneDisplay}
            </a>

            {/* Secondary: scroll to form */}
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 font-bold text-white transition-colors hover:bg-white hover:text-ink"
              style={{ minHeight: "52px", fontSize: "1rem" }}
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Contact Form ── */}
      <section
        id="contact-form"
        aria-labelledby="form-heading"
        className="py-24"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div className="mx-auto max-w-xl">

            {/* Heading */}
            <div className="mb-10 text-center">
              <h2
                id="form-heading"
                className="font-serif font-bold"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-fraunces)",
                }}
              >
                Send Us a Message
              </h2>
              <p className="mt-2 text-base" style={{ color: "var(--color-text-muted)" }}>
                We respond within one business day.
              </p>
            </div>

            {/* Form — redirects to /thank-you on success */}
            <form action={formAction} noValidate>
                {/* Required fields note */}
                <p
                  className="mb-6 text-xs"
                  style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  * Required field
                </p>

                <div className="flex flex-col gap-5">

                  {/* Field 1: Full Name */}
                  <Field>
                    <FieldLabel htmlFor="name">Full Name *</FieldLabel>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      style={inputStyle}
                    />
                  </Field>

                  {/* Field 2: Practice Name — required by submitContact */}
                  <Field>
                    <FieldLabel htmlFor="practiceName">Practice Name *</FieldLabel>
                    <input
                      id="practiceName"
                      name="practiceName"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Your practice name"
                      style={inputStyle}
                    />
                  </Field>

                  {/* Field 3: Phone */}
                  <Field>
                    <FieldLabel htmlFor="phone">Phone Number *</FieldLabel>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="(561) XXX-XXXX"
                      style={inputStyle}
                    />
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
                    >
                      We&apos;ll call to confirm your consultation.
                    </p>
                  </Field>

                  {/* Field 4: Reason for Contact */}
                  <Field>
                    <FieldLabel htmlFor="reason">Reason for Contact *</FieldLabel>
                    <select
                      id="reason"
                      name="reason"
                      required
                      defaultValue=""
                      style={selectStyle}
                    >
                      <option value="" disabled>Select a reason…</option>
                      <option value="Request a Free Practice Audit">Request a Free Practice Audit</option>
                      <option value="Learn About Our Services">Learn About Our Services</option>
                      <option value="Pricing and Packages">Pricing and Packages</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </Field>

                  {/* Field 5: Best Time to Call */}
                  <Field>
                    <FieldLabel htmlFor="callTime">Best Time to Call *</FieldLabel>
                    <select
                      id="callTime"
                      name="callTime"
                      required
                      defaultValue=""
                      style={selectStyle}
                    >
                      <option value="" disabled>Select a time…</option>
                      <option value="Morning (8am–12pm)">Morning (8am–12pm)</option>
                      <option value="Afternoon (12pm–5pm)">Afternoon (12pm–5pm)</option>
                      <option value="Either works">Either works</option>
                    </select>
                  </Field>

                  {/* Error message */}
                  {state.status === "error" && (
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-accent)" }}
                      role="alert"
                    >
                      {state.error}
                    </p>
                  )}

                  {/* Submit */}
                  <SubmitButton />

                  {/* Microtext */}
                  <p
                    className="text-center"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-text-muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    No spam, ever. HIPAA-aware agency. We respond within one business day. For urgent
                    inquiries, call{" "}
                    <a
                      href={`tel:${siteConfig.phone}`}
                      style={{ color: "var(--color-text-muted)", textDecoration: "underline" }}
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                    .
                  </p>
                </div>
              </form>

            {/* Trust strip */}
            <div
              className="mt-10 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 pt-8"
              style={{
                borderTop: "1px solid var(--color-border)",
                fontSize: "0.8rem",
                color: "var(--color-text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span>Founder-Led</span>
              <span aria-hidden="true" style={{ color: "var(--color-border)" }}>·</span>
              <span>HIPAA-Aware</span>
              <span aria-hidden="true" style={{ color: "var(--color-border)" }}>·</span>
              <span>Serving Practices Nationwide</span>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
