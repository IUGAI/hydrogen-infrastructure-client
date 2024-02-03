import { IoMdSearch } from "react-icons/io";
import { DiMootoolsBadge } from "react-icons/di";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
import { DataGrid } from "@mui/x-data-grid";
import { equipments } from "../../data/Mapdata";
import { useNavigate } from "react-router-dom";
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
    field: "district",
    headerName: "시도",
    width: 150,
    sortable: false,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "business",
    headerName: "사업자",
    width: 150,
    headerAlign: "center",
    align: "center",
    valueGetter: (params) => {
      // Convert the decimal value to a percentage
      return params.value === 10000001 ? "남부사전" : "";
    },
  },
  {
    field: "station_name",
    headerName: "사업소",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "equipment_name",
    headerName: "시설물명",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "station_type",
    headerName: "시설종류",
    width: 150,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return params.value === 1 ? (
        <span className="prod-text-value production">생산</span>
      ) : params.value === 2 ? (
        <span className="prod-text-value storaging">저장</span>
      ) : (
        <span className="prod-text-value charging">충전</span>
      );
    },
  },
  {
    field: "durable",
    headerName: "내구연한",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "manage_number",
    headerName: "관리번호",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
];

// const rows = [];

const rows = equipments.map((item) => ({
  id: item.id,
  regist_date: item.regist_date,
  business: item.buisness_no,
  district: item.district,
  business: item.buisness_no,
  station_name: item.station_name,
  equipment_name: item.equipment_name,
  station_type: item.type,
  durable: item.durable,
  manage_number: item.manage_number,
}));

function EquipmentsMainList() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const navigate = useNavigate();

  const handleHover = (index) => {
    setHoveredIcon(index);
  };

  
  const handleItemSelection = (selectionModel) => {
    setSelectedItems(selectionModel);
  };
  const handleNavigatetoDetail = () => {
    if (selectedItems.length > 1) {
      alert("한개 만 선택해주세요!");
    } else if (selectedItems.length === 0) {
      alert("시설물 선택해 주세요");
    } else {
      navigate(`/equipments/${selectedItems[0]}`);
    }
  };

  const iconData = [
    {
      icon: (
        <IoMdSearch
          size={24}
          style={{ cursor: "pointer" }}
          color={hoveredIcon === 0 ? "#fff" : "#576dad"}
        />
      ),
      text: "상세 정보",
      onClick: handleNavigatetoDetail,
    },
    {
      icon: (
        <DiMootoolsBadge
          size={34}
          style={{ cursor: "pointer" , transform: `rotate(32deg)`}}
          color={hoveredIcon === 1 ? "#fff" : "#576dad"}
        />
      ),
      text: "작업 등록",
      // onClick: handleGrEditClick,
    },
    {
      icon: (
        <IoSaveOutline
          style={{ cursor: "pointer" }}
          size={24}
          color={hoveredIcon === 2 ? "#fff" : "#576dad"}
        />
      ),
      text: "저장",
      // onClick: handleClickGotoEditPAge,
    },
    {
      icon: (
        <RiDeleteBin6Line
          style={{ cursor: "pointer" }}
          size={24}
          color={hoveredIcon === 2 ? "#fff" : "#576dad"}
        />
      ),
      text: "삭제",
      // onClick: handleClickGotoEditPAge,
    },
  ];

  return (
    <div className="station-list">
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

export default EquipmentsMainList;
