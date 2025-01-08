"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import Button from "./Button";
import { cardWeb } from "../data/projectWeb";
import Link from "next/link";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectWeb: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  const [visibleCount, setVisibleCount] = useState(4);

  // Fungsi untuk menambah jumlah proyek yang ditampilkan
  const handleViewMore = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setVisibleCount((prevCount) => prevCount + 2);
  };

  const handleViewLess = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setVisibleCount(4);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
        {cardWeb.slice(0, visibleCount).map((card, index) => (
          <ProjectCard key={index} card={card} />
        ))}
      </div>
      {visibleCount < cardWeb.length && (
        <Link href="#" onClick={handleViewMore}>
          <Button title="View More" icon={<GoArrowDown className="shake text-zinc-950" />} color="bg-zinc-950 text-white" colorIcon="bg-yellow-500" />
        </Link>
      )}
      {visibleCount > cardWeb.length && (
        <Link href="#" onClick={handleViewLess}>
          <Button title="View Less" icon={<GoArrowUp className="shake text-zinc-950" />} color="bg-zinc-950 text-white" colorIcon="bg-yellow-500" />
        </Link>
      )}
    </>
  );
};

export default ProjectWeb;
