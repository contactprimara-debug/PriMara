import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { primaryCareLocations, type PrimaryCareLocation } from "@/lib/locations-primary";
import { mentalHealthLocations, type MentalHealthLocation } from "@/lib/locations-mental";

type PrimaryLoc = PrimaryCareLocation & { type: "primary-care" };
type MentalLoc = MentalHealthLocation & { type: "mental-health" };
type AnyLoc = PrimaryLoc | MentalLoc;

const allLocations: AnyLoc[] = [
  ...primaryCareLocations.map((loc) => ({ ...loc, type: "primary-care" as const })),
  ...mentalHealthLocations.map((loc) => ({ ...loc, type: "mental-health" as const })),
];

function isPrimary(loc: AnyLoc): loc is PrimaryLoc {
  return loc.type === "primary-care";
}

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

  const verticalLabel = isPrimary(loc) ? "Primary Care Marketing" : "Mental Health Marketing";
  const mainVerticalHref = isPrimary(loc) ? "/primary-care" : "/mental-health";
  const mainVerticalLabel = isPrimary(loc) ? "Primary Care Marketing" : "Mental Health Marketing";
  const mainVerticalDesc = isPrimary(loc)
    ? "How Primara works with independent primary care physicians across Florida."
    : "How Primara helps independent therapists and mental health practices across Florida.";

  const contextParagraphs = isPrimary(loc)
    ? loc.localContext.split("\n\n").filter(Boolean)
    : loc.directoryContext.split("\n\n").filter(Boolean);

  const servicesParagraphs = loc.services.split("\n\n").filter(Boolean);

  const gbpParagraphs =
    !isPrimary(loc) ? loc.gbpSection.split("\n\n").filter(Boolean) : [];

  const whyNowText = isPrimary(loc) ? loc.whyNow : loc.searchIntent;

  const sidebarLabel = isPrimary(loc)
    ? "Hospital Systems in This Market"
    : "Key Neighborhoods We Serve";

  const sidebarItems = isPrimary(loc) ? loc.hospitals : loc.neighborhoods;

  const landmarkItems = isPrimary(loc) ? loc.landmarks : loc.neighborhoods;

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
    name: `Digital Marketing for ${isPrimary(loc) ? "Primary Care Practices" : "Mental Health Practices"} in ${loc.city}`,
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

                {isPrimary(loc) && (
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

      {/* ── GBP Section (mental health only) ──────────────────────────── */}
      {!isPrimary(loc) && gbpParagraphs.length > 0 && (
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
              GBP Optimization for {loc.city} Therapists
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
                {isPrimary(loc) ? "Timing" : "Search Landscape"}
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
                {isPrimary(loc)
                  ? `Why Independent Practices in ${loc.city} Are Moving Now`
                  : `How ${loc.city} Patients Search for Therapy`}
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
