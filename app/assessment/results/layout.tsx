import LeadConversionPing from "@/components/LeadConversionPing";
import { hasLeadPingFlag } from "@/lib/leadPing";

/* /assessment/results is the quiz's thank-you page. Reading the one-shot pl_ok
   cookie (set by submitAssessment only for a recorded, non-test lead) makes
   this render per request. The ping itself is the same component /thank-you
   uses, so generate_lead + the Ads conversion fire once (sessionStorage guard
   + cookie spent on fire). Card #290. */
export const dynamic = "force-dynamic";

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {hasLeadPingFlag() && <LeadConversionPing />}
      {children}
    </>
  );
}
