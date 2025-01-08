"use client";
import { IoSchool } from "react-icons/io5";
import { MdWork } from "react-icons/md";

interface AccordionCardProps {
  title: string;
  children: React.ReactNode;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ title, children }) => {
    return (
    <div className="bg-zinc-950 rounded-2xl py-1">
      <div className="flex flex-row justify-center space-x-4 items-center py-4">
        <div className="bg-yellow-500 p-2 rounded-full">
            {title === "Education" ? <IoSchool className="text-2xl" /> : title === "Work Experience" ? <MdWork className="text-2xl" /> : null}
        </div>
        <h2 className="text-white text-2xl font-semibold">{title}</h2>
      </div>
      <div className="px-6">
        <hr />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default AccordionCard;
