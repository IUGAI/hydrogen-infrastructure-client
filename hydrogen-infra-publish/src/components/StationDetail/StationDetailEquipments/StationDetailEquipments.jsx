import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { DiMootoolsBadge } from "react-icons/di";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
import "./StationDetailEquipments.scss";
import { CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
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
      headerName: "등록일",
      width: 150,
      sortable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "district",
      headerName: "시설물명",
      width: 150,
      sortable: false,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "business",
      headerName: "관리번호",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "station_name",
      headerName: "시설종류",
      width: 150,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => {
        return (
          params.value === 1
            ? <span className="prod-text-value production">생산</span> 
            : params.value === 2
            ? <span className="prod-text-value storaging">저장</span>
            : <span className="prod-text-value charging">충전</span>
        );
      }
    },
    {
      field: "commencement_date",
      headerName: "내구연한",
      description: "This column has a value getter and is not sortable.",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "station_type",
      headerName: "인가일",
      width: 150,
      align: "center",
      headerAlign: "center",

        
    },
    {
      field: "production_cnt",
      headerName: "개시일",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "storage_cnt",
      headerName: "관리자(정)",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
  ];
  
 const rows = [];

//   const rows = stations.map((item) => ({
//     id: item.id,
//     regist_date: item.regist_date,
//     business: item.buisness_no,
//     district: item.district,
//     station_name: item.name,
//     commencement_date: item.commencement_date,
//     station_type: item.type,
//     production_cnt: item.equipments.filter((equipments) => equipments.type === 1)
//       .length,
//     storage_cnt: item.equipments.filter((equipments) => equipments.type === 2)
//       .length,
//     charging_cnt: item.equipments.filter((equipments) => equipments.type === 3)
//       .length,
//   }));
  

function StationDetailEquipments() {
  const [startDate, setStartDate] = useState(null);
  return (
    <>
      <div className="station-detail-equipments">
        <div className="search-input-item">
          <label>시설물명</label>
          <input type="text" className="custom-input-default "></input>
        </div>
        <div className="search-input-item">
          <label>관리번호</label>
          <input type="text" className="custom-input-default "></input>
        </div>
        <div className="search-input-item">
          <label>시설종류</label>
          <select className="custom-select">
            <option selected disabled>
              선택
            </option>
            <option>생산</option>
            <option>저장</option>
            <option>충전</option>
          </select>
        </div>
        <div className="search-input-item">
          <label>내구연한</label>
          <select className="custom-select">
            <option selected disabled>
              선택
            </option>
            <option>1년</option>
            <option>5년</option>
            <option>10년</option>
            <option>20년</option>
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

export default StationDetailEquipments;
