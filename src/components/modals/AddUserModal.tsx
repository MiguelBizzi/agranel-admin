import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { FaTimes } from "react-icons/fa";
import TextInput from "../TextInput";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { toast } from "react-toastify";
import modalAnimation from "../../constants/modalAnimation";
import { useSelector } from "react-redux";
import { createUser } from "../../store/slices/auth/authSlice";
import { IUser } from "../../dtos/IUser";

interface Props {
  handleClose: () => void;
}

const AddUserModal: React.FC<Props> = ({ handleClose }) => {
  const users = useSelector((root: RootState) => root.auth.users);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const nome = formData.get("nome") as string;
    const userName = formData.get("user") as string;
    const senha = formData.get("senha") as string;

    if (users.some((u) => u.username === userName)) {
      toast.warn("Usuário já existente!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      return;
    }

    const maiorId = users.reduce((maxId, obj) => {
      return obj.user_id > maxId ? obj.user_id : maxId;
    }, 0);

    const userTemp: IUser = {
      user_id: maiorId + 1,
      nome,
      username: userName,
      password: senha,
    };

    dispatch(createUser(userTemp));

    toast.success("Usuário adicionado com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    handleClose();
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="w-2/3 mx-auto p-8 rounded-md flex flex-col  bg-white"
        onClick={(e) => e.stopPropagation()}
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex justify-between">
          <h1 className="text-2xl text-gray-600 font-bold mb-6">
            Adicionar usuário
          </h1>
          <div className="text-2xl text-orange-600" onClick={handleClose}>
            <FaTimes />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <TextInput id="nome" name="nome" label="Nome:" required />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TextInput id="user" name="user" label="Usuário:" required />
            <TextInput id="senha" name="senha" label="Senha:" required />
          </div>

          <div className="flex mt-4 justify-end">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm"
            >
              Adicionar
            </button>
          </div>
        </form>
      </motion.div>
    </Backdrop>
  );
};

export default AddUserModal;
