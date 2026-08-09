import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HIPAA Notice | Primara",
  description: "Primara's HIPAA Notice of Privacy Practices and Business Associate information for medical practice clients.",
  alternates: { canonical: "https://primara365.com/hipaa" },
  robots: { index: true, follow: true },
  openGraph: {
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};

const EFFECTIVE_DATE = "May 29, 2026";

const sectionStyle: React.CSSProperties = {
  marginBottom: "2.5rem",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--font-display), Georgia, serif",
  fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
  color: "var(--chalk)",
  fontWeight: 400,
  marginBottom: "0.75rem",
  paddingBottom: "0.5rem",
  borderBottom: "1px solid var(--wire)",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "system-ui, sans-serif",
  fontSize: "0.95rem",
  color: "var(--ash)",
  lineHeight: 1.85,
};

const listStyle: React.CSSProperties = {
  ...bodyStyle,
  paddingLeft: "1.4rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.4rem",
};

export default function HipaaPage() {
  return (
    <main style={{ background: "var(--void)", minHeight: "100vh" }}>
      <div
        style={{
          maxWidth: "740px",
          margin: "0 auto",
          padding: "clamp(80px, 10vw, 120px) clamp(24px, 5vw, 48px) clamp(60px, 8vw, 100px)",
        }}
      >
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: "2rem" }}>
          <ol
            style={{
              display: "flex",
              gap: "8px",
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.8rem",
              color: "var(--smoke)",
            }}
          >
            <li><Link href="/" style={{ color: "var(--smoke)", textDecoration: "none" }}>Home</Link></li>
            <li aria-hidden="true">›</li>
            <li style={{ color: "var(--ash)" }}>HIPAA Notice</li>
          </ol>
        </nav>

        {/* Header */}
        <header style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              marginBottom: "16px",
            }}
          >
            Legal
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              color: "var(--chalk)",
              fontWeight: 400,
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            HIPAA Notice
          </h1>
          <p style={{ ...bodyStyle, color: "var(--smoke)" }}>
            Effective date: {EFFECTIVE_DATE}
          </p>
        </header>

        {/* Important disclaimer banner */}
        <div
          style={{
            border: "1px solid var(--wire)",
            borderLeft: "3px solid var(--gold)",
            padding: "16px 20px",
            marginBottom: "2.5rem",
            borderRadius: "2px",
          }}
        >
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.85rem",
              color: "var(--ash)",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "var(--chalk)" }}>Important:</strong> Primara is a digital
            marketing agency — not a healthcare provider, health plan, or healthcare clearinghouse.
            We are not a HIPAA Covered Entity. This notice describes our role as a potential
            Business Associate to our medical practice clients and our commitment to handling
            any protected health information responsibly.
          </p>
        </div>

        {/* 1. Who We Are */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>1. Who We Are</h2>
          <p style={bodyStyle}>
            Primara is an independent digital marketing agency based in West Palm Beach, Florida.
            We provide services including Google Business Profile optimization, local SEO, website
            design, and review generation exclusively to independent medical practices.
          </p>
          <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
            As a marketing agency that works with healthcare providers, we may qualify as a
            Business Associate under HIPAA when our services involve access to Protected Health
            Information (PHI) on behalf of a Covered Entity client.
          </p>
        </div>

        {/* 2. This Website Does Not Collect PHI */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>2. This Website Does Not Collect PHI</h2>
          <p style={bodyStyle}>
            The forms and contact channels on primara365.com are for business inquiries from
            medical practice owners and administrators — not from patients. We do not collect,
            store, or process patient medical records, diagnoses, treatment information, insurance
            data, or any other Protected Health Information through this website.
          </p>
          <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
            If you are a patient of a medical practice Primara serves, please contact your
            healthcare provider directly for any matters relating to your medical records or
            health information.
          </p>
        </div>

        {/* 3. Business Associate Obligations */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>3. Business Associate Obligations</h2>
          <p style={{ ...bodyStyle, marginBottom: "0.75rem" }}>
            When Primara's services require access to PHI on behalf of a medical practice client,
            we fulfill our obligations as a Business Associate, including:
          </p>
          <ul style={listStyle}>
            <li>
              Entering into a{" "}
              <strong style={{ color: "var(--chalk)" }}>Business Associate Agreement (BAA)</strong>{" "}
              with the Covered Entity before any PHI is accessed or used.
            </li>
            <li>
              Using and disclosing PHI only as permitted by the BAA and applicable law.
            </li>
            <li>
              Implementing appropriate administrative, physical, and technical safeguards to
              protect PHI from unauthorized use or disclosure.
            </li>
            <li>
              Reporting any known breach or suspected breach of unsecured PHI to the Covered
              Entity without unreasonable delay.
            </li>
            <li>
              Ensuring any subcontractors who may access PHI agree to the same restrictions
              and conditions.
            </li>
            <li>
              Making PHI available for access, amendment, and accounting of disclosures as
              required by HIPAA.
            </li>
            <li>
              Returning or destroying PHI upon termination of the service agreement, where
              feasible.
            </li>
          </ul>
        </div>

        {/* 4. Minimum Necessary Standard */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>4. Minimum Necessary Standard</h2>
          <p style={bodyStyle}>
            Primara adheres to the HIPAA minimum necessary standard. We access, use, and disclose
            only the minimum amount of PHI necessary to accomplish the permitted purpose. Our
            marketing services are generally designed to not require access to individual patient
            health records.
          </p>
        </div>

        {/* 5. Security Safeguards */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>5. Security Safeguards</h2>
          <p style={{ ...bodyStyle, marginBottom: "0.75rem" }}>
            To the extent our work involves PHI, we implement reasonable safeguards including:
          </p>
          <ul style={listStyle}>
            <li>Encrypted communications for any PHI transmitted electronically.</li>
            <li>Access controls limiting PHI to only those team members who need it.</li>
            <li>Secure handling and disposal of any physical materials containing PHI.</li>
            <li>Staff awareness of HIPAA obligations and confidentiality requirements.</li>
          </ul>
        </div>

        {/* 6. Our Marketing Services and HIPAA */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>6. Our Marketing Services and HIPAA</h2>
          <p style={bodyStyle}>
            Primara's marketing services — such as managing a practice's Google Business Profile,
            responding to public reviews, creating website content, and running local SEO —
            typically do not require access to individual patient records. Where client-specific
            work does involve patient data (for example, managing a HIPAA-compliant patient
            review solicitation program), we operate under a fully executed BAA with that client.
          </p>
          <p style={{ ...bodyStyle, marginTop: "0.75rem" }}>
            Primara does not use patient health information for marketing purposes without
            a valid patient authorization as required by HIPAA.
          </p>
        </div>

        {/* 7. Requesting a BAA */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>7. Requesting a Business Associate Agreement</h2>
          <p style={bodyStyle}>
            If you are a medical practice engaging Primara for services that may involve PHI,
            please request a Business Associate Agreement before our engagement begins. We are
            prepared to execute a BAA and can provide our standard agreement upon request.
          </p>
        </div>

        {/* 8. Changes */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>8. Updates to This Notice</h2>
          <p style={bodyStyle}>
            We may update this HIPAA Notice as our services or applicable law changes. The
            effective date at the top of this page will reflect the most recent revision.
          </p>
        </div>

        {/* 9. Contact */}
        <div style={sectionStyle}>
          <h2 style={headingStyle}>9. Contact Us</h2>
          <p style={bodyStyle}>
            For HIPAA-related questions, to request a Business Associate Agreement, or to
            report a concern, please contact us:
          </p>
          <address
            style={{
              fontStyle: "normal",
              marginTop: "1rem",
              fontFamily: "system-ui, sans-serif",
              fontSize: "0.95rem",
              color: "var(--ash)",
              lineHeight: 2,
            }}
          >
            Primara — HIPAA Contact<br />
            West Palm Beach, FL 33401<br />
            <a href="mailto:liam.costello@primara365.com" style={{ color: "var(--gold)" }}>
              liam.costello@primara365.com
            </a>
            <br />
            <a href="tel:+15612912681" style={{ color: "var(--gold)" }}>
              +1 (561) 291-2681
            </a>
          </address>
          <p style={{ ...bodyStyle, marginTop: "1rem" }}>
            <em style={{ color: "var(--smoke)", fontSize: "0.85rem" }}>
              This notice does not constitute legal advice. Medical practices should consult
              qualified HIPAA legal counsel for compliance guidance specific to their situation.
            </em>
          </p>
        </div>

        {/* Back link */}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--wire)" }}>
          <Link
            href="/"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--smoke)",
              textDecoration: "none",
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
