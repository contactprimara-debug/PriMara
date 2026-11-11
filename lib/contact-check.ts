// PRIMARA CONTACT CHECK v1 (WEBSITE-STANDARD item 20)
//
// ONE source of truth for "is this phone / email plausible". Copied verbatim into every
// stack (Next sites import it, static pages load contact-check.js built from this file by
// ~/Primara-Clients/contact-check/build.sh). Edit HERE, then run build.sh to refresh copies.
//
// Rules (Gio, 2026-11-05):
//  - Phone: format as typed to (555) 123-4567, needs 10 US digits (a leading 1 is allowed).
//  - Email: valid shape; common typos (gmail.con) get a clickable "did you mean" hint.
//  - Friendly message beside the field. Nothing else is disabled. A typo hint never blocks.
//  - Empty optional fields are fine. The server re-checks and flags, it never drops a lead.
//  - 2026-11-11: a complaint stops the first submit only (hint); only empty-required / no-@ values stop every submit.
//    Every stop fires a "primara:form-blocked" event (field + rule, no personal data) so blocks are countable.

export interface CheckResult {
  ok: boolean;
  message?: string; // friendly text to show beside the field
  suggestion?: string; // "did you mean" value (email only); does not make ok=false
  blocking?: boolean; // true = stop the FIRST submit so the person sees the message; a second submit goes through
  hard?: boolean; // true = stop every submit (empty required field, or a value no server could accept). Rare.
}

const TOP_DOMAINS = [
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com", "aol.com",
  "comcast.net", "msn.com", "live.com", "me.com", "att.net", "bellsouth.net",
  "sbcglobal.net", "verizon.net", "protonmail.com", "mac.com",
];

const KNOWN_TYPOS: Record<string, string> = {
  "gmail.con": "gmail.com", "gmail.co": "gmail.com", "gmail.cm": "gmail.com", "gmail.comm": "gmail.com",
  "gmail.om": "gmail.com", "gmail.vom": "gmail.com", "gmail.cim": "gmail.com", "gmial.com": "gmail.com",
  "gmai.com": "gmail.com", "gamil.com": "gmail.com", "gnail.com": "gmail.com", "gmal.com": "gmail.com",
  "gmail.net": "gmail.com", "gmaill.com": "gmail.com", "gmil.com": "gmail.com", "gmeil.com": "gmail.com",
  "googlemail.con": "gmail.com",
  "yahoo.con": "yahoo.com", "yahoo.co": "yahoo.com", "yahooo.com": "yahoo.com", "yaho.com": "yahoo.com",
  "yhoo.com": "yahoo.com", "yahoo.cm": "yahoo.com", "yahoo.comm": "yahoo.com",
  "hotmail.con": "hotmail.com", "hotmail.co": "hotmail.com", "hotmial.com": "hotmail.com",
  "hotmal.com": "hotmail.com", "hotmai.com": "hotmail.com", "hotnail.com": "hotmail.com",
  "outlook.con": "outlook.com", "outlook.co": "outlook.com", "outlok.com": "outlook.com",
  "outloo.com": "outlook.com", "outllok.com": "outlook.com",
  "icloud.con": "icloud.com", "icloud.co": "icloud.com", "iclould.com": "icloud.com", "icloud.cm": "icloud.com",
  "aol.con": "aol.com", "aol.co": "aol.com",
  "comcast.nt": "comcast.net", "comcast.con": "comcast.net", "comcast.com": "comcast.net",
};

