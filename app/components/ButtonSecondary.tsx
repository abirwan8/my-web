import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "../assets/css/style.css";

const ButtonPrimary = ({ children }: any) => {
  return (
    <button className="ps-4 pe-2 py-2 bg-yellow-500 text-black rounded-full flex items-center">
      {children}
      <div className="p-2 ms-2 bg-zinc-950 rounded-full text-white">
        <FaArrowRight className="shake" />
      </div>
    </button>
  );
};

export default ButtonPrimary;
