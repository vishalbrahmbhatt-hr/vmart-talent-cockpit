# Talent Density Cockpit

A strategic decision-support dashboard built for the V-Mart CHRO Office.
Maps 16 critical roles across both businesses, with capability deltas vs top-decile peers, sourcing intelligence, and an AI thought partner.

Built with Next.js 14, TypeScript, Tailwind CSS, Recharts, and the Anthropic Claude API.

---

## What's inside

**Section 01 — Critical Roles Map.** All 16 seats, grouped into 7 functional clusters. Each role has its own page covering: why it matters, value at stake, KPIs the seat owns, capability framework, benchmarks, sourcing intelligence (target companies, comp band, lead time), build vs buy, development pathway, first 90 days.

**Section 02 — Skill Delta vs Top Decile.** Capability assessment of each role across 5 dimensions, sorted by gap size. Heatmap-style table with summary cards highlighting the widest, mid-range, and narrowest gaps.

**Section 03 — Sourcing Intelligence.** Where similar talent typically sits — by company. Aggregated view of top sourcing destinations across roles, plus per-role detail.

**Section 04 — AI Thought Partner.** A chat interface preloaded with VMart context (financials, strategy, competitive landscape) and the 16-role data. Six categories of pre-built prompts that demonstrate the AI's range, plus free-form questions.

---

## Setup

You'll need Node.js 18.17+ and an Anthropic API key.

**1. Clone and install dependencies**

```bash
npm install
```

**2. Configure your Anthropic API key**

Get an API key from https://console.anthropic.com/

```bash
cp .env.local.example .env.local
```

Then open `.env.local` and replace `your_api_key_here` with your real key.

**3. Run locally**

```bash
npm run dev
```

Visit http://localhost:3000

That's it. Every page works; the AI Thought Partner streams responses in real time.

---

## Architecture notes

- **Next.js 14 App Router** for the routing — server components everywhere except the chat (client component for streaming).
- **Tailwind CSS** with a custom theme — refined editorial aesthetic, Fraunces serif + DM Sans.
- **Recharts** for the skill radar charts.
- **Anthropic SDK with streaming** for the chat — the system prompt in `lib/system-prompt.ts` is the IP that makes the AI behave like a VMart-aware advisor.
- **No database.** All role data is in `lib/roles.ts` — single source of truth, drives every page.
- **Single repo, single deploy.** No separate frontend/backend.

To customize for a different audience, edit:

- `lib/roles.ts` — change the 16 roles, capabilities, sourcing data
- `lib/system-prompt.ts` — change the AI's context and tone
- `tailwind.config.ts` and `app/globals.css` — change the visual theme

---

## A note on the numbers

Every quantification in this dashboard is directional — drawn from public information about VMart, industry benchmarks, and the kind of estimates a thoughtful Chief of Staff would put together for a CHRO conversation. Nothing is audited. The framing throughout is "for discussion, not for accounting."

This is intentional. The point of the dashboard isn't to be right about every figure. It's to be useful enough to make the right conversations easier to have.
