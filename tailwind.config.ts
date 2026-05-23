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
        /* Dark-luxe palette */
        page:           "#05070A",
        surface:        "#0B1017",
        elevated:       "#101722",
        hi:             "#F5F7FA",
        lo:             "#9CA8B8",
        dim:            "#566474",
        accent:         "#009DFF",
        "accent-deep":  "#006CFF",
        success:        "#24D18F",
        warning:        "#F5A524",
        error:          "#FF4D4D",
        /* Legacy aliases kept so old SVG visuals don't break */
        dark:           "#05070A",
        green:          "#24D18F",
        amber:          "#F5A524",
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
