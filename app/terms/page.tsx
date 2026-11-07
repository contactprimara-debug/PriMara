import type { Metadata } from "next";
import Link from "next/link";
import LegalShell, { legalBody, legalH2, legalList } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Use | Primara",
  description: "Terms for using primara365.com, operated by Primara 365 LLC.",
  alternates: { canonical: "https://primara365.com/terms" },
  robots: { index: true, follow: true },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const sec: React.CSSProperties = { marginBottom: "2.25rem" };

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use" effective="November 7, 2026">
      <div style={sec}>
        <p style={legalBody}>
          primara365.com is operated by Primara 365 LLC (&ldquo;Primara,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;), West Palm Beach, Florida. By using this website you
          agree to these terms. If you do not agree, please do not use the site.
        </p>
      </div>
      <div style={sec}>
        <h2 style={legalH2}>1. What this site is</h2>
        <p style={legalBody}>
          This site describes our marketing services for independent medical and mental health practices and lets you request a free audit or a call.
          It is general information, not legal, medical, or financial advice.
        </p>
      </div>
      <div style={sec}>
        <h2 style={legalH2}>2. Do not send health information</h2>
        <p style={legalBody}>
          Our forms are for business inquiries only. Please do not submit patient names, medical records, or any protected health information (PHI) through this site.
        </p>
      </div>
      <div style={sec}>
        <h2 style={legalH2}>3. Services and agreements</h2>
        <p style={legalBody}>
          Nothing on this site is a binding offer. Services, scope, and fees are set only in a written agreement or order that we both accept. Results depend on
          your market, competition, and starting point, and we do not guarantee any ranking, lead count, or patient volume.
        </p>
      </div>
      <div style={sec}>
        <h2 style={legalH2}>4. Acceptable use</h2>
        <ul style={legalList}>
          <li>Do not attempt to disrupt, scrape at scale, or gain unauthorized access to the site.</li>
          <li>Do not submit false, misleading, or someone else&rsquo;s contact information.</li>
          <li>Do not use the site for anything unlawful.</li>
        </ul>
      </div>
      <div style={sec}>
        <h2 style={legalH2}>5. Our content</h2>
        <p style={legalBody}>
          The text, design, and graphics on this site belong to Primara 365 LLC or its licensors. You may view and share links to pages, but may not copy or resell the content without our written permission.
        </p>
      </div>
      <div style={sec}>
        <h2 style={legalH2}>6. Calls and text messages</h2>
        <p style={legalBody}>
          If you give us your phone number, we may call or text you about your request. See our{" "}
          <Link prefetch={false} href="/sms-terms" style={{ color: "var(--gold)" }}>SMS Terms</Link> and{" "}
          <Link prefetch={false} href="/privacy" style={{ color: "var(--gold)" }}>Privacy Policy</Link>.
        </p>
      </div>
      <div style={sec}>
        <h2 style={legalH2}>7. Disclaimers and liability</h2>
        <p style={legalBody}>
          The site is provided &ldquo;as is.&rdquo; To the extent the law allows, Primara 365 LLC is not liable for indirect or consequential losses from using the site.
          Links to other sites are for convenience; we do not control them.
        </p>
      </div>
      <div style={sec}>
        <h2 style={legalH2}>8. Changes and governing law</h2>
        <p style={legalBody}>
          We may update these terms and will change the effective date above when we do. These terms are governed by the laws of the State of Florida.
        </p>
      </div>
      <div style={sec}>
        <h2 style={legalH2}>9. Contact</h2>
        <address style={{ ...legalBody, fontStyle: "normal", lineHeight: 2 }}>
          Primara 365 LLC<br />
          West Palm Beach, FL 33401<br />
          <a href="mailto:liam.costello@primara365.com" style={{ color: "var(--gold)" }}>liam.costello@primara365.com</a><br />
          <a href="tel:+15612912681" style={{ color: "var(--gold)", whiteSpace: "nowrap" }}>+1&nbsp;(561)&nbsp;291-2681</a>
        </address>
      </div>
    </LegalShell>
  );
}
