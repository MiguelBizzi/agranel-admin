import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import LoginPage from "./LoginPage";
import SideMenu from "./SideMenu";

const ValidatePage: React.FC = () => {
  const isLogged = useSelector((state: RootState) => state.auth.isLogged);

  if (isLogged) {
    return <SideMenu />;
  } else {
    return <LoginPage />;
  }
};

export default ValidatePage;
