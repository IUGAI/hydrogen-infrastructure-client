import { IoMdSearch } from "react-icons/io";
import { DiMootoolsBadge } from "react-icons/di";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
import { DataGrid } from "@mui/x-data-grid";
import { materials } from "../../data/Mapdata";
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
    field: "station",
    headerName: "사업소",
    width: 150,
    sortable: false,
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "major_cls",
    headerName: "대분료",
    width: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "mid_cls",
    headerName: "중분료",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "small_cls",
    headerName: "소분료",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "material_name",
    headerName: "자재명",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "durable",
    headerName: "내구연한",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "lot_number",
    headerName: "LOT번호",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
  {
    field: "storage_location",
    headerName: "보관장소",
    align: "center",
    headerAlign: "center",
    width: 200,
  },
];


const newMaterials = materials.filter((item) => item !== undefined)

const rows = newMaterials.map((item) => ({
    id: item.id,
    regist_date: item.regist_data,
    station: item.station,
    major_cls: item.major_classification,
    mid_cls: item.middle_classification,
    small_cls: item.small_classification,
    material_name: item.material_name,
    durable: item.durable,
    lot_number: item.lot_number,
    storage_location: item.storage_location,

  }));

function MaterialMainList() {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const handleItemSelection = (selectionModel) => {
    setSelectedItems(selectionModel);
  };

  const handleNavigatetoDetail = () => {
    if (selectedItems.length > 1) {
      alert("한개 만 선택해주세요!");
    } else if (selectedItems.length === 0) {
      alert("자재 선택해 주세요");
    } else {
      navigate(`/materials/${selectedItems[0]}`);
    }
  };

  return (
    <div className="station-list">
      <div className="header-table">
        <div className="left">
          <div className="icon-header">
            <IoMdSearch
              style={{ cursor: "pointer" }}
              size={24}
              color="#576dad"
              onClick={handleNavigatetoDetail}
            />
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

export default MaterialMainList;
