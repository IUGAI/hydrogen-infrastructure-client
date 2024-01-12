import { TfiMenuAlt } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { MdHome } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { SiMaterialdesignicons } from "react-icons/si";
import { GiChemicalTank } from "react-icons/gi";
import { stations, buisness } from '../../../data/Mapdata';
import { IoNotificationsSharp } from "react-icons/io5";
import { BsConeStriped } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { IoToday } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaPlaceOfWorship } from "react-icons/fa";
import { FaChargingStation } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaTemperatureFull } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";
import { IoMdBuild } from "react-icons/io";
import { FaCalendarTimes } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StationDetailMainInfo from "../../../components/StationDetail/StationDetailMainInfo/StationDetailMainInfo";
import StationDetailMaterial from "../../../components/StationDetail/StationDetailMaterial/StationDetailMaterial";
import StationDetailNoticeList from "../../../components/StationDetail/StationDetailNoticeList/StationDetailNoticeList";
import StationDetailBrekList from "../../../components/StationDetail/StationDetailBeakList/StationDetailBrekList";
import StationDetailTaskList from "../../../components/StationDetail/StationDetailTaskList/StationDetailTaskList";


const item_info = [
  {
    icon: <FaHome color="#8da7d9" size={24} />,
    title: "사업소",
    text: "서울 A 사업소",
  },
  {
    icon: <FaLocationArrow color="#8da7d9" />,
    title: "주소",
    text: "서울특별시 금천구 시흥대로 321",
  },
  {
    icon: <GiChemicalTank size={24} color="#8da7d9" />,
    title: "시설물명",
    text: "서울 A 사업소",
  },
  {
    icon: <FaChargingStation size={20}  color="#8da7d9" />,
    title: "시설종류",
    text: "생산시설",
  },
  {
    icon: <FaSquareMinus size={20}  color="#8da7d9" />,
    title: "관리번호",
    text: "AC000001",
  },
  {
    icon: <IoSpeedometer size={24} color="#8da7d9" />,
    title: "최대용량(g)",
    text: "300",
  },
  {
    icon: <FaCompressArrowsAlt color="#8da7d9" />,
    title: "직정압력(bar)",
    text: "350-450",
  },
  {
    icon: <FaTemperatureFull size={24} color="#8da7d9" />,
    title: "직정온도(C)",
    text: "180-200",
  },
];

const item_info_mid = [
  {
    icon: <FaCalendarTimes size={20} color="#8da7d9" />,
    title: "내구연한",
    text: "10",
  },
  {
    icon: <FaPlaceOfWorship  size={24} color="#8da7d9" />,
    title: "설치일",
    text: "2022.11.05",
  },
  {
    icon: <FaPlay color="#8da7d9" />,
    title: "가동일",
    text: "2023.02.01",
  },
  {
    icon: <FaBuilding size={20} color="#8da7d9" />,
    title: "제조사",
    text: "좋은회사",
  },
  {
    icon: <IoMdBuild size={22} color="#8da7d9" />,
    title: "제조일",
    text: "2023.01.03",
  },
  {
    icon: <FaCartShopping size={22} color="#8da7d9" />,
    title: "구매처",
    text: "강산유통회사",
  },
  {
    icon: <IoToday size={23} color="#8da7d9" />,
    title: "구매일",
    text: "2022.11.16",
  },
  {
    icon: <FaUser size={23} color="#8da7d9" />,
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
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const navigate = useNavigate();
  const path = useLocation();
  const id = path.pathname.slice(12, 17)
  const handleHover = (index) => {
    setHoveredIcon(index);
  };


  

  const handleGrEditClick = () => {
    // navigate(`/station-edit/${id}`)
  };



  const handleClickGotoEditPAge = ()=> {
     navigate(`/equipment-edit/${id}`)
  }

  const handleitemreturn = () => {
    navigate("/equipments");
  };

  
const iconData = [
  {
    icon: <TfiMenuAlt color={hoveredIcon === 0 ? "#fff" : "#8da7d9"} />,
    text: "목록",
    onClick: handleitemreturn,
  },
  {
    icon: <FaHome color={hoveredIcon === 1 ? "#fff" : "#8da7d9"} />,
    text: "사업소 정보",
    onClick: handleGrEditClick,
  },
  {
    icon: <GrEdit color={hoveredIcon === 2 ? "#fff" : "#8da7d9"} />,
    text: "시설물 수정",
    onClick: handleClickGotoEditPAge,
  },
];
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
        {iconData.map((data, index) => (
            <div
              key={index}
              className="icon-circle-background"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
              onClick={data.onClick}
            >
              {hoveredIcon === index && (
                <span className="tooltip">{data.text}</span>
              )}
              {data.icon}
            </div>
          ))}
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
              <span  className="info-nav-item">자재</span>
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
              <span  className="info-nav-item">알람 내역</span>
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
              <span  className="info-nav-item">고장 내역</span>
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
              <span  className="info-nav-item">작업 내역</span>
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
