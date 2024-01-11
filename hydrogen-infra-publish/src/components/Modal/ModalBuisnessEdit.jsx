import Modal from "@mui/material/Modal";
import "./ModaDetail.scss";
import { TfiClose } from "react-icons/tfi";
import { RiPhoneFill } from "react-icons/ri";
import React from "react";

function ModalBuisnessEdit({ open, handleClose, handleClickGoToLogin }) {
  return (
    <Modal open={open} style={{}} onClose={handleClose}>
      <div className="station-edit-state">
        <img src="/img/marker.png" className="img-marker" />
        <div className="modal-header">
          <span className="modal-title-text">사업자 정보 수정</span>
          <TfiClose color="#263056" size={15} onClick={handleClose} style={{cursor:"pointer"}} />
        </div>
        <div className="station-regist-station-add-input">
          <span className="station-title-notice">
            <span className="essential-mark">*</span> 표시는 필수항목입니다
          </span>
          <div className="input-item-station-add">
            <label>
              사업자명 <span className="essential-mark"> *</span>
            </label>
            <input
              type="text"
              value={"수소솔루션(주)"}
              placeholder="2~16자 / 한글, 영문, 숫자 사용가능"
              className="custom-input-default"
            ></input>
          </div>
          <div className="input-item-station-add">
            <label>
              사업자등록번호
              <span className="essential-mark"> *</span>
            </label>
            <input
              type="text"
              value={"000-00-0000"}
              placeholder="4-16/자 / 영문, 숫자 사용가능"
              className="custom-input-default-search border-left active"
            ></input>
            <button className="button-search-address">중복확인</button>
          </div>
          <div className="input-item-station-add">
            <label>
              분사 주소 
            </label>
            <input
              disabled
              type="text"
              placeholder="찾기를 클릭해주세요"
              value={"서울시 00구 00로 00길 00"}
              className="custom-input-default-search border-left"
            ></input>
            <button className="button-search-address">찾기</button>
          </div>
          <div className="input-item-station-add">
            <label>
              상세주소
            </label>
            <input
              type="text"
              placeholder="정확히 가입해주세요"
              className="custom-input-default"
            ></input>
          </div>
          <div className="input-item-station-add">
            <label>
              대표이사 
            </label>
            <input
              type="text"
              value={"이순신"}
              placeholder="2~16자 / 한글, 영문, 숫자 사용가능"
              className="custom-input-default"
            ></input>
          </div>
          <div className="input-item-station-add">
            <label>
              사업소명 
            </label>
            <input
              type="text"
              value={"02-0000-0001"}
              placeholder="2~16자 / 한글, 영문, 숫자 사용가능"
              className="custom-input-default"
            ></input>
          </div>
          <div className="input-item-station-add">
            <label>
              실무담당자
        
            </label>
            <div className="input_item_lat_lng">
              <input type="text" className="custom-input-default-start start" value={"권율"} />
            <div className="custom-input-default-start container ">
                <RiPhoneFill color="#8FAADC" size={21}/>
            </div>

              <input type="text" className="custom-input-default-start end" value={"010-4569-7896"} />
            </div>
          </div>
        </div>
        <div className="footer"
        >
            <div className="buttons-container">
                <button className="button-edit-business">수정</button>
                <button onClick={handleClose}  className="button-edit-business cancel">닫기</button>
            </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalBuisnessEdit;
