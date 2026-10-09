// Does a form submission declare itself one of OUR tests? Same rules as the
// Command Center's lib/lead-test-markers.ts (~/primara365), kept dependency-
// free so scripts/check-lead-test-markers.ts can pin them with fixtures.
// Incident 2026-10-08: an attribution test (lead #774) reached the dialer CRM
// and Liam's inbox because this site pushed every submission everywhere.
// A test lead goes ONLY to the Command Center, flagged X-Primara-Test.

const TEST_NAME_PREFIX = /^test(?![a-z])/i;
const TEST_NAME_UPPER = /^TEST/;
const TEST_EMAIL = /^(test[@+]|.+@example\.(com|org|net)$|test[._-]?[a-z0-9]*@primara365\.com$)/i;
const TEST_MESSAGE = /^\s*\[?TEST\]?(?![a-z])/;
const TEST_PHRASE = /PRIMARA AUTOMATED TEST|INTERNAL TEST/i;
const NAME_FIELDS = ["name", "fname", "first_name", "firstName", "lname", "last_name", "lastName", "full_name", "fullName"];
const MESSAGE_FIELDS = ["message", "comments", "notes", "msg", "reason"];

const on = (v?: string | null) => v != null && /^(1|true|yes)$/i.test(v.trim());

export function isTestLead(
  fields: Record<string, unknown>,
  opts: { header?: string | null; query?: string | null } = {}
): boolean {
  if (on(opts.header) || on(opts.query)) return true;
  const s = (k: string) => (typeof fields[k] === "string" ? (fields[k] as string).trim() : "");
  if (on(s("__primara_test")) || s("__primara_canary") === "1") return true;
  if (NAME_FIELDS.some((k) => s(k) && (TEST_NAME_PREFIX.test(s(k)) || TEST_NAME_UPPER.test(s(k))))) return true;
  if (s("email") && TEST_EMAIL.test(s("email"))) return true;
  if (MESSAGE_FIELDS.some((k) => s(k) && TEST_MESSAGE.test(s(k)))) return true;
  if (s("traffic_type").toLowerCase() === "internal") return true;
  return Object.values(fields).some((v) => typeof v === "string" && TEST_PHRASE.test(v));
}

export function formDataToFields(fd: FormData): Record<string, unknown> {
  const o: Record<string, unknown> = {};
  fd.forEach((v, k) => { if (typeof v === "string") o[k] = v; });
  return o;
}
