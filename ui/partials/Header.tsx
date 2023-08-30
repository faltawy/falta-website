import { Logo } from "@ui/components";
import Link from "next/link";

export function Header() {
  return (
    <header className="p-6 w-full" data-container="header-container">
      <div className="w-full h-fit flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <div>
          <button className="text-sm">menu</button>
        </div>
      </div>
    </header>
  );
}
