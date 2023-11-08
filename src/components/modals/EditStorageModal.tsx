import React from "react";
import { Variants, motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { FaTimes } from "react-icons/fa";

interface Props {
  handleClose: () => void;
}

const EditStorageModal: React.FC<Props> = ({ handleClose }) => {
  const dropIn: Variants = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="w-2/3 mx-auto p-8 rounded-md flex flex-col  bg-white"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
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
      </motion.div>
    </Backdrop>
  );
};

export default EditStorageModal;
