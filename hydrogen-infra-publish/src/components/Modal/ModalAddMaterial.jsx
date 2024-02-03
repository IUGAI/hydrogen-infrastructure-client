import Modal from "@mui/material/Modal";
import { TfiClose } from "react-icons/tfi";
import DatePicker from "react-datepicker";
import { DataGrid } from "@mui/x-data-grid";
import ko from "date-fns/locale/ko";
import React from "react";
import { useState } from "react";

function ModalAddMaterial({ open, handleClose, handleClickSave }) {
  const columns = [
    // {
    //   field: "id",
    //   headerName: "아이디",
    //   width: 150,
    //   sortable: false,
    //   headerAlign: "center",
    //   align: "center",
    // },
    {
      field: "regist_date",
      headerName: "등록일",
      width: 150,
      sortable: false,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "materialname",
      headerName: "자재명",
      width: 150,
      sortable: false,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Lotnumber",
      headerName: "LOT번호",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "material_type_major",
      headerName: "대분류",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "material_type_middle",
      headerName: "중분류",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "material_type_small",
      headerName: "소분류",
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
      field: "station",
      headerName: "사업소",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "storage_plc",
      headerName: "보관장소",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
    {
      field: "manage_number",
      headerName: "시리얼번호",
      align: "center",
      headerAlign: "center",
      width: 200,
    },
  ];

  const rows = [];
  const [startDate, setStartDate] = useState(null);
  return (
    <Modal open={open} style={{}} onClose={handleClose}>
      <div className="station-edit-state material-add-modal-state">
        <img src="/img/marker.png" className="img-marker" />
        <div className="modal-header">
          <span className="modal-title-text">사용자재</span>
          <TfiClose
            color="#263056"
            size={15}
            onClick={handleClose}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="station-regist-station-add-input material-add-modal">
          <div className="material-add-search material-add-modal">
            <div className="search-input-item-material-add ">
              <label>사업소</label>
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
            <div className="search-input-item-material-add ">
              <label>대분류</label>
              <select className="custom-select">
                <option selected disabled>
                  선택
                </option>
              </select>
            </div>
            <div className="search-input-item-material-add ">
              <label>중분류</label>
              <select className="custom-select">
                <option selected disabled>
                  선택
                </option>
              </select>
            </div>
            <div className="search-input-item-material-add ">
              <label>소분류</label>
              <select className="custom-select">
                <option selected disabled>
                  선택
                </option>
              </select>
            </div>
            <div className="search-input-item-material-add ">
              <label>자재명</label>
              <input type="text" className="custom-input-default "></input>
            </div>
            <div className="search-input-item-material-add ">
              <label>시리얼번호</label>
              <input type="text" className="custom-input-default "></input>
            </div>
            <div className="search-input-item-material-add ">
              <label>LOT번호</label>
              <input type="text" className="custom-input-default "></input>
            </div>
            <div className="search-input-item-material-add ">
              <label>내구연한</label>
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                selected={startDate}
                placeholderText="선택"
                onChange={(date) => setStartDate(date)}
                className="custom-datepicker"
              />
            </div>
            <div className="search-input-item-material-add ">
              <label>보관장소</label>
              <DatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                selected={startDate}
                placeholderText="선택"
                onChange={(date) => setStartDate(date)}
                className="custom-datepicker"
              />
            </div>
            <div className="search-input-item-material-add ">
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
          </div>
          <div className="table">
            <DataGrid
              rows={rows}
              rowHeight={40}
              //   autoHeight
              columnHeaderHeight={40}
              columns={columns}
              //   onRowSelectionModelChange={handleItemSelection}
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
        <div className="footer">
          <div className="buttons-container">
            <button className="button-edit-business" onClick={handleClickSave}>
              저장
            </button>
            <button
              onClick={handleClose}
              className="button-edit-business cancel"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalAddMaterial;
