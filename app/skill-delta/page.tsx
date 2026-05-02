import Link from "next/link";
import { roles } from "@/lib/roles";
import { StatusBadge } from "@/components/StatusBadge";

export default function SkillDeltaPage() {
  // Sort by gap size (top decile - current) descending — biggest gaps first
  const sortedRoles = [...roles]
    .map((r) => {
      const avgCurrent =
        r.skillDelta.reduce((s, d) => s + d.current, 0) / r.skillDelta.length;
      const avgTopDecile =
        r.skillDelta.reduce((s, d) => s + d.topDecile, 0) / r.skillDelta.length;
      return { ...r, avgCurrent, avgTopDecile, gap: avgTopDecile - avgCurrent };
    })
    .sort((a, b) => b.gap - a.gap);

  return (
    <div className="bg-paper">
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <p className="smallcaps text-ink-muted mb-4">
          Section 02 · Skill Delta vs Top Decile
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tightest text-ink leading-tight">
          Where the gap to top-decile peers
          <br />
          <span className="italic text-accent-forest">
            is widest — and where it isn't.
          </span>
        </h1>
        <p className="lead mt-6 max-w-prose-wide">
          Capability assessment across each role's 5 critical dimensions,
          benchmarked against top-decile retailers (Trent, Reliance Retail) for
          retail roles and digital-natives (Meesho, Myntra, Flipkart) for
          digital roles.
        </p>
        <p className="text-xs text-ink-muted mt-4 italic max-w-prose">
          All scores are directional, intended for discussion. Scoring is on a
          1–5 scale where 5 represents top-decile world-class capability for
          the specific dimension.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="border hairline bg-white rounded-xl overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-4 bg-paper-soft border-b hairline text-xs">
            <div className="col-span-1 smallcaps text-ink-muted">#</div>
            <div className="col-span-5 smallcaps text-ink-muted">Role</div>
            <div className="col-span-2 smallcaps text-ink-muted text-right">
              Current
            </div>
            <div className="col-span-2 smallcaps text-ink-muted text-right">
              Top Decile
            </div>
            <div className="col-span-2 smallcaps text-ink-muted text-right">
              Δ Gap
            </div>
          </div>

          {sortedRoles.map((role, i) => (
            <Link
              key={role.id}
              href={`/roles/${role.id}`}
              className="grid grid-cols-12 px-6 py-4 border-b hairline last:border-0 hover:bg-paper-soft transition-colors items-center text-sm"
            >
              <div className="col-span-1 font-mono text-xs text-ink-subtle">
                {String(role.number).padStart(2, "0")}
              </div>
              <div className="col-span-5">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-display text-base font-medium text-ink">
                    {role.name}
                  </p>
                  <StatusBadge status={role.status} size="xs" />
                </div>
                <p className="text-xs text-ink-muted">{role.cluster}</p>
              </div>
              <div className="col-span-2 text-right tabular text-ink-soft">
                {role.avgCurrent.toFixed(1)}
              </div>
              <div className="col-span-2 text-right tabular text-ink-soft">
                {role.avgTopDecile.toFixed(1)}
              </div>
              <div className="col-span-2 text-right">
                <GapBar gap={role.gap} />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <SummaryCard
            heading="Widest gaps"
            items={sortedRoles.slice(0, 3).map((r) => ({
              name: r.name,
              gap: r.gap.toFixed(1),
            }))}
            tone="rust"
          />
          <SummaryCard
            heading="Mid-range gaps"
            items={sortedRoles
              .slice(Math.floor(sortedRoles.length / 2) - 1, Math.floor(sortedRoles.length / 2) + 2)
              .map((r) => ({ name: r.name, gap: r.gap.toFixed(1) }))}
            tone="gold"
          />
          <SummaryCard
            heading="Narrowest gaps"
            items={sortedRoles
              .slice(-3)
              .reverse()
              .map((r) => ({ name: r.name, gap: r.gap.toFixed(1) }))}
            tone="forest"
          />
        </div>
      </section>
    </div>
  );
}

function GapBar({ gap }: { gap: number }) {
  const width = Math.min((gap / 3) * 100, 100); // 3.0 is largest realistic gap
  const tone =
    gap >= 2.0
      ? "bg-accent-rust"
      : gap >= 1.0
      ? "bg-accent-gold"
      : "bg-accent-forest";

  return (
    <div className="flex items-center justify-end gap-3">
      <div className="w-20 h-1.5 bg-paper-warm rounded-full overflow-hidden">
        <div
          className={`h-full ${tone} rounded-full transition-all`}
          style={{ width: `${width}%` }}
        />
      </div>
      <span className="font-mono text-xs tabular text-ink-soft w-8 text-right">
        {gap.toFixed(1)}
      </span>
    </div>
  );
}

function SummaryCard({
  heading,
  items,
  tone,
}: {
  heading: string;
  items: { name: string; gap: string }[];
  tone: "rust" | "gold" | "forest";
}) {
  const toneCls =
    tone === "rust"
      ? "border-accent-rust"
      : tone === "gold"
      ? "border-accent-gold"
      : "border-accent-forest";

  return (
    <div className={`border-l-2 ${toneCls} pl-4 py-2`}>
      <p className="smallcaps text-ink-muted mb-3">{heading}</p>
      <ul className="space-y-2">
        {items.map((it) => (
          <li
            key={it.name}
            className="flex justify-between items-baseline text-sm"
          >
            <span className="text-ink-soft">{it.name}</span>
            <span className="font-mono text-xs tabular text-ink-muted ml-2">
              {it.gap}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
