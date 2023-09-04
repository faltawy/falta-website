import { Fira_Sans, Inter, Open_Sans } from "next/font/google";

export const firaSans = Fira_Sans({
    fallback: ["system-ui", "Roboto", "sans-serif"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin", "latin-ext"],
    variable: "--font-fira-sans",
});

export const inter = Inter({
    fallback: ["system-ui", "Roboto", "sans-serif"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin", "latin-ext"],
    variable: "--font-inter",
});

export const openSans = Open_Sans({
    fallback: ["system-ui", "Roboto", "sans-serif"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin", "latin-ext"],
    variable: "--font-open-sans",
});
