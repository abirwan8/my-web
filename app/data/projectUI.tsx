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
    description: "UI design that exudes warmth and sophistication, tailored for a coffee shop's online presence. This design blends aesthetics and functionality to reflect Brewtopia’s values of quality, comfort, and community.",
    tools: ["Figma"],
    url: "https://www.behance.net/gallery/211288209/Coffee-Shop-Web-Design",
  },
  {
    image: Ichips,
    title: "Ichips Design Concept",
    description: "The iChips UI design is vibrant and user-friendly, featuring a bold red and yellow color palette. It organizes products and purchase steps clearly, ensuring easy navigation. Testimonials and quality highlightsbuild trust with users.",
    tools: ["Figma"],
    url: "https://www.behance.net/gallery/211369487/iChips-Landing-Page",
  },
  {
    image: Veglo,
    title: "Veglo Design Concept",
    description: "Veglo's web design focuses on showcasing its fresh, farm-to-table vegetable supply with a clean and visually engaging interface. It combines trust-building visuals, easy navigation, and a customer-centric layout.",
    tools: ["Figma"],
    url: "https://www.behance.net/gallery/212913097/Veglo-Web-Design-Concept",
  },
  {
    image: Podmate,
    title: "Podmate Home Page Concept",
    description: "This PodMate home page design concept features a dark-themed interface with vibrant neon greenaccents, showcasing a clean and modern podcast streaming platform.",
    tools: ["Figma"],
    url: "",
  }
];
