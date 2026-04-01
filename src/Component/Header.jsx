import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="p-4 flex justify-between items-center border-b flex-wrap">
      <Link href={"/"} className="text-lg font-semibold">🐸 Dev Story</Link>

     <nav className="flex flex-wrap gap-4">
      <Link href={"/about"}>About</Link>
      <Link href={"/stories"}>Stories</Link>
      <Link href={"/tutorials"}>Tutorials</Link>
      <Link href={"/login"}>Login</Link>
      <Link href={"/Register"}>Register</Link>
     </nav>

    </header>
  );
};

export default Header;
