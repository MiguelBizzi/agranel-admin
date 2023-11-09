import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { FaTimes } from "react-icons/fa";
import { IProduto } from "../../dtos/IProduto";
import TextInput from "../TextInput";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { changeProduct } from "../../store/slices/products/productsSlice";
import { toast } from "react-toastify";
import modalAnimation from "../../constants/modalAnimation";

interface Props {
  handleClose: () => void;
  product: IProduto;
}

const EditProductModal: React.FC<Props> = ({ handleClose, product }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const nome = formData.get("nome") as string;
    const categoria = formData.get("categoria") as string;
    const estoque = formData.get("estoque") as string;
    const possuiValidade = formData.get("validade") == "S";
    const status = formData.get("status") == "S";

    const productTemp: IProduto = {
      produto_id: product.produto_id,
      nome,
      categoria,
      estoque: Number(estoque),
      possuiValidade,
      status,
    };

    dispatch(changeProduct(productTemp));

    toast.success("Produto editado com sucesso!", {
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
            Editar produto
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
              defaultValue={product.nome}
              label="Nome:"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              id="categoria"
              name="categoria"
              defaultValue={product.categoria}
              label="Categoria:"
              required
            />
            <TextInput
              id="estoque"
              name="estoque"
              defaultValue={product.estoque}
              label="Estoque:"
              required
              type="number"
              min={0}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 mt-4">
            <div>
              <label className=" text-sm font-bold">Possui validade</label>
              <div className="flex gap-4 mt-1">
                <label className="text-sm">
                  <input
                    type="radio"
                    name="validade"
                    value="S"
                    defaultChecked={product.possuiValidade}
                    className="mr-2"
                  />
                  Sim
                </label>
                <label className="text-sm">
                  <input
                    type="radio"
                    name="validade"
                    value="N"
                    defaultChecked={!product.possuiValidade}
                    className="mr-2"
                  />
                  Não
                </label>
              </div>
            </div>
            <div>
              <label className=" text-sm font-bold">Status</label>
              <div className="flex gap-4 mt-1">
                <label className="text-sm">
                  <input
                    type="radio"
                    name="status"
                    value="S"
                    defaultChecked={product.status}
                    className="mr-2"
                  />
                  Ativo
                </label>
                <label className="text-sm">
                  <input
                    type="radio"
                    name="status"
                    value="N"
                    defaultChecked={!product.status}
                    className="mr-2"
                  />
                  Inativo
                </label>
              </div>
            </div>
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

export default EditProductModal;
