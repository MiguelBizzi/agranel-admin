import DataTable, {
  PaginationOptions,
  TableProps,
  TableStyles,
} from "react-data-table-component";
import { CgSortAz } from "react-icons/cg";

const sortIcon = <CgSortAz />;
const selectProps = {
  indeterminate: (isIndeterminate: boolean) => isIndeterminate,
};
const paginationComponentOptions: PaginationOptions = {
  rangeSeparatorText: "de",
  selectAllRowsItem: false,
  selectAllRowsItemText: "Todos",
  noRowsPerPage: true,
};

const customStyles: TableStyles = {
  headCells: {
    style: {
      fontWeight: "bold",
      fontSize: "0.8rem",
    },
  },
};

function DataTableBase<T>(props: TableProps<T>): JSX.Element {
  return (
    <DataTable
      pagination
      selectableRowsComponentProps={selectProps}
      sortIcon={sortIcon}
      responsive
      paginationComponentOptions={paginationComponentOptions}
      customStyles={customStyles}
      {...props}
    />
  );
}

export default DataTableBase;
