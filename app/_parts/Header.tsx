"use client";
import { Logo } from "@ui/components";
import Link from "next/link";
import { useMenu } from "../_providers/MenuProvider";

export function Header() {
  const { menuOpen, setMenuOpen } = useMenu();
  console.log(menuOpen);
  return (
    <header className="padding-6 w-full" data-container="header-container">
      <div className="w-full h-fit flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div>
          <button onClick={() => setMenuOpen(true)} className="text-sm">
            menu
          </button>
        </div>
      </div>
    </header>
  );
}
