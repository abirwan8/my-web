"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface FaqProps {
  question: string;
  answer: string;
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={`relative z-1 rounded-2xl ${isOpen ? "bg-yellow-500" : "bg-zinc-950"}`}>
        <button className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <span className={`text-md md:text-2xl ${isOpen ? "text-zinc-950" : "text-white"}`}>{question}</span>

          {isOpen ? <IoIosArrowUp className={`text-xl ${isOpen ? "text-zinc-950" : "text-white"}`} /> : <IoIosArrowDown className={`text-xl ${isOpen ? "text-zinc-950" : "text-white"}`} />}
        </button>
        {isOpen && (
          <div className="px-6 pb-4">
            <p className="text-white">{answer}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Faq;
