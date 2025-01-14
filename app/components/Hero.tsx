"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Button";
import Link from "next/link";
import { FaUpwork, FaLinkedinIn, FaGithubAlt, FaBehance } from "react-icons/fa6";
import { GoArrowDown } from "react-icons/go";
import heroImage from "../assets/images/new-hero.png";

import "../assets/css/style.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/CV_AbiRahmawan.pdf";
    link.download = "CV_Abi Rahmawan.pdf"; // Nama file saat diunduh
    link.click();
  };
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center space-x-0 lg:space-x-10 space-y-6 lg:space-y-0 px-4 md:px-8">
        <div className="w-full lg:w-1/2 text-start space-y-2 lg:space-y-4 mt-8 lg:mt-0">
          <h1 style={{ fontFamily: "var(--font-unbounded)" }} className="text-4xl md:text-7xl font-black" data-aos="fade-right">
            Abi
          </h1>
          <h1 style={{ fontFamily: "var(--font-unbounded)" }} className="text-4xl md:text-7xl font-black" data-aos="fade-right">
            Rahmawan
          </h1>
          <h4 className="text-xl lg:text-2xl font-bold" data-aos="fade-right">Web Developer and UI/UX Designer</h4>
          <p className="text-xl text-justify" data-aos="fade-right">Hi, I&apos;m Abi – a UI Designer and Web Developer. I&apos;d be happy to help build your business&apos;s website. Let&apos;s create something great together.</p>
          <div className="flex flex-col md:flex-row space-x-1 md:space-x-2 space-y-4 md:space-y-0" data-aos="fade-right">
            <div className="flex space-x-4 md:space-x-2">
              <Link href="https://www.linkedin.com/in/abi-rahmawan/" target="_blank" className="text-2xl p-3 bg-yellow-500 rounded-full">
                <FaLinkedinIn className="shake" />
              </Link>
              <Link href="https://github.com/abirwan8" target="_blank" className="text-2xl p-3 bg-yellow-500 rounded-full">
                <FaGithubAlt className="shake" />
              </Link>
              <Link href="https://behance.net/abirahmawan" target="_blank" className="text-2xl p-3 bg-yellow-500 rounded-full">
                <FaBehance className="shake" />
              </Link>
              <Link href="https://www.upwork.com/freelancers/~016197b353320247a4" target="_blank" className="text-2xl p-3 bg-yellow-500 rounded-full">
                <FaUpwork className="shake" />
              </Link>
            </div>
            <div>
              <Link href="#" onClick={handleDownload}>
                <Button title="Download CV" icon={<GoArrowDown className="shake text-zinc-950" />} color="bg-zinc-950 text-white" colorIcon="bg-yellow-500"></Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 image" data-aos="fade-left">
          <Image src={heroImage} alt="hero" className="h-auto w-full max-h-[500px] object-contain"></Image>
        </div>
      </div>
    </>
  );
};

export default Hero;
