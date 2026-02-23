import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A227",
          light: "#E2B93B",
          dark: "#A8841A",
        },
        navy: {
          DEFAULT: "#0D1B2A",
          light: "#132236",
          mid: "#1A2F47",
        },
        cream: "#FAF7F0",
        charcoal: "#2C2C2C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A227 0%, #E2B93B 50%, #A8841A 100%)",
        "dark-overlay": "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        luxury: "0 20px 60px rgba(0,0,0,0.15)",
        "luxury-hover": "0 30px 80px rgba(0,0,0,0.25)",
        gold: "0 8px 30px rgba(201,162,39,0.35)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
