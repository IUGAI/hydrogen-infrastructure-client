import { IoSaveOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoPencilSharp } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const columns = [
  {
    field: "id",
    headerName: "아이디",
    width: 150,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "regist_date",
    headerName: "등록일",
    width: 150,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "station",
    headerName: "사업소",
    width: 150,
    sortable: false,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "equipment",
    headerName: "시설물",
    width: 150,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => {
      // Convert the decimal value to a percentage
      return params.value === 10000001 ? "남부사전" : "";
    },
  },

  {
    field: "station_number",
    headerName: "작업번호",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "station_name",
    headerName: "작업명",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "work_day",
    headerName: "작업일",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "worker",
    headerName: "작업자",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "materialuseyn",
    headerName: "자재 사용 유무",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
];

const rows = [];

function WorkMainList() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelection = (selectionModel) => {
    setSelectedItems(selectionModel);
  };
  return (
    <div className="station-list">
      <div className="header-table">
        <div className="left">
          <div className="icon-header">
          <IoMdSearch
              size={24}
              color="#576dad"
      
            />
          </div>
          <div className="icon-header">
            <IoSaveOutline size={24} color="#576dad" />
          </div>
          <div className="icon-header">
            <RiDeleteBin6Line size={24} color="#576dad" />
          </div>
          <div className="icon-header">
            <IoPencilSharp size={24} color="#576dad" />
          </div>
          <div className="icon-header">
            <FaRegPenToSquare size={24} color="#576dad" />
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
          rowHeight={40}
          //   autoHeight
          columnHeaderHeight={40}
          columns={columns}
          onRowSelectionModelChange={handleItemSelection}
          localeText={{ noRowsLabel: "데이터가 존재하지 않습니다." }}
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

export default WorkMainList;
