import React from "react";
import { FaSearch } from "react-icons/fa";

// import { Container } from './styles';

const PageSearch: React.FC = () => {
  return (
    <div className="flex relative max-w-2xl mb-6">
      <FaSearch className="absolute self-center top-3 left-3 text-gray-500" />
      <input
        type="text"
        className="bg-gray-200 py-2 pl-10 rounded-md active:outline-orange-600 focus:outline-orange-600 flex-1 placeholder:text-gray-500"
        placeholder="Pesquisa"
      />
    </div>
  );
};

export default PageSearch;
