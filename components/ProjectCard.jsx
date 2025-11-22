"use client";
import Button from "./ui/Button";
import { FiGithub } from "react-icons/fi";
import { SiAppstore } from "react-icons/si";
import { Globe } from "lucide-react";
const ProjectCard = ({
  logo,
  title,
  description,
  image = null,
  technologies = [],
  websiteUrl,
  githubUrl,
  appStoreUrl,
  building = false,
}) => {
  return (
    <div
      className="relative flex flex-col  border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-md transition-all duration-200 hover:border-gray-300 ease-in-out rounded-lg p-4 lg:p-6"
      onClick={() =>
        window.open(appStoreUrl ? appStoreUrl : websiteUrl, "_blank")
      }
    >
      {building && (
        <div className="absolute -top-3 -left-4 lg:-left-6 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-[9px] lg:text-xs">Currently Building</p>
        </div>
      )}
      <div className="flex lg:items-center gap-4">
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <div>{logo}</div>
            <p className="font-semibold text-base lg:text-lg">{title}</p>
          </div>
          <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-300 text-sm lg:text-[15px]">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4 text-gray-600 dark:text-gray-300 text-[10px] lg:text-xs">
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
          <div className="w-96 h-72 dark:bg-gray-900 rounded-lg overflow-hidden hidden 2xl:flex items-center justify-center">
            <img
              src={image.src}
              alt={title}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
      <ul className="flex gap-2 mt-[18px] items-center">
        {appStoreUrl && (
          <li>
            <Button onClick={() => window.open(appStoreUrl, "_blank")}>
              <SiAppstore className="size-3 md:size-4" />
            </Button>
          </li>
        )}
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
