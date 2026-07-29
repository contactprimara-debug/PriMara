/* ── HoneypotField ─────────────────────────────────────────────────────────
   Hidden "company" input rendered inside every lead form. Humans never see
   or fill it; naive bots auto-fill every field. The server actions treat a
   non-empty value as a bot and silently pretend success (lib/leads.ts →
   isBotSubmission). Deliberately NOT display:none — some bots skip those;
   offscreen positioning catches more of them.
   No id/htmlFor so multiple forms on one page don't duplicate ids. */

export default function HoneypotField() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        top: "auto",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
    >
      <label>
        Company
        <input name="company" type="text" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}
