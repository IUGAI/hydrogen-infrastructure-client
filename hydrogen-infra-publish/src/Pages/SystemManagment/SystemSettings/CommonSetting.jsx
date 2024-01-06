import { SiMaterialdesignicons } from "react-icons/si";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { BsConeStriped } from "react-icons/bs";
import React, { useState } from "react";

function CommonSetting() {
  const [menuState, setMenuState] = useState("operation");
  const handleItemMenuGraph = (state) => {
    setMenuState(state);
  };

  return (
    <div className={`station-statistic-wrapper`}>
      <div className={`station-statistic-header `}>
        <span>공통 설정</span>
      </div>
      <div className="station-statistic-inner">
        <div className="station-statistic-content common">
          <div className="station-statistic-aside">
            <img src="./img/marker.png" className="img-marker" />
            <div className="asideheader">
              <span className="station-title-kor">설정</span>
              <span className="station-tile-eng">REGISTER</span>
            </div>
            <div
              className={`aside-item ${
                menuState === "operation" ? "active" : ""
              }`}
              onClick={() => handleItemMenuGraph("operation")}
            >
              <span>알람 설정</span>
              <IoNotificationsSharp
                color={`${menuState === "operation" ? "#fff" : "#8faadc"}`}
                size={20}
              />
            </div>
            <div
              className={`aside-item ${
                menuState === "operationRate" ? "active" : ""
              }`}
              onClick={() => handleItemMenuGraph("operationRate")}
            >
              <span>자재 분류</span>
              <SiMaterialdesignicons
                color={`${menuState === "operationRate" ? "#fff" : "#8faadc"}`}
                size={20}
              />
            </div>
            <div
              className={`aside-item ${
                menuState === "failure" ? "active" : ""
              }`}
              onClick={() => handleItemMenuGraph("failure")}
            >
              <span>이메일 설정</span>
              <MdOutlineEmail
                color={`${menuState === "failure" ? "#fff" : "#8faadc"}`}
                size={20}
              />
            </div>
            <div
              className={`aside-item ${menuState === "work" ? "active" : ""}`}
              onClick={() => handleItemMenuGraph("work")}
            >
              <span>기타 설정</span>
              <BsConeStriped
                color={`${menuState === "work" ? "#fff" : "#8faadc"}`}
                size={20}
              />
            </div>
          </div>
          <div className="common-settings-alarm">
            <div className="common-settings-alarm-left">
              <span className="text-instructions">
                시설물에 관한 중요 또는 일반 알람에 대해 사용자에게 메시지를
                전달합니다. <p>소리, 주기, 메시지, 대상 등을 설정할 수 있습니다.</p>
              </span>
            </div>
            <div className="common-settings-alarm-right">
            <button className="button-submit-form">저장</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonSetting;
