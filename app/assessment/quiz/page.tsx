'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { submitAssessment } from '@/app/actions/assessment';

/* ── Quiz data ─────────────────────────────────────────────────────────── */

const bestPractices = [
  // GBP (Q1–Q3)
  "Is your Google Business Profile fully verified with photos, hours, and all services listed?",
  "When you search '[your specialty] [your city]' on Google Maps, does your practice appear in the top 3 results?",
  "Do you publish new content to your Google Business Profile at least once per week?",
  // Reviews (Q4–Q6)
  "Does your practice have more Google reviews than your top local competitor?",
  "Does your practice have at least 50 Google reviews with a rating of 4.5 or above?",
  "Do you respond to every Google review — positive and negative — within 48 hours?",
  // Website (Q7–Q8)
  "Does your website load in under 3 seconds on a mobile phone?",
  "Does your website have a dedicated page for each service your practice offers?",
  // Ads (Q9–Q10)
  "Are you currently running paid ads to attract new patients online?",
  "When you search your specialty and city on Google, do paid ads from other practices appear above your listing?",
];

const categoryMap = {
  gbp: [0, 1, 2],
  reviews: [3, 4, 5],
  website: [6, 7],
  ads: [8, 9],
};

const qualifierQuestions = [
  {
    id: "situation",
    question: "Which best describes your current practice?",
    options: [
      "Solo physician — I run the practice on my own",
      "Small group — 2 to 5 physicians",
      "Larger group — 6 or more physicians",
      "Just starting out or launching soon",
    ],
  },
  {
    id: "outcome",
    question: "What is your most important goal in the next 90 days?",
    options: [
      "Get significantly more new patients",
      "Improve my Google rating and review count",
      "Rank higher on Google Maps and search",
      "Build a better website that actually converts",
      "All of the above",
    ],
  },
  {
    id: "obstacle",
    question: "What's been the biggest obstacle to growing your practice online?",
    options: [
      "I don't know where to start",
      "I've tried things myself but haven't seen results",
      "I'm too busy with patients to focus on marketing",
      "I haven't invested in marketing yet",
    ],
  },
  {
    id: "solution",
    question: "What type of solution would work best for you?",
    options: [
      "Have experts do it all for me",
      "Guidance and strategy — I'll handle execution",
      "A combination of both",
      "I'm not sure yet",
    ],
  },
];

/* ── Types ─────────────────────────────────────────────────────────────── */
type Step = number | "qualifier" | "contact" | "done";

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  practice: string;
}

