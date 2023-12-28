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
      field: "equipments",
      headerName: "시설물",
      width: 150,
      sortable: false,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "business_num",
      headerName: "작업번호",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "work_order_name",
      headerName: "작업명",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "work_order_day",
      headerName: "작업일",
      description: "This column has a value getter and is not sortable.",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "worker",
      headerName: "작업자",
      width: 150,
      align: "center",
      headerAlign: "center",

        
    },
    {
      field: "production_cnt",
      headerName: "자재 사용 유무",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "storage_cnt",
      headerName: "상태",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
  ];
  
 const rows = [];


function StationDetailTaskList() {
    const [startDate, setStartDate] = useState(null);
    return (
        <>
        <div className="station-detail-equipments">
          <div className="search-input-item">
            <label>작업명</label>
            <input type="text" className="custom-input-default "></input>
          </div>
          <div className="search-input-item">
            <label>작업번호</label>
            <input type="text" className="custom-input-default "></input>
          </div>
          <div className="search-input-item">
            <label>시설물</label>
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
            <label>상태</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
              <option>광주</option>
            </select>
          </div>
  
          <div className="search-input-item">
            <label>등록일</label>
            <DatePicker
              //   locale={ko}
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
    )
}

export default StationDetailTaskList
