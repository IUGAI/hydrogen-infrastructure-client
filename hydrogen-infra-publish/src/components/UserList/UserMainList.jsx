import { IoMdSearch } from "react-icons/io";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router";
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
    field: "bithday",
    headerName: "생년월일",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "phone_number",
    headerName: "전화번호",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "이메일",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "buisness",
    headerName: "소속",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "access",
    headerName: "접근권한",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
];

const rows = [
  {
    id: 100001,
    regist_date: "2024-01-12",
    name: "홍길동",
    bithday: "1998-12-13",
    phone_number: "010-5756-1133",
    email: "aleks13@namboo.ac.kr",
    buisness: "좋은회사",
    access: 3,
  },
];

function UserMainList() {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate()
  const handleItemSelection = (selectionModel) => {
    setSelectedItems(selectionModel);
  };

  const handleNavigatetoDetail = () => {
    if (selectedItems.length > 1) {
      alert("한개 만 선택해주세요!");
    } else if (selectedItems.length === 0) {
      alert("사용자 선택해 주세요");
    } else {
      navigate(`/user-info/${selectedItems[0]}`);
    }
  };
  return (
    <div className="station-list">
      <div className="header-table">
        <div className="left">
          <div className="icon-header">
            <IoMdSearch size={24} color="#576dad"        onClick={handleNavigatetoDetail} />
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

export default UserMainList;