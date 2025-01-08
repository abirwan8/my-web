import React, { useEffect } from "react";
import Tabs from "./Tabs";
import ProjectUI from "./ProjectUI";
import ProjectWeb from "./ProjectWeb";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectTabs: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    })
  }, [])
  const tabsData = [
    {
      id: "ui-design",
      label: "UI Design",
      content: <ProjectUI />,
    },
    {
      id: "web-dev",
      label: "Web Development",
      content: <ProjectWeb />,
    },
  ];
  return (
    <>
      <div className="px-4 md:px-8 mt-8 space-y-8">
        <h1 className="text-4xl md:text-7xl font-black text-start" style={{ fontFamily: "var(--font-unbounded)" }}  data-aos="fade-down-right">
          My Project
        </h1>
        <Tabs tabs={tabsData} />
      </div>
    </>
  );
};

export default ProjectTabs;