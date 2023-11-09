import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { FaTimes } from "react-icons/fa";
import TextInput from "../TextInput";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { toast } from "react-toastify";
import modalAnimation from "../../constants/modalAnimation";
import { IUser } from "../../dtos/IUser";
import { editUser } from "../../store/slices/auth/authSlice";

interface Props {
  handleClose: () => void;
  userSelected: IUser;
}

const EditUserModal: React.FC<Props> = ({ handleClose, userSelected }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const nome = formData.get("nome") as string;
    const userName = formData.get("user") as string;
    const senha = formData.get("senha") as string;

    const userTemp: IUser = {
      user_id: userSelected.user_id,
      nome,
      username: userName,
      password: senha,
    };

    dispatch(editUser(userTemp));

    toast.success("Usuário editado com sucesso!", {
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
            Editar usuário
          </h1>
          <div className="text-2xl text-orange-600" onClick={handleClose}>
            <FaTimes />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <TextInput
              id="nome"
              name="nome"
              label="Nome:"
              required
              defaultValue={userSelected.nome}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              id="user"
              name="user"
              label="Usuário:"
              required
              defaultValue={userSelected.username}
            />
            <TextInput
              id="senha"
              name="senha"
              label="Senha:"
              required
              defaultValue={userSelected.password}
            />
          </div>

          <div className="flex mt-4 justify-end">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm"
            >
              Editar
            </button>
          </div>
        </form>
      </motion.div>
    </Backdrop>
  );
};

export default EditUserModal;
