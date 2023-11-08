import React from "react";

// import { Container } from './styles';

interface Props {
  icon: JSX.Element;
  onClick: () => void;
  background: string;
}

const PageActionButton: React.FC<Props> = ({ icon, onClick, background }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors ${background} duration-150`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default PageActionButton;
