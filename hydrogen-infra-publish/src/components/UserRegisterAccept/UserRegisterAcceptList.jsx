import { IoMdSearch } from "react-icons/io";
import { IoSaveOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import ModalDefault from "../Modal/ModalDefault";

const columns = [
  // {
  //   field: "id",
  //   headerName: "아이디",
  //   width: 150,
  //   sortable: false,
  //   headerAlign: "center",
  //   align: "center",
  // },
  {
    field: "regist_date",
    headerName: "가입일",
    width: 150,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "idx",
    headerName: "아이디",
    width: 150,
    sortable: false,
    headerClassName: "super-app-theme--header",
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
    field: "person_number",
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
    width: 200,
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

function UserRegisterAcceptList() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);
  const [openreject, setOpenReject] = useState(false);

  const handleItemSelection = (selectionModel) => {
    setSelectedItems(selectionModel);
  };
  const [rows, setRows] = useState([
    {
      id: 4000001,
      regist_date: "2024-01-11",
      idx: "kimsundal01",
      name: "김선달",
      person_number: "953221-1******",
      phone_number: "010-****-1212",
      email: "kimsundal01@gmail.com",
      buiness: "부산 A 사업소",
    },
  ]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseReject = () => {
    setOpenReject(false)
  }
  const handleClickGoToLogin = () => {
    // navigate(`/user-info/${selectedItems[0]}`);
  };
  const handleNavigatetoRegist = () => {
    if (selectedItems.length > 1) {
      alert("한개 만 선택해주세요!");
    } else if (selectedItems.length === 0) {
      alert("사용자 선택해 주세요");
    } else {
      const  selectedUser =  rows.find((item) => item.id === selectedItems[0])
      setUser(selectedUser.name)
      setOpen(true);
    }
  };

  const handleNavigatetoReject = () => {
    if (selectedItems.length > 1) {
      alert("한개 만 선택해주세요!");
    } else if (selectedItems.length === 0) {
      alert("사용자 선택해 주세요");
    } else {
      const  selectedUser =  rows.find((item) => item.id === selectedItems[0])
      setUser(selectedUser.name)
      setOpenReject(true);
    }
  };

 
  return (
    <div className="station-list">
      <ModalDefault
        open={open}
        handleClose={handleClose}
        modalTitle={"등록"}
        modalDsecriptions={
          <div
            dangerouslySetInnerHTML={{
              __html: `${user}님  </p>  등록하시겠습니까?`,
            }}
          />
        }
        handleClickGoToLogin={handleClickGoToLogin}
      />
           <ModalDefault
        open={openreject}
        handleClose={handleCloseReject}
        modalTitle={"사용자 등록"}
        modalDsecriptions={
          <div
            dangerouslySetInnerHTML={{
              __html: `${user}님  </p>  거절하시겠습니까?`,
            }}
          />
        }
        handleClickGoToLogin={handleClickGoToLogin}
      />
      <div className="header-table">
        <div className="left">
          <div className="icon-header">
            <FaCheck
              size={24}
              onClick={handleNavigatetoRegist}
              color="#576dad"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="icon-header">
            <FaXmark onClick={handleNavigatetoReject} size={24} color="#576dad" style={{ cursor: "pointer" }} />
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
