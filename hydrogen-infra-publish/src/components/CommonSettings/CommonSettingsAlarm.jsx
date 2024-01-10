import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { values } from "lodash";



var text_init = `[소수인프라관리시스템] {성명}님, 발생시간 : {발생시간}, 시설물 : {시설물명}에 {고장종류} 이상이 발생하였습니다. 확인바랍니다.`;

function CommonSettingsAlarm() {

    const [filename, setFileName] = useState();
    const [text, setText] = useState(text_init);
    const [rows, setRows] = useState([
      { id: 1, name: "중요 알람", level_0: true, level_1: true,  level_2: true, level_3: true },
      { id: 2, name: "일반 알람",level_0: true, level_1: true,  level_2: false, level_3: false  },
      { id: 3, name: "사업소별",level_0: false, level_1: true,  level_2: true, level_3: true  },
    ])

    const handleCheckChange = (id, field) => {
      setRows((prevRows) => prevRows.map((row) => row.id === id ? {...row, [field] : !row[field]} : row ))
    }

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
        field: "level_0",
        headerName: "LEVEL_0",
        width: 150,
        sortable: false,
        headerAlign: "center",
        align: "center",
        renderCell: (params) => (
          <Checkbox
          checked={params.value}
            onChange={() => handleCheckChange(params.id, "level_0")}
          />
        ),
      },
      {
        field: "level_1",
        headerName: "LEVEL_1",
        width: 150,
        sortable: false,
        headerAlign: "center",
        align: "center",
        renderCell: (params) => (
          <Checkbox
          checked={params.value}
          onChange={() => handleCheckChange(params.id, "level_1")}
          />
        ),
      },
      {
        field: "level_2",
        headerName: "LEVEL_2",
        width: 150,
        sortable: false,
        headerAlign: "center",
        align: "center",
        renderCell: (params) => (
          <Checkbox
             checked={params.value}
             onChange={() => handleCheckChange(params.id, "level_2")}
          />
        ),
      },
      {
        field: "level_3",
        headerName: "LEVEL_3",
        width: 150,
        sortable: false,
        headerAlign: "center",
        align: "center",
        renderCell: (params) => (
          <Checkbox
          checked={params.value}
          onChange={() => handleCheckChange(params.id, "level_3")}
          />
        ),
      },
    ];
    


    const handleInputChange = (event) => {
        const input = event.target.value;
        const maxlength = 2000;
    
        if (input.length <= maxlength) {
          setText(event.target.value);
        }
      };
    
      const handleClickFile = (event) => {
        setFileName(event.target.files[0].name);
      };
    
    return (
        <div className="common-settings-alarm">
            
        <div className="common-settings-alarm-left">
          <span className="text-instructions">
            시설물에 관한 중요 또는 일반 알람에 대해 사용자에게 메시지를
            전달합니다.{" "}
            <p>소리, 주기, 메시지, 대상 등을 설정할 수 있습니다.</p>
          </span>
          <div className="input-item-station-add checkbox">
            <label>알람 소리</label>
            <div className="default-checkbox-container">
              <Checkbox
                name="production"
                defaultChecked
                sx={{
                  color: "#8FAADC",
                  "&.Mui-checked": {
                    color: "#8FAADC",
                  },
                }}
              />
              <span className="checkbox-text">기본음 사용</span>
            </div>
          </div>
          <div className="input-item-station-add file">
            <input
              type="file"
              onChange={handleClickFile}
              className="custom-input-default-file"
              multiple
            />
            <input
              type="text"
              disabled
              value={filename}
              placeholder="등록한 음을 삭제한 경우에는 기본으로 설정됩니다"
              className="custom-input-default-search-file"
            ></input>

            <button className="button-search-file">찾기</button>
          </div>
          <div className="input-item-station-add">
            <label>알람 주기</label>
            <select className="custom-select-default">
              <option selected>10초 (기본)</option>
            </select>
          </div>
          <div className="input-item-station-add text-area">
            <label>알람 메시지</label>
            <div className="textara-custum-container">
              <textarea
                value={text}
                onChange={handleInputChange}
                rows={10}
                cols={200}
                className="textarea-custom-change"
              />
              <span className="textarea-limit-text">
                <span style={{ color: "#8faadc", fontFamily: "gothic 12" }}>
                  {text.length}
                </span>
                /2000 bytes
              </span>
            </div>
          </div>
          <div className="input-item-station-add text-area">
            <label>알람 대상</label>
            <div className="table">
              <DataGrid
                rows={rows}
                rowHeight={40}
                //   autoHeight
                columnHeaderHeight={40}
                columns={columns}
                localeText={{ noRowsLabel: "데이터가 존재하지 않습니다." }}
                className="custom-datagrid"
              />
            </div>
          </div>
        </div>

        <div className="common-settings-alarm-right">
          <button className="button-submit-form">저장</button>
        </div>
      </div> 
    )
}

export default CommonSettingsAlarm
