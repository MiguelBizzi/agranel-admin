import React from "react";
import { Outlet } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa";
import Logo from "/logo.png";
import NoProfileImage from "../assets/noprofile.webp";
import SIDE_ITEMS_DATA from "../constants/sideItemsData";
import SideBarItem from "../components/SideBarItem";
import { PiSignOutBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { signOut } from "../store/slices/auth/authSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const SideMenu: React.FC = () => {
  const { nome } = useSelector((state: RootState) => state.auth.selectedUser);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-between max-h-screen shadow-md">
        <div className="overflow-y-scroll p-6 ">
          <div className="flex items-center justify-center relative">
            <img
              src={Logo}
              alt="Logo Agranel"
              className="object-contain w-full h-24 mr"
            />
            {/* <FaArrowLeft className="absolute top-0 right-0 text-lg" /> */}
          </div>

          <div className="flex gap-2 mt-2">
            <img
              src={NoProfileImage}
              alt="Imagem de perfil"
              className="w-12 h-12 rounded-full border-orange-600 border-2"
            />

            <div className="flex flex-col gap-0">
              <h4 className="text-lg">Olá {nome}</h4>
              <a className="text-sm text-orange-600 font-bold cursor-pointer -mt-0.5">
                Editar perfil
              </a>
            </div>
          </div>

          <div className="w-full h-px bg-slate-300 my-4" />

          {SIDE_ITEMS_DATA.map((item) => (
            <SideBarItem data={item} key={item.link} />
          ))}
        </div>

        <div
          className="border-t flex gap-2 px-6 py-4 items-center text-lg text-orange-600 cursor-pointer"
          onClick={() => {
            dispatch(signOut());
            toast.success("Saindo da aplicação com sucesso!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }}
        >
          <PiSignOutBold />
          <span>Sair</span>
        </div>
      </div>

      <div className="flex-1 p-6 max-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default SideMenu;
