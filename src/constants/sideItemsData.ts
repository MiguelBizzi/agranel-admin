import React from "react";
import { ISideItem } from "../dtos/ISideItem";
import { FaBox, FaUsers } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const SIDE_ITEMS_DATA: ISideItem[] = [
  {
    title: "Gestão de estoque",
    link: "storage",
    icon: React.createElement(FaBox),
  },
  {
    title: "Gestão de usuários",
    link: "users",
    icon: React.createElement(FaUsers),
  },
  {
    title: "Gestão de produtos",
    link: "products",
    icon: React.createElement(FiShoppingCart),
  },
];

export default SIDE_ITEMS_DATA;
