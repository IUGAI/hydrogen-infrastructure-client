import { IoSaveOutline } from "react-icons/io5";
import { SiMicrosoftexcel } from "react-icons/si";
import { DataGrid } from "@mui/x-data-grid";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PremissionsSettingsMainList() {
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "대시보드",
      title: "천체 현황",
      level_0_read: true,
      level_0_create: true,
      level_0_update: true,
      level_0_delete: true,
      level_1_read: true,
      level_1_create: false,
      level_1_update: false,
      level_1_delete: true,
      level_2_read: true,
      level_2_create: true,
      level_2_update: true,
      level_2_delete: true,
      level_3_read: true,
      level_3_create: true,
      level_3_update: true,
      level_3_delete: true,
    },
    {
      id: 2,
      name: "대시보드",
      title: "사업소 현황",
      level_0_read: true,
      level_0_create: true,
      level_0_update: true,
      level_0_delete: true,
      level_1_read: true,
      level_1_create: false,
      level_1_update: false,
      level_1_delete: true,
      level_2_read: true,
      level_2_create: true,
      level_2_update: true,
      level_2_delete: true,
      level_3_read: true,
      level_3_create: true,
      level_3_update: true,
      level_3_delete: true,
    },
    {
      id: 3,
      name: "시설 정보",
      title: "사업소 정보",
      level_0_read: true,
      level_0_create: true,
      level_0_update: true,
      level_0_delete: true,
      level_1_read: true,
      level_1_create: false,
      level_1_update: false,
      level_1_delete: true,
      level_2_read: true,
      level_2_create: true,
      level_2_update: true,
      level_2_delete: true,
      level_3_read: true,
      level_3_create: true,
      level_3_update: true,
      level_3_delete: true,
    },
    {
      id: 4,
      name: "시설 정보",
      title: "사업소 정보",
      level_0_read: true,
      level_0_create: true,
      level_0_update: true,
      level_0_delete: true,
      level_1_read: true,
      level_1_create: false,
      level_1_update: false,
      level_1_delete: true,
      level_2_read: true,
      level_2_create: true,
      level_2_update: true,
      level_2_delete: true,
      level_3_read: true,
      level_3_create: true,
      level_3_update: true,
      level_3_delete: true,
    },
    {
      id: 5,
      name: "시설 정보",
      title: "사업소 정보",
      level_0_read: true,
      level_0_create: true,
      level_0_update: true,
      level_0_delete: true,
      level_1_read: true,
      level_1_create: false,
      level_1_update: false,
      level_1_delete: true,
      level_2_read: true,
      level_2_create: true,
      level_2_update: true,
      level_2_delete: true,
      level_3_read: true,
      level_3_create: true,
      level_3_update: true,
      level_3_delete: true,
    },
    {
      id: 6,
      name: "시설 정보",
      title: "사업소 정보",
      level_0_read: true,
      level_0_create: true,
      level_0_update: true,
      level_0_delete: true,
      level_1_read: true,
      level_1_create: false,
      level_1_update: false,
      level_1_delete: true,
      level_2_read: true,
      level_2_create: true,
      level_2_update: true,
      level_2_delete: true,
      level_3_read: true,
      level_3_create: true,
      level_3_update: true,
      level_3_delete: true,
    },
    {
      id: 7,
      name: "시설 정보",
      title: "사업소 정보",
      level_0_read: true,
      level_0_create: true,
      level_0_update: true,
      level_0_delete: true,
      level_1_read: true,
      level_1_create: false,
      level_1_update: false,
      level_1_delete: true,
      level_2_read: true,
      level_2_create: true,
      level_2_update: true,
      level_2_delete: true,
      level_3_read: true,
      level_3_create: true,
      level_3_update: true,
      level_3_delete: true,
    },
    {
      id: 8,
      name: "시설 정보",
      title: "사업소 정보",
      level_0_read: true,
      level_0_create: true,
      level_0_update: true,
      level_0_delete: true,
      level_1_read: true,
      level_1_create: false,
      level_1_update: false,
      level_1_delete: true,
      level_2_read: true,
      level_2_create: true,
      level_2_update: true,
      level_2_delete: true,
      level_3_read: true,
      level_3_create: true,
      level_3_update: true,
      level_3_delete: true,
    },
    {
      id: 9,
      name: "시설 정보",
      title: "사업소 정보",
      level_0_read: true,
      level_0_create: true,
      level_0_update: true,
      level_0_delete: true,
      level_1_read: true,
      level_1_create: false,
      level_1_update: false,
      level_1_delete: true,
      level_2_read: true,
      level_2_create: true,
      level_2_update: true,
      level_2_delete: true,
      level_3_read: true,
      level_3_create: true,
      level_3_update: true,
      level_3_delete: true,
    },
  ]);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleHover = (index) => {
    setHoveredIcon(index);
  };

  const handleCheckBox = (id, field) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: !row[field] } : row
      )
    );
  };

  const handleSave = () => {};

  const columns = [
    {
      field: "name",
      headerName: "구분",
      width: 186,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return <span className="text-data-grid">{params.value}</span>;
      },
    },
    {
      field: "title",
      headerName: "항목",
      width: 186,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return <span className="text-data-grid">{params.value}</span>;
      },
    },
    {
      field: "level_0_read",
      headerName: "LEVEL_0_R",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_0_read")}
        />
      ),
    },
    {
      field: "level_0_create",
      headerName: "LEVEL_0_C",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_0_create")}
        />
      ),
    },
    {
      field: "level_0_update",
      headerName: "LEVEL_0_U",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_0_update")}
        />
      ),
    },
    {
      field: "level_0_delete",
      headerName: "LEVEL_0_D",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_0_delete")}
        />
      ),
    },
    {
      field: "level_1_read",
      headerName: "LEVEL_1_R",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_1_read")}
        />
      ),
    },
    {
      field: "level_1_create",
      headerName: "LEVEL_1_C",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_1_create")}
        />
      ),
    },
    {
      field: "level_1_update",
      headerName: "LEVEL_1_U",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_1_update")}
        />
      ),
    },
    {
      field: "level_1_delete",
      headerName: "LEVEL_1_D",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_1_delete")}
        />
      ),
    },
    {
      field: "level_2_read",
      headerName: "LEVEL_2_R",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_2_read")}
        />
      ),
    },
    {
      field: "level_2_create",
      headerName: "LEVEL_2_C",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_2_create")}
        />
      ),
    },
    {
      field: "level_2_update",
      headerName: "LEVEL_2_U",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_2_update")}
        />
      ),
    },
    {
      field: "level_2_delete",
      headerName: "LEVEL_2_D",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_2_delete")}
        />
      ),
    },
    {
      field: "level_3_read",
      headerName: "LEVEL_3_R",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_3_read")}
        />
      ),
    },
    {
      field: "level_3_create",
      headerName: "LEVEL_3_C",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_3_create")}
        />
      ),
    },
    {
      field: "level_3_update",
      headerName: "LEVEL_3_U",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_3_update")}
        />
      ),
    },
    {
      field: "level_3_delete",
      headerName: "LEVEL_3_D",
      width: 100,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_3_delete")}
        />
      ),
    },
  ];

  return (
    <div className="station-list">
      <div className="header-table">
        <div className="left">
          <div
            className="icon-header"
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={() => handleHover(null)}
            onClick={handleSave}
          >
            {hoveredIcon === 0 && <span className="tooltip">{"저장"}</span>}
            <IoSaveOutline
              size={24}
              style={{ cursor: "pointer" }}
              color={hoveredIcon === 0 ? "#fff" : "#8da7d9"}
            />
          </div>
        </div>
        <div className="right">
          <div
            className="icon-header"
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => handleHover(null)}
            onClick={handleSave}
          >
            {hoveredIcon === 1 && <span className="tooltip">{"엑셀"}</span>}
            <SiMicrosoftexcel
              size={24}
              style={{ cursor: "pointer" }}
              color={hoveredIcon === 1? "#fff" : "#8da7d9"}
            />
          </div>
        </div>
      </div>
      <div className="table">
        <DataGrid
          rows={rows}
          rowHeight={40}
          disableRowSelectionOnClick
          columnHeaderHeight={40}
          columns={columns}
          localeText={{ noRowsLabel: "데이터가 존재하지 않습니다." }}
          className="custom-datagrid"
        />
      </div>
    </div>
  );
}

export default PremissionsSettingsMainList;
