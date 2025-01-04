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
    description: "Explore modern web design trends and techniques.",
    tools: ["ReactJS", "MySQL", "TensorFlow"],
    url: "https://example.com/web-design",
  },
  {
    image: SentraBrem,
    title: "Sentra Brem",
    description: "Build responsive and interactive web apps.",
    tools: ["Google Site", "PHP", "Bootstrap"],
    url: "https://www.sentrabrem.com/",
  },
  {
    image: OmahNgilmu,
    title: "OmahNgilmu",
    description: "Build responsive and interactive web apps.",
    tools: ["Javascript", "PHP", "Bootstrap"],
    url: "https://example.com/frontend",
  },
  {
    image: SPPAG,
    title: "Sistem Penjadwalan Algoritma Genetika",
    description: "Build responsive and interactive web apps.",
    tools: ["Javascript", "PHP", "Bootstrap"],
    url: "https://example.com/frontend",
  }
];
