'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ResultData {
  name: string;
  score: number;
  tier: string;
  recommendedPackage: "Foundation" | "Visibility";
  gbpScore: number;
  reviewsScore: number;
  websiteScore: number;
  adsScore: number;
  outcome: string;
  obstacle: string;
  solution: string;
  yesCount: number;
}

const tierConfig = {
  Critical: {
    color: "#E8611A",
    label: "Critical Gaps Found",
    intro: "Your practice has significant digital visibility gaps that are actively costing you new patients right now. Most people searching for your specialty in your area are landing on a competitor instead.",
    insights: [
      "Your Google Business Profile likely has incomplete or missing information that prevents Google from ranking you in local searches.",
      "Your review count and rating are almost certainly below the practices your patients are choosing instead — and patients make decisions based on this within 30 seconds.",
      "Your website may not be indexing correctly for local search, meaning patients who don't already know your name will never find you organically.",
    ],
    urgency: "high",
    nextStep: "Book a Free 30-Minute Audit Call",
    nextStepBody: "Liam or Gio will walk you through exactly what's wrong and what to fix first. No pitch — just a clear, honest picture of your digital presence.",
  },
  Building: {
    color: "#C9A84C",
    label: "Room to Grow",
    intro: "Your practice has some digital foundations in place, but there are meaningful gaps that are costing you new patients every week. The good news: you're not starting from zero, and the highest-impact fixes are clear.",
    insights: [
      "You likely have some presence on Google Maps but are being outranked by competitors who have invested more consistently in GBP and local SEO.",
      "Your reviews may be solid but below the volume or rating of the top-ranked practice in your market — and that gap directly affects how often patients choose you.",
      "There are almost certainly specific service pages or directory listings missing that would meaningfully improve your search visibility.",
    ],
    urgency: "medium",
    nextStep: "Get Your Free Custom Practice Audit",
    nextStepBody: "We'll build a detailed audit using your real numbers and your named local competitor — delivered in 3–5 business days. You'll see exactly where the gaps are.",
  },
  Growing: {
    color: "#7AB8A0",
    label: "Strong Foundations",
    intro: "Your practice has stronger digital foundations than most independent practices in Florida. You've done the right things. The opportunity now is closing the gap between 'present' and 'dominant' in your local market.",
    insights: [
      "The practices ranking above you in Google Maps likely have more review volume, more consistent posting frequency, or more granular service listings — all fixable with a structured strategy.",
      "Your website may have good basics but could be missing the local SEO content architecture (dedicated service + location pages) that drives sustained organic traffic.",
      "A consistent monthly SEO content strategy would compound your existing authority and make your rankings more defensible against new competitors.",
    ],
    urgency: "low",
    nextStep: "Get Your Free Practice Audit",
    nextStepBody: "We'll show you exactly what separates your practice from the top-ranked option in your market, and what the fastest available win is from here.",
  },
  Optimized: {
    color: "#3DAA6E",
    label: "Well Optimized",
    intro: "Your practice has a strong digital presence. You're doing things that most independent primary care practices in Florida never do. The focus now is on maintaining your lead and expanding into new search opportunities before competitors catch up.",
    insights: [
      "At this level, the highest-value opportunity is typically geographic expansion — targeting surrounding zip codes and city terms your practice could rank for with a structured content strategy.",
      "Your review operation is likely running, but a formalized system ensures consistency and compounds your rating advantage over time — especially when competitors start investing.",
      "A monthly Local Falcon rank map analysis would identify any keyword drift or new competitors gaining ground in your market before they become a threat.",
    ],
    urgency: "refinement",
    nextStep: "Get Your Free Audit to Find the Next Win",
    nextStepBody: "Even strong practices have untapped opportunities. We'll show you exactly where your next growth lever is — free, no obligation.",
  },
};

const packageConfig = {
  Foundation: {
    name: "Foundation Package",
    tagline: "The fastest way to make your practice visible to patients searching locally.",
    includes: [
      "Full Google Business Profile buildout and optimization",
      "Local SEO — 50+ directory submissions and NAP consistency",
      "Review generation system — NFC cards and QR signs",
      "Monthly rank tracking and plain-English reporting",
    ],
    url: "/packages/foundation",
  },
  Visibility: {
    name: "Visibility Package",
    tagline: "Full-coverage digital presence — from Maps to your website to paid patient acquisition.",
    includes: [
      "Everything in Foundation",
      "30-page website rebuild with Core SEO architecture",
      "Google Ads campaign setup and management",
      "Monthly SEO content — two new pages per month",
    ],
    url: "/packages/visibility",
  },
};

