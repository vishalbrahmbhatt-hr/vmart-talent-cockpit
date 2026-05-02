import Link from "next/link";
import { roles } from "@/lib/roles";

export default function HomePage() {
  const total = roles.length;
  const proposed = roles.filter((r) => r.status === "proposed").length;
  const elevated = roles.filter((r) => r.status === "elevated").length;
  const existing = roles.filter((r) => r.status === "existing").length;

  return (
    <div className="bg-paper paper-texture">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="fade-up">
          <p className="smallcaps text-accent-forest mb-6">
            CHRO Office — V-Mart Retail Limited
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tightest text-ink leading-[1.05] max-w-4xl">
            A thinking framework
            <br />
            for VMart's most consequential
            <br />
            <span className="italic text-accent-forest">people decisions.</span>
          </h1>
          <p className="lead mt-10 max-w-prose">
            Sixteen critical roles across both businesses. Capability deltas
            against top-decile peers. Sourcing intelligence for where to find
            the talent. And an AI thought partner that holds the full picture
            in mind so you don't have to.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/roles"
              className="px-6 py-3 bg-ink text-paper rounded-full text-sm font-medium hover:bg-accent-forest transition-colors"
            >
              Explore the 16 critical roles
            </Link>
            <Link
              href="/thought-partner"
              className="px-6 py-3 bg-paper-soft text-ink rounded-full text-sm font-medium border hairline hover:bg-paper-warm"
            >
              Open the Thought Partner →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y hairline bg-paper-soft">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          <Stat number="2" label="Business segments" sub="Retail Trade + LimeRoad" />
          <Stat number="577" label="Stores" sub="across 26 states (Mar 26)" />
          <Stat
            number="~12K"
            label="Employees"
            sub="frontline + corporate"
          />
          <Stat
            number={total.toString()}
            label="Critical roles mapped"
            sub={`${existing} existing · ${elevated} elevated · ${proposed} proposed ★`}
          />
        </div>
      </section>

      {/* Why this matters */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-x-8 gap-y-12">
        <div className="md:col-span-5">
          <p className="smallcaps text-ink-muted mb-3">The frame</p>
          <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-ink leading-tight">
            Talent density is the under-discussed lever
            <span className="italic text-accent-forest"> in VMart's recovery story.</span>
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-2">
          <div className="space-y-6 text-ink-soft text-[15px] leading-relaxed">
            <p>
              VMart's FY26 numbers tell a recovery story —{" "}
              <span className="text-ink font-medium">
                +14% YoY revenue, +313% PAT, record store additions
              </span>
              . The market is watching whether this sustains. What sustains it
              is whether the right people sit in the right seats.
            </p>
            <p>
              This dashboard maps sixteen seats where capability quality moves
              EBITDA, customer outcomes, or the FY27–28 strategic agenda. Five
              are <span className="text-accent-rust font-medium">★ proposed</span>{" "}
              — not because they're missing, but because they could meaningfully
              shift the trajectory if the CHRO chooses to act on them.
            </p>
            <p className="text-ink-muted text-sm pt-3 border-l-2 border-line pl-4 italic">
              This is a thinking framework, not a verdict. Numbers throughout
              are directional, drawn from publicly available context and
              external benchmarks. Intended to support discussion.
            </p>
          </div>
        </div>
      </section>

      {/* Section cards */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <p className="smallcaps text-ink-muted mb-6">What's inside</p>
        <div className="grid md:grid-cols-2 gap-4">
          <SectionCard
            href="/roles"
            number="01"
            title="Critical Roles"
            description="The 16 seats — for each one, why it matters, the capability framework, and a first-90-days view."
          />
          <SectionCard
            href="/skill-delta"
            number="02"
            title="Skill Delta"
            description="Capability assessment vs top-decile retailers (Trent, Reliance) and digital-natives (Meesho, Myntra). Directional."
          />
          <SectionCard
            href="/sourcing"
            number="03"
            title="Sourcing Intelligence"
            description="For each role with a gap — target companies, comp bands, lead times, build-vs-buy view."
          />
          <SectionCard
            href="/thought-partner"
            number="04"
            title="AI Thought Partner"
            description="A chat assistant pre-loaded with VMart context and the role data. Pre-built CHRO prompts to start fast."
          />
        </div>
      </section>
    </div>
  );
}

function Stat({
  number,
  label,
  sub,
}: {
  number: string;
  label: string;
  sub: string;
}) {
  return (
    <div>
      <div className="font-display text-4xl font-semibold tabular text-ink">
        {number}
      </div>
      <div className="text-sm font-medium text-ink mt-1">{label}</div>
      <div className="text-xs text-ink-muted mt-0.5">{sub}</div>
    </div>
  );
}

function SectionCard({
  href,
  number,
  title,
  description,
}: {
  href: string;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group block p-6 border hairline rounded-xl hover:border-ink-soft hover:bg-white transition-all"
    >
      <div className="flex items-start gap-4">
        <span className="font-mono text-xs text-ink-subtle">{number}</span>
        <div className="flex-1">
          <h3 className="font-display text-xl font-medium text-ink mb-2 group-hover:text-accent-forest">
            {title}
          </h3>
          <p className="text-sm text-ink-muted leading-relaxed">
            {description}
          </p>
          <span className="inline-block text-xs text-accent-forest mt-3 font-medium">
            Open →
          </span>
        </div>
      </div>
    </Link>
  );
}
