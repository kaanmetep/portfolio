"use client";
import Tab from "./ui/Tab";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import { useState, useEffect } from "react";
const ContentSection = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className={`p-6 lg:p-10 pt-0 lg:pt-10 lg:w-[60%] lg:hover:shadow-lg transition-all duration-150 w-full ${
        isLargeScreen ? "force-scrollbar" : ""
      }`}
    >
      <ul className="flex gap-6 mb-6 mt-5 lg:mt-0 lg:mb-10">
        <li>
          <Tab
            selected={activeTab === "projects"}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </Tab>
        </li>
        <li>
          <Tab
            selected={activeTab === "experience"}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </Tab>
        </li>
        <li>
          <Tab
            selected={activeTab === "contact"}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </Tab>
        </li>
      </ul>
      {activeTab === "projects" && <Projects />}
      {activeTab === "experience" && <Experience />}
      {activeTab === "contact" && <Contact />}
    </div>
  );
};

export default ContentSection;
