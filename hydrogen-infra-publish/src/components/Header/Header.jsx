import React, { useEffect, useState, useRef } from "react";
import "./Header.scss";
import { HiOutlineMenu, HiOutlineMenuAlt1 } from "react-icons/hi";
import { CiBellOn } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoPower } from "react-icons/io5";
import { useMyContext } from "../../context/menucontext";
import AlarmDrop from "./AlarmDrop";
import UserInfoDrop from "./UserInfoDrop";
import { useNavigate } from "react-router-dom";
import ModalDefault from "../Modal/ModalDefault";

function Header() {
  const modalRef = useRef();
  const userModalRef = useRef();
  const [currentTime, setCurrentTime] = useState();
  const [alramView, setAlarmView] = useState(false);
  const [userView, setUserView] = useState(false);
  const [logout, setLogout] = useState(false);
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useMyContext();
  const navigate = useNavigate();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      setCurrentTime(formattedDateTime);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setAlarmView(false);
      }

      if (
        userModalRef.current &&
        !userModalRef.current.contains(event.target)
      ) {
        setUserView(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, userModalRef]);

  const handleOpen = () => {
    setOpen(true);
    setLogout(!logout);
  };
  const handleClose = () => {
    setOpen(false);
    setLogout(!logout);
  };

  const handleClickGoToLogin = () => {
    navigate("/login");
  };

  const handletClick = () => {
    dispatch({ type: "toggle" });
  };

  const handleClickAlarm = () => {
    setAlarmView(!alramView);
    setUserView(false);
  };

  const handleClickUser = () => {
    setUserView(!userView);
    setAlarmView(false);
  };

  return (
    <div className="header-content">
      <ModalDefault
        open={open}
        modalTitle={'Logout'}
        modalDsecriptions={"로그아웃 하시겠습니까?"}
        handleClose={handleClose}
        handleClickGoToLogin={handleClickGoToLogin}
      />

      <div className="left">
        <div className="icon">
          {state.showSide ? (
            <HiOutlineMenu size={26} onClick={handletClick} />
          ) : (
            <HiOutlineMenuAlt1 size={26} onClick={handletClick} />
          )}
        </div>
        <img src="/img/logo.png" alt="logo" />
        <span className="title-hydrogen">수소 </span>
        <span className="title-hydrogen-fx">인프라 관리 시스템</span>
      </div>
      <div className="right">
        <div className="dateTime">
          <span className="sign-out-text">{currentTime}</span>
        </div>
        <div
          className={alramView ? "icon-header current" : "icon-header"}
          ref={modalRef}
        >
          <CiBellOn
            size={24}
            style={{ cursor: "pointer" }}
            onClick={handleClickAlarm}
          />
          {alramView && <AlarmDrop />}
          {userView && <UserInfoDrop />}
        </div>
        <div
          className={userView ? "icon-header current" : "icon-header"}
          ref={userModalRef}
        >
          <FiUser
            size={20}
            onClick={handleClickUser}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div
          className={logout ? "sign-out current" : "sign-out "}
          style={{ cursor: "pointer" }}
          onClick={handleOpen}
        >
          <IoPower size={22} /> <span className="sign-out-text">로그아웃</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
