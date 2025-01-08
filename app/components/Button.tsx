import React, { JSX } from "react";
import "../assets/css/style.css";

interface ButtonProps{
  title: string;
  icon: JSX.Element;
  color: string;
  colorIcon: string;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ title, icon, color, colorIcon }) => {
  return (
    <button className={`ps-4 pe-2 py-2 ${color} rounded-full flex items-center`}>
      {title}
      <div className={`p-2 ms-2 ${colorIcon} rounded-full text-white`}>
        {icon}
      </div>
    </button>
  );
};

export default ButtonPrimary;
