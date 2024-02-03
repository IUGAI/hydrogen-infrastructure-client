import { IoSaveOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoPencilSharp } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  },

  {
    field: "work_number",
    headerName: "작업번호",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "work_name",
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
    renderCell: (params) => {
      return params.value ? "유" : "무";
    },
  },
];

function WorkMainList() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      id: 100002,
      regist_date: "2024-01-09",
      station: "서울 A 사업소",
      equipment: "생산 1",
      work_number: "W-20240109181232",
      work_name: "6월 정기점검",
      work_day: "2024-01-12",
      worker: "나성실",
      materialuseyn: true,
    },
  ]);

  const navigate = useNavigate();
  const handleHover = (index) => {
    setHoveredIcon(index);
  };
  const handleItemSelection = (selectionModel) => {
    setSelectedItems(selectionModel);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickGoToLogin = () => {
    navigate(`/work-report-register/${selectedItems[0]}`);
  };

  const handleNavigatetoDetail = () => {
    if (selectedItems.length > 1) {
      alert("한개 만 선택해주세요!");
    } else if (selectedItems.length === 0) {
      alert("사업소 선택해 주세요");
    } else {
      navigate(`/work-list/${selectedItems[0]}`);
    }
  };

  const handleEditReport = () => {
    if (selectedItems.length > 1) {
      alert("한개 만 선택해주세요!");
    } else if (selectedItems.length === 0) {
      alert("사업소 선택해 주세요");
    } else {
      navigate(`/work-report-edit/${selectedItems[0]}`);
    }
  };

  const handleNavigatetoReportRegist = () => {
    if (selectedItems.length > 1) {
      alert("한개 만 선택해주세요!");
    } else if (selectedItems.length === 0) {
      alert("작업 선택해 주세요");
    } else {
      setOpen(true);
    }
  };

  const iconData = [
    {
      icon: (
        <IoMdSearch
          size={24}
          color={hoveredIcon === 0 ? "#fff" : "#576dad"}
          style={{ cursor: "pointer" }}
        />
      ),
      text: "작업 조회",
      onClick: handleNavigatetoDetail,
    },
    {
      icon: (
        <IoSaveOutline
          size={24}
          style={{ cursor: "pointer" }}
          color={hoveredIcon === 1 ? "#fff" : "#576dad"}
        />
      ),
      text: "저장",
      // onClick: handleGrEditClick,
    },
    {
      icon: (
        <RiDeleteBin6Line
          size={24}
          style={{ cursor: "pointer" }}
          color={hoveredIcon === 2 ? "#fff" : "#576dad"}
        />
      ),
      text: "삭제",
      // onClick: handleClickGotoEditPAge,
    },
    {
      icon: (
        <IoPencilSharp
          size={24}
          style={{ cursor: "pointer" }}
          color={hoveredIcon === 3 ? "#fff" : "#576dad"}
        />
      ),
      text: "작업 결과 등록",
      onClick: handleNavigatetoReportRegist,
    },
    {
      icon: (
        <FaRegPenToSquare
          size={24}
          style={{ cursor: "pointer" }}
          color={hoveredIcon === 4 ? "#fff" : "#576dad"}
        />
      ),
      text: "결과 수정",
      onClick: handleEditReport,
    },
  ];

  return (
    <div className="station-list">
      <ModalDefault
        open={open}
        handleClose={handleClose}
        modalTitle={"작업 결과 등록"}
        modalDsecriptions={
          <div
            dangerouslySetInnerHTML={{
              __html: "선택한 작업에 대한 </p>  결과보고서를 등록하시겠습니까?",
            }}
          />
        }
        handleClickGoToLogin={handleClickGoToLogin}
      />
      <div className="header-table">
        <div className="left">
          {iconData.map((data, index) => (
            <div
              key={index}
              className="icon-header"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
              onClick={data.onClick}
            >
              {hoveredIcon === index && (
                <span className="tooltip">{data.text}</span>
              )}
              {data.icon}
            </div>
          ))}
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
