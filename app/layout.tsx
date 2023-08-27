import { cn } from "@ui/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  fallback: ["system-ui", "Roboto", "sans-serif"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-fira-sans",
});

export const metadata: Metadata = {
  title: "Falta",
  description: "Portfolio website for me (Falta)",
  authors: [
    {
      name: "Ahmad Falta",
      url: "https://falta.info",
    },
  ],
  classification: "Personal",
  creator: "Ahmad Falta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased min-h-screen min-w-full", firaSans.variable)}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
