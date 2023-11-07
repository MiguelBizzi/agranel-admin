import React from "react";
import PageTitle from "../components/PageTitle";
import PageSearch from "../components/PageSearch";

// import { Container } from './styles';
import DataTableBase from "../components/DataTableBase";
import { IDataRow } from "../dtos/IDataRow";
import { TableColumn } from "react-data-table-component";

const columns: TableColumn<IDataRow>[] = [
  {
    name: "Nome:",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Categoria:",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Validade:",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Estoque:",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Status:",
    selector: (row) => row.year,
    sortable: true,
  },
];

const data: IDataRow[] = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 3,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 4,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 5,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 6,
    title: "Ghostbusters",
    year: "1984",
  },
];

const StorageManagement: React.FC = () => {
  return (
    <div>
      <PageTitle title="Gestão de estoque" />

      <PageSearch />

      <DataTableBase
        pagination
        columns={columns}
        data={data}
        highlightOnHover
        pointerOnHover
      />
    </div>
  );
};

export default StorageManagement;
