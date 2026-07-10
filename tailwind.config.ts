import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B0F14",
          900: "#101A2B",
          800: "#141f34",
          700: "#1b2942",
        },
        surface: {
          50: "#F5F7FA",
          200: "#AAB2C0",
        },
        gold: {
          300: "#e4c084",
          400: "#dbb06a",
          500: "#D6A85A",
          600: "#b58c40",
        },
        field: {
          500: "#1E7A46",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "premium-gradient":
          "radial-gradient(at 20% 10%, rgba(214,168,90,0.10) 0, transparent 55%), radial-gradient(at 85% 90%, rgba(30,122,70,0.10) 0, transparent 60%), linear-gradient(180deg, #0B0F14 0%, #101A2B 100%)",
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
