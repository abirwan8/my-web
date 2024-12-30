import React from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonSecondary from "./ButtonSecondary";
import { FaUpwork, FaLinkedinIn, FaGithubAlt, FaBehance, FaCopyright } from "react-icons/fa6";
import { MdEmail, MdCall, MdLocationPin } from "react-icons/md";
import "../assets/css/style.css";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-6 grid-rows-1 gap-4 mt-8 px-4 md:px-8 py-8">
        <div className="col-span-6 md:col-span-3 space-y-4">
          <div className="logo flex flex-row items-center space-x-4 ">
            <Image src="/logo.png" width={40} height={40} alt="my-logo" />
            <h4 className="font-bold text-2xl text-white" style={{ fontFamily: "var(--font-unbounded)" }}>
              abi rahmawan
            </h4>
          </div>
          <p className="text-white text-xl">Morem ipsum dolor sit amet, consectetur adipiscing elit. . Nunc vulputate libero et velit interdum, ac aliquet odio mattis</p>
          <div className="flex felx-row space-x-4">
            <Link href="https://www.linkedin.com/in/abi-rahmawan/" target="_blank" className="text-4xl p-4 bg-yellow-500 rounded-full">
              <FaLinkedinIn className="shake" />
            </Link>
            <Link href="https://github.com/abirwan8" target="_blank" className="text-4xl p-4 bg-yellow-500 rounded-full">
              <FaGithubAlt className="shake" />
            </Link>
            <Link href="https://behance.net/abirahmawan" target="_blank" className="text-4xl p-4 bg-yellow-500 rounded-full">
              <FaBehance className="shake" />
            </Link>
            <Link href="https://www.upwork.com/freelancers/~016197b353320247a4" target="_blank" className="text-4xl p-4 bg-yellow-500 rounded-full">
              <FaUpwork className="shake" />
            </Link>
          </div>
        </div>

        <div className="col-span-6 md:col-span-2 space-y-4">
          <h4 className="font-bold text-2xl text-white" style={{ fontFamily: "var(--font-unbounded)" }}>
            Contact
          </h4>
          <div className="flex flex-row items-center space-x-4">
            <div className="p-3 text-4xl bg-yellow-500 rounded-full">
              <MdEmail className="shake" />
            </div>
            <span className="text-xl text-white">abi.rahmawan01@gmail.com</span>
          </div>
          <hr />
          <div className="flex flex-row items-center space-x-4">
            <div className="p-3 text-4xl bg-yellow-500 rounded-full">
              <MdCall className="shake" />
            </div>
            <span className="text-xl text-white">(+62) 81 3358 5246 5</span>
          </div>
          <hr />
          <div className="flex flex-row items-center space-x-4">
            <div className="p-3 text-4xl bg-yellow-500 rounded-full">
              <MdLocationPin className="shake" />
            </div>
            <span className="text-xl text-white">Madiun, East Java, Indonesia. 63157</span>
          </div>
        </div>

        <div className="col-span-6 md:col-span-1 justify-self-end md:justify-self-start">
          <ButtonSecondary>Hire Me</ButtonSecondary>
        </div>
      </div>
      <div className="px-4 md:px-8">
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
