import React from "react";
import { Briefcase } from "lucide-react";

const WorkExperienceItem = ({ company, title, dates, description }) => {
  return (
    <div className="relative pl-6 border-l border-stone-200 dark:border-gray-700">
      <div className="flex items-start gap-3 mb-1">
        <Briefcase className="size-4 text-stone-600 mt-1 flex-shrink-0" />
        <div className="flex-1">
          <div className="flex sm:items-center justify-between gap-2">
            <div className="flex flex-col md:flex-row md:items-center gap-1">
              <p className="font-semibold text-sm lg:text-base text-stone-900 dark:text-white">
                {company}
              </p>
              <span className="md:inline hidden">-</span>
              <p className="text-sm lg:text-base text-stone-700 dark:text-gray-300 font-medium">
                {title}
              </p>
            </div>
            <p className="text-xs  lg:text-sm text-stone-500 dark:text-gray-300 italic">
              {dates}
            </p>
          </div>
        </div>
      </div>
      <p className="text-stone-600 dark:text-gray-300 lg:text-sm text-xs leading-relaxed pl-7">
        {description}
      </p>
    </div>
  );
};

export default WorkExperienceItem;
