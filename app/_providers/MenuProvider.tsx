"use client";
import { createSafeContext } from "@ui/utils";
import { useState, type ReactNode } from "react";

const [SafeMenuProvider, useMenu] = createSafeContext<{
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}>("useMenu should be used within MenuProvider");

function MenuProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <SafeMenuProvider
      value={{
        menuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </SafeMenuProvider>
  );
}

export { MenuProvider, useMenu };
