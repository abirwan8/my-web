"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonPrimary from "./ButtonPrimary";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar flex justify-between items-center py-3 px-8">
        <div className="logo">
          <Image src="/logo.png" layout="intrinsic" width={40} height={40} className="h-6" alt="my-logo" />
        </div>

        {/* Toggle Button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* <nav className="flex gap-8 bg-zinc-950/5 px-4 py-3 rounded-full items-center">
          <Link href="" className="bg-yellow-400 px-3 py-1 rounded-full">
            Home
          </Link>
          <Link href="">Service</Link>
          <Link href="">About Me</Link>
          <Link href="">Projects</Link>
          <Link href="">Contact</Link>
        </nav> */}
        {/* <ButtonPrimary>Hire Me</ButtonPrimary> */}

        {/* Navigation Links */}
        <nav
          className={`flex-col md:flex md:flex-row md:gap-8 bg-white md:bg-zinc-950/5 shadow-2xl md:shadow-none px-8 md:px-4 py-3 rounded-lg md:rounded-full items-center md:static absolute top-16 right-8 md:top-auto md:right-auto transition-all duration-300 ease-in-out ${
            isOpen ? "flex gap-4" : "hidden"
          }`}
        >
          <Link href="" className="bg-yellow-400 px-3 py-1 rounded-full md:bg-transparent">
            Home
          </Link>
          <Link href="">Service</Link>
          <Link href="">About Me</Link>
          <Link href="">Projects</Link>
          <Link href="">Contact</Link>
          {/* <ButtonPrimary className="md:hidden block">Hire Me</ButtonPrimary> */}
        </nav>

        {/* Button */}
        <div className="hidden md:block">
          <ButtonPrimary>Hire Me</ButtonPrimary>
        </div>
      </div>
    </>
  );
};

export default Navbar;
