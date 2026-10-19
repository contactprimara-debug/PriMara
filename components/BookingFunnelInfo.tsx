// Sales-funnel standard (2026-10-19): Why, 3 call steps, differentiators, who it's for / not for.
// Copy is drawn from existing site copy (WhyPrimara, about). No invented stats or stories.
const steps = [
  { n: "1", t: "We look at your practice.", d: "We review your Google Business Profile, website and ads before we talk, so the call is about your practice, not a generic pitch." },
  { n: "2", t: "We talk through what we see.", d: "Where patients can find you today, where they cannot, and what is worth fixing first." },
  { n: "3", t: "You decide.", d: "If it makes sense, we outline next steps. If it does not, that is fine. A yes or no is completely fine." },
];

const diffs = [
  { t: "Independent practices only.", d: "Primary care and mental health. No hospital systems, corporate chains or PE-backed groups." },
  { t: "Founder-led.", d: "Liam and Gio run every account. No handoff after the sales call." },
  { t: "Plain-English reporting.", d: "A monthly report on Maps ranking, reviews and website traffic. If something is not working, we tell you." },
];

const box: React.CSSProperties = { border: "1px solid var(--color-border)", borderRadius: 4, padding: "1.25rem" };

export default function BookingFunnelInfo() {
  return (
    <section aria-labelledby="funnel-heading" className="mx-auto max-w-content px-6 lg:px-8 pb-12">
      <h2 id="funnel-heading" className="font-serif font-bold text-balance" style={{ fontFamily: "var(--font-fraunces)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--color-text)" }}>
        Why we exist
      </h2>
      <p className="mt-3 text-base max-w-3xl" style={{ color: "var(--color-text-muted)" }}>
        We help independent medical practices get more patients by optimizing their digital presence and running their ads.
        We built Primara because independent practices should not need a big marketing budget or a big agency to be found by the patients near them.
      </p>

      <h3 className="mt-10 font-serif font-bold" style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", color: "var(--color-text)" }}>
        What happens on the call
      </h3>
      <ol className="mt-4 grid gap-4 md:grid-cols-3" style={{ listStyle: "none", padding: 0 }}>
        {steps.map((s) => (
          <li key={s.n} style={box}>
            <p style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>Step {s.n}</p>
            <p className="mt-1 font-bold" style={{ color: "var(--color-text)" }}>{s.t}</p>
            <p className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>{s.d}</p>
          </li>
        ))}
      </ol>

      <h3 className="mt-10 font-serif font-bold" style={{ fontFamily: "var(--font-fraunces)", fontSize: "1.35rem", color: "var(--color-text)" }}>
        How we are different
      </h3>
      <ul className="mt-4 grid gap-4 md:grid-cols-3" style={{ listStyle: "none", padding: 0 }}>
        {diffs.map((d) => (
          <li key={d.t} style={box}>
            <p className="font-bold" style={{ color: "var(--color-text)" }}>{d.t}</p>
            <p className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>{d.d}</p>
          </li>
        ))}
      </ul>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div style={box}>
          <p className="font-bold" style={{ color: "var(--color-text)" }}>Who this is for</p>
          <p className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>
            Independently owned primary care and mental health practices, anywhere in the US, whose owner or decision-maker wants more new patients now.
          </p>
        </div>
        <div style={box}>
          <p className="font-bold" style={{ color: "var(--color-text)" }}>Who this is not for</p>
          <p className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>
            Hospital systems, corporate chains and PE-backed groups, or practices that are not ready to make a change yet. If the timing is off, tell us and we will not push.
          </p>
        </div>
      </div>
    </section>
  );
}
