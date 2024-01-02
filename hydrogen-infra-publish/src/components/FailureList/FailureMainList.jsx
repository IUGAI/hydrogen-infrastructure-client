import { DiMootoolsBadge } from "react-icons/di";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
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
      valueGetter: (params) => {
        // Convert the decimal value to a percentage
        return params.value === 10000001 ? "남부사전" : "";
      },
    },
    {
      field: "station_type",
      headerName: "고장 종류",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
        field: "station_type",
        headerName: "작업 유무",
        width: 150,
        align: "center",
        headerAlign: "center",
      },
    {
      field: "durable",
      headerName: "상태",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "manage_number",
      headerName: "내용",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
  ];
  
  const rows = [];
  

function FailureMainList() {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleItemSelection = (selectionModel) => {
        setSelectedItems(selectionModel);
      };

    return (
        <div className="station-list">
        <div className="header-table">
          <div className="left">
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
    )
}

export default FailureMainList