/* ── Component ─────────────────────────────────────────────────────────── */
export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(0);
  const [contact, setContact] = useState<ContactInfo>({ name: "", email: "", phone: "", practice: "" });
  const [bpAnswers, setBpAnswers] = useState<boolean[]>(Array(10).fill(null));
  const [qualAnswers, setQualAnswers] = useState<Record<string, string>>({});
  const [openText, setOpenText] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Determine current question index for best practices
  const bpIndex = typeof step === "number" ? step : 0;
  const totalSteps = 1 + 10 + 4 + 1; // contact + BP + qualifiers + open text
  const currentStepNum =
    typeof step === "number" ? step + 1 :
    step === "qualifier" ? 13 :
    step === "contact" ? 15 :
    step === "done" ? 16 : 1;
  const progress = Math.round((currentStepNum / totalSteps) * 100);

  // Qualifier step tracking
  const [qualStep, setQualStep] = useState(0);

  async function handleFinish() {
    setSubmitting(true);
    const yesCount = bpAnswers.filter(Boolean).length;
    const score = Math.round((yesCount / 10) * 100);

    const gbpScore = categoryMap.gbp.filter(i => bpAnswers[i]).length / categoryMap.gbp.length;
    const reviewsScore = categoryMap.reviews.filter(i => bpAnswers[i]).length / categoryMap.reviews.length;
    const websiteScore = categoryMap.website.filter(i => bpAnswers[i]).length / categoryMap.website.length;
    const adsScore = categoryMap.ads.filter(i => bpAnswers[i]).length / categoryMap.ads.length;

    // Routing logic: Ads weak always = Visibility. Website weak = Foundation. GBP/Reviews weak = Foundation. Multiple weak = Visibility.
    const adsWeak = adsScore < 0.5;
    const websiteWeak = websiteScore < 0.5;
    const gbpWeak = gbpScore < 0.5;
    const reviewsWeak = reviewsScore < 0.5;

    const weakCount = [adsWeak, websiteWeak, gbpWeak, reviewsWeak].filter(Boolean).length;

    const recommendedPackage = adsWeak || weakCount >= 2 ? "Visibility" : "Foundation";

    const tier =
      score <= 30 ? "Critical" :
      score <= 60 ? "Building" :
      score <= 80 ? "Growing" :
      "Optimized";

    const allAnswers: Record<string, string> = {};
    bestPractices.forEach((q, i) => {
      allAnswers[`Q${i + 1}: ${q.slice(0, 60)}...`] = bpAnswers[i] ? "Yes" : "No";
    });
    qualifierQuestions.forEach((q) => {
      allAnswers[q.question] = qualAnswers[q.id] || "Not answered";
    });
    allAnswers["Anything else?"] = openText || "Not provided";

    await submitAssessment({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      practice: contact.practice,
      score,
      tier,
      answers: allAnswers,
    });

    // Store results for results page
    sessionStorage.setItem("assessmentResult", JSON.stringify({
      name: contact.name,
      score,
      tier,
      recommendedPackage,
      gbpScore: Math.round(gbpScore * 100),
      reviewsScore: Math.round(reviewsScore * 100),
      websiteScore: Math.round(websiteScore * 100),
      adsScore: Math.round(adsScore * 100),
      outcome: qualAnswers["outcome"] || "",
      obstacle: qualAnswers["obstacle"] || "",
      solution: qualAnswers["solution"] || "",
      yesCount,
    }));

    router.push("/assessment/results");
  }

  /* ── Render ─────────────────────────────────────────────────────────── */
  return (
    <main data-page="assessment" style={{ background: "var(--void)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Progress bar */}
      <div style={{ height: "3px", background: "var(--wire)", position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        <div
          style={{
            height: "100%",
            background: "var(--gold)",
            width: `${progress}%`,
            transition: "width 0.4s ease",
          }}
        />
      </div>

      {/* Header */}
      <div style={{ padding: "24px clamp(24px, 6vw, 80px)", borderBottom: "1px solid var(--wire)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "18px", color: "var(--chalk)" }}>
          Primara
        </span>
        <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--smoke)" }}>
          Practice Score Assessment
        </span>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(40px, 6vw, 80px) clamp(24px, 6vw, 80px)" }}>
        <div style={{ width: "100%", maxWidth: "620px" }}>

          {/* Step indicator */}
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ash)", marginBottom: "32px" }}>
            {typeof step === "number" ? `Question ${bpIndex + 1} of 10` :
             step === "qualifier" ? `Question ${11 + qualStep} of 14` :
             step === "contact" ? "Final step" :
             "Final question"}
          </p>

          {/* ── STEP: Best Practice Questions (0-9) ─────────────── */}
          {typeof step === "number" && (
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} style={{ flex: 1, height: "3px", background: i <= bpIndex ? "var(--gold)" : "var(--wire)", borderRadius: "2px", transition: "background 0.3s" }} />
                ))}
              </div>

              <h2 style={{ fontFamily: "system-ui, sans-serif", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", color: "#ffffff", fontWeight: 600, lineHeight: 1.4, marginBottom: "48px", letterSpacing: "-0.01em" }}>
                {bestPractices[bpIndex]}
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "Yes — we have this in place", value: true },
                  { label: "No — this is a gap for us", value: false },
                ].map(({ label, value }) => (
                  <button
                    key={label}
                    onClick={() => {
                      const newAnswers = [...bpAnswers];
                      newAnswers[bpIndex] = value;
                      setBpAnswers(newAnswers);
                      setTimeout(() => {
                        if (bpIndex < 9) {
                          setStep(bpIndex + 1);
                        } else {
                          setStep("qualifier");
                        }
                      }, 250);
                    }}
                    style={{
                      background: bpAnswers[bpIndex] === value ? (value ? "rgba(61,170,110,0.15)" : "rgba(232,97,26,0.12)") : "var(--surface)",
                      border: `1px solid ${bpAnswers[bpIndex] === value ? (value ? "var(--color-success)" : "var(--gold)") : "var(--wire)"}`,
                      borderRadius: "4px",
                      padding: "20px 24px",
                      textAlign: "left",
                      cursor: "pointer",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      transition: "all 0.2s",
                    }}
                  >
                    <span style={{ display: "block", width: "18px", height: "18px", border: `1.5px solid ${bpAnswers[bpIndex] === value ? "var(--color-success)" : "var(--wire)"}`, borderRadius: "50%", flexShrink: 0, background: bpAnswers[bpIndex] === value ? (value ? "var(--color-success)" : "var(--gold)") : "transparent" }} />
                    {label}
                  </button>
                ))}
              </div>

              {bpIndex > 0 && (
                <button onClick={() => setStep(bpIndex - 1)} style={{ marginTop: "24px", background: "none", border: "none", color: "var(--smoke)", fontFamily: "system-ui, sans-serif", fontSize: "13px", cursor: "pointer", padding: 0 }}>
                  ← Back
                </button>
              )}
            </div>
          )}

          {/* ── STEP: Qualifier questions ────────────────────────── */}
          {step === "qualifier" && qualStep < 4 && (
            <div>
              <h2 style={{ fontFamily: "system-ui, sans-serif", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", color: "#ffffff", fontWeight: 600, lineHeight: 1.4, marginBottom: "40px", letterSpacing: "-0.01em" }}>
                {qualifierQuestions[qualStep].question}
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {qualifierQuestions[qualStep].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setQualAnswers(prev => ({ ...prev, [qualifierQuestions[qualStep].id]: option }));
                      setTimeout(() => {
                        if (qualStep < 3) {
                          setQualStep(qualStep + 1);
                        } else {
                          setQualStep(4); // open text
                        }
                      }, 200);
                    }}
                    style={{
                      background: qualAnswers[qualifierQuestions[qualStep].id] === option ? "rgba(201,168,76,0.12)" : "var(--surface)",
                      border: `1px solid ${qualAnswers[qualifierQuestions[qualStep].id] === option ? "var(--gold)" : "var(--wire)"}`,
                      borderRadius: "4px",
                      padding: "18px 24px",
                      textAlign: "left",
                      cursor: "pointer",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: "#ffffff",
                      transition: "all 0.2s",
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <button onClick={() => {
                if (qualStep === 0) { setStep(9); }
                else { setQualStep(qualStep - 1); }
              }} style={{ marginTop: "24px", background: "none", border: "none", color: "var(--smoke)", fontFamily: "system-ui, sans-serif", fontSize: "13px", cursor: "pointer", padding: 0 }}>
                ← Back
              </button>
            </div>
          )}

          {/* ── STEP: Open text ──────────────────────────────────── */}
          {step === "qualifier" && qualStep === 4 && (
            <div>
              <h2 style={{ fontFamily: "system-ui, sans-serif", fontSize: "clamp(1.25rem, 3vw, 1.75rem)", color: "#ffffff", fontWeight: 600, lineHeight: 1.4, marginBottom: "16px", letterSpacing: "-0.01em" }}>
                Is there anything else we should know about your practice?
              </h2>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--chalk)", lineHeight: 1.75, marginBottom: "28px", opacity: 0.75 }}>
                Optional — but often the most valuable. What&rsquo;s driving your search for help right now?
              </p>

              <textarea
                value={openText}
                onChange={(e) => setOpenText(e.target.value)}
                placeholder="E.g. We just opened a second location... We've tried SEO before and it didn't work... We need to fill our schedule within the next 60 days..."
                rows={5}
                style={{
                  width: "100%",
                  background: "var(--surface)",
                  border: "1px solid var(--wire)",
                  borderRadius: "4px",
                  padding: "16px",
                  fontSize: "1rem",
                  color: "var(--chalk)",
                  fontFamily: "system-ui, sans-serif",
                  outline: "none",
                  resize: "vertical",
                  boxSizing: "border-box",
                  lineHeight: 1.7,
                }}
              />

              <button
                onClick={() => setStep("contact")}
                style={{
                  marginTop: "20px",
                  width: "100%",
                  background: "var(--gold)",
                  color: "#fff",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "20px",
                  borderRadius: "4px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Continue →
              </button>

              <button onClick={() => setQualStep(3)} style={{ marginTop: "16px", background: "none", border: "none", color: "var(--smoke)", fontFamily: "system-ui, sans-serif", fontSize: "13px", cursor: "pointer", padding: 0, display: "block" }}>
                ← Back
              </button>
            </div>
          )}

          {/* ── STEP: Contact capture (after open text) ──────────── */}
          {step === "contact" && (
            <div>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ash)", marginBottom: "32px" }}>
                Almost done
              </p>
              <h2 style={{ fontFamily: "var(--font-display), Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "var(--chalk)", fontWeight: 400, lineHeight: 1.1, marginBottom: "12px" }}>
                Your score is ready.
              </h2>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9375rem", color: "var(--ash)", lineHeight: 1.75, marginBottom: "32px" }}>
                Where should we send your personalized practice report?
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { label: "Your Full Name *", id: "name", type: "text", required: true, placeholder: "Dr. Jane Smith" },
                  { label: "Email Address *", id: "email", type: "email", required: true, placeholder: "jane@yourpractice.com" },
                  { label: "Practice Name", id: "practice", type: "text", required: false, placeholder: "West Palm Beach Primary Care" },
                  { label: "Phone Number", id: "phone", type: "tel", required: false, placeholder: "(561) 000-0000" },
                ].map(({ label, id, type, required, placeholder }) => (
                  <div key={id} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label htmlFor={id} style={{ fontFamily: "system-ui, sans-serif", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ash)" }}>
                      {label}
                    </label>
                    <input
                      id={id}
                      type={type}
                      required={required}
                      placeholder={placeholder}
                      value={contact[id as keyof ContactInfo]}
                      onChange={(e) => setContact(prev => ({ ...prev, [id]: e.target.value }))}
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--wire)",
                        borderRadius: "4px",
                        padding: "14px 16px",
                        fontSize: "1rem",
                        color: "var(--chalk)",
                        fontFamily: "system-ui, sans-serif",
                        outline: "none",
                        width: "100%",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}
              </div>

              {error && (
                <p style={{ color: "var(--gold)", fontFamily: "system-ui, sans-serif", fontSize: "13px", marginBottom: "12px" }}>{error}</p>
              )}

              <button
                onClick={handleFinish}
                disabled={submitting}
                style={{
                  marginTop: "8px",
                  width: "100%",
                  background: submitting ? "var(--wire)" : "var(--gold)",
                  color: "#fff",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "20px",
                  borderRadius: "4px",
                  border: "none",
                  cursor: submitting ? "not-allowed" : "pointer",
                }}
              >
                {submitting ? "Calculating your score…" : "See My Practice Score →"}
              </button>

              <button
                onClick={() => { setStep("qualifier"); setQualStep(4); }}
                style={{ marginTop: "16px", background: "none", border: "none", color: "var(--smoke)", fontFamily: "system-ui, sans-serif", fontSize: "13px", cursor: "pointer", padding: 0, display: "block" }}
              >
                ← Back
              </button>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
