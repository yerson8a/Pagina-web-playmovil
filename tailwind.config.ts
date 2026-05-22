import type { Config } from "tailwindcss";

/**
 * Sistema de diseño Play Móvil.
 * Paleta de marca: morado · negro · blanco.
 * Estética premium tipo Apple.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Negros de marca (con leve tinte morado para profundidad)
        ink: {
          DEFAULT: "#050308",
          900: "#070510",
          800: "#0c0918",
          700: "#141022",
        },
        // Morado de marca
        brand: {
          50: "#f3effe",
          100: "#e6dcfd",
          200: "#cbb6fb",
          300: "#ad8df7",
          400: "#9466f0",
          500: "#7c3aed", // principal
          600: "#6d28d9",
          700: "#5b21b6",
          800: "#431c89",
          900: "#2e1065",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(124, 58, 237, 0.55)",
        "glow-lg": "0 0 120px -20px rgba(124, 58, 237, 0.6)",
        card: "0 24px 60px -20px rgba(0, 0, 0, 0.7)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #7c3aed 0%, #6d28d9 45%, #2e1065 100%)",
        "radial-glow":
          "radial-gradient(circle at center, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0) 70%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(18px, -28px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.66, 0, 0, 1) infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
