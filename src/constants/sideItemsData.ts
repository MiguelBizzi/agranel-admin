import React from "react";
import { ISideItem } from "../dtos/ISideItem";
import { FaBox, FaUsers } from "react-icons/fa";

const SIDE_ITEMS_DATA: ISideItem[] = [
  {
    title: "Gestão de produtos",
    link: "products",
    icon: React.createElement(FaBox),
  },
  {
    title: "Gestão de usuários",
    link: "users",
    icon: React.createElement(FaUsers),
  },
];

export default SIDE_ITEMS_DATA;
