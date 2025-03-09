"use client";

import logo from "@/public/logo.png";
import Image from "next/image";
export function Navbar() {
  return (
    <div className="px-12 h-16 flex items-center justify-between font-semibold fixed top-0 left-0">
      <div className="flex flex-row gap-12">
        <div className="flex flex-row justify-center items-center gap-3 font-bold">
          {" "}
          <Image src={logo} alt="logo" width={35} height={35} />
          FlashArb-AI
        </div>

        <a
          href="/"
          className={` hover:text-gray-300 ${
            window.location.pathname === "/"
              ? "border-b-2 border-[var(--foreground)]"
              : ""
          }`}
        >
          Agent
        </a>
        <a
          href="/dashboard"
          className={` hover:text-gray-300 ${
            window.location.pathname === "/dashboard"
              ? "border-b-2 border-[var(--foreground)]"
              : ""
          }`}
        >
          Dashboard
        </a>
      </div>
    </div>
  );
}
