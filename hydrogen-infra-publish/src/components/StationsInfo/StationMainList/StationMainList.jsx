import { IoMdSearch } from "react-icons/io";
import { DiMootoolsBadge } from "react-icons/di";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
import "./StationMainList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { stations } from "../../../data/Mapdata";

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
    valueGetter: (params) => {
      // Convert the decimal value to a percentage
      return params.value === 1 ? "생산" : params.value === 2 ? "저장" : "충전";
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
}));

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
          rowHeight={40}
        //   autoHeight
          columnHeaderHeight={40}
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
