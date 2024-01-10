import Modal from "@mui/material/Modal";
import "./ModalLogout.scss";
import React from "react";


function ModalLogout({ open, handleClose, handleClickGoToLogin }) {
  return (
    <Modal
      open={open}
      style={{}}
      onClose={handleClose}

    >
      <div className="logout-state">
      <img src="/img/marker.png" className="img-marker" />
        <div className="modal-header">
            <span className="modal-title-text">Logout</span>
        </div>
        <div className="modal-content">
            <span className="modal-content-description">로그아웃 하시겠습니까?</span>
            <div className="modal-conten-buttons">
                <button className="buttons-alarm-modal" onClick={handleClickGoToLogin}>네</button>
                <button className="buttons-alarm-modal" onClick={handleClose}>아니요</button>
            </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalLogout;
