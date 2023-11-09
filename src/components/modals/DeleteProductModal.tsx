import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { IProduto } from "../../dtos/IProduto";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { deleteProduct } from "../../store/slices/products/productsSlice";
import { toast } from "react-toastify";
import modalAnimation from "../../constants/modalAnimation";

interface Props {
  handleClose: () => void;
  product: IProduto;
}

const DeleteProductModal: React.FC<Props> = ({ handleClose, product }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteProduct(product.produto_id));

    toast.success("Produto deletado com sucesso!", {
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
        className="w-1/3 mx-auto p-8 rounded-md flex flex-col text-center bg-white"
        onClick={(e) => e.stopPropagation()}
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="text-2xl text-gray-600 font-bold mb-2">
          Deseja excluir o produto?
        </h1>
        <p className="text-sm text-gray-500">
          Ao clicar no botão excluir o produto será excluido do sistema!
        </p>

        <div className="flex mt-8 gap-4 justify-center items-center">
          <button
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 w-full rounded-md text-sm"
            onClick={handleDelete}
          >
            Excluir
          </button>
          <button className="bg-zinc-400 hover:bg-zinc-500 text-white px-4 py-2 w-full rounded-md text-sm">
            Cancelar
          </button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default DeleteProductModal;
