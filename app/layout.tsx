import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Talent Density Cockpit · V-Mart CHRO Office",
  description:
    "A strategic decision-support tool for the V-Mart CHRO Office — mapping critical roles, capability gaps, sourcing intelligence, and an AI thought partner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="border-t hairline mt-24 py-8">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-xs text-ink-muted">
            <div>
              <span className="smallcaps">Talent Density Cockpit</span>
              <span className="ml-3 text-ink-subtle">
                Built for CHRO Office discussion
              </span>
            </div>
            <div className="text-ink-subtle">
              Numbers throughout are directional · for discussion, not audit
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
