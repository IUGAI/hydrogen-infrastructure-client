import "../../FacilityInfo/StationDetail/StationDetail.scss";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegEdit } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDetail from "../../../components/UserDetail/UserDetail";
import { BiRename } from "react-icons/bi";
import { FaIdCard } from "react-icons/fa";
import { MdNumbers } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BiBuildings } from "react-icons/bi";
import { PiMedalDuotone } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import EditUser from "../../../components/UserDetail/EditUser";

const item_info = [
  {
    icon: <FaIdCard size={24} color="#8da7d9" />,
    title: "아이디",
    text: "hongKilDong_1",
  },
  {
    icon: <BiRename size={24} color="#8da7d9" />,
    title: "성명",
    text: "홍길동",
  },
  {
    icon: <MdNumbers  size={24}  color="#8da7d9" />,
    title: "주민등록번호",
    text: "981213-5******",
  },
  {
    icon: <FaPhoneAlt size={24}  color="#8da7d9" />,
    title: "휴대전화",
    text: "010-5756-1133",
  },
  {
    icon: <MdEmail  size={24}  color="#8da7d9" />,
    title: "이메일",
    text: "hongkildong001@gmail.com",
  },
  {
    icon: <BiBuildings size={24}   color="#8da7d9" />,
    title: "소속(사업소)",
    text: "서울 A 사업소",
  },
  {
    icon: <PiMedalDuotone  size={24}  color="#8da7d9" />,
    title: "접근권한",
    text: "LEVEL 2 (일반 사용자)",
  },
  {
    icon: <FaCalendarCheck  size={24}  color="#8da7d9" />,
    title: "가입일",
    text: "2023.12.20",
  },
];

function UserInfo() {
  const [editUser, setEdituser] = useState(false);
  const navigate = useNavigate();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleHover = (index) => {
    setHoveredIcon(index);
  };


  const handleclickedituser = () => {
    setEdituser(true);
  };
  const handleitemreturn = () => {
    navigate("/user-list");
  };

  const iconData = [
    {
      icon: <TfiMenuAlt color={hoveredIcon === 0 ? "#fff" : "#8da7d9"} />,
      text: "목록",
      onClick: handleitemreturn,
    },
    {
      icon: <FaRegEdit color={hoveredIcon === 1 ? "#fff" : "#8da7d9"} />,
      text: "사용자  수정",
      onClick: handleclickedituser,
    },

  ];

  return (
    <div className="station-detail-content">
      <span className="title-station-info">사용자 정보</span>
      {editUser ? (
        <div className="station-regist-content-main   station-regist-content-main-edit-user">
          <div className={`station-regist-header `}></div>
          <div className="regist-data">
            <EditUser setEdituser={setEdituser} />
          </div>
        </div>
      ) : (
        <>
          <div className="station-detail-content-header">
            <div className="left">
              <div className="icon-circle-background">
                <img src="/img/logo.png" alt="logo" />
              </div>
              <span className="station-detail-name">홍길동</span>
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
              src="/img/user-info.png"
              className="detail-img-station"
              alt="station_image"
            />
          </div>
          <div className="station-detail-content-info">
            <UserDetail item_info={item_info}  />
          </div>
        </>
      )}
    </div>
  );
}

export default UserInfo;
