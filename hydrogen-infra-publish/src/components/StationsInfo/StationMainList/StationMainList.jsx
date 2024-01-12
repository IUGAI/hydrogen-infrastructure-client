import { IoMdSearch } from "react-icons/io";
import { DiMootoolsBadge } from "react-icons/di";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
import "./StationMainList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { stations } from "../../../data/Mapdata";
import { useNavigate } from "react-router-dom";
import { handleItemSelection } from "@mui/base/useList";
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
    field: "commencement_date",
    headerName: "개시일",
    description: "This column has a value getter and is not sortable.",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "station_type",
    headerName: "사업소 종류",
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
    field: "production_cnt",
    headerName: "생상시설",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "storage_cnt",
    headerName: "저장시설",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "charging_cnt",
    headerName: "충전시설",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
];

const rows = stations.map((item) => ({
  id: item.id,
  regist_date: item.regist_date,
  business: item.buisness_no,
  district: item.district,
  station_name: item.name,
  commencement_date: item.commencement_date,
  station_type: item.type,
  production_cnt: item.equipments.filter((equipments) => equipments.type === 1)
    .length,
  storage_cnt: item.equipments.filter((equipments) => equipments.type === 2)
    .length,
  charging_cnt: item.equipments.filter((equipments) => equipments.type === 3)
    .length,
}));

function StationMainList() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const navigate = useNavigate();


  const handleItemSelection = (selectionModel) => {
    setSelectedItems(selectionModel);
  };
  const handleHover = (index) => {
    setHoveredIcon(index);
  };

  const handleNavigatetoDetail = () => {
    if (selectedItems.length > 1) {
      alert("한개 만 선택해주세요!");
    } else if (selectedItems.length === 0) {
      alert("사업소 선택해 주세요");
    } else {
      navigate(`/stations/${selectedItems[0]}`);
    }
  };

  const iconDataRight = [
    {
      icon: (
        <SiMicrosoftexcel
          size={24}
          color={hoveredIcon === 4 ? "#fff" : "#8da7d9"}
        />
      ),
      text: "엑셀 출력",
    },
  ];

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
          {iconDataRight.map((data, index) => (
            <div
              key={4}
              className="icon-header"
              onMouseEnter={() => handleHover(4)}
              onMouseLeave={() => handleHover(null)}
              onClick={data.onClick}
            >
              {hoveredIcon === 4 && (
                <span className="tooltip">{data.text}</span>
              )}
              {data.icon}
            </div>
          ))}
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

export default StationMainList;
