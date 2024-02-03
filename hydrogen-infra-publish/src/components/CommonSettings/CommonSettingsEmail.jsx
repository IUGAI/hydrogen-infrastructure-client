import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useMediaQuery } from "react-responsive";

function CommonSettingsEmail() {
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "사용자",
      title: "가입 신청",
      level_0: true,
      level_1: true,
      level_2: true,
      level_3: true,
    },
    {
      id: 2,
      name: "사용자",
      title: "가입 완료",
      level_0: true,
      level_1: true,
      level_2: false,
      level_3: false,
    },
    {
      id: 3,
      name: "사용자",
      title: "탈퇴",
      level_0: false,
      level_1: true,
      level_2: true,
      level_3: true,
    },
    {
      id: 4,
      name: "시설 등록",
      title: "가입 신청",
      level_0: true,
      level_1: true,
      level_2: true,
      level_3: true,
    },
    {
      id: 5,
      name: "시설 등록",
      title: "가입 완료",
      level_0: true,
      level_1: true,
      level_2: false,
      level_3: false,
    },
    {
      id: 6,
      name: "시설 등록",
      title: "탈퇴",
      level_0: false,
      level_1: true,
      level_2: true,
      level_3: true,
    },
    {
      id: 7,
      name: "시설 등록",
      title: "가입 신청",
      level_0: true,
      level_1: true,
      level_2: true,
      level_3: true,
    },
    {
      id: 8,
      name: "시설 등록",
      title: "가입 완료",
      level_0: true,
      level_1: true,
      level_2: false,
      level_3: false,
    },
    {
      id: 9,
      name: "시설 관리",
      title: "탈퇴",
      level_0: false,
      level_1: true,
      level_2: true,
      level_3: true,
    },
    {
      id: 10,
      name: "시설 관리",
      title: "가입 신청",
      level_0: true,
      level_1: true,
      level_2: true,
      level_3: true,
    },
    {
      id: 11,
      name: "시설 관리",
      title: "가입 완료",
      level_0: true,
      level_1: true,
      level_2: false,
      level_3: false,
    },
    {
      id: 12,
      name: "시설 관리",
      title: "탈퇴",
      level_0: false,
      level_1: true,
      level_2: true,
      level_3: true,
    },
    {
      id: 13,
      name: "시설 관리",
      title: "가입 신청",
      level_0: true,
      level_1: true,
      level_2: true,
      level_3: true,
    },
    {
      id: 14,
      name: "시설 관리",
      title: "가입 완료",
      level_0: true,
      level_1: true,
      level_2: false,
      level_3: false,
    },
    {
      id: 15,
      name: "시설 관리",
      title: "탈퇴",
      level_0: false,
      level_1: true,
      level_2: true,
      level_3: true,
    },
  ]);
  const isSmallScreen = useMediaQuery({ maxWidth: 1200 });

  const handleCheckBox = (id, fieldid) => {
    setRows((prevRows) =>
      prevRows.map((rows) =>
        rows.id === id ? { ...rows, [fieldid]: !rows[fieldid] } : rows
      )
    );
  };
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
      field: "level_0",
      headerName: "LEVEL_0 (시스템 관리자)",
      width: 200,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_0")}
        />
      ),
    },
    {
      field: "level_1",
      headerName: "LEVEL_1 (일반 관리자)",
      width: 200,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_1")}
        />
      ),
    },
    {
      field: "level_2",
      headerName: "LEVEL_2 (일반 사용자)",
      width: 200,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_2")}
        />
      ),
    },
    {
      field: "level_3",
      headerName: "LEVEL_3 (모니터링 사용자)",
      width: 200,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Checkbox
          checked={params.value}
          onChange={() => handleCheckBox(params.id, "level_3")}
        />
      ),
    },
  ];

  return (
    <div className="common-settings-alarm">
      <div className="common-settings-email">
        <div className="email-header">
          <span className="text-instructions">
            시설물에 관한 중요 또는 일반 알람에 대해 사용자에게 메시지를
            전달합니다. <p>소리, 주기, 메시지, 대상 등을 설정할 수 있습니다.</p>
          </span>
          {isSmallScreen ? (
            " "
          ) : (
            <button className="button-submit-form">저장</button>
          )}
        </div>
        <div className="email-content">
          <label>대표 이메일 (수신)</label>
          <input
            type="text"
            className="text-email-admin"
            value={"admin@namboo.ac.kr"}
          />
        </div>
        <div className="table table-email">
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
        {!isSmallScreen ? (
            " "
          ) : (
            <button className="button-submit-form">저장</button>
          )}
      </div>
    </div>
  );
}

export default CommonSettingsEmail;