function lev(a: string, b: string): number {
  const m = a.length, n = b.length;
  const d: number[] = [];
  for (let j = 0; j <= n; j++) d[j] = j;
  for (let i = 1; i <= m; i++) {
    let prev = d[0];
    d[0] = i;
    for (let j = 1; j <= n; j++) {
      const t = d[j];
      d[j] = Math.min(d[j] + 1, d[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = t;
    }
  }
  return d[n];
}

/** Digits only, with a leading US country code 1 removed when 11 digits. */
export function phoneDigits(raw: string): string {
  let d = String(raw || "").replace(/\D+/g, "");
  if (d.length === 11 && d[0] === "1") d = d.slice(1);
  return d;
}

/** Format as typed: (555) 123-4567. Leaves partial input readable, never truncates real digits past 10. */
export function formatPhone(raw: string): string {
  const s = String(raw || "");
  // Extensions / international markers: stop auto-formatting, the person knows what they mean.
  if (/[a-wyz]|\bext\b|x\d|^\s*\+(?!1)/i.test(s)) return s;
  let d = s.replace(/\D+/g, "");
  if (d.length > 10 && d[0] === "1") d = d.slice(1);
  if (d.length > 10) return s; // not a plain US number; leave it, validation will explain
  if (d.length === 0) return "";
  if (d.length < 4) return d;
  if (d.length < 7) return "(" + d.slice(0, 3) + ") " + d.slice(3);
  return "(" + d.slice(0, 3) + ") " + d.slice(3, 6) + "-" + d.slice(6);
}

/** Pure check. `required` false + empty = ok. */
export function checkPhone(raw: string, required = false): CheckResult {
  const s = String(raw || "").trim();
  if (!s) return required ? { ok: false, blocking: true, hard: true, message: "Please add a phone number." } : { ok: true };
  if (/[a-z]/i.test(s.replace(/\b(ext|x)\.?\s*\d+$/i, ""))) {
    return { ok: false, blocking: true, message: "Phone numbers can only use digits, like (555) 123-4567." };
  }
  const d = phoneDigits(s.replace(/\b(ext|x)\.?\s*\d+$/i, ""));
  if (d.length < 10) {
    return { ok: false, blocking: true, message: "That phone number looks short. Please include the area code (10 digits)." };
  }
  if (d.length > 10) {
    return { ok: false, blocking: true, message: "That phone number has too many digits. Please use 10 digits, like (555) 123-4567." };
  }
  if (!/^[2-9]/.test(d) || !/^[2-9]/.test(d.slice(3))) {
    return { ok: false, blocking: true, message: "That doesn't look like a US phone number. Please check the area code." };
  }
  if (/^(\d)\1{9}$/.test(d) || d === "1234567890" || d.slice(3) === "5550100") {
    return { ok: false, blocking: true, message: "Please check your phone number, it doesn't look right." };
  }
  return { ok: true };
}

/** Suggest a corrected domain for an email, or "" if none. */
export function suggestEmail(raw: string): string {
  const s = String(raw || "").trim().replace(/,(?=[a-z]{2,}$)/i, ".");
  const at = s.lastIndexOf("@");
  if (at < 1) return "";
  const local = s.slice(0, at);
  const dom = s.slice(at + 1).toLowerCase();
  if (TOP_DOMAINS.includes(dom)) return "";
  if (KNOWN_TYPOS[dom]) return local + "@" + KNOWN_TYPOS[dom];
  // fuzzy: only suggest on a very close match to a popular domain (1 edit, or 2 on long names)
  if (dom.length >= 7) {
    for (const t of TOP_DOMAINS) {
      const dist = lev(dom, t);
      if (dist === 1 || (dist === 2 && t.length >= 10)) return local + "@" + t;
    }
  }
  return "";
}

const EMAIL_SHAPE = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/;

export function checkEmail(raw: string, required = false): CheckResult {
  const s = String(raw || "").trim();
  if (!s) return required ? { ok: false, blocking: true, hard: true, message: "Please add your email address." } : { ok: true };
  const sug = suggestEmail(s);
  const tld = s.slice(s.lastIndexOf(".") + 1);
  const shapeOk =
    EMAIL_SHAPE.test(s) && !/\.\./.test(s) && !/^\.|\.@/.test(s) && /^[A-Za-z]{2,24}$/.test(tld) && s.length <= 254;
  if (!shapeOk) {
    // Only a value with no @ or no dot after it is hard-blocked (the servers reject exactly that). Anything
    // else that merely fails our stricter shape (a digit in the TLD, odd characters) is a hint: the person
    // is told once, a second submit goes through, and the server flags it. A lead is never lost to a rule.
    const hard = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
    return sug
      ? { ok: false, blocking: true, hard, suggestion: sug, message: "Did you mean " + sug + "?" }
      : { ok: false, blocking: true, hard, message: "That email doesn't look right. It should look like name@example.com." };
  }
  if (sug && sug.toLowerCase() !== s.toLowerCase()) {
    return { ok: true, blocking: false, suggestion: sug, message: "Did you mean " + sug + "?" };
  }
  return { ok: true };
}

// ---------- DOM helper (works on plain HTML and on React forms) ----------

function isPhoneField(el: HTMLInputElement): boolean {
  const n = (el.name + " " + el.id + " " + (el.getAttribute("autocomplete") || "")).toLowerCase();
  return el.type === "tel" || /(^|[^a-z])(phone|mobile|cell|tel)([^a-z]|$)/.test(n);
}
function isEmailField(el: HTMLInputElement): boolean {
  const n = (el.name + " " + el.id + " " + (el.getAttribute("autocomplete") || "")).toLowerCase();
  return el.type === "email" || /(^|[^a-z])e-?mail([^a-z]|$)/.test(n);
}

function setNative(el: HTMLInputElement, value: string) {
  // React-controlled inputs ignore plain .value writes; use the native setter + an input event.
  const proto = Object.getPrototypeOf(el);
  const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
  if (setter) setter.call(el, value); else el.value = value;
  el.dispatchEvent(new Event("input", { bubbles: true }));
}

const MSG_CLASS = "primara-field-msg";

function showMsg(el: HTMLInputElement, res: CheckResult) {
  let box = el.parentElement?.querySelector<HTMLElement>("." + MSG_CLASS + '[data-for="' + (el.name || el.id) + '"]') || null;
  if (!res.message) {
    if (box) box.remove();
    el.removeAttribute("aria-invalid");
    el.removeAttribute("aria-describedby");
    return;
  }
  if (!box) {
    box = document.createElement("div");
    box.className = MSG_CLASS;
    box.setAttribute("data-for", el.name || el.id);
    box.setAttribute("role", "alert");
    box.id = "pcm-" + (el.name || el.id || Math.random().toString(36).slice(2));
    box.style.cssText = "font-size:13px;line-height:1.4;margin-top:4px;font-weight:500;";
    el.insertAdjacentElement("afterend", box);
  }
  const bad = !res.ok;
  box.style.color = bad ? "#b3261e" : "#8a5a00";
  box.textContent = "";
  if (res.suggestion) {
    box.appendChild(document.createTextNode("Did you mean "));
    const a = document.createElement("button");
    a.type = "button";
    a.textContent = res.suggestion;
    a.style.cssText = "background:none;border:0;padding:0;color:inherit;font:inherit;text-decoration:underline;cursor:pointer;";
    a.addEventListener("click", () => {
      setNative(el, res.suggestion as string);
      showMsg(el, { ok: true });
    });
    box.appendChild(a);
    box.appendChild(document.createTextNode("?"));
  } else {
    box.textContent = res.message;
  }
  if (bad) el.setAttribute("aria-invalid", "true"); else el.removeAttribute("aria-invalid");
  el.setAttribute("aria-describedby", box.id);
}

/**
 * Wire phone + email checks onto every phone/email input in `form`. Returns a detach function.
 * Blocks the submit only for a definitely-bad value; a "did you mean" hint never blocks.
 * A second submit with the same hint showing goes through (the person has been told).
 */
export function attachContactChecks(form: HTMLFormElement): () => void {
  if (!form || (form as any).__pcm) return () => {};
  (form as any).__pcm = true;
  const requiredOf = (el: HTMLInputElement) => el.required || el.getAttribute("aria-required") === "true";
  const run = (el: HTMLInputElement): CheckResult =>
    isPhoneField(el) ? checkPhone(el.value, requiredOf(el)) : checkEmail(el.value, requiredOf(el));
  const fields = (): HTMLInputElement[] =>
    Array.from(form.querySelectorAll<HTMLInputElement>("input")).filter(
      (el) => el.type !== "hidden" && el.type !== "checkbox" && el.type !== "radio" && (isPhoneField(el) || isEmailField(el))
    );
  const listeners: Array<() => void> = [];
  const hinted = new WeakSet<HTMLInputElement>();

  const wire = (el: HTMLInputElement) => {
    if ((el as any).__pcmw) return;
    (el as any).__pcmw = true;
    if (isPhoneField(el)) {
      if (!el.getAttribute("inputmode")) el.setAttribute("inputmode", "tel");
      if (!el.getAttribute("autocomplete")) el.setAttribute("autocomplete", "tel");
      // Re-entry guard: setNative() dispatches an input event so React sees the change, and that event
      // lands back in this handler. If any other listener on the page reformats the value differently
      // (laco-book had one), the two ping-pong forever -> RangeError: Maximum call stack size exceeded.
      let formatting = false;
      const onInput = (ev: Event) => {
        if (formatting) return;
        if ((ev as InputEvent).inputType && (ev as InputEvent).inputType.indexOf("delete") === 0) return;
        const f = formatPhone(el.value);
        if (f !== el.value) {
          formatting = true;
          try { setNative(el, f); } finally { formatting = false; }
        }
        if (el.getAttribute("aria-invalid")) showMsg(el, run(el));
      };
      el.addEventListener("input", onInput);
      listeners.push(() => el.removeEventListener("input", onInput));
    } else {
      if (!el.getAttribute("autocapitalize")) el.setAttribute("autocapitalize", "none");
      if (!el.getAttribute("spellcheck")) el.setAttribute("spellcheck", "false");
      const onInputE = () => { if (el.getAttribute("aria-invalid")) showMsg(el, run(el)); };
      el.addEventListener("input", onInputE);
      listeners.push(() => el.removeEventListener("input", onInputE));
    }
    const onBlur = () => { if (el.value.trim()) showMsg(el, run(el)); else showMsg(el, { ok: true }); };
    el.addEventListener("blur", onBlur);
    listeners.push(() => el.removeEventListener("blur", onBlur));
  };
  fields().forEach(wire);

  // Count every stopped submit (no personal data: only the field kind and the rule). Sites listen for
  // "primara:form-blocked" and beacon it; a block nobody counts is how a form silently loses patients.
  const report = (el: HTMLInputElement, r: CheckResult, kind: string) => {
    try {
      const rule = isPhoneField(el)
        ? /short/.test(r.message || "") ? "phone_short" : /too many/.test(r.message || "") ? "phone_long" : /digits, like|only use digits/.test(r.message || "") ? "phone_chars" : /area code/.test(r.message || "") ? "phone_area" : /add a phone/.test(r.message || "") ? "phone_empty" : "phone_other"
        : r.suggestion ? "email_typo" : /add your email/.test(r.message || "") ? "email_empty" : "email_shape";
      document.dispatchEvent(new CustomEvent("primara:form-blocked", { detail: { field: isPhoneField(el) ? "phone" : "email", rule, kind } }));
    } catch (e) { /* ignore */ }
  };
  const onSubmit = (ev: Event) => {
    let first: HTMLInputElement | null = null;
    for (const el of fields()) {
      wire(el);
      const r = run(el);
      showMsg(el, r);
      // A hard result (empty required field, value no server accepts) stops every submit. Any other
      // complaint (bad phone, typo) stops the FIRST submit so the message is seen, then the second goes
      // through: we never trap a real person behind a rule that might be wrong about them.
      if (r.hard) { if (!first) first = el; report(el, r, "hard"); continue; }
      if (!r.ok || r.suggestion) {
        if (!hinted.has(el)) { hinted.add(el); if (!first) first = el; report(el, r, "hint"); }
        else report(el, r, "passed_after_hint");
      }
    }
    if (first) {
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation();
      try { first.focus(); first.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) { /* ignore */ }
    }
  };
  // The browser's own validity bubble (type=email, required) fires BEFORE submit; swap it for our friendly message.
  const onInvalid = (ev: Event) => {
    const el = ev.target as HTMLInputElement;
    if (!el || el.tagName !== "INPUT" || !(isPhoneField(el) || isEmailField(el))) return;
    ev.preventDefault();
    for (const other of fields()) {
      if (other === el) continue;
      const ro = run(other);
      if (ro.message && other.value.trim()) showMsg(other, ro);
    }
    const r = run(el);
    report(el, r.message ? r : { ok: false, message: el.value.trim() ? "" : (isPhoneField(el) ? "add a phone" : "add your email") }, "native");
    showMsg(el, r.message ? r : { ok: false, blocking: true, message: isPhoneField(el) ? "Please check your phone number." : "Please check your email address." });
    try { el.focus(); } catch (e) { /* ignore */ }
  };
  form.addEventListener("invalid", onInvalid, true);
  listeners.push(() => form.removeEventListener("invalid", onInvalid, true));
  form.addEventListener("submit", onSubmit, true);
  listeners.push(() => form.removeEventListener("submit", onSubmit, true));
  // late-rendered fields (multi-step React forms)
  let mo: MutationObserver | null = null;
  if (typeof MutationObserver !== "undefined") {
    mo = new MutationObserver(() => fields().forEach(wire));
    mo.observe(form, { childList: true, subtree: true });
  }
  return () => { listeners.forEach((f) => f()); if (mo) mo.disconnect(); (form as any).__pcm = false; };
}

/** Attach to every form on the page that has a phone or email input. */
export function attachAll(root: ParentNode = document): void {
  root.querySelectorAll("form").forEach((f) => {
    const has = Array.from(f.querySelectorAll<HTMLInputElement>("input")).some((el) => isPhoneField(el) || isEmailField(el));
    if (has) attachContactChecks(f as HTMLFormElement);
  });
}
