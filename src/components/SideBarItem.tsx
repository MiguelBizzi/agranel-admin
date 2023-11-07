import React from "react";
import { ISideItem } from "../dtos/ISideItem";
import { Link } from "react-router-dom";

// import { Container } from './styles';

interface Props {
  data: ISideItem;
}

const SideBarItem: React.FC<Props> = ({ data }) => {
  return (
    <Link to={data.link} className="flex items-center gap-2 mb-4">
      <span className="text-orange-600 text-lg">{data.icon}</span>
      <span className="text-gray-600 text-base">{data.title}</span>
    </Link>
  );
};

export default SideBarItem;
