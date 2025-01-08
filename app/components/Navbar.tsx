"use client";
import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { HiMenuAlt3 } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";

interface NavbarProps {
  links: { id: string; label: string; href: string }[];
}

const EMAIL = "abi.rahmawan01@gmail.com";

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

     // IntersectionObserver for active section
     const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              setActiveLink(`#${id}`);
            }
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Trigger when the section is 50% in viewport
    );

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mailtoLink = `mailto:${EMAIL}`;

  return (
    <>
      <div className={`navbar w-full fixed bg-white flex justify-between items-center top-0 py-3 px-8 z-10 ${isScrolled ? "shadow-md" : "shadow-none"}`}>
        <div className="logo">
          <Image src="/logo.png" width={40} height={40} alt="logo" />
        </div>

        {/* Toggle Button */}
        <div className="flex space-x-4 lg:hidden">
          <Button title="Hire me" icon={<GoArrowUpRight className="shake text-zinc-950" />} color="bg-zinc-950 text-white" colorIcon="bg-yellow-500"></Button>
          <button className="text-zinc-950" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`flex-col lg:flex lg:flex-row lg:gap-8 bg-white z-10 lg:bg-zinc-950/5 shadow-2xl lg:shadow-none px-8 lg:px-4 py-3 rounded-lg lg:rounded-full items-center lg:static absolute top-16 right-8 lg:top-auto lg:right-auto transition-all duration-300 ease-in-out ${
            isOpen ? "flex gap-4" : "hidden"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`px-3 py-1 ${
                activeLink === link.href ? "bg-yellow-500 rounded-full hover:bg-yellow-500" : "hover:bg-zinc-950/10 hover:rounded-full"
              }`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(link.href);
                if (target) {
                  window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - 80, // Offset for fixed navbar
                    behavior: "smooth",
                  });
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Button */}
        <div className="hidden lg:block">
          <Link href={mailtoLink} target="_blank">
            <Button title="Hire me" icon={<GoArrowUpRight className="shake text-zinc-950" />} color="bg-zinc-950 text-white" colorIcon="bg-yellow-500"></Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
