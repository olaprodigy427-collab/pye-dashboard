import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",           // enables dark mode via class (we'll use it)
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C0C0C",
        section: "#191919",
        primary: "#9660FB",
        primaryDark: "#7C4FFF",   // optional hover etc.
      },
      borderRadius: {
        card: "4px",             // your stroked cards
      },
    },
  },
  plugins: [],
}
export default config