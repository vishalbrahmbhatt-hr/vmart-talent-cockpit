import { ChatInterface } from "@/components/ChatInterface";
import { suggestedPrompts } from "@/lib/system-prompt";

export default function ThoughtPartnerPage() {
  return (
    <div className="bg-paper">
      <header className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <p className="smallcaps text-ink-muted mb-4">
          Section 04 · AI Thought Partner
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tightest text-ink leading-tight">
          A thinking partner that holds
          <br />
          the full picture <span className="italic text-accent-forest">in mind.</span>
        </h1>
        <p className="lead mt-6 max-w-prose-wide">
          Pre-loaded with VMart's business context, financial trajectory,
          competitive landscape, and the 16 critical roles. Click a suggested
          prompt or type your own — get back grounded reasoning, not generic
          advice.
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <ChatInterface suggestedPrompts={suggestedPrompts} />
      </div>
    </div>
  );
}
