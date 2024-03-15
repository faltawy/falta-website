import type { Config } from "tailwindcss";
const { addDynamicIconSelectors } = require("@iconify/tailwind");

const config: Config = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        gray: "hsl(var(--color-gray))",
        "gray-2": "hsl(var(--color-gray-2))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    addDynamicIconSelectors(),
    require("tailwindcss-animate"),
    require("tailwindcss-debug-screens"),
  ],
};
export default config;
