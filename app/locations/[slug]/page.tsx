import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { primaryCareLocations, type PrimaryCareLocation } from "@/lib/locations-primary";
import { mentalHealthLocations, type MentalHealthLocation } from "@/lib/locations-mental";
import { mensHealthLocations, type MensHealthLocation } from "@/lib/locations-mens-health";
import { medspaLocations, type MedspaLocation } from "@/lib/locations-medspas";
import { dentalLocations, type DentalLocation } from "@/lib/locations-dental";
import { regionFor } from "@/lib/locations-regions";

type PrimaryLoc = PrimaryCareLocation & { type: "primary-care" };
type MentalLoc = MentalHealthLocation & { type: "mental-health" };
type MensLoc = MensHealthLocation & { type: "mens-health" };
type MedspaLoc = MedspaLocation & { type: "medspas" };
type DentalLoc = DentalLocation & { type: "dental" };
type AnyLoc = PrimaryLoc | MentalLoc | MensLoc | MedspaLoc | DentalLoc;
type LocType = AnyLoc["type"];

const allLocations: AnyLoc[] = [
  ...primaryCareLocations.map((loc) => ({ ...loc, type: "primary-care" as const })),
  ...mentalHealthLocations.map((loc) => ({ ...loc, type: "mental-health" as const })),
  ...mensHealthLocations.map((loc) => ({ ...loc, type: "mens-health" as const })),
  ...medspaLocations.map((loc) => ({ ...loc, type: "medspas" as const })),
  ...dentalLocations.map((loc) => ({ ...loc, type: "dental" as const })),
];

function isPrimary(loc: AnyLoc): loc is PrimaryLoc {
  return loc.type === "primary-care";
}

function isMensHealth(loc: AnyLoc): loc is MensLoc {
  return loc.type === "mens-health";
}

// Two distinct data shapes live behind AnyLoc, and every field access below
// has to branch on the shape, not on the vertical:
//   • "directory-style" (mental health, men's health) — directoryContext,
//     gbpSection, searchIntent, neighborhoods.
//   • "market-style" (primary care, medspas, dental) — localContext, whyNow,
//     landmarks, plus hospitals (primary care) or competitors (medspas/dental).
function isDirectoryStyle(loc: AnyLoc): loc is MentalLoc | MensLoc {
  return loc.type === "mental-health" || loc.type === "mens-health";
}

// Per-vertical copy. Typed as a Record over every member of the union so that
// adding a sixth vertical without filling this in is a compile error rather
// than wrong copy silently shipping to live city pages.
const VERTICAL_COPY: Record<
  LocType,
  {
    label: string;
    href: string;
    desc: string;
    schemaAudience: string;
    sidebarLabel: string;
    whyNowEyebrow: string;
    whyNowHeading: (city: string) => string;
  }
> = {
  "primary-care": {
    label: "Primary Care Marketing",
    href: "/primary-care",
    desc: "How Primara works with independent primary care physicians nationwide.",
    schemaAudience: "Primary Care Practices",
    sidebarLabel: "Hospital Systems in This Market",
    whyNowEyebrow: "Timing",
    whyNowHeading: (city) => `Why Independent Practices in ${city} Are Moving Now`,
  },
  "mental-health": {
    label: "Mental Health Marketing",
    href: "/mental-health",
    desc: "How Primara helps independent therapists and mental health practices nationwide.",
    schemaAudience: "Mental Health Practices",
    sidebarLabel: "Key Neighborhoods We Serve",
    whyNowEyebrow: "Search Landscape",
    whyNowHeading: (city) => `How ${city} Patients Search for Therapy`,
  },
  "mens-health": {
    label: "Men's Health Marketing",
    href: "/mens-health",
    desc: "How Primara works with independent men's health practices nationwide.",
    schemaAudience: "Men's Health Practices",
    sidebarLabel: "Key Neighborhoods We Serve",
    whyNowEyebrow: "Search Landscape",
    whyNowHeading: (city) => `How ${city} Patients Search for Men's Health Care`,
  },
  medspas: {
    label: "Medspa Marketing",
    href: "/medspas",
    desc: "How Primara works with independent, physician- and nurse-led medspas nationwide.",
    schemaAudience: "Medical Spas",
    sidebarLabel: "Who You Are Competing With",
    whyNowEyebrow: "Timing",
    whyNowHeading: (city) => `Why Independent Medspas in ${city} Are Moving Now`,
  },
  dental: {
    label: "Dental Marketing",
    href: "/dental-practices",
    desc: "How Primara works with independent dental practices nationwide.",
    schemaAudience: "Dental Practices",
    sidebarLabel: "Who You Are Competing With",
    whyNowEyebrow: "Timing",
    whyNowHeading: (city) => `Why Independent Dental Practices in ${city} Are Moving Now`,
  },
};

