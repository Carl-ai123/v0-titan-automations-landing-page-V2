import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bricolage)", "Bricolage Grotesque", "sans-serif"],
        body: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
      colors: {
        dark: "#0A0A0A",
        light: "#F5F2EE",
        "card-dark": "#131313",
        "card-light": "#EDE9E3",
        accent: "#2563EB",
        "accent-tint": "#EFF4FF",
        "text-dark": "#F5F5F5",
        "text-light": "#0A0A0A",
        muted: "#888888",
        green: "#22C55E",
        amber: "#F59E0B",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
