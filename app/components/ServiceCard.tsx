"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import webDesign from "../assets/images/web-design.png";
import frontEnd from "../assets/images/front-end.png";
import "../assets/css/style.css";

const ServiceCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, 
    });
  }, [])
  
  return (
    <>
      <h1 className="text-white text-5xl md:text-7xl font-black mb-8 text-start" style={{ fontFamily: "var(--font-unbounded)" }}  data-aos="fade-down-right">
        Service
      </h1>
      <div className="flex flex-col justify-self-center md:flex-row md:justify-between md:gap-6 space-y-6 md:space-y-0">
        <div className="flex flex-col place-items-center space-y-5 bg-yellow-500 py-8 px-4 rounded-2xl md:w-1/2" data-aos="fade-right">
          <div className="p-4 bg-white/20 rounded-full">
            <Image src={frontEnd} height={60} alt="web-design"></Image>
          </div>
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold">Web Development</h3>
            <p className="text-lg">Crafting stunning, responsive, and lightning-fast user interfaces that bring your ideas to life. With cutting-edge technologies like HTML, CSS, JavaScript, and frameworks such as Reactjs, Nextjs, Tailwind, Bootstrap, etc. Transform designs into seamless digital experiences, ensuring your users are captivated on every device. Let’s build something extraordinary together!</p>
          </div>
        </div>

        <div className="flex flex-col place-items-center space-y-4 bg-yellow-500 py-8 px-4 rounded-2xl md:w-1/2" data-aos="fade-left">
          <div className="p-4 bg-white/20 rounded-full">
            <Image src={webDesign} height={60} alt="web-design"></Image>
          </div>
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold">UI Design</h3>
            <p className="text-lg">Designing intuitive, visually striking interfaces that captivate and engage users. By combining creativity with a user-first approach, i craft designs that are both functional and beautiful, ensuring every interaction feels effortless and memorable. Let’s turn your vision into an exceptional digital experience!</p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ServiceCard;
