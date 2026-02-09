import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B2A4A",
        secondary: "#C9A84C",
        accent: "#64748B",
        backgroundLight: "#F8F7F4",
        backgroundDark: "#0F1A2E",
        textLight: "#1E293B",
        textDark: "#F1F5F9",
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
