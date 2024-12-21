import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import { Unbounded, Roboto } from "next/font/google";

const robotoSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="bg-zinc-950 py-8 mt-8">
        <h1 className="text-white text-7xl font-black px-8 mb-8 text-center md:text-start" style={{ fontFamily: 'var(--font-unbounded)' }} >Service</h1>
        <ServiceCard />
      </div>
    </>
  );
}
