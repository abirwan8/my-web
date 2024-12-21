import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ButtonPrimary = ({ children }: any) => {
  return (
    <button className="ps-4 pe-2 py-2 bg-zinc-950 text-white rounded-full flex items-center">
      {children}
      <div className="p-2 ms-2 bg-yellow-500 rounded-full text-black">
        <FaArrowRight />
      </div>
    </button>
  );
};

export default ButtonPrimary;
