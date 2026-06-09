'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { submitContact } from '@/app/actions/contact';

/* ── ContactFinal ──────────────────────────────────────────────────────────
   Section 04 — end of the page journey.

   Layout: two-column via .contact-two-col CSS
   Left  (45%): 4-field form → GSAP fade-out → confirmation card
   Right (55%): phone, address (NAP), email

   Form fields: border-bottom only, no border-box — styled via .contact-input
   Submit: class="magnetic contact-submit" — InteractionEffects handles pull
   GSAP on submit: form fades out, confirmation fades in
   H2 "split-reveal" → TypeAnimations (global, char-by-char entrance)

   Form submits via submitContact server action → Resend → liam.costello@primara365.com
   GSAP transition runs on successful submission.
*/

export default function ContactFinal() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [practiceName, setPracticeName] = useState('');
  const [phone, setPhone] = useState('');
  const [callbackTime, setCallbackTime] = useState('Anytime');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const formWrapRef = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLDivElement>(null);

  // Pull first name from the form for the confirmation message
  const firstName = name.trim().split(' ')[0] || 'there';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError('');
    setSubmitting(true);

    // Build FormData matching server action field names
    const fd = new FormData();
    fd.set('name', name);
    fd.set('practiceName', practiceName);
    fd.set('phone', phone);
    fd.set('callTime', callbackTime);

    const result = await submitContact({ status: 'idle' }, fd);
    setSubmitting(false);

    if (result.status === 'error') {
      setSubmitError(result.error ?? 'Something went wrong. Please call us at (561) 291-2681.');
      return;
    }

    // Success: redirect to thank-you page
    router.push('/thank-you');
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(80px, 10vw, 120px) 0',
        background: 'var(--void)',
        borderTop: '1px solid var(--wire)',
      }}
    >
      {/* ── Atmospheric blob — strong, central (more intense than hero) ─────── */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 80vw 80vh at 50% 50%, rgba(27,110,110,0.15) 0%, transparent 60%)',
        }}
      />

      {/* ── Decorative section number ──────────────────────────────────────── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-30px',
          right: 'clamp(24px, 8vw, 120px)',
          fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
          fontStyle: 'italic',
          fontSize: 'clamp(140px, 18vw, 220px)',
          lineHeight: 1,
          color: 'var(--gold)',
          opacity: 0.025,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
        }}
      >
        04
      </span>

      {/* ── Inner container ───────────────────────────────────────────────── */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '0 clamp(24px, 8vw, 120px)',
        }}
      >

        {/* ── Section header ──────────────────────────────────────────────── */}
        <header style={{ marginBottom: 'clamp(48px, 7vw, 80px)' }}>

          {/* Eyebrow */}
          <div
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--smoke)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: 'clamp(20px, 2.5vw, 32px)',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '32px',
                height: '1px',
                background: 'var(--gold)',
                flexShrink: 0,
              }}
            />
            Request Your Audit
          </div>

          {/* H2 — TypeAnimations handles .split-reveal char animation */}
          <h2
            id="contact-heading"
            className="split-reveal"
            style={{
              fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(72px, 11vw, 140px)',
              color: 'var(--chalk)',
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              marginBottom: 'clamp(20px, 2.5vw, 28px)',
            }}
          >
            Let&#8217;s Talk.
          </h2>

          <p
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: '15px',
              color: 'var(--ash)',
              lineHeight: 1.75,
              maxWidth: '520px',
            }}
          >
            Fill out the 4-field form below. We&rsquo;ll research your practice and be in touch within 24 hours. No obligation &mdash; if it doesn&rsquo;t make sense for your practice, we&rsquo;ll say so.
          </p>
        </header>

        {/* ── Two-column layout ─────────────────────────────────────────────── */}
        <div className="contact-two-col">

          {/* ── LEFT: Form ──────────────────────────────────────────────────── */}
          <div>

            {/* Form wrapper — GSAP animates this out on submit */}
            <div ref={formWrapRef} className="contact-form">
              <form onSubmit={handleSubmit} noValidate>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(28px, 3.5vw, 40px)',
                  }}
                >

                  {/* Field 1: Full Name */}
                  <div className="contact-field-group">
                    <label htmlFor="cf-name" className="contact-field-label">
                      Full Name
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Dr. Jane Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="contact-input"
                    />
                  </div>

                  {/* Field 2: Practice Name */}
                  <div className="contact-field-group">
                    <label htmlFor="cf-practice" className="contact-field-label">
                      Practice Name
                    </label>
                    <input
                      id="cf-practice"
                      type="text"
                      name="practiceName"
                      required
                      autoComplete="organization"
                      placeholder="Smith Family Medicine"
                      value={practiceName}
                      onChange={(e) => setPracticeName(e.target.value)}
                      className="contact-input"
                    />
                  </div>

                  {/* Field 3: Phone — type="tel" triggers numeric keyboard on mobile */}
                  <div className="contact-field-group">
                    <label htmlFor="cf-phone" className="contact-field-label">
                      Phone Number
                    </label>
                    <input
                      id="cf-phone"
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      inputMode="numeric"
                      placeholder="(561) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="contact-input"
                    />
                  </div>

                  {/* Field 4: Best Callback Time */}
                  <div className="contact-field-group">
                    <label htmlFor="cf-time" className="contact-field-label">
                      Best Callback Time
                    </label>
                    <select
                      id="cf-time"
                      name="callbackTime"
                      value={callbackTime}
                      onChange={(e) => setCallbackTime(e.target.value)}
                      className="contact-input contact-select"
                    >
                      <option value="Morning (8am–12pm)">Morning (8am–12pm)</option>
                      <option value="Afternoon (12pm–5pm)">Afternoon (12pm–5pm)</option>
                      <option value="Anytime">Anytime</option>
                    </select>
                  </div>

                  {/* Submit — class="magnetic" for InteractionEffects pull effect */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="magnetic contact-submit"
                    style={{
                      background: 'var(--ember)',
                      color: '#ffffff',
                      fontFamily: 'system-ui, sans-serif',
                      fontWeight: 700,
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '18px 40px',
                      borderRadius: '3px',
                      border: 'none',
                      cursor: submitting ? 'not-allowed' : 'pointer',
                      width: '100%',
                      opacity: submitting ? 0.7 : 1,
                    }}
                  >
                    {submitting ? 'Sending…' : 'Send My Audit Request →'}
                  </button>

                  {/* Inline error message */}
                  {submitError && (
                    <p
                      role="alert"
                      style={{
                        fontFamily: 'system-ui, sans-serif',
                        fontSize: '13px',
                        color: 'var(--ember)',
                        marginTop: '-8px',
                        lineHeight: 1.5,
                      }}
                    >
                      {submitError}
                    </p>
                  )}
                </div>
              </form>

              {/* Privacy microtext */}
              <p
                style={{
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: '10px',
                  color: 'var(--smoke)',
                  marginTop: '20px',
                  lineHeight: 1.7,
                  letterSpacing: '0.04em',
                }}
              >
                No spam. HIPAA-aware practice. We respond within 24 hours. For emergencies, call{' '}
                <a
                  href="tel:+15612912681"
                  style={{
                    color: 'var(--smoke)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '2px',
                  }}
                >
                  +1 (561) 291-2681
                </a>
                .
              </p>
            </div>

            {/* ── Confirmation card (hidden until submit) ───────────────────── */}
            <div ref={confirmRef} className="contact-confirm" style={{ display: 'none' }}>
              <p
                style={{
                  fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
                  fontStyle: 'italic',
                  fontSize: '24px',
                  color: 'var(--chalk)',
                  lineHeight: 1.45,
                  marginBottom: '20px',
                }}
              >
                We&#8217;ll be in touch, {firstName}.
              </p>
              <p
                style={{
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: '14px',
                  color: 'var(--ash)',
                  lineHeight: 1.75,
                }}
              >
                We&rsquo;ll research your practice and be in touch within 24 hours.
                <br />
                Liam or Gio will walk you through your audit directly.
              </p>
              <div
                style={{
                  width: '32px',
                  height: '1px',
                  background: 'var(--gold)',
                  marginTop: '28px',
                }}
              />
            </div>
          </div>

          {/* ── RIGHT: Contact info + Maps ──────────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(32px, 4.5vw, 48px)',
            }}
          >

            {/* Phone */}
            <div>
              <p
                style={{
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: '9px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--smoke)',
                  marginBottom: '12px',
                }}
              >
                Phone
              </p>
              <a
                href="tel:+15612912681"
                className="nav-link"
                style={{
                  fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
                  fontSize: 'clamp(22px, 3vw, 28px)',
                  color: 'var(--chalk)',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  display: 'inline-block',
                  transition: 'color 0.2s',
                }}
              >
                +1 (561) 291-2681
              </a>
            </div>

            {/* Address — NAP block, character for character GBP match */}
            <div>
              <p
                style={{
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: '9px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--smoke)',
                  marginBottom: '12px',
                }}
              >
                Location
              </p>
              <address
                style={{
                  fontStyle: 'normal',
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: '14px',
                  color: 'var(--ash)',
                  lineHeight: 2.1,
                }}
              >
                Primara<br />
                West Palm Beach, FL<br />
                FL 33401
              </address>
            </div>

            {/* Email */}
            <div>
              <p
                style={{
                  fontFamily: 'system-ui, sans-serif',
                  fontSize: '9px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--smoke)',
                  marginBottom: '12px',
                }}
              >
                Email
              </p>
              <a
                href="mailto:liam.costello@primara365.com"
                style={{
                  fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
                  fontSize: 'clamp(14px, 1.5vw, 18px)',
                  color: 'var(--chalk)',
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  display: 'inline-block',
                  transition: 'color 0.2s',
                }}
              >
                liam.costello@primara365.com
              </a>
            </div>

          </div>
          {/* end RIGHT column */}
        </div>
        {/* end .contact-two-col */}
      </div>
    </section>
  );
}
