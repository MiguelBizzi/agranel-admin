import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import PageSearch from "../components/PageSearch";
import PageAddButton from "../components/PageAddButton";
import { IUser } from "../dtos/IUser";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import PageActionButton from "../components/PageActionButton";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import { TableColumn } from "react-data-table-component";
import DataTableBase from "../components/DataTableBase";
import { AnimatePresence } from "framer-motion";
import AddUserModal from "../components/modals/AddUserModal";
import EditUserModal from "../components/modals/EditUserModal";
import DeleteUserModal from "../components/modals/DeleteUserModal";
import { toast } from "react-toastify";

const UsersManagement: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const [selectedUser, setSelectedUser] = useState<IUser>({} as IUser);

  const users = useSelector((root: RootState) => root.auth.users);

  const handleEdit = (row: IUser) => {
    setSelectedUser(row);
    openEditModal();
  };

  const handleDelete = (row: IUser) => {
    if (users.length == 1) {
      toast.warn("É preciso ter pelo menos um usuário cadastrado!", {
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
    setSelectedUser(row);
    openDeleteModal();
  };

  const closeEditModal = () => setEditModalOpen(false);
  const openEditModal = () => setEditModalOpen(true);

  const closeAddModal = () => setAddModalOpen(false);
  const openAddModal = () => setAddModalOpen(true);

  const closeDeleteModal = () => setDeleteModalOpen(false);
  const openDeleteModal = () => setDeleteModalOpen(true);

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const columns: TableColumn<IUser>[] = [
    {
      name: "Nome:",
      selector: (row) => row.nome,
      sortable: true,
    },
    {
      name: "Username:",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Senha:",
      selector: (row) => row.password,
      sortable: true,
    },
    {
      name: "Ações:",
      cell: (row) => (
        <div className="flex gap-2 text-white">
          <PageActionButton
            background="hover:bg-blue-600 bg-blue-400"
            onClick={() => handleEdit(row)}
            icon={<FaPencilAlt />}
          />
          <PageActionButton
            background="bg-red-400 hover:bg-red-600"
            onClick={() => handleDelete(row)}
            icon={<FaTimes />}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="max-h-screen">
      <PageTitle title="Gestão de usuários" />

      <div className="flex gap-4">
        <PageSearch onChange={handleSearch} />
        <PageAddButton onClick={openAddModal} />
      </div>

      <DataTableBase
        columns={columns}
        data={users.filter((user) =>
          user.nome.toLowerCase().includes(search.toLowerCase())
        )}
        highlightOnHover
        pointerOnHover
        onRowClicked={handleEdit}
        noDataComponent={<h1>Nenhum usuário disponível</h1>}
      />

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {editModalOpen && (
          <EditUserModal
            userSelected={selectedUser}
            handleClose={closeEditModal}
          />
        )}
        {addModalOpen && <AddUserModal handleClose={closeAddModal} />}
        {deleteModalOpen && (
          <DeleteUserModal
            userSelected={selectedUser}
            handleClose={closeDeleteModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default UsersManagement;
