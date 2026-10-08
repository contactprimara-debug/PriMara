"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/* Runs once per page view on EVERY page so the first touch is stored on the
   landing page, not on the page where the form happens to be. */
export default function AttributionCapture() {
  useEffect(() => {
    try {
      captureAttribution();
    } catch {}
  }, []);
  return null;
}
