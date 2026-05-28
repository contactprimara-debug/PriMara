import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void:       "var(--void)",
        surface:    "var(--surface)",
        "surface-2": "var(--surface-2)",
        wire:       "var(--wire)",
        smoke:      "var(--smoke)",
        ash:        "var(--ash)",
        chalk:      "var(--chalk)",
        gold:       "var(--gold)",
        teal:       "var(--teal)",
        ember:      "var(--ember)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        ui:      ["var(--font-ui)", "system-ui", "sans-serif"],
        mono:    ["'Courier New'", "Courier", "monospace"],
      },
      maxWidth: {
        content: "1080px",
      },
      fontSize: {
        "hero":    ["clamp(64px, 10vw, 140px)", { lineHeight: "1.0" }],
        "section": ["clamp(36px, 5vw, 72px)",   { lineHeight: "1.1" }],
        "eyebrow": ["11px", { lineHeight: "1.4", letterSpacing: "0.14em" }],
      },
      boxShadow: {
        cinematic: "0 8px 48px rgba(0,0,0,0.6)",
        card:      "0 2px 12px rgba(0,0,0,0.4)",
        "card-hover": "0 16px 48px rgba(0,0,0,0.7)",
      },
      letterSpacing: {
        label: "0.12em",
        eyebrow: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
