import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import PageSearch from "../components/PageSearch";

import DataTableBase from "../components/DataTableBase";
import { TableColumn } from "react-data-table-component";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import PageAddButton from "../components/PageAddButton";
import PageActionButton from "../components/PageActionButton";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { IProduto } from "../dtos/IProduto";
import { AnimatePresence } from "framer-motion";
import EditProductModal from "../components/modals/EditProductModal";
import AddroductModal from "../components/modals/AddProductModal";
import DeleteProductModal from "../components/modals/DeleteProductModal";

const ProductsManagement: React.FC = () => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const [selectedProduct, setSelectedProduct] = useState<IProduto>(
    {} as IProduto
  );

  const products = useSelector((root: RootState) => root.products.products);

  const handleEdit = (row: IProduto) => {
    setSelectedProduct(row);
    openEditModal();
  };

  const handleDelete = (row: IProduto) => {
    setSelectedProduct(row);
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
      conditionalCellStyles: [
        {
          when: (row) => row.status,
          style: {
            color: "green",
          },
        },
        {
          when: (row) => !row.status,
          style: {
            color: "red",
          },
        },
      ],
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
      <PageTitle title="Gestão de produtos" />

      <div className="flex gap-4">
        <PageSearch onChange={handleSearch} />
        <PageAddButton onClick={openAddModal} />
      </div>

      <DataTableBase
        columns={columns}
        data={products.filter((product) =>
          product.nome.toLowerCase().includes(search.toLowerCase())
        )}
        highlightOnHover
        pointerOnHover
        onRowClicked={handleEdit}
        noDataComponent={<h1>Nenhum produdo disponível</h1>}
      />

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {editModalOpen && (
          <EditProductModal
            product={selectedProduct}
            handleClose={closeEditModal}
          />
        )}
        {addModalOpen && <AddroductModal handleClose={closeAddModal} />}
        {deleteModalOpen && (
          <DeleteProductModal
            product={selectedProduct}
            handleClose={closeDeleteModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsManagement;
