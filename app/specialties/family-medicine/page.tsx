import type { Metadata } from "next";
import Link from "next/link";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Digital Marketing for Family Medicine Practices | Primara",
  description:
    "Primara helps independent family medicine practices rank higher on Google Maps, build reviews, and fill their schedule. GBP optimization, local SEO, and website design for family physicians. Call (561) 291-2681.",
  alternates: { canonical: "https://primara365.com/specialties/family-medicine" },
  robots: { index: true, follow: true },
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const challenges = [
  {
    title: "Competing with urgent care chains",
    body: "CVS MinuteClinic, Concentra, and hospital-affiliated practices spend millions on local SEO. An independent family physician practicing honest, continuous care needs a sharp digital presence to stay visible.",
  },
  {
    title: "Insurance directories overshadow Google",
    body: "Many patients start their search inside their insurer's portal — but plenty still turn to Google first. If your Maps listing is incomplete or your website is slow, those patients never find you.",
  },
  {
    title: "Broad scope creates scattered SEO",
    body: "Family medicine covers everything from pediatric well visits to chronic disease management. Without a clear keyword strategy, your site tries to rank for everything and wins nothing.",
  },
  {
    title: "Physician shortages create real opportunity",
    body: "In parts of Southwest Florida and the Space Coast, documented physician shortages mean patients have been searching for months. A practice that ranks locally captures patients who are actively looking and ready to book.",
  },
];

const services = [
  "Google Business Profile optimization — categories, 30+ services in patient-search language, 52 posts scheduled at onboarding",
  "Local SEO content targeting 'family doctor [city],' 'primary care physician [city],' and 'family practice accepting new patients'",
  "Review generation system to outpace urgent care chains on Google rating and volume",
  "Website rebuild structured around the 30 local search terms that drive new patient bookings",
  "Competitor gap analysis — we show you exactly what the top-ranked family practice in your area is doing",
  "Monthly reporting with Maps rank tracking on your primary keyword + city",
];

const faqs = [
  { q: "How long does it take to see results for a family medicine practice?", a: "Most family medicine practices see Google Business Profile improvements — more calls, more direction requests — within 60–90 days. Organic ranking for competitive terms like ‘family doctor [city]’ typically takes 4–6 months, faster in smaller Florida markets with less established competition from hospital systems." },
  { q: "Do you write separate pages for pediatric well visits and chronic care?", a: "Yes. Family medicine covers the widest scope of any specialty we work with, and a single page trying to rank for everything usually ranks for nothing. We build dedicated pages for the specific services and age groups your practice actually sees, mapped to how patients search for each." },
  { q: "How do you compete with urgent care chains on Google?", a: "Urgent care chains outspend independent practices on ads, but they can’t match a documented, continuous-care Google Business Profile with real patient reviews and a fully built-out service list. We close that gap by optimizing your GBP completely and building review volume that chains can’t easily replicate locally." },
  { q: "My patients search their insurance portal first — does SEO still matter?", a: "Yes. Even patients who start in an insurance portal cross-check Google before booking, especially to see reviews and confirm the practice is active. An incomplete or outdated Google listing loses that patient at the exact moment they were ready to choose you." },
  { q: "Do you work with practices in physician-shortage areas?", a: "Yes, and it’s often where the fastest results happen. Documented shortages in parts of Southwest Florida and the Space Coast mean patients have already been searching for months with few options. A practice that ranks locally in a shortage area captures demand that’s already there, not demand we have to create." },
];


