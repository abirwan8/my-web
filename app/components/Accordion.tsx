"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionProps {
  item: string;
  year: string;
  content: string
}

const Accordion: React.FC<AccordionProps> = ({ item, year, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-2xl ${isOpen ? "bg-yellow-500" : "bg-zinc-950"} ${isOpen ? "m-4" : "m-0"}`}>
      <button className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <span className={`text-md md:text-xl ${isOpen ? "text-zinc-950" : "text-white"}`}>{item}</span>
        <span className={`bg-yellow-500 px-3 py-2 md:px-4 md:py-2 text-xs md:text-lg rounded-full ${isOpen ? "bg-zinc-950" : ""} ${isOpen ? "text-white" : "text-zinc-950"} `}>{year}</span>
        <IoIosArrowDown className={`text-xl ${isOpen ? "text-zinc-950" : "text-white"}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-white">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
