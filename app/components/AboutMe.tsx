"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CgFigma } from "react-icons/cg";
import { RiJavascriptFill, RiNextjsFill, RiReactjsFill, RiTailwindCssFill, RiBootstrapFill, RiHtml5Fill, RiPhpFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoCss3 } from "react-icons/bi";

const ICONS = [
  { name: "Figma", icon: CgFigma, color: "bg-yellow-500" },
  { name: "HTML", icon: RiHtml5Fill, color: "bg-yellow-500" },
  { name: "CSS", icon: BiLogoCss3, color: "bg-yellow-500" },
  { name: "JavaScript", icon: RiJavascriptFill, color: "bg-yellow-500" },
  { name: "TypeScript", icon: BiLogoTypescript, color: "bg-yellow-500" },
  { name: "React", icon: RiReactjsFill, color: "bg-yellow-500" },
  { name: "NextJS", icon: RiNextjsFill, color: "bg-yellow-500" },
  { name: "TailwindCSS", icon: RiTailwindCssFill, color: "bg-yellow-500" },
  { name: "Bootstrap", icon: RiBootstrapFill, color: "bg-yellow-500" },
  { name: "PHP", icon: RiPhpFill, color: "bg-yellow-500" },
];

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
        <div className="text-justify lg:text-center space-y-2 lg:space-y-4 px-4 md:px-8 mt-8">
          <h1 className="text-5xl md:text-7xl font-black" style={{ fontFamily: "var(--font-unbounded)" }} data-aos="fade-down-left">
            About Me
          </h1>
          <p className="text-2xl font-bold" data-aos="fade-up">
            Who is Abi Rahmawan?
          </p>
          <p className="text-xl" data-aos="fade-up">
            Hi, I&apos;m a Web Developer and UI Designer who loves creating websites that look great and work well. I create user-friendly and responsive websites that work seamlessly across various devices. I&apos;m always looking for new challenges and opportunities to improve my skills. If you&apos;re looking for a dedicated Web Developer or UI Designer, please feel free to contact me. I would be happy to discuss how I can help you with your project.
          </p>
          <p className="text-2xl font-bold" data-aos="fade-up">
            Tech Stack
          </p>
          <div
            className="w-full inline-flex flex-nowrap space-x-4 overflow-hidden group hover:animation-paused [mask-image:linear-gradient(to_right,transparent_0%,black_128px,black_calc(100%-128px),transparent_100%)] backdrop-blur-md"
            data-aos="fade-up"
          >
            <div className="flex justify-center lg:justify-start space-x-2 lg:space-x-4 animate-infinite-scroll group-hover:animation-paused">
              {ICONS.map((iconData) => (
                <div key={iconData.name} className={`flex flex-row items-center px-3 py-2 space-x-2 ${iconData.color} rounded-full`}>
                  <iconData.icon className="text-2xl" />
                  <p className="text-lg">{iconData.name}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center lg:justify-start space-x-2 lg:space-x-4 animate-infinite-scroll group-hover:animation-paused">
              {ICONS.map((iconData) => (
                <div key={iconData.name} className={`flex flex-row items-center px-3 py-2 space-x-2 ${iconData.color} rounded-full`}>
                  <iconData.icon className="text-2xl" />
                  <p className="text-lg">{iconData.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default AboutMe;
