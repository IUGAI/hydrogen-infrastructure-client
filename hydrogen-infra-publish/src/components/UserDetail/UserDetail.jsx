import "../../components/StationDetail/StationDetailMainInfo/StationDetailMainInfo.scss";
import React, { useEffect, useState } from "react";
import { BsTools } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import UserWorkhistory from "./UserWorkhistory";
import UserEquipments from "./UserEquipments";
import { TbReport } from "react-icons/tb";
import UserWorkReport from "./UserWorkReport";

function UserDetail({ item_info }) {
  const [navitem, setnavitem] = useState("work-history");
  return (
    <div className="station-detail-info station-detail-info-user">
      <div className="station-detail-info-left">
        <div className="station-detail-info-left-inner">
          <div className="user-detail-header-info">
            <div className="user-detail-header-info-text-circle">
              <img src="/img/user-detail-avatar.png" />
            </div>
            <div className="user-detail-header-info-text">
              <span className="detail-info-text-level">LEVEL_2</span>
              <span className="detail-info-main-text-level">hongKilDong_11</span>
            </div>
          </div>
          {item_info.map((item, index) => (
            <div key={index} className="station-detail-info-left-item">
              <div className="station-detail-info-left-item-icon">
                {item.icon}
              </div>
              <div className="station-detail-info-left-item-value">
                <span className="station-detail-info-title">{item.title}</span>
                <span className="station-detail-info-content">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="station-detail-info-left station-detail-info-left-info">
      <div className="station-detail-navbar">
          <div
            className={`navbar-item ${navitem === "work-history" ? "active" : ""}`}
            onClick={() => setnavitem("work-history")}
          >
            <div className="left-item">
              <BsTools
                color={`${navitem === "work-history" ? "#fff" : "#5e76ba"}`}
                size={24}
              />
              <span className="text-title">작업 이력</span>
            </div>
            <span className="item-quantity">30</span>
          </div>
          <div
            className={`navbar-item ${
              navitem === "work-report" ? "active" : ""
            }`}
            onClick={() => setnavitem("work-report")}
          >
            <div className="left-item">
              <TbReport 
                color={`${navitem === "work-report" ? "#fff" : "#5e76ba"}`}
                size={24}
              />
              <span>결과 보고서</span>
            </div>
            <span className="item-quantity">16</span>
          </div>
          <div
            className={`navbar-item ${
              navitem === "equipments" ? "active" : ""
            }`}
            onClick={() => setnavitem("equipments")}
          >
            <div className="left-item">
              <GrUserWorker
                color={`${navitem === "equipments" ? "#fff" : "#5e76ba"}`}
                size={24}
              />
              <span>담당 시설물</span>
            </div>
            <span className="item-quantity">5</span>
          </div>
          <div
          
            className={`navbar-item default-edit-user`}
          ></div>
        </div>
        {
            navitem === "work-history" ? <UserWorkhistory/>  : navitem === "equipments" ?  <UserEquipments/> : <UserWorkReport/>
        }
 
      </div>
    </div>
  );
}

export default UserDetail;
