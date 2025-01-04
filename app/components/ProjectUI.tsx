'use client';
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ButtonPrimary from "./ButtonPrimary";
import { cardUID } from "../data/projectUI";

const ProjectUI: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  // Fungsi untuk menambah jumlah proyek yang ditampilkan
  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Tambah 3 proyek setiap kali tombol diklik
  };

  const handleViewLess = () => {
    setVisibleCount(3);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardUID.slice(0, visibleCount).map((card, index) => (
            <ProjectCard key={index} card={card} />
        ))}
      </div>
      {visibleCount < cardUID.length ? ( // Tampilkan tombol hanya jika ada lebih banyak proyek
          <div className="flex justify-center mt-8">
            <ButtonPrimary onClick={handleViewMore}>View More</ButtonPrimary>
          </div>
        ) : (
          <div className="flex justify-center mt-8">
            <ButtonPrimary onClick={handleViewLess}>View Less</ButtonPrimary>
          </div>
        )}
    </>
  );
};

export default ProjectUI;
