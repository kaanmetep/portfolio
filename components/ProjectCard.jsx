"use client";
import Button from "./ui/Button";
import { FiGithub } from "react-icons/fi";
import { Globe } from "lucide-react";
const ProjectCard = ({
  logo,
  title,
  description,
  image = null,
  technologies = [],
  websiteUrl,
  githubUrl,
}) => {
  return (
    <div
      className="flex flex-col  border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-md transition-all duration-200 hover:border-gray-300 ease-in-out rounded-lg p-4 lg:p-6"
      onClick={() => window.open(websiteUrl, "_blank")}
    >
      <div className="flex lg:items-center gap-4">
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <div>{logo}</div>
            <p className="font-semibold text-base lg:text-lg">{title}</p>
          </div>
          <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-300 text-sm lg:text-[15px]">
            {description}
          </p>
          <ul className="flex gap-2 mt-4 text-gray-600 dark:text-gray-300 text-[10px] lg:text-xs">
            {technologies?.map((technology) => (
              <li
                key={technology}
                className="text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-md px-2 py-1"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
        {image && (
          <img
            src={image.src}
            alt={title}
            className="w-64 h-48 object-contain rounded-lg hidden lg:block flex-1"
          />
        )}
      </div>
      <ul className="flex gap-2 mt-[18px] items-center">
        <li>
          <Button onClick={() => window.open(websiteUrl, "_blank")}>
            <Globe className="size-3 md:size-4" />
          </Button>
        </li>
        <li>
          <Button onClick={() => window.open(githubUrl, "_blank")}>
            <FiGithub className="size-3 md:size-4" />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default ProjectCard;
