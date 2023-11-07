import React from "react";
import PageTitle from "../components/PageTitle";
import PageSearch from "../components/PageSearch";

const UsersManagement: React.FC = () => {
  return (
    <div>
      <PageTitle title="Gestão de usuários" />
      <PageSearch />
    </div>
  );
};

export default UsersManagement;
