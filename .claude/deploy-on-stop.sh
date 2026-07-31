#!/usr/bin/env bash
# ── Auto-deploy on session end ────────────────────────────────────────────
# Ships uncommitted work to production — but ONLY if it passes typecheck and
# lint first. A broken edit left in the tree gets held back with a warning
# instead of going live.
#
# Emits JSON on stdout so Claude Code surfaces the outcome to the user.
# Always exits 0: this hook must never block the session from ending.

set -uo pipefail

REPO="/Users/giolaroche/primara-web"
LOG="/tmp/primara-deploy.log"
cd "$REPO" || exit 0

# Nothing staged or unstaged → nothing to do.
git status --porcelain | grep -q . || exit 0

: > "$LOG"

# ── Gate 1: typecheck + lint ─────────────────────────────────────────────
if ! npm run check >>"$LOG" 2>&1; then
  echo "{\"systemMessage\":\"Auto-deploy SKIPPED — typecheck/lint failed, so nothing was committed or deployed. The live site is untouched. Fix the errors, then deploy. Details: $LOG\"}"
  exit 0
fi

# ── Commit ────────────────────────────────────────────────────────────────
git add -A
git commit -q -m "Auto-deploy: changes on $(date '+%Y-%m-%d %H:%M')" >>"$LOG" 2>&1

# ── Push ──────────────────────────────────────────────────────────────────
if ! git push -q origin main >>"$LOG" 2>&1; then
  echo "{\"systemMessage\":\"Changes committed locally but the push to GitHub FAILED — nothing deployed. Details: $LOG\"}"
  exit 0
fi

# ── Deploy ────────────────────────────────────────────────────────────────
# A Vercel build failure leaves the previous deployment serving, so the live
# site stays up either way.
if npx vercel deploy --prod --yes --force >>"$LOG" 2>&1; then
  echo '{"systemMessage":"Deployed to primara365.com"}'
else
  echo "{\"systemMessage\":\"Pushed to GitHub, but the Vercel deploy FAILED. The previous version is still live. Details: $LOG\"}"
fi

exit 0
