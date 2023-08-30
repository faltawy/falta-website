import { cn } from "@ui/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Fira_Sans, Inter, Open_Sans } from "next/font/google";
import { RouterEventsProvider } from "@ui/router-events";
import { Nprogress } from "@ui/partials/NProgress";

const firaSans = Fira_Sans({
  fallback: ["system-ui", "Roboto", "sans-serif"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-fira-sans",
});

const inter = Inter({
  fallback: ["system-ui", "Roboto", "sans-serif"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const openSans = Open_Sans({
  fallback: ["system-ui", "Roboto", "sans-serif"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-open-sans",
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
    <RouterEventsProvider>
      <html lang="en" className="h-screen min-h-screen">
        <body
          className={cn(
            "antialiased h-full min-h-full min-w-full",
            firaSans.variable,
            inter.variable,
            openSans.variable
          )}
        >
          {children}
          <Analytics />
          <Nprogress color="#ffffff" />
        </body>
      </html>
    </RouterEventsProvider>
  );
}
