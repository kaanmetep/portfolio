import React from "react";

const Button = ({ children, onClick, dark = false }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border-gray-200 border px-4 py-2 rounded-md w-fit transition-all duration-100 text-sm font-medium flex items-center justify-center ${
        dark
          ? "bg-black text-white hover:text-gray-200"
          : "bg-white hover:bg-gray-100"
      }`}
    >
      {children}
    </div>
  );
};

export default Button;
