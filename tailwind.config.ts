import type { Config } from 'tailwindcss'
import { white, black, transparent } from 'tailwindcss/colors'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: "rgb(var(--color-gray))",
      white, black, transparent
    },
    fontFamily: {
      'fira-sans': ["var(--font-fira-sans)"],
      'inter': ["var(--font-inter)"],
      'open-sans': ["var(--font-open-sans)"],
    }
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
}
export default config
