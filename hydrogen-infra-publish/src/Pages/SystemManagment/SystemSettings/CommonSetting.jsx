import { SiMaterialdesignicons } from "react-icons/si";
import { IoNotificationsSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { BsConeStriped } from "react-icons/bs";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

import CommonSettingsAlarm from "../../../components/CommonSettings/CommonSettingsAlarm";
import CommonSettingsMaterials from "../../../components/CommonSettings/CommonSettingsMaterials";
import CommonSettingsEmail from "../../../components/CommonSettings/CommonSettingsEmail";
import CommonSettingsEtc from "../../../components/CommonSettings/CommonSettingsEtc";
import { useMediaQuery } from "react-responsive";

function CommonSetting() {
  const [menuState, setMenuState] = useState("alarm-setting");
  const isSmallScreen = useMediaQuery({ maxWidth: 1200 });
  const isMobileScreen = useMediaQuery({ maxWidth: 900 });

  const handleItemMenuGraph = (state) => {
    setMenuState(state);
  };

  return (
    <div className={`station-statistic-wrapper`}>
      <div className={`station-statistic-header `}>
        <span>공통 설정</span>
      </div>
      <div className="station-statistic-inner commonsettings">
        <div className="station-statistic-content common">
          <div className="station-statistic-aside">
            <img src="./img/marker.png" className="img-marker" />
            <div className="asideheader">
              <span className="station-title-kor">설정</span>
              {isSmallScreen ? (
                ""
              ) : (
                <span className="station-tile-eng">REGISTER</span>
              )}
            </div>
            <div
              className={`aside-item ${
                menuState === "alarm-setting" ? "active" : ""
              }`}
              onClick={() => handleItemMenuGraph("alarm-setting")}
            >
              {isMobileScreen ? "" : <span>알람 설정</span>}

              <IoNotificationsSharp
                color={`${menuState === "alarm-setting" ? "#fff" : "#8faadc"}`}
                size={20}
              />
            </div>
            <div
              className={`aside-item ${
                menuState === "matterialClassification" ? "active" : ""
              }`}
              onClick={() => handleItemMenuGraph("matterialClassification")}
            >
              {isMobileScreen ? "" : <span>자재 분류</span>}
              <SiMaterialdesignicons
                color={`${
                  menuState === "matterialClassification" ? "#fff" : "#8faadc"
                }`}
                size={20}
              />
            </div>
            <div
              className={`aside-item ${menuState === "email" ? "active" : ""}`}
              onClick={() => handleItemMenuGraph("email")}
            >
              {isMobileScreen ? "" : <span>이메일 설정</span>}

              <MdOutlineEmail
                color={`${menuState === "email" ? "#fff" : "#8faadc"}`}
                size={20}
              />
            </div>
            <div
              className={`aside-item ${
                menuState === "common-settings" ? "active" : ""
              }`}
              onClick={() => handleItemMenuGraph("common-settings")}
            >
              {isMobileScreen ? "" : <span>기타 설정</span>}

              <BsConeStriped
                color={`${
                  menuState === "common-settings" ? "#fff" : "#8faadc"
                }`}
                size={20}
              />
            </div>
          </div>
          {menuState === "alarm-setting" ? (
            <CommonSettingsAlarm />
          ) : menuState === "matterialClassification" ? (
            <CommonSettingsMaterials />
          ) : menuState === "email" ? (
            <CommonSettingsEmail />
          ) : menuState === "common-settings" ? (
            <CommonSettingsEtc />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default CommonSetting;
