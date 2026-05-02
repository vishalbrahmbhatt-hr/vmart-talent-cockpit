import Link from "next/link";
import { notFound } from "next/navigation";
import { roles, getRoleById } from "@/lib/roles";
import { StatusBadge } from "@/components/StatusBadge";
import { SkillRadar } from "@/components/SkillRadar";

export function generateStaticParams() {
  return roles.map((r) => ({ id: r.id }));
}

export default function RolePage({ params }: { params: { id: string } }) {
  const role = getRoleById(params.id);
  if (!role) notFound();

  const currentIdx = roles.findIndex((r) => r.id === role.id);
  const prev = currentIdx > 0 ? roles[currentIdx - 1] : null;
  const next = currentIdx < roles.length - 1 ? roles[currentIdx + 1] : null;

  return (
    <div className="bg-paper">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-6 pt-8 text-xs text-ink-muted">
        <Link href="/roles" className="hover:text-ink">
          ← All critical roles
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-5xl mx-auto px-6 pt-8 pb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-ink-subtle">
            ROLE {String(role.number).padStart(2, "0")} / 16
          </span>
          <StatusBadge status={role.status} size="xs" />
          <span className="text-xs text-ink-muted">{role.cluster}</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tightest text-ink leading-tight">
          {role.name}
        </h1>

        <p className="mt-6 lead italic max-w-prose-wide">{role.essence}</p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t hairline">
          <Meta label="Segment" value={role.segment} />
          <Meta label="Reports to" value={role.reportsTo} />
          <Meta label="Seniority" value={role.seniority} />
          <Meta label="Lead time" value={role.sourcing.leadTime} />
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-16">
        {/* Why this seat matters */}
        <Section number="01" title="Why this seat matters">
          <p className="text-ink-soft leading-relaxed">{role.whyCritical}</p>
          <div className="mt-6 p-4 bg-accent-forestSoft border-l-2 border-accent-forest rounded">
            <span className="smallcaps text-accent-forest mb-1 block">
              Indicative value at stake
            </span>
            <p className="text-sm text-ink-soft leading-relaxed">
              {role.valueAtStakeNote}
            </p>
          </div>
        </Section>

        {/* KPIs the seat owns */}
        <Section number="02" title="KPIs the seat would own">
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5 text-sm text-ink-soft">
            {role.kpis.map((kpi, i) => (
              <li
                key={i}
                className="flex gap-3 items-start py-1 border-b hairline border-line-soft"
              >
                <span className="font-mono text-[10px] text-ink-subtle pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{kpi}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Capability framework with radar */}
        <Section number="03" title="Capability framework">
          <div className="grid md:grid-cols-12 gap-x-8 gap-y-8 items-start">
            <div className="md:col-span-7 space-y-4">
              {role.capabilities.map((cap, i) => (
                <div key={i} className="border-l-2 border-line pl-4 py-1">
                  <h4 className="font-display text-base font-medium text-ink mb-1">
                    {cap.name}
                  </h4>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="md:col-span-5">
              <div className="bg-paper-soft p-4 rounded-lg border hairline">
                <p className="smallcaps text-ink-muted mb-2">
                  Skill delta vs top decile
                </p>
                <SkillRadar dimensions={role.skillDelta} />
                <p className="text-[10px] text-ink-subtle mt-3 italic">
                  Directional; based on industry benchmarks
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Benchmarks */}
        <Section number="04" title="Benchmarks across retail">
          <p className="text-ink-soft leading-relaxed">{role.benchmarks}</p>
        </Section>

        {/* Where similar talent sits / sourcing */}
        <Section number="05" title="Where similar talent typically sits">
          <p className="text-ink-soft leading-relaxed mb-6">
            {role.sourcing.summary}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <SourcingPanel
              label="Target Companies"
              value={
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {role.sourcing.targetCompanies.map((c) => (
                    <span
                      key={c}
                      className="text-[11px] bg-paper-soft text-ink-soft px-2 py-0.5 rounded border hairline"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              }
            />
            <SourcingPanel
              label="Comp band (illustrative)"
              value={
                <p className="font-display text-base text-ink mt-1">
                  {role.sourcing.compBand}
                </p>
              }
            />
            <SourcingPanel
              label="Lead time"
              value={
                <p className="font-display text-base text-ink mt-1">
                  {role.sourcing.leadTime}
                </p>
              }
            />
          </div>
        </Section>

        {/* Build vs buy */}
        <Section number="06" title="Build vs buy">
          <p className="text-ink-soft leading-relaxed">{role.buildVsBuy}</p>
        </Section>

        {/* Development pathway */}
        <Section number="07" title="Development pathway">
          <p className="text-ink-soft leading-relaxed">
            {role.developmentPathway}
          </p>
        </Section>

        {/* First 90 days */}
        <Section number="08" title="First 90 days frame">
          <p className="text-ink-soft leading-relaxed">{role.first90Days}</p>
        </Section>

        {/* Pagination */}
        <div className="grid grid-cols-2 gap-4 pt-12 border-t hairline">
          {prev ? (
            <Link
              href={`/roles/${prev.id}`}
              className="group block p-4 rounded-lg hover:bg-paper-soft"
            >
              <span className="smallcaps text-ink-muted">← Previous role</span>
              <p className="font-display text-base mt-1 text-ink group-hover:text-accent-forest">
                {prev.name}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/roles/${next.id}`}
              className="group block p-4 rounded-lg hover:bg-paper-soft text-right"
            >
              <span className="smallcaps text-ink-muted">Next role →</span>
              <p className="font-display text-base mt-1 text-ink group-hover:text-accent-forest">
                {next.name}
              </p>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="smallcaps text-ink-muted mb-1">{label}</p>
      <p className="text-sm text-ink-soft">{value}</p>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-baseline gap-4 mb-5 pb-2 border-b hairline">
        <span className="font-mono text-xs text-ink-subtle tabular">
          {number}
        </span>
        <h2 className="font-display text-2xl font-medium tracking-tight text-ink">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

function SourcingPanel({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="border hairline bg-white p-4 rounded-lg">
      <p className="smallcaps text-ink-muted">{label}</p>
      {value}
    </div>
  );
}