export function generateStaticParams() {
  return allLocations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const loc = allLocations.find((l) => l.slug === params.slug);
  if (!loc) return {};
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `https://primara365.com/locations/${loc.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      type: "website",
      url: `https://primara365.com/locations/${loc.slug}`,
      images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
  };
}

export default function LocationPage({
  params,
}: {
  params: { slug: string };
}) {
  const loc = allLocations.find((l) => l.slug === params.slug);
  if (!loc) notFound();

  // Nearby locations — same vertical, same region first (sorted by real
  // geographic proximity within that region), other regions only as a
  // fallback if a region doesn't have enough same-vertical cities yet.
  const currentRegion = regionFor(loc.city);
  const currentRegionIndex = currentRegion ? currentRegion.cities.indexOf(loc.city) : -1;
  const nearbyLocations = allLocations
    .filter((l) => l.type === loc.type && l.slug !== loc.slug)
    .map((l) => {
      const sameRegion = !!currentRegion && currentRegion.cities.includes(l.city);
      const distance = sameRegion ? Math.abs(currentRegion!.cities.indexOf(l.city) - currentRegionIndex) : Infinity;
      return { loc: l, sameRegion, distance };
    })
    .sort((a, b) => (a.sameRegion === b.sameRegion ? a.distance - b.distance : a.sameRegion ? -1 : 1))
    .slice(0, 3)
    .map((x) => x.loc);

  const copy = VERTICAL_COPY[loc.type];
  const verticalLabel = copy.label;
  const mainVerticalHref = copy.href;
  const mainVerticalLabel = copy.label;
  const mainVerticalDesc = copy.desc;

  const contextParagraphs = isDirectoryStyle(loc)
    ? loc.directoryContext.split("\n\n").filter(Boolean)
    : loc.localContext.split("\n\n").filter(Boolean);

  const servicesParagraphs = loc.services.split("\n\n").filter(Boolean);

  // Only the directory-style verticals ship a dedicated GBP section; the
  // market-style ones fold GBP into `services`, so this stays empty for them
  // and the section below does not render.
  const gbpParagraphs = isDirectoryStyle(loc)
    ? loc.gbpSection.split("\n\n").filter(Boolean)
    : [];

  const whyNowText = isDirectoryStyle(loc) ? loc.searchIntent : loc.whyNow;

  const sidebarLabel = copy.sidebarLabel;

  const sidebarItems = isDirectoryStyle(loc)
    ? loc.neighborhoods
    : isPrimary(loc)
    ? loc.hospitals
    : loc.competitors;

  // Market-style verticals carry a separate landmark list; directory-style
  // ones reuse neighborhoods (and suppress the duplicate block below).
  const landmarkItems = isDirectoryStyle(loc) ? loc.neighborhoods : loc.landmarks;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "Primara",
    url: "https://primara365.com",
    telephone: "+15612912681",
    areaServed: {
      "@type": "City",
      name: loc.city,
      containedInPlace: { "@type": "State", name: "Florida" },
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Digital Marketing for ${copy.schemaAudience} in ${loc.city}`,
    provider: { "@type": "LocalBusiness", name: "Primara" },
    areaServed: { "@type": "City", name: loc.city },
    serviceType: "Healthcare Digital Marketing",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://primara365.com" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://primara365.com/locations" },
      {
        "@type": "ListItem",
        position: 3,
        name: `${loc.city} — ${verticalLabel}`,
        item: `https://primara365.com/locations/${loc.slug}`,
      },
    ],
  };

  return (
    <main className="pt-16" style={{ backgroundColor: "var(--void)" }}>
      {/* ── JSON-LD schemas ───────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Breadcrumb ────────────────────────────────────────────────── */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-content px-6 lg:px-8 py-4"
      >
        <ol
          className="flex items-center gap-2 flex-wrap"
          style={{
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
          }}
        >
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link href="/locations" className="hover:underline">
              Locations
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li aria-current="page" style={{ color: "var(--color-text)" }}>
            {loc.city} — {verticalLabel}
          </li>
        </ol>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        style={{
          borderBottom: "1px solid var(--wire)",
          padding: "clamp(48px, 8vw, 96px) 0 clamp(40px, 6vw, 72px)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1.25rem",
            }}
          >
            {loc.city}, {loc.state} — {verticalLabel}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "var(--chalk)",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              maxWidth: "820px",
            }}
          >
            {loc.h1}
          </h1>
          <p
            style={{
              color: "var(--ash)",
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              maxWidth: "680px",
            }}
          >
            {loc.intro}
          </p>
        </div>
      </section>

      {/* ── Market Context ────────────────────────────────────────────── */}
      <section
        style={{
          padding: "clamp(48px, 8vw, 96px) 0",
          borderBottom: "1px solid var(--wire)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
            className="lg:grid-cols-[2fr_1fr]"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                }}
              >
                Market Context
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  fontWeight: 700,
                  color: "var(--chalk)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                The Competitive Landscape in {loc.city}
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {contextParagraphs.map((para, i) => (
                  <p
                    key={i}
                    style={{
                      color: "var(--ash)",
                      fontSize: "1rem",
                      lineHeight: 1.75,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div
                style={{
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--wire)",
                  borderRadius: "8px",
                  padding: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--smoke)",
                    marginBottom: "1rem",
                  }}
                >
                  {sidebarLabel}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {sidebarItems.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                        color: "var(--ash)",
                        fontSize: "0.9rem",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          color: "var(--ember)",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {!isDirectoryStyle(loc) && (
                  <div
                    style={{
                      marginTop: "1.5rem",
                      paddingTop: "1.25rem",
                      borderTop: "1px solid var(--wire)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--smoke)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      Notable Areas We Serve
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {landmarkItems.map((landmark) => (
                        <span
                          key={landmark}
                          style={{
                            backgroundColor: "var(--surface)",
                            border: "1px solid var(--wire)",
                            borderRadius: "4px",
                            padding: "0.25rem 0.625rem",
                            fontSize: "0.78rem",
                            color: "var(--ash)",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── GBP Section (directory-style verticals only) ──────────────── */}
      {isDirectoryStyle(loc) && gbpParagraphs.length > 0 && (
        <section
          style={{
            padding: "clamp(48px, 8vw, 96px) 0",
            borderBottom: "1px solid var(--wire)",
            backgroundColor: "var(--surface)",
          }}
        >
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}
            >
              Google Business Profile
            </p>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 700,
                color: "var(--chalk)",
                marginBottom: "1.5rem",
                lineHeight: 1.2,
                maxWidth: "700px",
              }}
            >
              GBP Optimization for {loc.city} {isMensHealth(loc) ? "Men's Health Practices" : "Therapists"}
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                maxWidth: "760px",
              }}
            >
              {gbpParagraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: "var(--ash)",
                    fontSize: "1rem",
                    lineHeight: 1.75,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── How We Help ───────────────────────────────────────────────── */}
      <section
        style={{
          padding: "clamp(48px, 8vw, 96px) 0",
          borderBottom: "1px solid var(--wire)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "1rem",
            }}
          >
            Our Approach
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              color: "var(--chalk)",
              marginBottom: "1.5rem",
              lineHeight: 1.2,
              maxWidth: "700px",
            }}
          >
            How We Help {loc.city} Practices Grow
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              maxWidth: "760px",
            }}
          >
            {servicesParagraphs.map((para, i) => (
              <p
                key={i}
                style={{
                  color: "var(--ash)",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Service links */}
          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            {[
              { href: "/services/google-business-profile", label: "GBP Optimization →" },
              { href: "/services/local-seo-for-medical-practices", label: "Local SEO →" },
              { href: "/services/medical-practice-website-design", label: "Website Design →" },
              { href: "/services/online-reputation-management", label: "Review Management →" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--wire)",
                  borderRadius: "6px",
                  padding: "0.625rem 1.125rem",
                  fontSize: "0.875rem",
                  color: "var(--ash)",
                  textDecoration: "none",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Act Now / Search Intent ───────────────────────────────── */}
      <section
        style={{
          padding: "clamp(48px, 8vw, 96px) 0",
          borderBottom: "1px solid var(--wire)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <div
            style={{
              display: "grid",
              gap: "2rem",
            }}
            className="lg:grid-cols-[1fr_2fr]"
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--ember)",
                  marginBottom: "0.75rem",
                }}
              >
                {copy.whyNowEyebrow}
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                  fontWeight: 700,
                  color: "var(--chalk)",
                  lineHeight: 1.2,
                }}
              >
                {copy.whyNowHeading(loc.city)}
              </h2>
            </div>
            <div>
              <p
                style={{
                  color: "var(--ash)",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                }}
              >
                {whyNowText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────────────────── */}
      <section
        style={{
          padding: "clamp(40px, 6vw, 72px) 0",
          borderBottom: "1px solid var(--wire)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "1.5rem",
            }}
          >
            Learn More
          </p>
          <div
            style={{
              display: "grid",
              gap: "1rem",
            }}
            className="sm:grid-cols-3"
          >
            <Link
              href={mainVerticalHref}
              style={{
                display: "block",
                backgroundColor: "var(--surface-2)",
                border: "1px solid var(--wire)",
                borderRadius: "8px",
                padding: "1.25rem 1.5rem",
                textDecoration: "none",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "0.5rem",
                }}
              >
                Who We Serve
              </p>
              <p
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  color: "var(--chalk)",
                  lineHeight: 1.3,
                }}
              >
                {mainVerticalLabel} →
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--ash)",
                  marginTop: "0.5rem",
                  lineHeight: 1.5,
                }}
              >
                {mainVerticalDesc}
              </p>
            </Link>

            <Link
              href="/services"
              style={{
                display: "block",
                backgroundColor: "var(--surface-2)",
                border: "1px solid var(--wire)",
                borderRadius: "8px",
                padding: "1.25rem 1.5rem",
                textDecoration: "none",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "0.5rem",
                }}
              >
                What We Do
              </p>
              <p
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  color: "var(--chalk)",
                  lineHeight: 1.3,
                }}
              >
                All Services →
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--ash)",
                  marginTop: "0.5rem",
                  lineHeight: 1.5,
                }}
              >
                GBP optimization, local SEO, website design, review management, and patient acquisition ads.
              </p>
            </Link>

            <Link
              href="/services/google-business-profile"
              style={{
                display: "block",
                backgroundColor: "var(--surface-2)",
                border: "1px solid var(--wire)",
                borderRadius: "8px",
                padding: "1.25rem 1.5rem",
                textDecoration: "none",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "0.5rem",
                }}
              >
                Highest Leverage
              </p>
              <p
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  color: "var(--chalk)",
                  lineHeight: 1.3,
                }}
              >
                GBP Optimization →
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--ash)",
                  marginTop: "0.5rem",
                  lineHeight: 1.5,
                }}
              >
                How a fully optimized Google Business Profile becomes your practice&apos;s best referral source.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Nearby Locations ──────────────────────────────────────────── */}
      {nearbyLocations.length > 0 && (
        <section
          style={{
            padding: "clamp(40px, 6vw, 72px) 0",
            borderBottom: "1px solid var(--wire)",
            backgroundColor: "var(--surface)",
          }}
        >
          <div className="mx-auto max-w-content px-6 lg:px-8">
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--smoke)",
                marginBottom: "1.5rem",
              }}
            >
              Nearby Locations — {verticalLabel}
            </p>
            <div
              style={{
                display: "grid",
                gap: "1rem",
              }}
              className="sm:grid-cols-3"
            >
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}`}
                  style={{
                    display: "block",
                    backgroundColor: "var(--void)",
                    border: "1px solid var(--wire)",
                    borderRadius: "8px",
                    padding: "1.25rem 1.5rem",
                    textDecoration: "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      fontSize: "1.0625rem",
                      fontWeight: 600,
                      color: "var(--chalk)",
                      lineHeight: 1.3,
                    }}
                  >
                    {nearby.city}, {nearby.state} →
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--ash)",
                      marginTop: "0.5rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {verticalLabel} for independent practices in {nearby.city}.
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--color-primary)",
          borderTop: "3px solid var(--ember)",
        }}
      >
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16 text-center">
          <h2
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "var(--chalk)",
              fontWeight: 700,
              marginBottom: "1.5rem",
            }}
          >
            Ready to Grow Your {loc.city} Practice?
          </h2>
          <p
            style={{
              color: "var(--ash)",
              marginBottom: "2rem",
              fontSize: "1.0625rem",
            }}
          >
            Get a free audit of your online presence — delivered in 3–5 business days.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "var(--ember)",
                color: "#fff",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Call (561) 291-2681
            </a>
            <Link
              href="/the-audit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "2px solid #fff",
                color: "#fff",
                fontWeight: 700,
                padding: "0 1.5rem",
                height: "52px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "1rem",
              }}
            >
              Get My Free Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
