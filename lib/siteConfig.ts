// Canonical contact + identity constants. Positioning is nationwide —
// do not add geography fields here; city targeting lives in /locations data.
export const siteConfig = {
  name: "Primara",
  tagline: "More patients. Serving you first. Always getting better.",
  motto: "More patients. Serving you first. Always getting better.",
  why: "At Primara, we serve independent practices the right way. We put our clients' success before our own, and every day we get a little better at serving them.",
  phone: "+15612912681",
  phoneDisplay: "(561) 291-2681",
  email: "liam.costello@primara365.com",
  calendly: "https://calendly.com/contactprimara/30min",
  url: "https://primara365.com",
  founders: ["Liam Costello", "Gio LaRoche"],
} as const;

// Routes that ship their own self-contained header/footer/CTA bar (ad
// landing pages) — Header, Footer, and MobileCTABar all hide themselves
// here so sitewide chrome doesn't stack on top of a page's own.
export const STANDALONE_ROUTES: string[] = ["/mental-health-audit"];
