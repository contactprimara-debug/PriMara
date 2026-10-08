"use client";

import { useEffect, useState } from "react";
import { ATTRIBUTION_KEYS, captureAttribution, type Attribution } from "@/lib/attribution";

/* Hidden inputs carrying first-touch attribution into every lead form.
   Rendered by <HoneypotField /> so all five existing forms get it with no
   per-form edits. Values are filled after mount; a form submitted before
   that simply carries empty values (never blocks a lead). */
export default function AttributionFields() {
  const [a, setA] = useState<Attribution>({});
  useEffect(() => {
    try {
      setA(captureAttribution());
    } catch {}
  }, []);
  return (
    <>
      {ATTRIBUTION_KEYS.map((k) => (
        <input key={k} type="hidden" name={k} value={a[k] ?? ""} readOnly />
      ))}
    </>
  );
}
