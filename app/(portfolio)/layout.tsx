import React from "react";
import { Menu } from "../_parts/Menu";
import { Header } from "../_parts/Header";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="font-fira-sans bg-black text-white h-full [--columns:5] sm:[--columns:10] background-grid">
      <div className="bg-gradient-to-t from-gray/10 to-transparent h-full flex items-center justify-center p-4">
        <div
          className="w-full min-h-full h-full md:border md:border-gray flex-1 relative"
        >
          <div className="flex w-full h-full flex-col items-start justify-between min-h-full">
            <Header />
            <div className="flex-1 w-full">{children}</div>
          </div>
          <Menu />
        </div>
      </div>
    </main>
  );
}
