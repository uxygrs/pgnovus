import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        navy: {
          DEFAULT: "hsl(var(--navy))",
          foreground: "hsl(var(--navy-foreground))",
        },
        brand: {
          DEFAULT: "hsl(var(--brand))",
          foreground: "hsl(var(--brand-foreground))",
        },
        "accent-green": {
          DEFAULT: "hsl(var(--accent-green))",
          foreground: "hsl(var(--accent-green-foreground))",
        },
        slate: "hsl(var(--slate))",
        mist: "hsl(var(--mist))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        ring: "hsl(var(--ring))",
        "border-subtle": "hsl(var(--border-subtle))",
        destructive: "hsl(var(--destructive))",
      },
      fontFamily: {
        heading: ["Sora", "system-ui", "sans-serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-brand": "var(--gradient-brand)",
        "gradient-mist": "var(--gradient-mist)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        elevated: "var(--shadow-elevated)",
        glow: "var(--shadow-glow)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out both",
        "fade-in-slow": "fade-in-slow 1.2s ease-out both",
      },
    },
  },
  plugins: [],
} satisfies Config;
