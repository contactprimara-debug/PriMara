import Link from "next/link";
import AboutAnimation from "./AboutAnimation";

/* ── AboutSection ──────────────────────────────────────────────────────────
   Founders / team section — section 03.
   Background: var(--surface) — one step lighter than --void for section break.

   E-E-A-T requirements (visible text, not buried in alt attributes):
   - Full founder names: Liam Costello & Gio LaRoche
   - Credential line with education, certification, experience
   - City: Florida
   - Language: English
   - Specialty: independent practices only

   Layout: asymmetric two-column grid — 55% photo / 45% text
   Photo: replace the placeholder div with the <img> tag when ready.
   Alt: keep the keyword-rich alt text shown below.

   Animations wired in AboutAnimation.tsx (client component):
   - .about-photo: x:-60 opacity:0 → entrance on scroll
   - .about-text > *: x:40 staggered → entrance on scroll
   - H2 "split-reveal": TypeAnimations (global)
*/

export default function AboutSection() {
  return (
    <section
      className="about"
      id="about"
      aria-labelledby="about-heading"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--surface)",
        borderTop: "1px solid var(--wire)",
        borderBottom: "1px solid var(--wire)",
        padding: "clamp(80px, 10vw, 120px) 0",
      }}
    >
      {/* ── Atmospheric blobs ──────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: [
            "radial-gradient(ellipse 50vw 55vh at 100% 0%, rgba(201,168,76,0.05) 0%, transparent 60%)",
            "radial-gradient(ellipse 45vw 45vh at 0% 100%, rgba(27,110,110,0.06) 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      {/* ── Decorative section number ──────────────────────────────────────── */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-30px",
          right: "clamp(24px, 8vw, 120px)",
          fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
          fontStyle: "italic",
          fontSize: "clamp(140px, 18vw, 220px)",
          lineHeight: 1,
          color: "var(--gold)",
          opacity: 0.025,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        03
      </span>

      {/* ── Inner container ───────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "0 clamp(24px, 8vw, 120px)",
        }}
      >
        {/* ── Two-column grid ───────────────────────────────────────────────── */}
        <div className="about-grid">

          {/* ── Left: founder portraits (Liam top, Gio bottom) ──────────────── */}
          <div
            className="about-photo"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            {[
              { slug: "liam", name: "Liam Costello" },
              { slug: "gio", name: "Gio LaRoche" },
            ].map((f) => (
              <figure
                key={f.slug}
                style={{
                  margin: 0,
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid var(--wire)",
                  background: "var(--surface-2)",
                  aspectRatio: "4 / 5",
                }}
              >
                <img
                  src={`/founders/${f.slug}-800.jpg`}
                  srcSet={`/founders/${f.slug}-480.jpg 480w, /founders/${f.slug}-800.jpg 800w, /founders/${f.slug}-1200.jpg 1200w`}
                  sizes="(max-width: 768px) 45vw, 25vw"
                  alt={`${f.name} — Co-Founder, Primara`}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <figcaption
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: "10px 14px",
                    background:
                      "linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0) 100%)",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--chalk)",
                  }}
                >
                  {f.name}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* ── Right: text content ───────────────────────────────────────────── */}
          <div className="about-text">

            {/* 1. Label */}
            <div
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--smoke)",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "32px",
                  height: "1px",
                  background: "var(--gold)",
                  flexShrink: 0,
                }}
              />
              The Practice
            </div>

            {/* 2. H2 — TypeAnimations targets .split-reveal */}
            <h2
              id="about-heading"
              className="split-reveal"
              style={{
                fontFamily: "var(--font-display), Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
                fontSize: "clamp(32px, 4.5vw, 64px)",
                color: "var(--chalk)",
                fontWeight: 400,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              Liam Costello &amp; Gio LaRoche.
            </h2>

            {/* 3. Credential / positioning line */}
            <p
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--smoke)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Co-Founders · Primara · West Palm Beach, FL
              <br />
              Direct Founder Access · No Account Coordinators
            </p>

            {/* 4. Bio paragraphs */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-ui), system-ui, sans-serif",
                  fontSize: "15px",
                  color: "var(--ash)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Liam and Gio started Primara to give independent medical practices in
                Florida the same digital reach that hospital systems take for granted —
                without the agency machine, the long contracts, or the layers of account
                management between you and the people doing the work.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-ui), system-ui, sans-serif",
                  fontSize: "15px",
                  color: "var(--ash)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                Every engagement is run by a co-founder, end to end. You hear from us
                directly. The strategy decisions, the writing, the reporting — none of it
                gets handed off. If something isn&rsquo;t working, you tell us, and we fix
                it. That&rsquo;s the entire promise.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-ui), system-ui, sans-serif",
                  fontSize: "15px",
                  color: "var(--ash)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                We work exclusively with independent primary care practices and mental
                health practices in Florida. No hospital systems, no urgent care chains,
                no corporate groups. If you&rsquo;re running your own practice and your
                schedule isn&rsquo;t full, we should talk.
              </p>
            </div>

            {/* 5. CTA — hover handled by .about-cta CSS (server component, no JS events) */}
            <div>
              <Link
                href="/contact"
                className="magnetic about-cta"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "14px 28px",
                  borderRadius: "3px",
                }}
              >
                Start My Free Audit
                <svg
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 5h12M8 1l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

          </div>
          {/* end .about-text */}
        </div>
        {/* end .about-grid */}
      </div>

      {/* ── Scroll animations ─────────────────────────────────────────────── */}
      <AboutAnimation />
    </section>
  );
}
