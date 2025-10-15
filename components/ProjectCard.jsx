import Button from "./ui/Button";
import { FiGithub } from "react-icons/fi";
import { Globe } from "lucide-react";
const ProjectCard = ({
  logo,
  title,
  description,
  image,
  technologies = [],
}) => {
  return (
    <div className="mt-10 border border-gray-200 cursor-pointer hover:shadow-md transition-all duration-200 hover:border-gray-300 ease-in-out rounded-lg p-6">
      <div className="flex items-center gap-4">
        <div>
          <div className="flex gap-2 items-center">
            <div>{logo}</div>
            <p className="font-semibold text-lg">{title}</p>
          </div>
          <p className="mt-4 leading-relaxed text-gray-500 text-[15px]">
            {description}
          </p>
          <ul className="flex gap-2 mt-4 text-gray-600 text-xs">
            {technologies?.map((technology) => (
              <li
                key={technology}
                className="text-gray-500 bg-gray-100 rounded-md px-2 py-1"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={image.src}
          alt={title}
          className="w-64 h-48 object-contain rounded-lg"
        />
      </div>
      <ul className="flex gap-2 mt-[18px] items-center">
        <li>
          <Button>
            <Globe className="size-2 sm:size-3 md:size-4" />
          </Button>
        </li>
        <li>
          <Button>
            <FiGithub className="size-2 sm:size-3 md:size-4" />
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default ProjectCard;
