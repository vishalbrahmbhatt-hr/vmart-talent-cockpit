import type { RoleStatus } from "@/lib/roles";

const labels: Record<RoleStatus, string> = {
  existing: "Existing",
  elevated: "Elevation",
  proposed: "Proposed ★",
};

export function StatusBadge({
  status,
  size = "sm",
}: {
  status: RoleStatus;
  size?: "sm" | "xs";
}) {
  const cls =
    status === "existing"
      ? "badge-existing"
      : status === "elevated"
      ? "badge-elevated"
      : "badge-proposed";

  const sizing = size === "xs" ? "text-[10px] px-2 py-0.5" : "text-xs px-2.5 py-1";

  return (
    <span
      className={`inline-flex items-center rounded-full ${cls} ${sizing} font-medium tracking-wide`}
    >
      {labels[status]}
    </span>
  );
}
