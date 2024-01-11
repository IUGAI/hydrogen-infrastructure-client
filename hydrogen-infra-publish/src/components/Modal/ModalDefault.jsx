import Modal from "@mui/material/Modal";
import "./ModalDefault.scss";
import React from "react";

function ModalDefault({
  open,
  handleClose,
  handleClickGoToLogin,
  state,
  modalTitle,
  modalDsecriptions,
}) {
  return (
    <Modal open={open} style={{}} onClose={handleClose}>
      <div className="logout-state">
        <img src="/img/marker.png" className="img-marker" />
        <div
          className={
            state === "success" ? "modal-header success" : "modal-header"
          }
        >
          <span className="modal-title-text">{modalTitle}</span>
        </div>
        <div className="modal-content">
          <span className="modal-content-description">{modalDsecriptions}</span>
          <div className="modal-conten-buttons">
            <button
              className={
                state === "success"
                  ? "buttons-alarm-modal success "
                  : "buttons-alarm-modal"
              }
              onClick={handleClickGoToLogin}
            >
              네
            </button>
            {state !== "success" && (
              <button className="buttons-alarm-modal" onClick={handleClose}>
                아니요
              </button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalDefault;
