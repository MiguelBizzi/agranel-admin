import React from "react";
import { FaPlus } from "react-icons/fa";

interface Props {
  onClick: () => void;
}

const PageAddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center bg-green-400 hover:bg-green-600 h-10 rounded-md px-4 text-white transition-colors duration-150"
    >
      <FaPlus />
    </button>
  );
};

export default PageAddButton;
