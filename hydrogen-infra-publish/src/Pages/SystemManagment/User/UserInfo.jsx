import "../../FacilityInfo/StationDetail/StationDetail.scss";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaRegEdit } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDetail from "../../../components/UserDetail/UserDetail";
import EditUser from "../../../components/UserDetail/EditUser";

const item_info = [
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "아이디",
    text: "hongKilDong_1",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "성명",
    text: "홍길동",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "주민등록번호",
    text: "981213-5******",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "휴대전화",
    text: "010-5756-1133",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "이메일",
    text: "hongkildong001@gmail.com",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "소속(사업소)",
    text: "서울 A 사업소",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "접근권한",
    text: "LEVEL 2 (일반 사용자)",
  },
  {
    icon: <FaBookmark color="#8da7d9" />,
    title: "가입일",
    text: "2023.12.20",
  },
];

function UserInfo() {
  const [editUser, setEdituser] = useState(false);
  const navigate = useNavigate();

  const handleclickedituser = () => {
    setEdituser(true);
  };
  const handleitemreturn = () => {
    navigate("/user-list");
  };

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
              <div
                className="icon-circle-background"
                onClick={handleitemreturn}
              >
                <TfiMenuAlt color="#8da7d9" />
              </div>
              <div
                className="icon-circle-background"
                onClick={handleclickedituser}
              >
                <FaRegEdit color="#8da7d9" style={{ cursor: "pointer" }} />
              </div>
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