export default function ResultsPage() {
  const [data, setData] = useState<ResultData | null>(null);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("assessmentResult");
    if (!stored) {
      window.location.href = "/assessment";
      return;
    }
    const parsed = JSON.parse(stored) as ResultData;
    setData(parsed);

    // Animate score count-up
    setTimeout(() => {
      setRevealed(true);
      const duration = 1800;
      const start = performance.now();
      const target = parsed.score;

      function step(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setAnimatedScore(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, 400);
  }, []);

  if (!data) return null;

  const config = tierConfig[data.tier as keyof typeof tierConfig] || tierConfig.Building;
  const firstName = data.name.split(" ")[0].replace(/^(Dr|Mr|Mrs|Ms)\.?\s*/i, "") || data.name;

  return (
    <main data-page="assessment" style={{ background: "var(--void)", minHeight: "100vh", paddingBottom: "100px" }}>

      {/* Header */}
      <div style={{ padding: "24px clamp(24px, 6vw, 80px)", borderBottom: "1px solid var(--wire)" }}>
        <Link href="/" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "18px", color: "var(--chalk)", textDecoration: "none" }}>
          Primara
        </Link>
      </div>

      {/* Big Reveal */}
      <section style={{ borderBottom: "1px solid var(--wire)", padding: "clamp(60px, 8vw, 100px) clamp(24px, 8vw, 80px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(ellipse 60vw 50vh at 50% 50%, ${config.color}12 0%, transparent 70%)` }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "32px" }}>
            Your Practice Score
          </p>

          {/* Score circle */}
          <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "32px" }}>
            <svg width="200" height="200" viewBox="0 0 200 200" aria-label={`Score: ${animatedScore}%`}>
              <circle cx="100" cy="100" r="85" fill="none" stroke="var(--wire)" strokeWidth="8" />
              <circle
                cx="100" cy="100" r="85"
                fill="none"
                stroke={config.color}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 85}`}
                strokeDashoffset={`${2 * Math.PI * 85 * (1 - animatedScore / 100)}`}
                transform="rotate(-90 100 100)"
                style={{ transition: "stroke-dashoffset 0.05s linear" }}
              />
            </svg>
            <div style={{ position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <span style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "52px", color: "var(--chalk)", lineHeight: 1 }}>
                {animatedScore}<span style={{ fontSize: "28px" }}>%</span>
              </span>
              <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: config.color }}>
                {data.tier}
              </span>
            </div>
          </div>

          <h1 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "var(--chalk)", fontWeight: 400, lineHeight: 1.1, marginBottom: "20px" }}>
            {firstName}, here&rsquo;s your Practice Score: {config.label}.
          </h1>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", color: "var(--ash)", lineHeight: 1.8, maxWidth: "580px", margin: "0 auto" }}>
            {config.intro}
          </p>
        </div>
      </section>

      {/* 3 Insights */}
      <section aria-labelledby="insights-heading" style={{ borderBottom: "1px solid var(--wire)", background: "var(--surface)", padding: "clamp(60px, 8vw, 100px) clamp(24px, 8vw, 80px)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "16px" }}>
            Based on your answers
          </p>
          <h2 id="insights-heading" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "48px" }}>
            Three things you need to know
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {config.insights.map((insight, i) => (
              <div key={i} style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "40px", color: config.color, opacity: 0.5, lineHeight: 1, flexShrink: 0, width: "44px", textAlign: "right" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div style={{ width: "24px", height: "1px", background: config.color, marginBottom: "12px" }} />
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.8, margin: 0 }}>{insight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Score Breakdown */}
      <section aria-labelledby="scores-heading" style={{ borderBottom: "1px solid var(--wire)", background: "var(--void)", padding: "clamp(60px, 8vw, 100px) clamp(24px, 8vw, 80px)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "16px" }}>
            Your scores by area
          </p>
          <h2 id="scores-heading" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "48px" }}>
            Where you stand across four areas
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "24px" }}>
            {[
              { label: "Google Maps & GBP", score: data.gbpScore },
              { label: "Reviews & Reputation", score: data.reviewsScore },
              { label: "Website", score: data.websiteScore },
              { label: "Paid Ads", score: data.adsScore },
            ].map(({ label, score }) => {
              const barColor = score >= 70 ? "#3DAA6E" : score >= 40 ? "#C9A84C" : "#E8611A";
              return (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ash)" }}>{label}</span>
                    <span style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "24px", color: "var(--chalk)" }}>{score}%</span>
                  </div>
                  <div style={{ height: "4px", background: "var(--wire)", borderRadius: "2px" }}>
                    <div style={{ height: "100%", width: `${score}%`, background: barColor, borderRadius: "2px", transition: "width 1s ease" }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recommended Package */}
      {(() => {
        const pkg = packageConfig[data.recommendedPackage];
        return (
          <section aria-labelledby="package-heading" style={{ borderBottom: "1px solid var(--wire)", background: "var(--surface)", padding: "clamp(60px, 8vw, 100px) clamp(24px, 8vw, 80px)" }}>
            <div style={{ maxWidth: "700px", margin: "0 auto" }}>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "16px" }}>
                Recommended for your practice
              </p>
              <h2 id="package-heading" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, marginBottom: "8px" }}>
                {pkg.name}
              </h2>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, marginBottom: "32px" }}>
                {pkg.tagline}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                {pkg.includes.map((item) => (
                  <div key={item} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "rgba(61,170,110,0.15)", border: "1px solid #3DAA6E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                        <path d="M1.5 4l2 2 3-3" stroke="#3DAA6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href={pkg.url}
                style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "var(--gold)", textDecoration: "none", letterSpacing: "0.04em", borderBottom: "1px solid rgba(201,168,76,0.4)", paddingBottom: "2px" }}
              >
                View full package details →
              </Link>
            </div>
          </section>
        );
      })()}

      {/* Next Steps */}
      <section aria-labelledby="next-heading" style={{ padding: "clamp(60px, 8vw, 100px) clamp(24px, 8vw, 80px)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--smoke)", marginBottom: "16px" }}>
            Recommended next step
          </p>
          <h2 id="next-heading" style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "var(--chalk)", fontWeight: 400, lineHeight: 1.1, marginBottom: "20px" }}>
            {config.nextStep}
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, marginBottom: "40px", maxWidth: "560px", margin: "0 auto 40px" }}>
            {config.nextStepBody}
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--ember)",
                color: "#fff",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "18px 36px",
                borderRadius: "4px",
                textDecoration: "none",
                boxShadow: "0 0 32px rgba(232,97,26,0.2)",
              }}
            >
              {config.urgency === "high" ? "Book a Free Call with Primara" : "Request My Free Audit"}
            </Link>
            <a
              href="tel:+15612912681"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid var(--wire)",
                color: "var(--chalk)",
                fontFamily: "system-ui, sans-serif",
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "18px 36px",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Call (561) 291-2681
            </a>
          </div>

          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "var(--smoke)", marginTop: "20px" }}>
            No pitch. No pressure. Liam or Gio will walk you through it personally.
          </p>
        </div>
      </section>

      {/* Footer contact */}
      <div style={{ borderTop: "1px solid var(--wire)", padding: "clamp(24px, 4vw, 40px) clamp(24px, 8vw, 80px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <span style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "16px", color: "var(--chalk)" }}>Primara</span>
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <a href="mailto:liam.costello@primara365.com" style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "var(--smoke)", textDecoration: "none" }}>liam.costello@primara365.com</a>
          <a href="tel:+15612912681" style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "var(--smoke)", textDecoration: "none" }}>+1 (561) 291-2681</a>
          <Link href="/" style={{ fontFamily: "system-ui, sans-serif", fontSize: "12px", color: "var(--smoke)", textDecoration: "none" }}>primara365.com</Link>
        </div>
      </div>

      {/* Sticky CTA bar */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(10,10,10,0.95)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid var(--wire)",
        padding: "16px clamp(24px, 6vw, 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
        zIndex: 100,
      }}>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "13px", color: "var(--ash)", margin: 0 }}>
          Ready to close the gap? Liam or Gio will walk you through a custom action plan — free.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--ember)",
              color: "#fff",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 28px",
              borderRadius: "4px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Book a Free Call
          </Link>
          <a
            href="tel:+15612912681"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "13px",
              color: "var(--chalk)",
              textDecoration: "none",
              whiteSpace: "nowrap",
              letterSpacing: "0.04em",
            }}
          >
            (561) 291-2681
          </a>
        </div>
      </div>

    </main>
  );
}
