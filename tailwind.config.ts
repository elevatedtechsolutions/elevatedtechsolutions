import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-strong": "rgb(var(--surface-strong) / <alpha-value>)",
        "surface-muted": "rgb(var(--surface-muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-soft": "rgb(var(--accent-soft) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        "text-soft": "rgb(var(--text-soft) / <alpha-value>)"
      },
      boxShadow: {
        elevated: "0 28px 80px rgba(2, 12, 27, 0.56)",
        glow:
          "0 0 0 1px rgba(56, 189, 248, 0.12), 0 24px 80px rgba(2, 12, 27, 0.54), 0 0 64px rgba(37, 99, 235, 0.1)",
        floating:
          "0 26px 84px rgba(2, 12, 27, 0.58), inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(255, 255, 255, 0.02)"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
