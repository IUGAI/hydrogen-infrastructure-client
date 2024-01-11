import DatePicker from "react-datepicker";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ModalAddMaterial from "../Modal/ModalAddMaterial";

function WorkEditComponent() {
  const [startDate, setStartDate] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickSave = () => {};

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="station-regist-content">
        <ModalAddMaterial
          open={open}
          handleClose={handleClose}
          handleClickSave={handleClickSave}
        />
        <div className={`station-regist-station-add full-width}`}>
          <img src="/img/marker.png" className="img-marker" />
          <div className="station-regist-station-add-header">
            <div className="station-regist-header-add-left">
              <span className="station-title-kor">작업</span>
              <span className="station-tile-eng">EDIT</span>
            </div>
            <span className="station-title-notice">
              <span className="essential-mark">*</span> 표시는 필수항목입니다
            </span>
          </div>
          <div className="station-regist-station-add-input">
            <div className="input-item-station-add">
              <label>
                사업소
                <span className="essential-mark"> *</span>
              </label>
              <select className="custom-select-default">
                <option selected disabled>
                  선택해주세요
                </option>
                <option>서울</option>
              </select>
            </div>
            <div className="input-item-station-add">
              <label>
                대상 시설물
                <span className="essential-mark"> *</span>
              </label>
              <select className="custom-select-default">
                <option selected disabled>
                  선택해주세요 / 복수선택 가능
                </option>
                <option>서울</option>
              </select>
            </div>
            <div className="input-item-station-add">
              <label>고장 정보</label>
              <select className="custom-select-default">
                <option selected disabled>
                  선택해주세요
                </option>
                <option>서울</option>
              </select>
            </div>
            <div className="input-item-station-add">
              <label>
                작업명 <span className="essential-mark"> *</span>
              </label>
              <input
                type="text"
                placeholder="2-16자 / 한글 영문, 숫자 사용가능"
                className="custom-input-default"
              ></input>
            </div>
            <div className="input-item-station-add">
              <label>
                시작일시 <span className="essential-mark"> *</span>
              </label>
              <div className="input_item_lat_lng">
                <DatePicker
                  //   locale={ko}
                  selected={startDate}
                  placeholderText="선택"
                  onChange={(date) => setStartDate(date)}
                  className="custom-datepicker"
                />
              </div>
            </div>
            <div className="input-item-station-add">
              <label>종료일시</label>
              <div className="input_item_lat_lng">
                <DatePicker
                  //   locale={ko}
                  selected={startDate}
                  placeholderText="선택"
                  onChange={(date) => setStartDate(date)}
                  className="custom-datepicker"
                />
              </div>
            </div>
            <div className="input-item-station-add">
              <label>
                작업번호 <span className="essential-mark"> *</span>
              </label>
              <input type="text" className="custom-input-default"></input>
            </div>
            <div className="input-item-station-add">
              <label>
                작업자 <span className="essential-mark"> *</span>
              </label>
              <select className="custom-select-default">
                <option selected disabled>
                  선택해주세요
                </option>
                <option>서울</option>
              </select>
            </div>
            <div className="input-item-station-add">
              <label>알람</label>
              <div className="button-container-custum">
                <button className="custom-button-radio active">비정기</button>
                <button className="custom-button-radio">정기</button>
                <select
                  className="custom-select-default"
                  style={{ marginLeft: "20px" }}
                >
                  <option selected disabled>
                    선택해주세요
                  </option>
                  <option>서울</option>
                </select>
              </div>
            </div>
            <div className="input-item-station-add">
              <label for="fileUpload" className="custom-file-label">
                파일첨부
              </label>
              <input
                type="file"
                className="custom-input-default-file"
                multiple
              />
            </div>
          </div>
        </div>
      </div>
      <div className="station-regist-content">
        <div className={`station-regist-station-add full-width}`}>
          <div className="station-regist-station-add-input work-regist-add">
            <div className="input-item-station-add-editor">
              <label>
                작업 내용 <span className="essential-mark"> *</span>
              </label>
              <CKEditor
                editor={ClassicEditor}
                data="<p></p>"
                onReady={(editor) => {}}
                onChange={(event) => {}}
                onBlur={(event, editor) => {}}
                onFocus={(event, editor) => {}}
              />
            </div>
            <div className="input-item-station-add-editor material">
              <div className="input-item-station-add-editor-inner">
                <label>사용자재</label>
                <button className="button-search" onClick={handleOpen}>
                  <CiSearch size={20} />
                  추가
                </button>
              </div>
              <div className="material-container">
                <table>
                  <tr>
                    <td style={{ width: "50%" }}>자재-1</td>
                    <td style={{ textAlign: "center", color: "#5E76BA" }}>
                      수량
                    </td>
                    <td style={{ textAlign: "center", width: "5%" }}>
                      <FaMinus size={24} color="#5E76BA" />
                    </td>
                    <td
                      style={{
                        width: "20%",
                        textAlign: "center",
                      }}
                    >
                      2
                    </td>
                    <td style={{ textAlign: "center", width: "5%" }}>
                      <FaPlus size={20} color="#5E76BA" />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "50%" }}>자재-2</td>
                    <td style={{ textAlign: "center", color: "#5E76BA" }}>
                      수량
                    </td>
                    <td style={{ textAlign: "center", width: "5%" }}>
                      <FaMinus size={24} color="#5E76BA" />
                    </td>
                    <td
                      style={{
                        width: "20%",
                        textAlign: "center",
                      }}
                    >
                      4
                    </td>
                    <td style={{ textAlign: "center", width: "5%" }}>
                      <FaPlus size={20} color="#5E76BA" />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ width: "50%" }}>자재-3</td>
                    <td style={{ textAlign: "center", color: "#5E76BA" }}>
                      수량
                    </td>
                    <td style={{ textAlign: "center", width: "5%" }}>
                      <FaMinus size={24} color="#5E76BA" />
                    </td>
                    <td
                      style={{
                        width: "20%",
                        textAlign: "center",
                      }}
                    >
                      10
                    </td>
                    <td style={{ textAlign: "center", width: "5%" }}>
                      <FaPlus size={20} color="#5E76BA" />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <button className="button-submit-form ">등록하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkEditComponent;
