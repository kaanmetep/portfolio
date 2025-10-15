import React from "react";
import Button from "./ui/Button";
import { FaRegMoon, FaRegSun, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

import { FRONTEND_STACK, BACKEND_STACK, SERVICES_STACK } from "@/constants";

const AboutSection = () => {
  return (
    <div className="border-r border-gray-200 p-10 lg:w-[40%] relative ">
      <FaRegMoon className="absolute top-6 right-6 cursor-pointer" />
      <FaRegSun className="absolute top-6 right-6 hidden cursor-pointer" />
      <h1 className="text-5xl font-semibold">kaan peksen</h1>
      <h2 className="mt-2">Software Engineer</h2>
      <p className="mt-6 leading-relaxed">
        Hi there! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officia nemo magni corporis autem deleniti adipisci voluptatibus vel
        nulla assumenda molestiae alias eius excepturi aliquid minima, impedit
        fugiat iure itaque in, ab animi? Perferendis voluptatum similique quam
        facilis atque, quasi inventore obcaecati placeat consectetur! Eum
        aliquid esse laboriosam facilis, provident facere.
      </p>
      <div className="flex gap-4 mt-8">
        <Button dark>Resume</Button>
        <Button>
          <CiMail className="text-lg" />
        </Button>
        <Button>
          <FaLinkedinIn className="text-lg" />
        </Button>
        <Button>
          <FiGithub className="text-lg" />
        </Button>
      </div>
      <div className="mt-8 text-gray-700 text-sm">
        <h3 className="text-2xl ">Technologies</h3>
        <div className="flex gap-2  mt-4">
          <p>
            <span className="text-gray-900 font-semibold">Frontend:</span>{" "}
            {FRONTEND_STACK.join(", ")}
          </p>
        </div>
        <div className="flex gap-2  mt-4">
          <p>
            <span className="text-gray-900 font-semibold">Backend:</span>{" "}
            {BACKEND_STACK.join(", ")}
          </p>
        </div>
        <div className="flex gap-2  mt-4">
          <p>
            <span className="text-gray-900 font-semibold">Backend:</span>{" "}
            {SERVICES_STACK.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
