import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { useState } from "react";

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(1);

  const handleClickItem = (item) => {
    setSelectedItem(item);
  };


  return (
    <div className="sidebar-content">
      <span>대시보드</span>
      <div className="menu-bar">
        <ul>
          <li onClick={() => handleClickItem(1)}>
            <Link to="/" className={selectedItem === 1 ? "link-item active": 'link-item'} >
              <img src={selectedItem === 1 ? "./img/icon-dash-active.png" : "./img/icon-dash.png"} className="icon-menu" />
              <span className="text-menu">전체 현황</span>
            </Link>
          </li>
          <li  onClick={() => handleClickItem(2)}>
            <Link  to="/dashboard" className={selectedItem === 2 ? "link-item active": 'link-item'} >
              <img src="./img/icon-dash-detail.png" className="icon-menu" />
              <span className="text-menu">사업소 현황</span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <span>시설 정보</span>
      <div className="menu-bar">
        <ul>
          <li>
            <Link to="/" className="link-item">
              <img src={"./img/station-info-disactive.png"} className="icon-menu" />
              <span className="text-menu">사업소 정보</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link-item">
              <img src="./img/equipmentd-info-disactive.png" className="icon-menu" />
              <span className="text-menu">시설물 정보</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link-item">
              <img src="./img/icon-material-info-disactive.png" className="icon-menu" />
              <span className="text-menu">자재 정보</span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>

      <span>시설 등록</span>
      <div className="menu-bar">
        <ul>
          <li>
            <Link to="/" className="link-item">
              <img src="./img/station-register-disactive.png" className="icon-menu" />
              <span className="text-menu">사업소 등록</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link-item">
              <img src="./img/equipment-register-disactive.png" className="icon-menu" />
              <span className="text-menu">시설물 등록</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link-item">
              <img src="./img/material-register-disactive.png" className="icon-menu" />
              <span className="text-menu">자재 등록</span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>

      <span>시설 관리</span>
      <div className="menu-bar">
        <ul>
          <li>
            <Link to="/" className="link-item">
              <img src="./img/failure-list-disactive.png" className="icon-menu" />
              <span className="text-menu">고장 조회</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link-item">
              <img src="./img/register-task-disactive.png" className="icon-menu" />
              <span className="text-menu">작업 등록</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link-item">
              <img src="./img/task-list-disactive.png" className="icon-menu" />
              <span className="text-menu">작업 조회</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link-item">
              <img src="./img/task-report-disactive.png" className="icon-menu" />
              <span className="text-menu">결과 등록</span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <span>시설 통계</span>
      <div className="menu-bar">
        <ul>
          <li>
            <Link to="/" className="link-item">
              <img src="./img/station-statistic-disactive.png" className="icon-menu" />
              <span className="text-menu">사업 통계</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link-item">
              <img src="./img/equipment-statistic-disactive.png" className="icon-menu" />
              <span className="text-menu">시설물 통계</span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <span>시스템 설정</span>
      <div className="menu-bar">
        <ul>
          <li>
            <Link to="/" className="link-item">
              <img src="./img/user-controll-disactive.png" className="icon-menu" />
              <span className="text-menu">사용자 관리</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link-item">
              <img src="./img/settings-disactive.png" className="icon-menu" />
              <span className="text-menu">설정</span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Sidebar;
