import React from "react";

const Tab = ({ children, selected = false }) => {
  return (
    <div
      className={`pb-2 cursor-pointer ${
        selected
          ? "text-gray-900 font-semibold border-b-2 border-gray-900"
          : "text-gray-500"
      }`}
    >
      {children}
    </div>
  );
};

export default Tab;
