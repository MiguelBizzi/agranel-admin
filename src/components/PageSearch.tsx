import React, { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onChange: (value: string) => void;
}

const PageSearch: React.FC<Props> = ({ onChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <div className="flex flex-1 relative max-w-2xl h-10 mb-6">
      <FaSearch className="absolute self-center top-3 left-3 text-gray-500" />
      <input
        type="text"
        className="bg-gray-200 py-2 pl-10 rounded-md active:outline-orange-600 focus:outline-orange-600 flex-1 placeholder:text-gray-500"
        placeholder="Pesquisa"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default PageSearch;
