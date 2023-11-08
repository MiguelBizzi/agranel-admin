import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import PageSearch from "../components/PageSearch";

// import { Container } from './styles';
import DataTableBase from "../components/DataTableBase";
import { TableColumn } from "react-data-table-component";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import PageAddButton from "../components/PageAddButton";
import PageActionButton from "../components/PageActionButton";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { IProduto } from "../dtos/IProduto";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../store/slices/products/productsSlice";
import { AnimatePresence } from "framer-motion";
import EditStorageModal from "../components/modals/EditStorageModal";

const StorageManagement: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const products = useSelector((root: RootState) => root.products.products);
  const dispatch = useDispatch<AppDispatch>();

  const handleEdit = () => {
    openModal();
  };

  const handleDelete = (row: IProduto) => {
    dispatch(deleteProduct(row.produto_id));
  };

  const closeModal = () => setModalOpen(false);
  const openModal = () => setModalOpen(true);

  const columns: TableColumn<IProduto>[] = [
    {
      name: "Nome:",
      selector: (row) => row.nome,
      sortable: true,
    },
    {
      name: "Categoria:",
      selector: (row) => row.categoria,
      sortable: true,
    },
    {
      name: "Possui Validade:",
      selector: (row) => (row.possuiValidade ? "Sim" : "Não"),
      sortable: true,
    },
    {
      name: "Estoque:",
      selector: (row) => row.estoque,
      sortable: true,
    },
    {
      name: "Status:",
      selector: (row) => (row.status ? "Ativo" : "Inativo"),
      sortable: true,
    },
    {
      name: "Ações:",
      cell: (row) => (
        <div className="flex gap-2 text-white">
          <PageActionButton
            background="hover:bg-blue-600 bg-blue-400"
            onClick={() => openModal()}
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
      <PageTitle title="Gestão de estoque" />

      <div className="flex gap-4">
        <PageSearch />
        <PageAddButton />
      </div>

      <DataTableBase
        columns={columns}
        data={products}
        highlightOnHover
        pointerOnHover
        onRowClicked={handleEdit}
        noDataComponent={<h1>Nenhum produdo disponível</h1>}
      />

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && <EditStorageModal handleClose={closeModal} />}
      </AnimatePresence>
    </div>
  );
};

export default StorageManagement;
