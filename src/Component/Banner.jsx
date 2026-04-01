"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();

  const handlebtn = () => {
    const password = prompt("Enter Password");
    if (password == "12345") {
      router.push("/dashboard");
    }
  };

  return (
    <div className="text-center space-y-5 py-20 bg-gradient-to-b from-sky-300 to-sky-100">
      <h2 className="text-4xl font-bold">Welcome to Dev-Stories</h2>
      <button
        onClick={handlebtn}
        className="cursor-pointer p-3 bg-sky-400 text-white rounded hover:bg-black duration-200 "
      >
        Share-Story
      </button>
    </div>
  );
};

export default Banner;
