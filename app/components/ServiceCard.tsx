import React from "react";
import Image from "next/image";
import webDesign from "../assets/images/web-design.png";
import appDesign from "../assets/images/mobile-design.png";
import frontEnd from "../assets/images/front-end.png";

const ServiceCard = () => {
  return (
    <>
    <div className="container flex flex-col justify-self-center px-6 md:flex-row md:justify-between md:gap-6 md:px-0 space-y-6 md:space-y-0"> 
      <div className="flex flex-col place-items-center space-y-5 bg-yellow-500 py-8 px-4 rounded-2xl">
        <div className="p-4 bg-white/20 rounded-full">
            <Image src={webDesign} height={60} alt="web-design"></Image>
        </div>
        <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold">Web Design</h3>
            <p className="text-lg">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
      </div>
      <div className="flex flex-col place-items-center space-y-5 bg-yellow-500 py-8 px-4 rounded-2xl">
        <div className="p-4 bg-white/20 rounded-full">
            <Image src={appDesign} height={60} alt="web-design"></Image>
        </div>
        <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold">Web Design</h3>
            <p className="text-lg">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
      </div>
      <div className="flex flex-col place-items-center space-y-5 bg-yellow-500 py-8 px-4 rounded-2xl">
        <div  className="p-4 bg-white/20 rounded-full">
            <Image src={frontEnd} height={60} alt="web-design"></Image>
        </div>   
        <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold">Web Design</h3>
            <p className="text-lg">Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceCard;
