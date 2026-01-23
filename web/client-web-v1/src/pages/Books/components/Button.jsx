import React from "react";

const Button = ({
  text,
  href,
  preset = "primaryButton",
  className = "",
  onClick,
}) => {
  const baseClasses =
    "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const presets = {
    primaryButton: "bg-sky-600 hover:bg-sky-700 text-white focus:ring-sky-500",
    secondaryButton:
      "bg-gray-200 hover:bg-sky-500 text-gray-800 focus:ring-sky-500",
    greenButton:
      "bg-green-600 hover:bg-sky-500 text-white focus:ring-green-500",
  };

  const buttonClass = `${baseClasses} ${presets[preset]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
      >
        {text}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
