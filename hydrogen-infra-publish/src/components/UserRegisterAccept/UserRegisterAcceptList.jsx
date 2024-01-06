import { IoMdSearch } from "react-icons/io";
import { IoSaveOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";
import { DataGrid } from "@mui/x-data-grid";

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
    headerName: "가입일",
    width: 150,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "name",
    headerName: "성명",
    width: 150,
    sortable: false,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "alien_number",
    headerName: "주민등록번호",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "phone_number",
    headerName: "휴대전화",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "이메일",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "buiness",
    headerName: "소속",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
];

const rows = [];

function UserRegisterAcceptList() {
  const handleItemSelection = (selectionModel) => {
    setSelectedItems(selectionModel);
  };
  return (
    <div className="station-list">
      <div className="header-table">
        <div className="left">
          <div className="icon-header">
            <FaCheck size={24} color="#576dad" style={{cursor: "pointer"}} />
          </div>
          <div className="icon-header">
            <FaXmark size={24} color="#576dad" style={{cursor: "pointer"}}  />
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

export default UserRegisterAcceptList;
