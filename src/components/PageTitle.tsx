import React from "react";

interface Props {
  title: string;
}

const PageTitle: React.FC<Props> = ({ title }) => {
  return <h1 className="text-3xl text-gray-600 font-bold mb-6">{title}</h1>;
};

export default PageTitle;
