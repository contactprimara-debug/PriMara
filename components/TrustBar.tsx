const stats = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M11 2L13.545 7.91L20 8.727L15.5 13.273L16.727 20L11 16.91L5.273 20L6.5 13.273L2 8.727L8.455 7.91L11 2Z"
          fill="#8a6a2a"
          stroke="#8a6a2a"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: "Primary Care",
    label: "Specialists Only",
  },
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
    value: "Florida",
    label: "FL-Based Team",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M11 2.5L4 5.5v5c0 4.418 3.134 8.548 7 9.5 3.866-.952 7-5.082 7-9.5v-5L11 2.5Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M8 11l2.5 2.5 4-4" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "✓ Available",
    label: "Now Accepting New Clients",
  },
];

export default function TrustBar() {
  return (
    <div
      role="region"
      aria-label="Why practices choose Primara"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="mx-auto max-w-content px-6 lg:px-8 py-7">
        <dl className="grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-4 sm:gap-x-8">
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
                  color: "white",
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
