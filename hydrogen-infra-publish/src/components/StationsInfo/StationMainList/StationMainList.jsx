import { IoMdSearch } from "react-icons/io";
import { DiMootoolsBadge } from "react-icons/di";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
import "./StationMainList.scss";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "등록일", width: 200 },
  { field: "firstName", headerName: "시도", width: 200 },
  { field: "lastName", headerName: "사업자", width: 200 },
  {
    field: "age",
    headerName: "사업소",
    type: "number",
    width: 200,
  },
  {
    field: "fullName",
    headerName: "개시일",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function StationMainList() {
  return (
    <div className="station-list">
      <div className="header-table">
        <div className="left">
          <div className="icon-header">
            <IoMdSearch size={24} color="#576dad" />
          </div>
          <div className="icon-header">
            <DiMootoolsBadge
              size={34}
              color="#576dad"
              style={{ transform: `rotate(32deg)` }}
            />
          </div>
          <div className="icon-header">
            <IoSaveOutline size={24} color="#576dad" />
          </div>
          <div className="icon-header">
            <RiDeleteBin6Line size={24} color="#576dad" />
          </div>
        </div>
        <div className="right">
          <div className="icon-header">
            <SiMicrosoftexcel size={24} color="#576dad" />
          </div>
        </div>
      </div>
      <div className="table">
        <DataGrid
          rows={rows}
          columns={columns}
          className="custom-datagrid"
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default StationMainList;
