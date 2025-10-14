import React from "react";

const ProjectCard = ({ title, description, image, technologies = [] }) => {
  return (
    <div className="mt-10 border border-gray-200 rounded-lg p-8">
      <p className="font-semibold text-xl">{title}</p>
      <div className="flex gap-4">
        <p className="mt-4">{description}</p>
        <img src={image} alt={title} />
      </div>
      <ul className="flex gap-2 mt-4">
        {technologies?.map((technology) => (
          <li
            key={technology}
            className="text-gray-700 bg-gray-100 rounded-md px-2 py-1 text-sm"
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
