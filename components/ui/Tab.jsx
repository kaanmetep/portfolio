import React from "react";

const Tab = ({ children, selected = false, onClick }) => {
  return (
    <div
      className={`text-sm lg:text-base pb-2 cursor-pointer ${
        selected
          ? "text-gray-900 font-semibold border-b-2 border-gray-900"
          : "text-gray-500 hover:border-b-2 hover:border-gray-200"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Tab;
