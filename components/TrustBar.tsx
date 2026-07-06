const stats = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="7" r="3.5" stroke="white" strokeWidth="1.5" />
        <path d="M4 19c0-3.5 3.13-6.5 7-6.5s7 3 7 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    value: "Founder-Led",
    label: "Direct Access, No Coordinators",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="8.5" stroke="white" strokeWidth="1.5" />
        <path d="M7 11l3 3 5-5" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "Nationwide",
    label: "Independent Practices",
  },
];

export default function TrustBar() {
  return (
    <div
      role="region"
      aria-label="Why practices choose Primara"
      style={{
        backgroundColor: "var(--surface)",
        borderTop: "1px solid var(--wire)",
        borderBottom: "1px solid var(--wire)",
      }}
    >
      <div className="mx-auto max-w-content px-6 lg:px-8 py-7">
        <dl className="grid grid-cols-2 gap-y-6 gap-x-4 sm:gap-x-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-1.5 group cursor-default transition-opacity duration-200 hover:opacity-100 opacity-90"
            >
              <dt className="sr-only">{stat.label}</dt>

              {/* Icon */}
              <div aria-hidden="true">{stat.icon}</div>

              {/* Value */}
              <dd
                className="font-serif font-bold leading-tight"
                style={{
                  fontSize: "1.1rem",
                  color: "var(--chalk)",
                  fontFamily: "var(--font-fraunces)",
                }}
              >
                {stat.value}
              </dd>

              {/* Label */}
              <span
                className="leading-snug"
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "var(--font-mono)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
