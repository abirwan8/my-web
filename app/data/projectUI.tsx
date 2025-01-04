import Brewtopia from "../assets/images/project/brewtopia.jpg";
import Veglo from "../assets/images/project/veglo.png";
import Ichips from "../assets/images/project/ichips.jpg";
import Podmate from "../assets/images/project/podmate.jpg";
import { StaticImageData } from "next/image";

export interface CardUID {
  image: string | StaticImageData;
  title: string;
  description: string;
  tools: string[];
  url: string;
}

export const cardUID: CardUID[] = [
  {
    image: Brewtopia,
    title: "Brewtopia Design Concept",
    description: "Explore modern web design trends and techniques.",
    tools: ["Figma"],
    url: "https://www.behance.net/gallery/212913097/Veglo-Web-Design-Concept",
  },
  {
    image: Ichips,
    title: "Ichips Design Concept",
    description: "Build responsive and interactive web apps.",
    tools: ["Figma"],
    url: "https://www.behance.net/gallery/211369487/iChips-Landing-Page",
  },
  {
    image: Veglo,
    title: "Veglo Design Concept",
    description: "Build responsive and interactive web apps.",
    tools: ["Figma"],
    url: "https://www.behance.net/gallery/211288209/Coffee-Shop-Web-Design",
  },
  {
    image: Podmate,
    title: "Podmate Home Page Concept",
    description: "Build responsive and interactive web apps.",
    tools: ["Figma"],
    url: "#",
  }
];
