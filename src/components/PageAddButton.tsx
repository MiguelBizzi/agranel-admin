import React from "react";
import { FaPlus } from "react-icons/fa";

// import { Container } from './styles';

const PageAddButton: React.FC = () => {
  return (
    <button className="flex items-center justify-center bg-green-400 hover:bg-green-600 h-10 rounded-md px-4 text-white transition-colors duration-150">
      <FaPlus />
    </button>
  );
};

export default PageAddButton;
