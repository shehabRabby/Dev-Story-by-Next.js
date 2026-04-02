"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Navlink from "./Navlink";

const Header = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/dashboard")) return <></>;

  return (
    <header className="p-4 flex justify-between items-center border-b flex-wrap">
      <Link href={"/"} className="text-3xl font-semibold text-white">
        <div className="bg-black px-4 py-2">
          {" "}
          <span className="text-4xl">🐸</span> Dev{" "}
          <span className="text-green-400">Story</span>
        </div>
      </Link>

      <nav className="flex flex-wrap gap-4">
        <Navlink href={"/about"}>About</Navlink>
        <Navlink href={"/stories"}>Stories</Navlink>
        <Navlink href={"/tutorials"}>Tutorials</Navlink>
        <Navlink href={"/login"}>Login</Navlink>
        <Navlink href={"/Register"}>Register</Navlink>
      </nav>
    </header>
  );
};

export default Header;
