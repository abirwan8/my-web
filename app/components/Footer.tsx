"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Button";
import { FaUpwork, FaLinkedinIn, FaGithubAlt, FaBehance, FaCopyright } from "react-icons/fa6";
import { MdEmail, MdCall, MdLocationPin } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import "../assets/css/style.css";

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const EMAIL = "abi.rahmawan01@gmail.com";
  const mailtoLink = `mailto:${EMAIL}`;
  return (
    <>
      <div className="grid grid-cols-6 grid-rows-1 gap-4 mt-8 px-4 md:px-8 py-8" >
        <div className="col-span-6 lg:col-span-3 space-y-4">
          <div className="logo flex flex-row items-center space-x-4"data-aos="fade-right">
            <Image src="/logo.png" width={40} height={40} alt="my-logo" />
            <h1 className="font-bold text-2xl text-white" style={{ fontFamily: "var(--font-unbounded)" }}>
              abi rahmawan
            </h1>
          </div>
          <p className="text-white text-xl text-justify" data-aos="fade-right">Feel free to check out my social media for more updates, insights, and behind-the-scenes of my latest projects! Stay connected and join the conversation!</p>
          <div className="flex felx-row space-x-4">
            <Link href="https://www.linkedin.com/in/abi-rahmawan/" target="_blank" className="text-2xl p-3 bg-yellow-500 rounded-full" data-aos="fade-up">
              <FaLinkedinIn className="shake" />
            </Link>
            <Link href="https://github.com/abirwan8" target="_blank" className="text-2xl p-3 bg-yellow-500 rounded-full" data-aos="fade-up">
              <FaGithubAlt className="shake" />
            </Link>
            <Link href="https://behance.net/abirahmawan" target="_blank" className="text-2xl p-3 bg-yellow-500 rounded-full" data-aos="fade-up">
              <FaBehance className="shake" />
            </Link>
            <Link href="https://www.upwork.com/freelancers/~016197b353320247a4" target="_blank" className="text-2xl p-3 bg-yellow-500 rounded-full" data-aos="fade-up">
              <FaUpwork className="shake" />
            </Link>
          </div>
        </div>

        <div className="col-span-6 lg:col-span-2 space-y-4" data-aos="fade-down">
          <h1 className="font-bold text-2xl text-white" style={{ fontFamily: "var(--font-unbounded)" }} data-aos="fade-down-right">
            Contact
          </h1>
          <div className="flex flex-row items-center space-x-4" data-aos="fade-up">
            <div className="text-2xl p-3 bg-yellow-500 rounded-full">
              <MdEmail className="shake" />
            </div>
            <span className="text-xl text-white">abi.rahmawan01@gmail.com</span>
          </div>
          <hr data-aos="fade-up" />
          <div className="flex flex-row items-center space-x-4" data-aos="fade-up">
            <div className="text-2xl p-3 bg-yellow-500 rounded-full">
              <MdCall className="shake" />
            </div>
            <span className="text-xl text-white">(+62) 81 3358 5246 5</span>
          </div>
          <hr data-aos="fade-up" />
          <div className="flex flex-row items-center space-x-4" data-aos="fade-up">
            <div className="text-2xl p-3 bg-yellow-500 rounded-full">
              <MdLocationPin className="shake" />
            </div>
            <span className="text-xl text-white">Madiun, East Java, Indonesia. 63157</span>
          </div>
        </div>

        <div className="col-span-6 lg:col-span-1 justify-self-end lg:justify-self-start" data-aos="fade-down">
          <Link href={mailtoLink} target="_blank">
            <Button title="Hire Me" icon={<GoArrowUpRight className="shake" />} color="bg-yellow-500 text-zinc-950" colorIcon="bg-zinc-950"></Button>
          </Link>
        </div>
      </div>
      <div className="px-4 lg:px-8">
        <hr />
      </div>
      <div className="px-4">
        <p className="text-sm md:text-xl text-white flex flex-row justify-center items-center py-4">
          Copyright
          <span className="px-2">
            <FaCopyright />
          </span>
          2024 <span className="px-2 text-yellow-500">Abi Rahmawan.</span> All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
