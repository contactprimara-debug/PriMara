import { siteConfig } from "@/lib/siteConfig";

// ── Fill these in before launch ────────────────────────────────────────────
// Every value must match the Google Business Profile listing character-for-character.

const NAP = {
  // GBP business name — must be exact, no abbreviations
  businessName: "Primara",
  // Full street address
  street: "PLACEHOLDER — Add street address",
  // City, State ZIP — match GBP exactly
  cityStateZip: "West Palm Beach, FL XXXXX",
  phone: siteConfig.phoneDisplay,   // (561) 291-2681 — already matches GBP
  phoneTel: siteConfig.phone,       // +15612912681
  website: siteConfig.url,          // https://primara.com
};

// Google Maps embed URL — replace [ENCODED_ADDRESS] with the real address
// Example: "https://maps.google.com/maps?q=123+Main+St,+West+Palm+Beach,+FL+33401&output=embed"
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=West+Palm+Beach,+FL&output=embed";

// Google Maps directions URL — update with real address before launch
const DIRECTIONS_URL =
  "https://maps.google.com/?q=Primara+West+Palm+Beach+FL";

// Office hours — update before launch
const hours: { day: string; hours: string; closed?: boolean }[] = [
  { day: "Monday",    hours: "PLACEHOLDER — e.g., 9:00 AM – 5:00 PM" },
  { day: "Tuesday",   hours: "PLACEHOLDER — e.g., 9:00 AM – 5:00 PM" },
  { day: "Wednesday", hours: "PLACEHOLDER — e.g., 9:00 AM – 5:00 PM" },
  { day: "Thursday",  hours: "PLACEHOLDER — e.g., 9:00 AM – 5:00 PM" },
  { day: "Friday",    hours: "PLACEHOLDER — e.g., 9:00 AM – 5:00 PM" },
  { day: "Saturday",  hours: "Closed", closed: true },
  { day: "Sunday",    hours: "Closed", closed: true },
];
// ──────────────────────────────────────────────────────────────────────────

export default function Location() {
  return (
    <section
      aria-labelledby="location-heading"
      className="py-24 cv-auto"
      style={{ backgroundColor: "white" }}
    >
      <div className="mx-auto max-w-content px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="mb-12 text-center">
          <p
            className="mb-3 text-xs uppercase tracking-widest font-medium"
            style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}
          >
            Where to Find Us
          </p>
          <h2
            id="location-heading"
            className="font-serif font-bold text-balance"
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--color-text)",
              fontFamily: "var(--font-fraunces)",
            }}
          >
            Find Primara in West Palm Beach
          </h2>
        </div>

        {/* ── Two-column layout — mobile: info above map ── */}
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">

          {/* ── RIGHT on desktop / TOP on mobile: NAP + hours ── */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">

            {/* NAP block — character-for-character match to GBP */}
            <address
              className="not-italic flex flex-col gap-1.5 rounded-xl p-7"
              style={{
                backgroundColor: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                borderRadius: "12px",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest font-medium mb-2"
                style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
              >
                Our Location
              </p>

              {/* Business name — must match GBP exactly */}
              <strong
                className="font-serif font-bold"
                style={{ fontSize: "1.15rem", color: "var(--color-text)", fontFamily: "var(--font-fraunces)" }}
              >
                {NAP.businessName}
              </strong>

              {/* Street address */}
              <span style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
                {NAP.street}
              </span>

              {/* City, State ZIP */}
              <span style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
                {NAP.cityStateZip}
              </span>

              {/* Phone — tap-to-call */}
              <a
                href={`tel:${NAP.phoneTel}`}
                className="flex items-center gap-2 font-semibold transition-opacity hover:opacity-70"
                style={{ color: "var(--color-accent)", fontSize: "0.95rem", marginTop: "4px" }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 2h2L5.5 4.5l-1.25 1.25a7 7 0 003 3L8.5 7.5 11 8.5V11a1.25 1.25 0 01-1.25 1.25C4.25 12.25 1.75 9.75 1.75 6.75A1.25 1.25 0 012.5 2z" fill="currentColor" />
                </svg>
                {NAP.phone}
              </a>

              {/* Website */}
              <span style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
                {NAP.website}
              </span>
            </address>

            {/* Hours table */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--color-border)", borderRadius: "12px" }}
            >
              <table className="w-full" aria-label="Office hours">
                <caption className="sr-only">Primara office hours</caption>
                <tbody>
                  {hours.map((row, i) => (
                    <tr
                      key={row.day}
                      style={{
                        borderBottom: i < hours.length - 1 ? "1px solid var(--color-border)" : "none",
                      }}
                    >
                      <td
                        className="py-3 px-5 font-medium"
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--color-text)",
                          width: "40%",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {row.day}
                      </td>
                      <td
                        className="py-3 px-5 text-right"
                        style={{
                          fontSize: "0.875rem",
                          color: row.closed ? "var(--color-text-muted)" : "var(--color-text)",
                          fontStyle: row.closed ? "italic" : "normal",
                        }}
                      >
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Directions note + CTA */}
            <div className="flex flex-col gap-3">
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {/* Replace with real directions before launch */}
                Primara is located in West Palm Beach, FL.{" "}
                <span style={{ color: "var(--color-border)" }}>
                  [ADD: nearby landmark / cross street and brief directions from main road.]
                </span>
              </p>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-sm transition-opacity hover:opacity-70"
                style={{ color: "var(--color-primary)" }}
              >
                Get Directions
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 12L12 2M12 2H6M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── LEFT on desktop / BOTTOM on mobile: Map embed ── */}
          <div
            className="order-2 lg:order-1 overflow-hidden"
            style={{ borderRadius: "12px", border: "1px solid var(--color-border)" }}
          >
            {/*
              Replace MAP_EMBED_URL with the real embed URL before launch.
              Format: https://maps.google.com/maps?q=[ENCODED_ADDRESS]&output=embed
              Example: https://maps.google.com/maps?q=123+Main+St,+West+Palm+Beach,+FL+33401&output=embed
            */}
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="480"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              title="Primara location in West Palm Beach, FL"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
