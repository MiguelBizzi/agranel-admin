import DataTable, { TableProps } from "react-data-table-component";
import { CgSortAz } from "react-icons/cg";

const sortIcon = <CgSortAz />;
const selectProps = {
  indeterminate: (isIndeterminate: boolean) => isIndeterminate,
};
const paginationComponentOptions = {
  rowsPerPageText: "Linhas por página",
  rangeSeparatorText: "de",
  selectAllRowsItem: true,
  selectAllRowsItemText: "Todos",
};

function DataTableBase<T>(props: TableProps<T>): JSX.Element {
  return (
    <DataTable
      pagination
      selectableRowsComponentProps={selectProps}
      sortIcon={sortIcon}
      responsive
      paginationComponentOptions={paginationComponentOptions}
      fixedHeader
      fixedHeaderScrollHeight="300px"
      {...props}
    />
  );
}

export default DataTableBase;
