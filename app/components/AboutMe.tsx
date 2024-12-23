import React from "react";
import Image from "next/image";
import Link from "next/link";
import MyPic from "../assets/images/me.png";
import { CgFigma } from "react-icons/cg";
import { RiJavascriptFill, RiNextjsFill, RiReactjsFill, RiTailwindCssFill, RiBootstrapFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

const AboutMe = () => {
  return (
    <>
      <div className="container flex flex-col md:flex-row justify-between space-x-6 items-center px-8 py-8 mt-8">
        <div className="rounded-2xl">
          <Image src={MyPic} className="" alt="self"></Image>
        </div>
        <div className="space-y-3 md:space-y-6 mt-8 md:mt-0 text-center md:text-start"> 
          <h1 className="text-5xl md:text-7xl font-black" style={{ fontFamily: "var(--font-unbounded)" }}>
            About Me
          </h1>
          <p className="text-2xl font-bold">Who is Abi Rahmawan?</p>
          <p className='text-xl'>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <div className="flex space-x-4">
            <div className="p-4 text-2xl md:text-4xl bg-yellow-500 rounded-full"><CgFigma/></div>
            <div className="p-4 text-2xl md:text-4xl bg-yellow-500 rounded-full"><RiJavascriptFill /></div>
            <div className="p-4 text-2xl md:text-4xl bg-yellow-500 rounded-full"><BiLogoTypescript /></div>
            <div className="p-4 text-2xl md:text-4xl bg-yellow-500 rounded-full"><RiReactjsFill /></div>
            <div className="p-4 text-2xl md:text-4xl bg-yellow-500 rounded-full"><RiNextjsFill /></div>
            <div className="p-4 text-2xl md:text-4xl bg-yellow-500 rounded-full"><RiTailwindCssFill /></div>
            <div className="p-4 text-2xl md:text-4xl bg-yellow-500 rounded-full"><RiBootstrapFill /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
