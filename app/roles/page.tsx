import Link from "next/link";
import { rolesByCluster, clusters } from "@/lib/roles";
import { StatusBadge } from "@/components/StatusBadge";

export default function RolesPage() {
  const grouped = rolesByCluster();

  return (
    <div className="bg-paper">
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <p className="smallcaps text-ink-muted mb-4">
          Section 01 · Critical Roles Map
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tightest text-ink leading-tight">
          The sixteen seats that
          <br />
          <span className="italic text-accent-forest">
            move the trajectory.
          </span>
        </h1>
        <p className="lead mt-6 max-w-prose-wide">
          Mapped across both businesses and seven functional clusters. Click
          into any role to see the capability framework, the gap, where similar
          talent typically sits, and a first-90-days view.
        </p>

        <div className="mt-10 flex flex-wrap gap-3 text-xs text-ink-muted">
          <Legend label="Existing" tone="existing" />
          <Legend label="Elevation opportunity" tone="elevated" />
          <Legend label="Proposed (★)" tone="proposed" />
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 pb-20 space-y-16">
        {clusters.map((cluster) => {
          const items = grouped[cluster];
          if (items.length === 0) return null;
          return (
            <div key={cluster}>
              <div className="flex items-baseline justify-between mb-6 pb-3 border-b hairline">
                <h2 className="font-display text-2xl font-medium tracking-tight text-ink">
                  {cluster}
                </h2>
                <span className="smallcaps text-ink-muted">
                  {items.length} role{items.length > 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {items.map((role) => (
                  <Link
                    key={role.id}
                    href={`/roles/${role.id}`}
                    className="group block p-5 border hairline rounded-lg bg-white hover:border-accent-forest hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-baseline gap-3 flex-1 min-w-0">
                        <span className="font-mono text-xs text-ink-subtle">
                          {String(role.number).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-lg font-medium text-ink leading-tight group-hover:text-accent-forest">
                          {role.name}
                        </h3>
                      </div>
                      <StatusBadge status={role.status} size="xs" />
                    </div>
                    <p className="text-sm text-ink-muted leading-relaxed mt-3 italic">
                      {role.essence}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-[11px] text-ink-subtle">
                      <span>{role.segment}</span>
                      <span>·</span>
                      <span>{role.seniority}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

function Legend({
  label,
  tone,
}: {
  label: string;
  tone: "existing" | "elevated" | "proposed";
}) {
  const dot =
    tone === "existing"
      ? "bg-accent-forest"
      : tone === "elevated"
      ? "bg-accent-gold"
      : "bg-accent-rust";

  return (
    <span className="inline-flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${dot}`} />
      {label}
    </span>
  );
}
