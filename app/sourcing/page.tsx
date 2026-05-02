import Link from "next/link";
import { roles } from "@/lib/roles";
import { StatusBadge } from "@/components/StatusBadge";

export default function SourcingPage() {
  // Aggregate companies across all roles to show top sourcing destinations
  const companyFreq: Record<string, number> = {};
  roles.forEach((r) => {
    r.sourcing.targetCompanies.forEach((c) => {
      companyFreq[c] = (companyFreq[c] || 0) + 1;
    });
  });
  const topCompanies = Object.entries(companyFreq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12);

  return (
    <div className="bg-paper">
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <p className="smallcaps text-ink-muted mb-4">
          Section 03 · Sourcing Intelligence
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tightest text-ink leading-tight">
          Where similar talent
          <br />
          <span className="italic text-accent-forest">already sits.</span>
        </h1>
        <p className="lead mt-6 max-w-prose-wide">
          For each critical role, a curated view of the companies most likely
          to have the right talent — with directional comp bands and lead
          times. Useful for both hiring strategy and competitive talent
          intelligence.
        </p>
      </header>

      {/* Top sourcing destinations summary */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="font-display text-xl font-medium text-ink mb-4">
          Most-frequent sourcing destinations
        </h2>
        <p className="text-sm text-ink-muted mb-6">
          Companies that show up across multiple critical roles — these are the
          natural focal points for VMart's executive search and competitive
          talent monitoring.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {topCompanies.map(([name, count]) => (
            <div
              key={name}
              className="border hairline bg-white p-4 rounded-lg flex justify-between items-baseline"
            >
              <span className="text-sm font-medium text-ink">{name}</span>
              <span className="font-mono text-xs tabular text-ink-muted">
                {count} {count === 1 ? "role" : "roles"}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Per-role sourcing detail */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="font-display text-xl font-medium text-ink mb-6 pb-2 border-b hairline">
          Per-role sourcing intelligence
        </h2>

        <div className="space-y-3">
          {roles.map((role) => (
            <Link
              key={role.id}
              href={`/roles/${role.id}`}
              className="group block p-5 border hairline bg-white rounded-lg hover:border-ink-soft transition-all"
            >
              <div className="grid md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs text-ink-subtle">
                      {String(role.number).padStart(2, "0")}
                    </span>
                    <StatusBadge status={role.status} size="xs" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-ink leading-tight group-hover:text-accent-forest">
                    {role.name}
                  </h3>
                  <p className="text-xs text-ink-muted mt-1">{role.cluster}</p>
                </div>

                <div className="md:col-span-5">
                  <p className="smallcaps text-ink-muted mb-2">
                    Target companies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {role.sourcing.targetCompanies.slice(0, 6).map((c) => (
                      <span
                        key={c}
                        className="text-[11px] bg-paper-soft text-ink-soft px-2 py-0.5 rounded border hairline"
                      >
                        {c}
                      </span>
                    ))}
                    {role.sourcing.targetCompanies.length > 6 && (
                      <span className="text-[11px] text-ink-subtle px-2 py-0.5">
                        +{role.sourcing.targetCompanies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="md:col-span-3 grid grid-cols-2 gap-3">
                  <div>
                    <p className="smallcaps text-ink-muted mb-1">Comp</p>
                    <p className="text-xs font-medium text-ink">
                      {role.sourcing.compBand}
                    </p>
                  </div>
                  <div>
                    <p className="smallcaps text-ink-muted mb-1">Lead</p>
                    <p className="text-xs font-medium text-ink">
                      {role.sourcing.leadTime}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-xs text-ink-muted italic mt-8 text-center">
          All compensation bands and lead times are illustrative — based on
          industry benchmarks. Refine with VMart-specific calibration.
        </p>
      </section>
    </div>
  );
}
