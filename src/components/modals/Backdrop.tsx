import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  onClick: () => void;
}

const Backdrop: React.FC<Props> = ({ children, onClick }) => {
  return (
    <motion.div
      className="absolute h-full w-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-70"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
