import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial"],
      },
      colors: {
        brand: {
          gold: "#F5C542",
          dark: "#0B0F14",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;