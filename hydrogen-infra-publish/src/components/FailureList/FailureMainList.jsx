import { DiMootoolsBadge } from "react-icons/di";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import ModalDefault from "../Modal/ModalDefault";
import { useNavigate } from "react-router-dom";

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
    field: "station_type",
    headerName: "고장 종류",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "work_yn",
    headerName: "작업 유무",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "상태",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "description",
    headerName: "내용",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
];

function FailureMainList() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      id: 7000001,
      regist_date: "2024-01-11",
      station: "서울 A 사업소",
      equipment: "생산-A-시설물",
      station_type: "고장",
      work_yn: "유",
      status: "작업 대기",
      description: "생산-A-시설물 작업 중단",
    },
  ]);

  const handleHover = (index) => {
    setHoveredIcon(index);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickGoToLogin = () => {
    navigate(`/work-register/${selectedItems[0]}`);
  };

  const handleItemSelection = (selectionModel) => {
    setSelectedItems(selectionModel);
  };

  const handleNavigatetoDetail = () => {
    if (selectedItems.length > 1) {
      alert("한개 만 선택해주세요!");
    } else if (selectedItems.length === 0) {
      alert("사업소 선택해 주세요");
    } else {
      setOpen(true)
    }
  };

  const iconData = [
    {
      icon: (
        <DiMootoolsBadge
        size={34}
        color={hoveredIcon === 0 ? "#fff" : "#576dad"}
        style={{ transform: `rotate(32deg)`, cursor: "pointer" }}
      />
      ),
      text: "작업 등록",
      onClick: handleNavigatetoDetail,
    },
    {
      icon: (
        <IoSaveOutline size={24} color={hoveredIcon === 1 ? "#fff" : "#576dad"} />
      ),
      text: "저장",
      // onClick: handleGrEditClick,
    },
    {
      icon: (
        <RiDeleteBin6Line size={24} color={hoveredIcon === 2 ? "#fff" : "#576dad"} />
      ),
      text: "삭제",
      // onClick: handleClickGotoEditPAge,
    },
  ];

  return (
    <div className="station-list">
      <ModalDefault
        open={open}
        handleClose={handleClose}
        modalTitle={'작업 등록'}
        modalDsecriptions={
          <div dangerouslySetInnerHTML={{ __html: "선택한 고장에 대한 </p>  작업을 등록하시겠습니까?" }} />
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

export default FailureMainList;
