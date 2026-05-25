import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050505",
          900: "#080808",
          850: "#0B0B0E",
          800: "#101015",
          night: "#0F172A",
        },
        bone: "#F5F2EA",
        chrome: "#C9C9C9",
        violet: {
          neon: "#8B5CF6",
        },
        pink: {
          neon: "#EC4899",
        },
        champagne: "#D6B56D",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "neon-grad":
          "linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #D6B56D 100%)",
        "noise":
          "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        "glow-violet": "0 0 40px -8px rgba(139, 92, 246, 0.55)",
        "glow-pink": "0 0 40px -8px rgba(236, 72, 153, 0.55)",
        "glow-soft": "0 0 60px -10px rgba(255,255,255,0.08)",
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "spin-slow": "spin 18s linear infinite",
        "float-slow": "float 9s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--tw-rotate))" },
          "50%": { transform: "translateY(-12px) rotate(var(--tw-rotate))" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