export default function FamilyMedicinePage() {
  return (
    <main style={{ background: "var(--void)", minHeight: "100vh" }} className="pt-16">

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-content px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link href="/specialties" className="hover:underline">Specialties</Link></li>
          <li aria-hidden="true">›</li>
          <li style={{ color: "var(--color-text)" }}>Family Medicine</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-content px-6 lg:px-8 pt-12 pb-16">
        <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <span style={{ display: "block", width: "32px", height: "1px", background: "var(--gold)", flexShrink: 0 }} />
          Family Medicine · Florida
        </div>
        <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "var(--chalk)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: "24px", maxWidth: "820px" }}>
          Digital Marketing for Family Medicine Practices
        </h1>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.0625rem", color: "var(--ash)", lineHeight: 1.8, maxWidth: "660px", marginBottom: "32px" }}>
          Family physicians deliver the broadest, most continuous care in medicine — and they compete online
          against urgent care chains, hospital networks, and insurance directories with unlimited marketing budgets.
          Primara helps independent family medicine practices build the local digital presence that fills
          schedules without paid advertising.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a href="tel:+15612912681" style={{ display: "inline-flex", alignItems: "center", background: "var(--ember)", color: "#fff", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>
            Call (561) 291-2681
          </a>
          <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", border: "1px solid var(--wire)", color: "var(--chalk)", fontFamily: "system-ui, sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>
            Get a Free Practice Audit
          </Link>
        </div>
      </section>

      {/* Challenges */}
      <section aria-labelledby="challenges-heading" style={{ borderTop: "1px solid var(--wire)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 id="challenges-heading" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "48px" }}>
            Why family medicine practices struggle online
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "clamp(24px, 3vw, 40px)" }}>
            {challenges.map(({ title, body }) => (
              <div key={title} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ width: "24px", height: "2px", background: "var(--ember)" }} />
                <h3 style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "0.9375rem", color: "var(--chalk)", margin: 0 }}>{title}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section aria-labelledby="services-heading" style={{ borderTop: "1px solid var(--wire)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 id="services-heading" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "12px" }}>
            What Primara does for family medicine practices
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "640px", marginBottom: "40px" }}>
            Every engagement starts with a free audit using your real numbers and your named local competitor.
            From there, we build a strategy around the specific gaps we find — not a generic checklist.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
            {services.map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "3px" }}>
                  <path d="M4 10l4 4 8-8" stroke="var(--color-success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "40px", padding: "24px 28px", background: "var(--surface-2)", borderLeft: "3px solid var(--gold)" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "var(--ash)", lineHeight: 1.75, margin: 0 }}>
              <strong style={{ color: "var(--chalk)" }}>Primara works exclusively with independent primary care practices.</strong>{" "}
              No hospital systems. No urgent care chains. If you&rsquo;re a physician-owned family medicine
              practice, we should talk.
            </p>
          </div>
        </div>
      </section>

      {/* How patients choose (added 2026-10-09 page factory: strengthens a 692-word page) */}
      <section aria-labelledby="choose-heading" style={{ borderTop: "1px solid var(--wire)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 id="choose-heading" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "20px" }}>
            How patients choose a family doctor online
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "720px", marginBottom: "16px" }}>
            A patient looking for a new family doctor usually checks a few things in a fixed order: whether the practice is
            taking new patients, whether it accepts their insurance, how far away it is, and what other patients say. Each of
            those answers lives somewhere you control, which is why we start with the basics in our guides to{" "}
            <Link href="/guides/how-to-keep-accepting-new-patients-status-accurate-across-google-your-website-and-directories" style={{ color: "var(--gold)", textDecoration: "underline" }}>keeping your accepting new patients status accurate</Link>{" "}
            and <Link href="/guides/how-to-build-an-accepted-insurance-page-for-a-medical-practice" style={{ color: "var(--gold)", textDecoration: "underline" }}>building an accepted insurance page</Link>.
          </p>
          <h3 style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--chalk)", margin: "24px 0 12px" }}>What we check first on a family medicine practice</h3>
          <ul style={{ listStyle: "disc", paddingLeft: "22px", margin: 0, maxWidth: "720px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.7 }}>Whether the Google profile uses a primary care category, lists every service you offer and shows accurate hours; see{" "}<Link href="/guides/how-to-get-more-patients-from-google-business-profile" style={{ color: "var(--gold)", textDecoration: "underline" }}>how to get more patients from your Google Business Profile</Link>.</li>
            <li style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.7 }}>Whether each physician has a real bio page with training and a photo, as described in our guide to{" "}<Link href="/guides/how-to-write-a-doctor-bio-page-that-ranks" style={{ color: "var(--gold)", textDecoration: "underline" }}>writing a doctor bio page that ranks</Link>.</li>
            <li style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.7 }}>Whether phone calls and form requests are counted separately, so you can see which source sends real patients; start with{" "}<Link href="/guides/tracking-phone-calls-from-a-medical-website" style={{ color: "var(--gold)", textDecoration: "underline" }}>tracking phone calls from a medical website</Link>.</li>
            <li style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.7 }}>Whether reviews are requested from every patient in a compliant way and answered without sharing any health detail; see{" "}<Link href="/guides/getting-more-patient-reviews-without-review-gating" style={{ color: "var(--gold)", textDecoration: "underline" }}>getting more patient reviews without review gating</Link>.</li>
          </ul>
          <h3 style={{ fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--chalk)", margin: "24px 0 12px" }}>Same-day access and honest wording</h3>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "720px", margin: 0 }}>
            Many family practices keep a few appointments open each day for sick visits. If yours does, say so plainly and do not
            present the practice as urgent care; our guide to{" "}
            <Link href="/guides/getting-found-for-same-day-and-walk-in-visits-as-a-primary-care-practice" style={{ color: "var(--gold)", textDecoration: "underline" }}>getting found for same-day and walk-in visits</Link>{" "}
            shows how to word it. We do not promise rankings or patient counts, because results depend on your market, your
            reviews and how quickly your front desk answers. Our <Link href="/primary-care" style={{ color: "var(--gold)", textDecoration: "underline" }}>primary care marketing page</Link>{" "}
            explains the full approach.
          </p>
        </div>
      </section>

      <FaqSection faqs={faqs} />

      {/* Related links (contextual internal linking) */}
      <RelatedLinks
        eyebrow="Related"
        heading="Related Specialties & Resources"
        items={[
          { href: "/specialties/internal-medicine", label: "Internal Medicine", description: "Marketing built around adult chronic-disease management and long-term patient relationships." },
          { href: "/specialties/direct-primary-care", label: "Direct Primary Care", description: "The membership-model playbook — different economics, different marketing." },
          { href: "/blog/gbp-categories-for-primary-care-doctors", label: "GBP Categories for Primary Care Doctors", description: "The exact GBP categories that get primary care practices found for the right searches." },
        ]}
      />
      <section style={{ borderTop: "1px solid var(--wire)", background: "var(--surface)" }}>
        <div className="mx-auto max-w-content px-6 lg:px-8 py-16">
          <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "16px" }}>
            Ready to see where your practice stands?
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, maxWidth: "560px", marginBottom: "32px" }}>
            We&rsquo;ll research your family medicine practice, compare you to your top local competitor, and
            deliver a free custom audit within 3–5 business days. No obligation.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/the-audit" style={{ display: "inline-flex", alignItems: "center", background: "var(--ember)", color: "#fff", fontFamily: "system-ui, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>
              Request Free Audit
            </Link>
            <Link href="/services" style={{ display: "inline-flex", alignItems: "center", border: "1px solid var(--wire)", color: "var(--chalk)", fontFamily: "system-ui, sans-serif", fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "3px", textDecoration: "none" }}>
              See All Services
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
