import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { DiMootoolsBadge } from "react-icons/di";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import DatePicker from "react-datepicker";
import { DataGrid } from "@mui/x-data-grid";
import ko from "date-fns/locale/ko";
import "../../../components/StationDetail/StationDetailEquipments/StationDetailEquipments.scss";

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
    field: "materials_name",
    headerName: "자재명",
    width: 150,
    sortable: false,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "major_cls",
    headerName: "대분류",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "middle_cls",
    headerName: "중분류",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "sub_cls",
    headerName: "소분류",
    description: "This column has a value getter and is not sortable.",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "lot_number",
    headerName: "LOT번호",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "storage_area",
    headerName: "보관장소",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "quantity",
    headerName: "수량",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
];

const rows = [];

function StationDetailMaterial() {
  const [startDate, setStartDate] = useState(null);
  return (
    <>
      <div className="station-detail-equipments">
        <div className="search-input-item">
          <label>자재명</label>
          <input type="text" className="custom-input-default "></input>
        </div>
        <div className="search-input-item">
          <label>대분류</label>
          <select className="custom-select">
            <option selected disabled>
              선택
            </option>
          </select>
        </div>
        <div className="search-input-item">
          <label>중분류</label>
          <select className="custom-select">
            <option selected disabled>
              선택
            </option>

          </select>
        </div>
        <div className="search-input-item">
          <label>소분류</label>
          <select className="custom-select">
            <option selected disabled>
              선택
            </option>

          </select>
        </div>
        <div className="search-input-item">
          <label>등록일</label>
          <DatePicker
            locale={ko}
            dateFormat="yyyy-MM-dd"
            selected={startDate}
            placeholderText="선택"
            onChange={(date) => setStartDate(date)}
            className="custom-datepicker"
          />
        </div>
        <div className="search-input-item">
          <button className="button-search">
            <CiSearch size={24} />
            검색
          </button>
        </div>
        <div className="search-input-item">
          <button className="button-search">
            <GrPowerReset size={24} />
            초기화
          </button>
        </div>
      </div>
      <div className="station-list equipments">
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
    </>
  );
}

export default StationDetailMaterial;
