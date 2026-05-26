import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

function StarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 1.5L11.163 6.441L16.5 7.168L12.75 10.818L13.726 16.5L9 13.941L4.274 16.5L5.25 10.818L1.5 7.168L6.837 6.441L9 1.5Z"
        fill="#8a6a2a"
        stroke="#8a6a2a"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarRow() {
  return (
    <span className="flex items-center gap-0.5" aria-label="Five star rating">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} />
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      className="bg-bg pt-24 pb-16 md:pt-32 md:pb-24"
      aria-label="Primara — Medical Marketing West Palm Beach"
      // min-height prevents CLS while Fraunces (heading font) swaps in.
      // 480px is a conservative lower bound for the two-column hero on desktop;
      // on mobile the section naturally expands taller.
      style={{ minHeight: "480px" }}
    >
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* ── LEFT: text column ── */}
          <div className="flex flex-col gap-7">

            {/* Eyebrow badge */}
            <div>
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium font-mono text-white"
                style={{ backgroundColor: "var(--color-success)", fontFamily: "var(--font-mono)" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M2 6L5 9L10 3"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Now Accepting New Clients — West Palm Beach, FL
              </span>
            </div>

            {/* H1 — SEO primary heading */}
            <h1 className="text-display-lg font-serif font-bold text-ink text-balance">
              Medical Marketing for Independent Practices in{" "}
              <span style={{ color: "var(--color-accent)" }}>West Palm Beach</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg leading-relaxed text-balance max-w-prose"
              style={{ color: "var(--color-text-muted)" }}
            >
              Primara helps physician-owned primary care clinics in South Florida
              grow their patient base through honest, measurable digital
              marketing — without the agency fluff or long-term lock-in.
            </p>

            {/* CTA pair */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  backgroundColor: "var(--color-accent)",
                  minHeight: "48px",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M3.5 3h3L7.5 6.5l-1.75 1.75a9.5 9.5 0 004 4L11.5 10.5 15 11.5v3A1.5 1.5 0 0113.5 16C7.149 16 2 10.851 2 4.5A1.5 1.5 0 013.5 3z"
                    fill="white"
                  />
                </svg>
                Call {siteConfig.phoneDisplay}
              </a>

              <Link
                href="/the-audit"
                className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-base font-semibold transition-all hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                  minHeight: "48px",
                }}
              >
                Request a Free Practice Audit
              </Link>
            </div>

            {/* Trust strip */}
            <div
              className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-sm"
              style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
            >
              <span className="flex items-center gap-2">
                <StarRow />
                <span>Google-Verified Agency</span>
              </span>

              <span aria-hidden="true" className="hidden sm:inline" style={{ color: "var(--color-border)" }}>|</span>

              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1.5C4 1.5 1.5 4 1.5 7S4 12.5 7 12.5 12.5 10 12.5 7 10 1.5 7 1.5z" stroke="var(--color-text-muted)" strokeWidth="1.25"/>
                  <path d="M7 4.5v3l2 1.5" stroke="var(--color-text-muted)" strokeWidth="1.25" strokeLinecap="round"/>
                </svg>
                South Florida–Based Team
              </span>

              <span aria-hidden="true" className="hidden sm:inline" style={{ color: "var(--color-border)" }}>|</span>

              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7L5.5 10.5L12 3.5" stroke="var(--color-success)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                No Long-Term Contracts
              </span>
            </div>
          </div>

          {/* ── RIGHT: photo column ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-none">

              {/* Decorative background shape */}
              <div
                className="absolute inset-0 rounded-3xl -rotate-2"
                style={{ backgroundColor: "var(--color-border)", opacity: 0.5 }}
                aria-hidden="true"
              />

              {/* Photo placeholder */}
              <div
                className="relative rounded-3xl overflow-hidden aspect-[4/5]"
                style={{
                  backgroundColor: "#e8e2d8",
                  border: "1px solid var(--color-border)",
                }}
              >
                {/* Placeholder label — replace with real <Image> before launch */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-border)" }}
                    aria-hidden="true"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="12" r="5" stroke="var(--color-text-muted)" strokeWidth="1.5"/>
                      <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p
                    className="text-xs uppercase tracking-widest font-medium"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--color-text-muted)" }}
                  >
                    PHOTO: Liam Costello &amp; Gio LaRoche
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Founders of Primara — warm, professional, South Florida office setting
                  </p>
                  <p
                    className="text-xs italic"
                    style={{ color: "var(--color-border)" }}
                  >
                    Replace before launch · WebP format · fetchpriority=&quot;high&quot;
                  </p>
                </div>

                {/* Accent corner detail */}
                <div
                  className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-accent)" }}
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 10h14M10 3l7 7-7 7" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Floating trust badge */}
              <div
                className="absolute -bottom-4 -left-4 rounded-xl px-4 py-3 shadow-card flex items-center gap-3"
                style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--color-success)", opacity: 0.12 }}
                  aria-hidden="true"
                />
                <div
                  className="absolute left-4 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "transparent" }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10L8 14L16 6" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="pl-10">
                  <p className="text-xs font-semibold" style={{ color: "var(--color-text)" }}>
                    HIPAA-Aware Marketing
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    Built for medical practices
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
