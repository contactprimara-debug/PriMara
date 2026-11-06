"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { ContactState } from "@/app/actions/contact";
import SubmitButton from "@/components/SubmitButton";
import HoneypotField from "@/components/HoneypotField";
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

export default function ContactSection() {
  const router = useRouter();
  const [state, setState] = useState<ContactState>(initialState);
  const [pending, setPending] = useState(false);
  const sending = useRef(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setPending(true);
    setState(initialState);

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
      router.push("/thank-you");
    } catch (err) {
      setState({ status: "error", error: err instanceof Error ? err.message : "Something went wrong." });
      setPending(false);
      sending.current = false;
    }
  }

  return (
    <>
      {/* ── SECTION 2: Contact Form ── */}
      <section
        id="contact-form"
        aria-labelledby="form-heading"
        className="pt-4 pb-12"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div className="mx-auto max-w-xl" style={{ background: "#fff", border: "2px solid var(--navy)", padding: "clamp(18px, 4vw, 32px)" }}>

            {/* Heading: the page H1 already says it; kept for the aria label only (standard item 21). */}
            <h2 id="form-heading" className="sr-only">Send us a message</h2>

            {/* Form — redirects to /thank-you on success */}
            <form onSubmit={handleSubmit} action="/api/contact" method="POST" noValidate>
                <HoneypotField />
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
                      style={{ color: "var(--gold)" }}
                      role="alert"
                    >
                      {state.error}
                    </p>
                  )}

                  {/* Submit */}
                  <SubmitButton pending={pending} />

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
                      style={{ color: "var(--color-text-muted)", textDecoration: "underline", whiteSpace: "nowrap" }}
                    >
                      {siteConfig.phoneDisplay.replace(/ /g, "\u00a0")}
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
