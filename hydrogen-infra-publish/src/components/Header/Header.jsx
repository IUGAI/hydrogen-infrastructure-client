import { useEffect, useState } from "react";
import "./Header.scss";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { CiBellOn } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoPower } from "react-icons/io5";
import { useMyContext } from "../../context/menucontext";

function Header() {
  const [currentTime, setCurrentTime] = useState();
  const { state, dispatch } = useMyContext();

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
  });

  const handletClick = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div className="header-content">
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
        <div className="icon-header">
          <CiBellOn size={24} />
        </div>
        <div className="icon-header">
          <FiUser size={20} />
        </div>
        <div className="sign-out">
          <IoPower size={22} /> <span className="sign-out-text">로그아웃</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
