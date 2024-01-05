import { useNavigate } from "react-router";
import StationDetailMaterial from "../../../components/StationDetail/StationDetailMaterial/StationDetailMaterial";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegFile } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { stations, buisness } from "../../../data/Mapdata";
import { BsTools } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import MaterialMainInfo from "../../../components/MaterialDetail/MaterialMainInfo/MaterialMainInfo";
import MaterialHistoryInfo from "../../../components/MaterialDetail/MaterialHistoryInfo/MaterialHistoryInfo";

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
    text: "서울-A-생산-1",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "시설종류",
    text: "생산시설",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "자재명",
    text: "워터펌",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "LOT번호",
    text: "M-A-1-10001",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "시리얼번호",
    text: "SA315814358731",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "규격",
    text: "180X200",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "내구연한(년)",
    text: "15",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "제조사",
    text: "수소사(주)",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "제조일",
    text: "2023.05.15",
  },
];

const item_info_mid = [
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "재고수량",
    text: "10",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "구매수량",
    text: "53",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "단가",
    text: "100,000 원",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "공급가액",
    text: "1,000,000 원",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "부가가치세",
    text: "100,000 원",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "합계",
    text: "1,100,000 원",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "대분류",
    text: "A-1",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "중분류",
    text: "B-1",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "소분류",
    text: "C-3",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "구매처",
    text: "좋은유통사(주)",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
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

  const handleitemreturn = () => {
    navigate("/materials");
  };
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
          <div className="icon-circle-background">
            <TfiMenuAlt
              color="#8da7d9"
              onClick={handleitemreturn}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="icon-circle-background">
            <FaRegEdit color="#8da7d9" style={{ cursor: "pointer" }} />
          </div>
          <div className="icon-circle-background">
            <FaRegFile color="#8da7d9" style={{ cursor: "pointer" }} />
          </div>
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
              <span>자재 이력</span>
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
