import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button2: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="p-[3px] relative" onClick={onClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-gray-800 hover:text-white hover:bg-transparent">
        {text}
      </div>
    </button>
  );
};

export default Button2;