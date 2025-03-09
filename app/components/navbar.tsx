"use client";

import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="px-12 h-16 flex items-center justify-between font-semibold fixed top-0 left-0 w-full">
      <div className="flex flex-row gap-12">
        <div className="flex flex-row justify-center items-center gap-3 font-bold">
          <Image src={logo} alt="logo" width={35} height={35} />
          FlashArb-AI
        </div>
        <Link
          href="/"
          className={`hover:text-gray-300 ${
            pathname === "/" ? "border-b-2 border-[var(--foreground)]" : ""
          }`}
        >
          Agent
        </Link>
        <Link
          href="/dashboard"
          className={`hover:text-gray-300 ${
            pathname === "/dashboard"
              ? "border-b-2 border-[var(--foreground)]"
              : ""
          }`}
        >
          Dashboard
        </Link>
      </div>
      <w3m-button />
    </div>
  );
}
