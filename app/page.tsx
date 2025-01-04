import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import AboutMe from "./components/AboutMe";
import Accordion from "./components/Accordion";
import AccordionCard from "./components/AccordionCard";
import ProjectTabs from "./components/ProjectTabs";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
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

      <section id="home" className="mt-12 md:mt-24">
        <Hero />
      </section>

      <section id="service" className="bg-zinc-950 py-8 px-4 md:px-8 mt-12 md:mt-24">
        <ServiceCard />
      </section>

      <section id="about" className="mt-12 md:mt-24">
        <AboutMe />
        <div className="w-full px-4 md:px-8">
          <div className="grid grid-col-1 md:grid-cols-2 grid-row-2 md:grid-rows-1 gap-6 mt-8">
            <AccordionCard title="Education">
              <Accordion item="Universitas Sebelas Maret" year="2021-2024" content="D3 Teknik Informatika | GPA: 3.87/4.00" />
            </AccordionCard>
            <AccordionCard title="Work Experience">
              <Accordion item="PT. Amanin Internasional" year="2023" content="Senior High Vocational School" />
            </AccordionCard>
          </div>
        </div>
      </section>

      <section id="project" className="mt-12 md:mt-24">
        <ProjectTabs />
      </section>

      <section id="contact" className="mt-12 md:mt-24">
        <Contact />
      </section>

      <div className="mt-12 md:mt-24 px-4 md:px-8">
        <h1 className="text-5xl md:text-7xl font-black mb-8 text-start" style={{ fontFamily: "var(--font-unbounded)" }}>
          FAQ
        </h1>
        <div className="space-y-4">
          <Faq
            question="Are you available for freelance work?"
            answer="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          />
          <Faq
            question="May i download your CV/Resume for information?"
            answer="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          />
          <Faq
            question="How do i navigate through your portofolio project?"
            answer="Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
          />
        </div>
      </div>

      <div className="bg-zinc-950 mt-12 md:mt-24">
        <Footer />
      </div>
    </>
  );
}
