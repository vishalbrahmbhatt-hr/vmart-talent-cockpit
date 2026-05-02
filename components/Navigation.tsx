"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Overview" },
  { href: "/roles", label: "Critical Roles" },
  { href: "/skill-delta", label: "Skill Delta" },
  { href: "/sourcing", label: "Sourcing Intelligence" },
  { href: "/thought-partner", label: "Thought Partner" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-paper/85 border-b hairline">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-xl font-semibold text-ink tracking-tight">
            Talent Density
          </span>
          <span className="font-display text-xl font-semibold italic text-accent-forest tracking-tight">
            Cockpit
          </span>
          <span className="ml-3 smallcaps text-ink-subtle hidden md:inline">
            CHRO Office · V-Mart
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm tracking-tight rounded-md ${
                  isActive
                    ? "text-ink font-medium"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="block h-px w-full bg-accent-forest mt-1.5 -mb-2" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
