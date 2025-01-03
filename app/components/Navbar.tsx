"use client";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonPrimary from "./ButtonPrimary";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleClick = (hash: React.SetStateAction<string>) => {
    setActiveLink(hash); // Set link aktif berdasarkan hash
  };

  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih besar dari 0, set isScrolled ke true
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Menambahkan event listener ketika komponen dimuat
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`navbar w-full fixed bg-white flex justify-between items-center top-0 py-3 px-8 z-10 shadow-sm ${isScrolled ? "shadow-md" : "shadow-none"}`}>
        <div className="logo">
          <Image src="/logo.png" width={40} height={40} alt="my-logo" />
        </div>

        {/* Toggle Button */}
        <button className="md:hidden text-zinc-950" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
        </button>

        <nav
          className={`flex-col md:flex md:flex-row md:gap-8 bg-white z-10 md:bg-zinc-950/5 shadow-2xl md:shadow-none px-8 md:px-4 py-3 rounded-lg md:rounded-full items-center md:static absolute top-16 right-8 md:top-auto md:right-auto transition-all duration-300 ease-in-out ${
            isOpen ? "flex gap-4" : "hidden"
          }`}
        >
          <Link 
            href="#home" 
            className={`hover:bg-zinc-950/10 px-3 py-1 hover:rounded-full ${
              activeLink === '#home' ? 'bg-yellow-500 rounded-full' : 'bg-none'
            }`}
            onClick={() => handleClick("#home")}>
            Home
          </Link>
          <Link 
            href="#service" 
            className={`hover:bg-zinc-950/10 px-3 py-1 hover:rounded-full ${
              activeLink === '#service' ? 'bg-yellow-500 rounded-full' : 'bg-none'
            }`}
             onClick={() => handleClick("#service")}>
            Service
          </Link>
          <Link 
            href="#about" 
            className={`hover:bg-zinc-950/10 px-3 py-1 hover:rounded-full ${
              activeLink === '#about' ? 'bg-yellow-500 rounded-full' : 'bg-none'
            }`}
            onClick={() => handleClick('#about')}>
            About Me
          </Link>
          <Link 
            href="#project" 
            className={`hover:bg-zinc-950/10 px-3 py-1 hover:rounded-full ${
              activeLink === '#project' ? 'bg-yellow-500 rounded-full' : 'bg-none'
            }`}
            onClick={() => handleClick('#project')}>
            Projects
          </Link>
          <Link 
            href="#contact" 
            className={`hover:bg-zinc-950/10 px-3 py-1 hover:rounded-full ${
              activeLink === '#contact' ? 'bg-yellow-500 rounded-full' : 'bg-none'
            }`}
            onClick={() => handleClick('#contact')}>
            Contact
          </Link>
          {/* <ButtonPrimary className="block md:hidden !hidden">Hire Me</ButtonPrimary> */}
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
