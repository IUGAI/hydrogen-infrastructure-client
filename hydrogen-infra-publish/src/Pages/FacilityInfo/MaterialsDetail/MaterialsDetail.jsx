import { TfiMenuAlt } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { FaLocationArrow } from "react-icons/fa";
import { GiChemicalTank } from "react-icons/gi";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaChargingStation } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { stations } from "../../../data/Mapdata";
import { FaSquareMinus } from "react-icons/fa6";
import { FaCoins } from "react-icons/fa";
import { FaGripLines } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { IoMdBuild } from "react-icons/io";
import { BsBoxes } from "react-icons/bs";
import { FaBoxesStacked } from "react-icons/fa6"
import { IoToday } from "react-icons/io5";
import { FaRegKeyboard } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { FaCalendarTimes } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { HiReceiptTax } from "react-icons/hi";
import { SiBigcartel } from "react-icons/si";
import { GrStatusInfoSmall } from "react-icons/gr";
import { GrStatusWarningSmall } from "react-icons/gr";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MaterialMainInfo from "../../../components/MaterialDetail/MaterialMainInfo/MaterialMainInfo";
import MaterialHistoryInfo from "../../../components/MaterialDetail/MaterialHistoryInfo/MaterialHistoryInfo";

const item_info = [
  {
    icon: <FaHome size={24} color="#8da7d9" />,
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
    text: "서울-A-생산-1",
  },
  {
    icon: <FaChargingStation size={20} color="#8da7d9" />,
    title: "시설종류",
    text: "생산시설",
  },
  {
    icon: <SiMaterialdesignicons color="#8da7d9" />,
    title: "자재명",
    text: "워터펌",
  },
  {
    icon: <FaRegKeyboard color="#8da7d9" />,
    title: "LOT번호",
    text: "M-A-1-10001",
  },
  {
    icon: <FaSquareMinus size={20} color="#8da7d9" />,
    title: "시리얼번호",
    text: "SA315814358731",
  },
  {
    icon: <FaGripLines color="#8da7d9" />,
    title: "규격",
    text: "180X200",
  },
  {
    icon: <FaCalendarTimes size={20} color="#8da7d9" />,
    title: "내구연한(년)",
    text: "15",
  },
  {
    icon: <FaBuilding size={20} color="#8da7d9" />,
    title: "제조사",
    text: "수소사(주)",
  },
  {
    icon: <IoMdBuild size={22} color="#8da7d9" />,
    title: "제조일",
    text: "2023.05.15",
  },
];

const item_info_mid = [
  {
    icon: <BsBoxes size={24} color="#8da7d9" />,
    title: "재고수량",
    text: "10",
  },
  {
    icon: <FaBoxesStacked size={22} color="#8da7d9" />,
    title: "구매수량",
    text: "53",
  },
  {
    icon: <FaCoins size={22} color="#8da7d9" />,
    title: "단가",
    text: "100,000 원",
  },
  {
    icon: <FaMoneyBillAlt size={22} color="#8da7d9" />,
    title: "공급가액",
    text: "1,000,000 원",
  },
  {
    icon: <HiReceiptTax size={22} color="#8da7d9" />,
    title: "부가가치세",
    text: "100,000 원",
  },
  {
    icon: <FaCalculator size={22} color="#8da7d9" />,
    title: "합계",
    text: "1,100,000 원",
  },
  {
    icon: <SiBigcartel size={22} color="#8da7d9" />,
    title: "대분류",
    text: "A-1",
  },
  {
    icon: <GrStatusInfoSmall size={22} color="#8da7d9" />,
    title: "중분류",
    text: "B-1",
  },
  {
    icon: <GrStatusWarningSmall size={22} color="#8da7d9" />,
    title: "소분류",
    text: "C-3",
  },
  {
    icon: <FaCartShopping size={22} color="#8da7d9" />,
    title: "구매처",
    text: "좋은유통사(주)",
  },
  {
    icon: <IoToday color="#8da7d9" />,
    title: "구매일",
    text: "2023.07.28",
  },
];
const center = {
  lat: stations[0].lat,
  lng: stations[0].lng,
};

function MaterialsDetail() {  
  const [navitem, setnavitem] = useState("main");
  const navigate = useNavigate();
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const path = useLocation();
  const id = path.pathname.slice(11, 19)
  const handleHover = (index) => {
    setHoveredIcon(index);
  };
  const handleitemreturn = () => {
    navigate("/materials");
  };
  
  const handleGrEditClick = () => {
    // navigate(`/station-edit/${id}`)
  };

  const handleClickGotoEditPAge = ()=> {
     navigate(`/material-edit/${id}`)
  }
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
      text: "자재 수정",
      onClick: handleClickGotoEditPAge,
    },
  ];
  return (
    <div className="station-detail-content">
      <span className="title-station-info">자재 정보</span>
      <div className="station-detail-content-header">
        <div className="left">
          <div className="icon-circle-background">
            <img src="/img/logo.png" alt="logo" />
          </div>
          <span className="station-detail-name">워터펌</span>
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
          src="/img/material_storage.png"
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
            className={`navbar-item ${navitem === "materials-history" ? "active" : ""}`}
            onClick={() => setnavitem("materials-history")}
          >
            <div className="left-item">
              <BsTools
                color={`${navitem === "materials-history" ? "#fff" : "#5e76ba"}`}
                size={24}
              />
              <span  className="info-nav-item">자재 이력</span>
            </div>
            <span className="item-quantity">3</span>
          </div>
          <div
            className={`navbar-item default-materials`}
          ></div>
        </div>
        {navitem === "main" ? (
          <MaterialMainInfo
            item_info={item_info}
            item_info_mid={item_info_mid}
            center={center}
          />
        ) : navitem === "materials-history" ? (
          <MaterialHistoryInfo />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MaterialsDetail;
