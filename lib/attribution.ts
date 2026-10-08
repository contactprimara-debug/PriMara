/* ── First-touch attribution (client-side) ─────────────────────────────────
   Results audit 2026-10-08: all 7 recent Command Center leads for this site
   had NO source (no utm, no landing page). Cause: the forms posted only the
   typed fields. This module remembers where a visit started and hands it to
   every form, so the lead carries it into the Command Center payload
   (field names are the ones lib/lead-intake.ts in the Command Center reads:
   first_touch_landing_page, entry_referrer, utm_*, gclid, gbraid, wbraid).

   Rules: first touch wins for landing page + referrer + utm (kept 30 days);
   click ids (gclid/gbraid/wbraid) are refreshed whenever one is in the URL.
   Everything is best-effort and wrapped in try/catch: storage can be blocked
   and must never break a form. No personal data is stored.
*/

export type Attribution = {
  first_touch_landing_page?: string;
  entry_referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
};

export const ATTRIBUTION_KEYS: (keyof Attribution)[] = [
  "first_touch_landing_page",
  "entry_referrer",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
];

const STORE_KEY = "p365_attr_v1";
const TTL_MS = 30 * 24 * 3600 * 1000;
const CLICK_IDS: (keyof Attribution)[] = ["gclid", "gbraid", "wbraid"];
const UTMS: (keyof Attribution)[] = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

function clip(v: string | null | undefined): string | undefined {
  const t = (v ?? "").trim().slice(0, 300);
  return t || undefined;
}

/** Record the touch for this page view and return the stored attribution. */
export function captureAttribution(): Attribution {
  let stored: (Attribution & { t?: number }) | null = null;
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) stored = JSON.parse(raw);
    if (stored && (!stored.t || Date.now() - stored.t > TTL_MS)) stored = null;
  } catch {
    stored = null;
  }

  const params = new URLSearchParams(window.location.search);
  const next: Attribution & { t?: number } = stored ? { ...stored } : {};

  if (!next.first_touch_landing_page) {
    // Path only (+ query kept off: it can hold ids that are stored separately).
    next.first_touch_landing_page = clip(window.location.pathname) || "/";
    let ref = "";
    try {
      const r = document.referrer ? new URL(document.referrer) : null;
      if (r && r.hostname !== window.location.hostname) ref = r.origin + r.pathname;
    } catch {}
    next.entry_referrer = clip(ref) || "(direct)";
    UTMS.forEach((k) => {
      const v = clip(params.get(k));
      if (v) (next as Record<string, unknown>)[k] = v;
    });
  }
  CLICK_IDS.forEach((k) => {
    const v = clip(params.get(k));
    if (v) (next as Record<string, unknown>)[k] = v;
  });
  next.t = next.t || Date.now();

  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(next));
  } catch {}
  const { t: _t, ...out } = next;
  return out;
}

/** Read what is stored (used by the quiz, which submits an object, not a <form>). */
export function readAttribution(): Attribution {
  try {
    return captureAttribution();
  } catch {
    return {};
  }
}
