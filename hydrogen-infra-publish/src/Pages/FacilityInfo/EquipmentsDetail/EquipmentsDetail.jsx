import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegFile } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdHome } from "react-icons/md";

import { SiMaterialdesignicons } from "react-icons/si";
import { stations, buisness } from '../../../data/Mapdata';
import { IoNotificationsSharp } from "react-icons/io5";
import { BsConeStriped } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StationDetailMainInfo from "../../../components/StationDetail/StationDetailMainInfo/StationDetailMainInfo";
import StationDetailMaterial from "../../../components/StationDetail/StationDetailMaterial/StationDetailMaterial";
import StationDetailNoticeList from "../../../components/StationDetail/StationDetailNoticeList/StationDetailNoticeList";
import StationDetailBrekList from "../../../components/StationDetail/StationDetailBeakList/StationDetailBrekList";
import StationDetailTaskList from "../../../components/StationDetail/StationDetailTaskList/StationDetailTaskList";


const item_info = [
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "사업소",
    text: "서울 A 사업소",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "주소",
    text: "서울특별시 금천구 시흥대로 321",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "시설물명",
    text: "서울 A 사업소",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "시설종류",
    text: "생산시설",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "관리번호",
    text: "AC000001",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "최대용량(g)",
    text: "300",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "직정압력(bar)",
    text: "350-450",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "직정온도(C)",
    text: "180-200",
  },
];

const item_info_mid = [
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "내구연한",
    text: "10",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "설치일",
    text: "2022.11.05",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "가동일",
    text: "2023.02.01",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "제조사",
    text: "좋은회사",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "제조일",
    text: "2023.01.03",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "구매처",
    text: "강산유통회사",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "구매일",
    text: "2022.11.16",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "담당자",
    text: "강감찬",
  },
];

const center = {
    lat: stations[0].lat,
    lng: stations[0].lng,
  };

function EquipmentsDetail() {
  const [navitem, setnavitem] = useState("main");
  const navigate = useNavigate();

  const handleitemreturn = () => {
    navigate("/equipments");
  };
  return (
    <div className="station-detail-content">
      <span className="title-station-info">시설물 정보</span>
      <div className="station-detail-content-header">
        <div className="left">
          <div className="icon-circle-background">
            <img src="/img/logo.png" alt="logo" />
          </div>
          <span className="station-detail-name">생산 1호기</span>
          <div className="station-business-name">
            <div className="vertical-line"></div>
            <span className="station-buisness-name">서울 A 사업소</span>
          </div>
        </div>
        <div className="right">
          <div className="icon-circle-background">
            <TfiMenuAlt color="#8da7d9" onClick={handleitemreturn} style={{cursor: "pointer"}} />
          </div>
          <div className="icon-circle-background">
            <FaRegEdit color="#8da7d9" style={{cursor: "pointer"}} />
          </div>
          <div className="icon-circle-background">
            <FaRegFile color="#8da7d9" style={{cursor: "pointer"}} />
          </div>
        </div>
        <img
          src="/img/detail_eq_info.png"
          className="detail-img-station"
          alt="station_image"
        />
      </div>
      <div className="station-detail-content-info">
        <div className="station-detail-navbar">
          <div
            className={`navbar-item ${navitem === "main" ? "active" : ""}`}
            onClick={() => setnavitem("main")}
          >
            <div className="left-item">
              <MdHome
                color={`${navitem === "main" ? "#fff" : "#5e76ba"}`}
                size={24}
              />
              <span className="text-title">기본 정보</span>
            </div>
          </div>
          <div
            className={`navbar-item ${navitem === "materials" ? "active" : ""}`}
            onClick={() => setnavitem("materials")}
          >
            <div className="left-item">
              <SiMaterialdesignicons
                color={`${navitem === "materials" ? "#fff" : "#5e76ba"}`}
                size={24}
              />
              <span>자재</span>
            </div>
            <span className="item-quantity">80</span>
          </div>
          <div
            className={`navbar-item ${
              navitem === "alarm-list" ? "active" : ""
            }`}
            onClick={() => setnavitem("alarm-list")}
          >
            <div className="left-item">
              <IoNotificationsSharp
                color={`${navitem === "alarm-list" ? "#fff" : "#5e76ba"}`}
                size={24}
              />
              <span>알람 내역</span>
            </div>
            <span className="item-quantity">5</span>
          </div>
          <div
            className={`navbar-item ${
              navitem === "break-list" ? "active" : ""
            }`}
            onClick={() => setnavitem("break-list")}
          >
            <div className="left-item">
              <BsConeStriped
                color={`${navitem === "break-list" ? "#fff" : "#5e76ba"}`}
                size={24}
              />
              <span>고장 내역</span>
            </div>
            <span className="item-quantity">2</span>
          </div>
          <div
            className={`navbar-item ${navitem === "task-list" ? "active" : ""}`}
            onClick={() => setnavitem("task-list")}
          >
            <div className="left-item">
              <BsTools
                color={`${navitem === "task-list" ? "#fff" : "#5e76ba"}`}
                size={24}
              />
              <span>작업 내역</span>
            </div>
            <span className="item-quantity">2</span>
          </div>
          <div
            className={`navbar-item default-equpmnt`}
          ></div>
        </div>
        {navitem === "main" ? (
          <StationDetailMainInfo
            item_info={item_info}
            item_info_mid={item_info_mid}
            center={center}
          />
        ) : navitem === "materials" ? (
          <StationDetailMaterial />
        ) : navitem === "alarm-list" ? (
          <StationDetailNoticeList />
        ) : navitem === "break-list" ? (
          <StationDetailBrekList />
        ) : navitem === "task-list" ? (
          <StationDetailTaskList />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default EquipmentsDetail;
