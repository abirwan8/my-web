"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { GoArrowUpRight } from "react-icons/go";
import { CardUID as CardType } from "../data/projectUI";
import { CardWeb as CardW } from "../data/projectWeb";
import Link from "next/link";

interface CardProps {
  card: CardType | CardW;
}

const Project: React.FC<CardProps> = ({ card }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <>
      <div className="card p-4 bg-zinc-950 rounded-2xl space-y-2">
        <div>
          <Image src={card.image} alt="brewtopia" className="rounded-lg object-cover"></Image>
        </div>
        <div className="card-body">
          <h2 className="card-title text-xl text-white font-semibold">{card.title}</h2>
          <p className="card-text text-md text-white py-1.5 text-justify">{card.description}</p>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {card.tools.map((tool, index) => (
                <span key={index} className="py-1 px-3 rounded-lg bg-white/10 text-white text-sm tracking-wide">
                  {tool}
                </span>
              ))}
            </div>
            <Link href={card.url} target="_blank" className="text-2xl p-2 bg-yellow-500 rounded-full place-self-end">
              <GoArrowUpRight className="shake" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
