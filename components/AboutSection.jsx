"use client";
import React from "react";
import Button from "./ui/Button";
import {
  FaRegMoon,
  FaMoon,
  FaRegSun,
  FaSun,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { useTheme } from "@/components/ThemeProvider";

import { FRONTEND_STACK, BACKEND_STACK, SERVICES_STACK } from "@/constants";

const AboutSection = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="border-r border-r-gray-200 dark:border-r-gray-700 p-10 lg:w-[40%] relative lg:hover:shadow-lg  transition-all duration-150 overflow-y-scroll">
      {theme === "light" && (
        <div className="absolute top-6 right-6 group">
          <FaRegMoon
            className=" cursor-pointer group-hover:hidden "
            onClick={toggleTheme}
          />
          <FaMoon
            className=" cursor-pointer hidden group-hover:block "
            onClick={toggleTheme}
          />
        </div>
      )}
      {theme === "dark" && (
        <div className="absolute top-6 right-6 group">
          <FaRegSun
            className=" cursor-pointer group-hover:hidden "
            onClick={toggleTheme}
          />
          <FaSun
            className=" cursor-pointer hidden group-hover:block "
            onClick={toggleTheme}
          />
        </div>
      )}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
        kaan peksen
      </h1>
      <h2 className="lg:mt-2 mt-1 text-sm md:text-base lg:text-lg">
        Software Engineer
      </h2>
      <p className="lg:mt-6 mt-4 leading-relaxed text-sm md:text-[15px] lg:text-base">
        Hi there! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officia nemo magni corporis autem deleniti adipisci voluptatibus vel
        nulla assumenda molestiae alias eius excepturi aliquid minima, impedit
        fugiat iure itaque in, ab animi? Perferendis voluptatum similique quam
        facilis atque, quasi inventore obcaecati placeat consectetur! Eum
        aliquid esse laboriosam facilis, provident facere.
      </p>
      <div className="flex gap-4 lg:mt-8 mt-6">
        <Button
          dark
          onClick={() => window.open("/KaanPeksenResume25.pdf", "_blank")}
        >
          Resume
        </Button>
        <Button
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=kaanpmete@gmail.com",
              "_blank"
            )
          }
        >
          <CiMail className="text-lg" />
        </Button>
        <Button
          onClick={() =>
            window.open("https://www.linkedin.com/in/kaanmetep/", "_blank")
          }
        >
          <FaLinkedinIn className="text-lg" />
        </Button>
        <Button
          onClick={() => window.open("https://github.com/kaanmetep", "_blank")}
        >
          <FiGithub className="text-lg" />
        </Button>
      </div>
      <div className="lg:mt-8 mt-6 text-gray-700 dark:text-gray-300 text-sm">
        <h3 className="text-2xl ">Technologies</h3>
        <div className="flex gap-2  lg:mt-4 mt-2">
          <p>
            <span className="text-gray-900 dark:text-gray-300 font-semibold">
              Frontend:
            </span>{" "}
            {FRONTEND_STACK.join(", ")}
          </p>
        </div>
        <div className="flex gap-2  lg:mt-4 mt-2">
          <p>
            <span className="text-gray-900 dark:text-gray-300 font-semibold">
              Backend:
            </span>{" "}
            {BACKEND_STACK.join(", ")}
          </p>
        </div>
        <div className="flex gap-2  lg:mt-4 mt-2">
          <p>
            <span className="text-gray-900 dark:text-gray-300 font-semibold">
              Services:
            </span>{" "}
            {SERVICES_STACK.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
