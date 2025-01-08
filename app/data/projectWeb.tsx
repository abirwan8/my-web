import Teanology from "../assets/images/project/teanology.jpg";
import OmahNgilmu from "../assets/images/project/omah-ngilmu.jpg";
import SentraBrem from "../assets/images/project/sentra-brem.jpg";
import SPPAG from "../assets/images/project/sppag.jpg";
import { StaticImageData } from "next/image";

export interface CardWeb {
  image: string | StaticImageData;
  title: string;
  description: string;
  tools: string[];
  url: string;
}

export const cardWeb: CardWeb[] = [
  {
    image: Teanology,
    title: "Teanology",
    description: "Teanology uses face recognition to analyze your mood and suggest the perfect drink. It also features food pairing recommendations to enhance your experience. Enjoy a personalized, AI-driven approach to beverages and food",
    tools: ["ReactJS", "Bootstrap", "NodeJS","MySQL", "TensorFlow"],
    url: "https://teanology.amanin.id",
  },
  {
    image: OmahNgilmu,
    title: "OmahNgilmu",
    description: "OmahNgilmu is a digital literacy platform that offers various content such as learning videos, infographics, events, and mini-games. This is my first project on a large scope. Unfortunately, the project has not been deployed yet.",
    tools: ["Javascript", "PHP", "Bootstrap"],
    url: "https://bit.ly/github-omah-ngilmu",
  },
  {
    image: SPPAG,
    title: "Sistem Penjadwalan Perkuliahan Algoritma Genetika",
    description: "A system used to generate lecture schedules with a genetic algorithm based on room, time, lecturer and course parameters",
    tools: ["Javascript", "Code Igniter", "Bootstrap"],
    url: "https://jadwal.tifpsdku.com",
  },
  {
    image: SentraBrem,
    title: "Sentra Brem",
    description: "Sentra Brem is a website created for a grant program that facilitates local industries in increasing sales. This program is a form of collaboration between the Madiun government and the UNS campus",
    tools: ["Google Site", "PHP", "Bootstrap"],
    url: "https://www.sentrabrem.com/",
  },
];
