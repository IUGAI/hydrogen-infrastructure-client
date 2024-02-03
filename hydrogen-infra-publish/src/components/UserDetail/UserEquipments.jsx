import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import { DataGrid } from "@mui/x-data-grid";
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
    headerName: "설치일",
    width: 150,
    sortable: false,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "materials_name",
    headerName: "시설물",
    width: 150,
    sortable: false,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "major_cls",
    headerName: "관리번호",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "middle_cls",
    headerName: "시설종류",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "failure",
    headerName: "고장",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
];

const rows = [];

function UserEquipments() {
  const [startDate, setStartDate] = useState(null);
  return (
    <>
      <div className="station-detail-equipments user">
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
          <label>설치일</label>
          <DatePicker
          locale={ko}
          dateFormat="yyyy-MM-dd"
            selected={startDate}
            placeholderText="선택"
            onChange={(date) => setStartDate(date)}
            className="custom-datepicker"
          />
        </div>
      </div>
      <div className="station-list equipments">
        <div className="table table-user">
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

export default UserEquipments;
