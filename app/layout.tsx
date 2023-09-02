import { Nprogress } from "@ui/partials/NProgress";
import { RouterEventsProvider } from "@ui/router-events";
import { cn } from "@ui/utils";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Fira_Sans, Inter, Open_Sans } from "next/font/google";
import { IS_DEV } from "../utils/_consts";
import { MenuProvider } from "./_providers/MenuProvider";
import "./globals.css";

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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://falta.info",
    siteName: "Falta",
    title: "Falta",
    description: "Portfolio website for me (Falta)",

    images: [
      {
        url: "assets/image.png",
        width: 1200,
        height: 630,
        alt: "Falta",
      },
    ],
  },
  twitter: {
    creatorId: "@ah7255703",
    card: "summary_large_image",
    images: ["assets/og.png"],
  },
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
  verification: {
    google: "ABZQt2rUsxl9LrTiWV7YqdMdPJTI70HYtPLS0z385ts",
    yandex: "08bd74f1be0753d1",
  },

  robots: {
    notranslate: true,
    index: true,
    follow: true,
    indexifembedded: true,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MenuProvider>
      <RouterEventsProvider>
        <html lang="en">
          <body
            className={cn(
              "antialiased h-screen min-h-screen min-w-full",
              IS_DEV && "debug-screens",
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
    </MenuProvider>
  );
}
