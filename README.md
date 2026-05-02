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

## Setup (5 minutes)

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

## Deploying to Vercel (recommended for the interview)

You want the demo to run from a real URL — not your laptop. Vercel makes this 90 seconds.

**1. Push to GitHub.** Create a new repo, push this codebase to it.

**2. Import on Vercel.** Go to https://vercel.com/new and import the GitHub repo. Vercel auto-detects Next.js — defaults are fine.

**3. Add the environment variable.** In Vercel project settings, under "Environment Variables," add:

| Name                | Value                  |
| ------------------- | ---------------------- |
| `ANTHROPIC_API_KEY` | `sk-ant-...` (your key) |

**4. Deploy.** Vercel gives you a `https://your-project.vercel.app` URL. Bookmark it for the interview.

If you change anything later, `git push` to GitHub and Vercel auto-redeploys.

---

## The 60-second CHRO demo script

When you open this in the interview, you have maybe 60–90 seconds before the CHRO is either leaning forward or politely waiting for you to finish. Here's a flow that's been engineered for that.

**0:00 — Open the Overview page.** Don't speak first. Let them read the hero. The serif headline and the framing line ("a thinking framework, not a verdict") sets tone immediately. Then say:

> "I built this to think through what talent density means at VMart specifically — across both businesses, not just HR's internal org. Sixteen roles where capability quality moves EBITDA, customer outcomes, or the FY27 agenda. Five are proposed — small set, high signal."

**0:20 — Click "Critical Roles."** Let them see the cluster grouping. Don't walk through every role. Say:

> "I won't take you through all sixteen. Let me show you two — one that's about capability uplift on an existing seat, one that's a proposed addition."

**0:30 — Click "Head of Demand Forecasting & Replenishment."** Scroll briefly through the page. Pause on the Skill Delta radar. Say:

> "Forecasting is one of those quiet roles where ML maturity has consolidated rapidly across retail. The seat exists; the gap is in capability depth. The dashboard suggests where to find that capability and what the lead time looks like."

**0:50 — Go back. Click "Frontline Experience & Store Manager Capability."** Pause on "Why this seat matters."

> "This is the proposed role I'd most want to discuss. Frontline attrition is a known burning issue. The question isn't whether to invest — it's whether the architecture works through one accountable owner or through a distributed structure. Top retailers have done both; the dashboard shows the tradeoffs."

**1:10 — Click "Thought Partner."** This is the wow.

> "The dashboard is static, but a CHRO doesn't think in static views. So I built an AI partner that has the full context — financials, the 16 roles, competitive landscape — loaded in."

**Click the prompt: *"What should be my top 3 talent priorities for the next 6 months?"*** Let it stream.

The response will come back grounded, structured, and VMart-specific. Don't speak while it streams. Let them read.

**1:30 — Close.**

> "I built this to make our first conversation about something concrete. Happy to walk through the assumptions on any role, or to show how the prompts get more specific as you go."

---

## Architecture notes (for the curious)

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

---

Built for the V-Mart Program Manager — CHRO Office interview.
May 2026.
