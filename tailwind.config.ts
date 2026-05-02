import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Menlo", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#1A1715",
          soft: "#3D3833",
          muted: "#6B635B",
          subtle: "#9A938A",
        },
        paper: {
          DEFAULT: "#FAFAF6",
          soft: "#F4F2EC",
          warm: "#EFEBE0",
        },
        accent: {
          forest: "#2A4234",
          forestSoft: "#E5EBE3",
          rust: "#A0533C",
          rustSoft: "#F1E5DD",
          gold: "#9A7B3F",
          goldSoft: "#F1EADA",
        },
        line: {
          DEFAULT: "#E2DDD2",
          soft: "#EEEAE0",
          strong: "#C7C0B3",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        tight: "-0.02em",
        wide: "0.02em",
        wider: "0.06em",
        widest: "0.18em",
      },
      maxWidth: {
        prose: "68ch",
        "prose-wide": "78ch",
      },
    },
  },
  plugins: [],
};

export default config;
