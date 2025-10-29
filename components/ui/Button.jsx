import React from "react";

const Button = ({
  children,
  onClick,
  dark = false,
  type = "button",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`cursor-pointer border-gray-200 border px-4 py-2  rounded-md w-fit transition-all duration-100 lg:text-sm text-xs font-medium flex items-center justify-center ${
        dark
          ? "bg-black text-white hover:text-gray-200 dark:bg-white dark:text-black dark:hover:text-gray-800"
          : "bg-white hover:bg-gray-100 dark:text-white dark:bg-black dark:hover:bg-gray-900 dark:border-gray-700"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
