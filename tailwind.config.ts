import type { Config } from "tailwindcss";
import { black, transparent, white } from "tailwindcss/colors";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      height: {
        screen: "100svh",
      },
      minHeight: {
        screen: "100svh",
      },
      fontFamily: {
        "fira-sans": ["var(--font-fira-sans)"],
        inter: ["var(--font-inter)"],
        "open-sans": ["var(--font-open-sans)"],
        times: [
          "TimesNewRoman",
          "Times New Roman",
          "Times",
          "Baskerville",
          "Georgia",
          "serif",
        ],
      },
    },
    colors: {
      primary: "hsl(var(--primary))",
      gray: "hsl(var(--color-gray))",
      "gray-2": "hsl(var(--color-gray-2))",
      white,
      black,
      transparent,
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    require("tailwindcss-debug-screens"),
  ],
};
export default config;
