"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface AccordionProps {
  item: string;
  year: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ item, year, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-xl ${isOpen ? "bg-yellow-500 m-4" : "bg-zinc-950 m-0"}`}>
      <button className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none transition-colors" onClick={() => setIsOpen(!isOpen)}>
        <span className={`text-md md:text-xl ${isOpen ? "text-zinc-950" : "text-white"}`}>{item}</span>
        <span className={`bg-yellow-500 px-3 py-2 md:px-4 md:py-2 text-xs md:text-lg rounded-full ${isOpen ? "bg-zinc-950 text-white" : "text-zinc-950"}`}>{year}</span>
        {isOpen ? 
          <IoIosArrowUp className={`text-xl ${isOpen ? "text-zinc-950" : "text-white"}`} /> 
        : 
          <IoIosArrowDown className={`text-xl ${isOpen ? "text-zinc-950" : "text-white"}`} />}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-justify">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
