import "./StationDetail.scss";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegEdit } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { MdHome } from "react-icons/md";
import { MdFactory } from "react-icons/md";
import { stations, buisness } from "../../../data/Mapdata";
import { SiMaterialdesignicons } from "react-icons/si";
import { IoNotificationsSharp } from "react-icons/io5";
import { BsConeStriped } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { FaCertificate } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { BiSolidBusiness } from "react-icons/bi";
import { MdOutlineNumbers } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StationDetailMainInfo from "../../../components/StationDetail/StationDetailMainInfo/StationDetailMainInfo";
import StationDetailEquipments from "../../../components/StationDetail/StationDetailEquipments/StationDetailEquipments";
import StationDetailMaterial from "../../../components/StationDetail/StationDetailMaterial/StationDetailMaterial";
import StationDetailNoticeList from "../../../components/StationDetail/StationDetailNoticeList/StationDetailNoticeList";
import StationDetailBrekList from "../../../components/StationDetail/StationDetailBeakList/StationDetailBrekList";
import StationDetailTaskList from "../../../components/StationDetail/StationDetailTaskList/StationDetailTaskList";
import StationDetailUsers from "../../../components/StationDetail/StationDetailUsers/StationDetailUsers";
import ModalBuisnessEdit from "../../../components/Modal/ModalBuisnessEdit";

const item_info = [
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "사업소명",
    text: "서울 A 사업소",
  },
  {
    icon: <FaLocationArrow color="#8da7d9" />,
    title: "주소",
    text: "서울특별시 금천구 시흥대로 321",
  },
  {
    icon: <FaLocationDot color="#8da7d9" />,
    title: "위도/경도",
    text: "123.00 / 245.00",
  },
  {
    icon: <FaPhone color="#8da7d9" />,
    title: "전화번호",
    text: "02-0000-0000",
  },
  {
    icon: <GrUserWorker color="#8da7d9" />,
    title: "관리자(정)",
    text: "홍길동 | 010-9632-2158",
  },
  {
    icon: <FaUserTie color="#8da7d9" />,
    title: "관리자(부)",
    text: "이몽룡 | 010-1258-7526",
  },
  {
    icon: <TbCertificate color="#8da7d9" />,
    title: "인가일",
    text: "2022.12.20",
  },
  {
    icon: <FaCertificate color="#8da7d9" />,
    title: "개시일",
    text: "2023.01.01",
  },
];

const item_info_mid = [
  {
    icon: <BiSolidBusiness color="#8da7d9" />,
    title: "사업자",
    text: "수소솔루션(주)",
  },
  {
    icon: <MdOutlineNumbers color="#8da7d9" />,
    title: "사업자등록번호",
    text: "000-00-00000",
  },
  {
    icon: <FaLocationArrow color="#8da7d9" />,
    title: "본사 주소",
    text: "서울시 00구 00로 00길 00",
  },
  {
    icon: <FaUserTie color="#8da7d9" />,
    title: "대표 이사",
    text: "이 순신",
  },
  {
    icon: <FaPhone color="#8da7d9" />,
    title: "전화번호",
    text: "02-0000-0001",
  },
  {
    icon: <FaUser color="#8da7d9" />,
    title: "실무 담당자",
    text: "권물 | 010-4369-8745",
  },
];

const center = {
  lat: stations[0].lat,
  lng: stations[0].lng,
};
const buisness_st = {
  lat: buisness[0].lat,
  lng: buisness[0].lng,
};

function StationDetail() {
  const [navitem, setnavitem] = useState("main");
  const [open, setOpen] = React.useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const navigate = useNavigate();
  const path = useLocation();
  const id = path.pathname.slice(10, 15)
  const handleHover = (index) => {
    setHoveredIcon(index);
  };


  const handleItemReturnClick = () => {
    navigate('/stations')
  };

  const handleGrEditClick = () => {
    navigate(`/station-edit/${id}`)
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const iconData = [
    {
      icon: <TfiMenuAlt color={hoveredIcon === 0 ? "#fff" : "#8da7d9"} />,
      text: "목록",
      onClick: handleItemReturnClick,
    },
    {
      icon: <GrEdit color={hoveredIcon === 1 ? "#fff" : "#8da7d9"} />,
      text: "사업소 수정",
      onClick: handleGrEditClick,
    },
    {
      icon: <FaRegEdit color={hoveredIcon === 2 ? "#fff" : "#8da7d9"} />,
      text: "사업자 수정",
      onClick: handleOpen,
    },
  ];

  const handleitemreturn = () => {
    navigate("/stations");
  };

  return (
    <div className="station-detail-content">
      <ModalBuisnessEdit
        open={open}
        handleClose={handleClose}
      />
      <span className="title-station-info">사업소 정보</span>
      <div className="station-detail-content-header">
        <div className="left">
          <div className="icon-circle-background">
            <img src="/img/logo.png" alt="logo" />
          </div>
          <span className="station-detail-name">서울 A 사업소</span>
          <div className="station-business-name">
            <div className="vertical-line"></div>
            <span className="station-buisness-name">수소솔루션(주)</span>
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
          src="/img/detail_info.png"
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
            className={`navbar-item ${
              navitem === "equipments" ? "active" : ""
            }`}
            onClick={() => setnavitem("equipments")}
          >
            <div className="left-item">
              <MdFactory
                color={`${navitem === "equipments" ? "#fff" : "#5e76ba"}`}
                size={24}
              />
              <span  className="info-nav-item">시설물</span>
            </div>
            <span className="item-quantity">5</span>
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
            <span className="item-quantity">200</span>
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
            <span className="item-quantity">50</span>
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
            <span className="item-quantity">9</span>
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
            <span className="item-quantity">26</span>
          </div>
          <div
            className={`navbar-item ${navitem === "user" ? "active" : ""}`}
            onClick={() => setnavitem("user")}
          >
            <div className="left-item">
              <FaUser
                color={`${navitem === "user" ? "#fff" : "#5e76ba"}`}
                size={24}
              />
              <span className="info-nav-item">사용자</span>
            </div>
            <span className="item-quantity">4</span>
          </div>
          <div className={`navbar-item default`}></div>
        </div>
        {navitem === "main" ? (
          <StationDetailMainInfo
            item_info={item_info}
            item_info_mid={item_info_mid}
            center={center}
            buisness_st={buisness_st}
          />
        ) : navitem === "equipments" ? (
          <StationDetailEquipments />
        ) : navitem === "materials" ? (
          <StationDetailMaterial />
        ) : navitem === "alarm-list" ? (
          <StationDetailNoticeList />
        ) : navitem === "break-list" ? (
          <StationDetailBrekList />
        ) : navitem === "task-list" ? (
          <StationDetailTaskList />
        ) : navitem === "user" ? (
          <StationDetailUsers />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default StationDetail;
