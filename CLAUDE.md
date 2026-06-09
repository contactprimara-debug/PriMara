# Primara Website — Claude Code Context

## What This Is
The Primara agency's own marketing website. Not yet built.
This is what prospects find when they Google "Primara" after a drop-in.

## Stack
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Components: shadcn/ui (forms)
- Email: Resend → liam.costello@primara365.com
- Analytics: Plausible (privacy-respecting, no cookie banner needed)
- Hosting: Vercel
- Language: TypeScript

## Pages (4 total)
- / Home
- /services
- /the-audit
- /contact

## Environment Variables
RESEND_API_KEY=
RESEND_FROM_EMAIL=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=primara.com
NEXT_PUBLIC_SITE_URL=https://primara.com

## Target SEO Keywords
- medical marketing West Palm Beach
- digital marketing for doctors Florida
- Google Business Profile for medical practice
- primary care website design
- medical practice SEO Florida

## Brand
- Agency: PRIMARA
- Founders: Liam Costello & Gio LaRoche
- Email: liam.costello@primara365.com
- Phone: +1 (561) 291-2681
- Calendly: calendly.com/contactprimara/30min
- Tagline: Digital Marketing for Independent Medical Practices

## Design Language
- Typography: Fraunces (serif headings) + Inter (body) + JetBrains Mono (code/data)
- Colors: Cream #f5f1ea · Ink #0a0a0a · Accent red #b8321a · Gold #8a6a2a
- Aesthetic: editorial, refined, credibility-first — not SaaS gradients
- No stock medical imagery, no AI-generated photos, no emoji design elements

## Schema
- Organization, Service, Article, ContactPage

## Rules
- Audit request form on /the-audit and /contact → Resend → liam.costello@primara365.com
- Calendly embedded on /contact
- No pricing shown on /the-audit page — pricing comes from the salesperson
- Domain: primara.com (confirm availability before build)

## Build Order (6 prompts — paste sequentially)
Prompt 1: Foundation & Brand Setup (Next.js init, design tokens, Header, Footer, siteConfig.ts)
Prompt 2: Home Page (hero, problem stats, services overview, audit teaser, pricing tease, CTA)
Prompt 3: Services Page (all 5 services, 2 packages, contract note, CTA)
Prompt 4: The Audit Page (what's in it, sample preview, how it works, CTA)
Prompt 5: Contact Page (audit request form, Calendly embed, server action → Resend)
Prompt 6: Polish, SEO, Deploy Prep (sitemap, OG images, structured data, accessibility, README)
