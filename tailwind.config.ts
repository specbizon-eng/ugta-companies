// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // темний фон та акцент «український помаранчевий»
        bg: {
          DEFAULT: "#0f1115",
          soft: "#12151b",
          card: "#171a21",
        },
        text: {
          primary: "#e6e6e6",
          muted: "#b2b6c3",
        },
        accent: {
          DEFAULT: "#ff6a3d",
          hover: "#ff7f59",
          ring: "rgba(255,106,61,0.35)",
        },
        outline: "#2a2f3a",
      },
      boxShadow: {
        glow: "0 10px 30px rgba(255,106,61,0.15)",
      },
    },
  },
  plugins: [],
} satisfies Config;
