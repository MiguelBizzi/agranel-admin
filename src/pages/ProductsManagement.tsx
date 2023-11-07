import React from "react";
import PageTitle from "../components/PageTitle";
import PageSearch from "../components/PageSearch";

const ProductsManagement: React.FC = () => {
  return (
    <div>
      <PageTitle title="Gestão de produtos" />
      <PageSearch />
    </div>
  );
};

export default ProductsManagement;
