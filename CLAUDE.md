# Primara Website — Claude Code Context

## What This Is
Primara's own marketing site — **live in production at https://primara365.com**.
~60 pages, actively generating leads. Repo: github.com/contactprimara-debug/PriMara (branch `main`).

**Positioning is NATIONWIDE.** Florida/city copy is allowed ONLY on `/locations/*`
SEO pages. Never reintroduce "Florida-only" language on core pages.

## Deploy Rule (standing)
Every change ships: `git push origin main` + `npx vercel deploy --prod --yes --force`.
A Stop hook in `.claude/settings.json` auto-commits/pushes/deploys anything left
in the tree when a session ends — **never leave the tree broken at end of turn.**

## Stack
- Next.js 14.2.35 App Router, TypeScript strict, React 18 (**`useFormState` from
  `react-dom`, NOT React-19 `useActionState`** — this has bitten before)
- Styling: inline styles + CSS vars in `app/globals.css`; Tailwind available for utilities
- Fonts: Instrument Serif (display, `--font-display`) + Syne (UI, `--font-ui`) via next/font
- Animation: GSAP + ScrollTrigger + SplitText + Lenis, loaded from CDN in `app/layout.tsx`.
  Controllers: `AnimationProvider` (Lenis + cursor + reveals), `ScrollStorytelling`
  (pins/h-scroll/counters), `HashScroll` (smooth `#anchor` scrolling), per-section `*Animation.tsx`
- `reactStrictMode: false` on purpose — double-mount breaks GSAP/Lenis init
- Email: Resend. Analytics: GA4 (`@next/third-parties`) + Google tag GT-PB6FNVRG + Ads AW-18204165915
- Hosting: Vercel (project `primara-web`)

## Design System (dark cinematic — full spec in auto-memory `project_primara.md`)
Colors: `--void #050505` bg · `--chalk #E8E4DC` headings · `--ash` body · `--smoke` labels ·
`--gold #C9A84C` accent · `--ember #E8611A` CTAs only · `--wire` borders.
Never white backgrounds, never Inter/Roboto, buttons squared (radius 2–4px).

## Lead Forms (the business-critical path)
Five surfaces, all end in Resend → `liam.costello@primara365.com` (from `Primara
<notifications@primara365.com>`, domain DKIM-verified):

| Surface | Component | Action |
|---|---|---|
| Homepage above-fold strip | `AuditOfferStrip` | `submitContact` |
| Homepage bottom form | `ContactFinal` | `submitContact` |
| `/contact#contact-form` (primary CTA target) | `ContactSection` | `submitContact` |
| `/packages/*` inquiry | `PackageInquiryForm` | `submitPackageInquiry` |
| `/assessment/quiz` | quiz page | `submitAssessment` |

Shared plumbing in `lib/leads.ts` (send, first-name extraction, honeypot check).
Rules:
- `submitContact` requires ONLY name+phone; other fields default. Never tighten —
  stale cached pages must not lose leads.
- Every form renders `<HoneypotField />` (hidden `company` input); a filled value
  → silent fake success, no email.
- If RESEND env is missing the lead is console-logged, visitor still sees success.

## Env Vars (in `.env.local` AND Vercel Production)
- `RESEND_API_KEY` — secret, never log/commit
- `RESEND_FROM_EMAIL` = `Primara <notifications@primara365.com>`
- `NEXT_PUBLIC_GA_ID` = GA4 measurement ID (G-…); GA renders only when set
- `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` = primara365.com

## Page Map (top level)
Core: `/` `/services` `/the-audit` (explainer, links to contact form) `/contact`
`/about` `/work` `/pricing` `/how-it-works` `/faq` `/results` `/thank-you` (noindex)
Verticals: `/primary-care` `/mental-health` · Flagship services: `/services/seo`
`/services/google-ads` + 6 long-tail service pages · `/specialties/*` (6) ·
`/locations/*` (30 FL city pages — geo copy allowed here) · `/blog/*` (8 posts in
`lib/blog.ts`) · `/vs/*` (3 comparisons) · `/packages/foundation|visibility` ·
`/assessment` → `/assessment/quiz` → `/assessment/results` (noindex)

## Commands
- Dev: preview_start "Primara Web — Next.js" (port 3000) — never raw `npm run dev` in Bash
- `npm run check` = typecheck + lint (run before every commit)
- `npm run build` = full production build

## Business Rules
- No pricing on `/the-audit` — pricing comes from the sales conversation
- Contact: liam.costello@primara365.com · +1 (561) 291-2681 · calendly.com/contactprimara/30min
- Founders: Liam Costello & Gio LaRoche · Tagline: Digital Marketing for Independent Medical Practices
- Canonical contact constants live in `lib/siteConfig.ts` — import, don't hardcode
