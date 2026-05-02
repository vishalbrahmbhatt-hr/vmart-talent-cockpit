"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface PromptCategory {
  category: string;
  prompts: string[];
}

export function ChatInterface({
  suggestedPrompts,
}: {
  suggestedPrompts: PromptCategory[];
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;
    setError(null);

    const userMsg: Message = { role: "user", content: content.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setIsLoading(true);

    // Add empty assistant message for streaming
    setMessages([...updated, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
          errorData.error || `Request failed with status ${res.status}`
        );
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("Streaming not supported");
      const decoder = new TextDecoder();
      let assistantContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantContent += chunk;
        setMessages([
          ...updated,
          { role: "assistant", content: assistantContent },
        ]);
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      setError(message);
      setMessages(updated); // Remove the empty assistant message on error
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const showSuggestions = messages.length === 0;

  return (
    <div className="border hairline bg-white rounded-xl overflow-hidden flex flex-col">
      {/* Messages area */}
      <div className="min-h-[420px] max-h-[640px] overflow-y-auto p-6 md:p-8">
        {showSuggestions ? (
          <SuggestedPromptGrid
            categories={suggestedPrompts}
            onSelect={sendMessage}
          />
        ) : (
          <div className="space-y-6">
            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} isStreaming={isLoading && i === messages.length - 1} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 rounded-lg bg-accent-rustSoft border border-accent-rust text-sm text-accent-rust">
            {error}
            {error.includes("API key") && (
              <p className="mt-2 text-xs text-ink-muted">
                Add your Anthropic API key to <code className="font-mono">.env.local</code> as <code className="font-mono">ANTHROPIC_API_KEY</code> and restart.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="border-t hairline bg-paper-soft px-4 py-3 flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            messages.length === 0
              ? "Or type your own question for the Thought Partner..."
              : "Ask a follow-up..."
          }
          disabled={isLoading}
          className="flex-1 bg-white border hairline rounded-full px-5 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:border-accent-forest disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="px-5 py-2.5 rounded-full bg-ink text-paper text-sm font-medium hover:bg-accent-forest disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Thinking..." : "Ask"}
        </button>
      </form>

      {messages.length > 0 && (
        <div className="border-t hairline bg-paper-soft px-4 py-2 flex justify-between items-center text-xs text-ink-muted">
          <span className="smallcaps">{messages.length / 2 < 1 ? "..." : `${Math.ceil(messages.length / 2)} exchange${Math.ceil(messages.length / 2) > 1 ? "s" : ""}`}</span>
          <button
            onClick={() => {
              setMessages([]);
              setError(null);
            }}
            className="text-xs text-ink-muted hover:text-ink"
          >
            Clear conversation
          </button>
        </div>
      )}
    </div>
  );
}

function SuggestedPromptGrid({
  categories,
  onSelect,
}: {
  categories: PromptCategory[];
  onSelect: (prompt: string) => void;
}) {
  return (
    <div>
      <p className="smallcaps text-ink-muted mb-1">Suggested prompts</p>
      <p className="text-sm text-ink-muted mb-6">
        Click any prompt to start. Or scroll past these to ask your own.
      </p>
      <div className="space-y-6">
        {categories.map((cat) => (
          <div key={cat.category}>
            <h4 className="font-display text-base font-medium text-ink mb-3">
              {cat.category}
            </h4>
            <div className="space-y-2">
              {cat.prompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => onSelect(prompt)}
                  className="block w-full text-left p-3 border hairline rounded-lg hover:border-accent-forest hover:bg-paper-soft transition-all group"
                >
                  <span className="text-sm text-ink-soft italic group-hover:text-ink">
                    {prompt}
                  </span>
                  <span className="block text-xs text-accent-forest opacity-0 group-hover:opacity-100 mt-1">
                    Ask this →
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatMessage({
  message,
  isStreaming,
}: {
  message: Message;
  isStreaming: boolean;
}) {
  if (message.role === "user") {
    return (
      <div className="flex justify-end fade-in">
        <div className="max-w-[80%] bg-ink text-paper rounded-2xl rounded-tr-sm px-5 py-3 text-sm leading-relaxed">
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 fade-in">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-forest text-paper flex items-center justify-center font-display text-xs font-semibold">
        TP
      </div>
      <div className="flex-1 pt-1">
        <p className="smallcaps text-ink-muted mb-2">Thought Partner</p>
        <div className="prose prose-sm max-w-none text-ink-soft leading-relaxed">
          <FormattedContent content={message.content} />
          {isStreaming && message.content.length === 0 && (
            <span className="inline-block w-2 h-4 bg-accent-forest animate-pulse" />
          )}
          {isStreaming && message.content.length > 0 && (
            <span className="inline-block w-1.5 h-4 bg-accent-forest animate-pulse ml-0.5 align-middle" />
          )}
        </div>
      </div>
    </div>
  );
}

// Lightweight markdown-ish formatter — handles **bold**, *italic*, and paragraphs
function FormattedContent({ content }: { content: string }) {
  // Split into paragraphs and lines
  const paragraphs = content.split("\n\n");

  return (
    <>
      {paragraphs.map((para, i) => {
        const trimmed = para.trim();
        if (!trimmed) return null;

        // Heading detection
        if (trimmed.startsWith("**") && trimmed.endsWith("**") && !trimmed.slice(2, -2).includes("**")) {
          return (
            <h4
              key={i}
              className="font-display text-base font-medium text-ink mt-5 mb-2 first:mt-0"
            >
              {trimmed.slice(2, -2)}
            </h4>
          );
        }

        // List detection (lines starting with - or *)
        const lines = trimmed.split("\n");
        const isListBlock = lines.every((l) => /^\s*[-*]\s+/.test(l));
        if (isListBlock && lines.length > 1) {
          return (
            <ul key={i} className="my-3 space-y-1.5 pl-4">
              {lines.map((l, j) => (
                <li key={j} className="text-sm text-ink-soft">
                  {parseInline(l.replace(/^\s*[-*]\s+/, ""))}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="my-3 first:mt-0 last:mb-0 text-sm">
            {parseInline(trimmed)}
          </p>
        );
      })}
    </>
  );
}

function parseInline(text: string): React.ReactNode[] {
  // Parse **bold** and *italic* — simple state machine
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let key = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    const m = match[0];
    if (m.startsWith("**") && m.endsWith("**")) {
      parts.push(
        <strong key={key++} className="text-ink font-medium">
          {m.slice(2, -2)}
        </strong>
      );
    } else if (m.startsWith("*") && m.endsWith("*")) {
      parts.push(
        <em key={key++} className="italic">
          {m.slice(1, -1)}
        </em>
      );
    }
    last = match.index + m.length;
  }

  if (last < text.length) parts.push(text.slice(last));

  return parts;
}
