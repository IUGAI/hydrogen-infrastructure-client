import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { useEffect, useState } from "react";
import { useMyContext } from "../../context/menucontext";

function Sidebar() {
  const start = useLocation();
  const [selectedItem, setSelectedItem] = useState(start.pathname);
  // const {state} = useMyContext();

  const handleClickItem = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    setSelectedItem(start.pathname);
  }, [start.pathname]);

  const { state } = useMyContext();

  return (
    <div className="sidebar-content">
      <div className={state.showSide ? "title-menu" : "title-menu hide"}>
        {state.showSide ? (
          <span>대시보드 </span>
        ) : selectedItem === "/" ||
          selectedItem.slice(0, 10) === "/dashboard" ? (
          <img src="/img/active.png" />
        ) : (
          <img src="/img/disactive.png" />
        )}
      </div>
      <div className="menu-bar">
        <ul>
          <li onClick={() => handleClickItem("/")}>
            <Link
              to="/"
              className={`link-item ${selectedItem === "/" ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img
                src={
                  selectedItem === "/"
                    ? "/img/icon-dash-active.png"
                    : "/img/icon-dash.png"
                }
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                전체 현황
              </span>
            </Link>
          </li>
          <li onClick={() => handleClickItem("/dashboard")}>
            <Link
              to="/dashboard"
              className={`link-item ${
                selectedItem.slice(0, 10) === "/dashboard" ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={
                  selectedItem.slice(0, 10) === "/dashboard"
                    ? "/img/active-icon-dash-detail.png"
                    : "/img/icon-dash-detail.png"
                }
                className={state.showSide ? "icon-menu" : "icon-menu"}
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                사업소 현황
              </span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className={state.showSide ? "title-menu" : "title-menu hide"}>
        {state.showSide ? (
          <span>시설 정보 </span>
        ) : selectedItem.slice(0, 9) === "/stations"  || selectedItem.slice(0,11) === "/equipments" || selectedItem === "/materials" ? (
          <img src="/img/active.png" />
        ) : (
          <img src="/img/disactive.png" />
        )}
      </div>
      <div className="menu-bar">
        <ul>
          <li onClick={() => handleClickItem("/stations")}>
            <Link
              to="/stations"
              className={`link-item ${
                selectedItem.slice(0, 9) === "/stations" ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={
                  selectedItem.slice(0, 9) === "/stations"
                    ? "/img/stationsactivemenu.png"
                    : "/img/station-info-disactive.png"
                }
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                사업소 정보
              </span>
            </Link>
          </li>
          <li onClick={() => handleClickItem("/equipments")}>
            <Link
              to="/equipments"
              className={`link-item ${
                selectedItem.slice(0, 11) === "/equipments" ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={
                  selectedItem.slice(0, 11) === "/equipments"
                    ? "/img/equipments-icon-menu.png"
                    : "/img/equipmentd-info-disactive.png"
                }
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                시설물 정보
              </span>
            </Link>
          </li>
          <li onClick={() => handleClickItem("/materials")}>
            <Link
              to="/materials"
              className={`link-item ${selectedItem.slice(0, 10) === "/materials" ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img
                src={selectedItem.slice(0, 10) === "/materials" ? "/img/menu_materials_active.png" :"/img/icon-material-info-disactive.png"}
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                자재 정보
              </span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className={state.showSide ? "title-menu" : "title-menu hide"}>
        {state.showSide ? (
          <span>시설 등록 </span>
        ) : (
          <img src="/img/disactive.png" />
        )}
      </div>
      <div className="menu-bar">
        <ul>
          <li onClick={() => handleClickItem("/station-regist")}>
            <Link
              to="/station-regist"
              className={`link-item ${selectedItem === "/station-regist" ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img
                src={selectedItem === "/station-regist" ? "/img/station-regist-active.png" : "/img/station-register-disactive.png"}
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                사업소 등록
              </span>
            </Link>
          </li>
          <li onClick={() => handleClickItem("/")}>
            <Link
              to="/"
              className={`link-item ${selectedItem === 6 ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img
                src="/img/equipment-register-disactive.png"
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                시설물 등록
              </span>
            </Link>
          </li>
          <li onClick={() => handleClickItem("/")}>
            <Link
              to="/"
              className={`link-item ${selectedItem === 7 ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img
                src="/img/material-register-disactive.png"
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                자재 등록
              </span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className={state.showSide ? "title-menu" : "title-menu hide"}>
        {state.showSide ? (
          <span>시설 관리 </span>
        ) : (
          <img src="/img/disactive.png" />
        )}
      </div>
      <div className="menu-bar">
        <ul>
          <li onClick={() => handleClickItem("/")}>
            <Link
              to="/"
              className={`link-item ${selectedItem === 8 ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img
                src="/img/failure-list-disactive.png"
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                고장 조회
              </span>
            </Link>
          </li>
          <li onClick={() => handleClickItem("/")}>
            <Link
              to="/"
              className={`link-item ${selectedItem === 9 ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img
                src="/img/register-task-disactive.png"
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                작업 등록
              </span>
            </Link>
          </li>
          <li onClick={() => handleClickItem("/")}>
            <Link
              to="/"
              className={`link-item ${selectedItem === 9 ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img src="/img/task-list-disactive.png" className="icon-menu" />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                작업 조회
              </span>
            </Link>
          </li>
          <li onClick={() => handleClickItem("/")}>
            <Link
              to="/"
              className={`link-item ${selectedItem === 9 ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img src="/img/task-report-disactive.png" className="icon-menu" />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                결과 등록
              </span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className={state.showSide ? "title-menu" : "title-menu hide"}>
        {state.showSide ? (
          <span>시설 통계 </span>
        ) : (
          <img src="/img/disactive.png" />
        )}
      </div>
      <div className="menu-bar">
        <ul>
          <li onClick={() => handleClickItem("/")}>
            <Link
              to="/"
              className={`link-item ${selectedItem === 9 ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img
                src="/img/station-statistic-disactive.png"
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                사업소 통계
              </span>
            </Link>
          </li>
          <li onClick={() => handleClickItem("/")}>
            <Link
              to="/"
              className={`link-item ${selectedItem === 9 ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img
                src="/img/equipment-statistic-disactive.png"
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                시설물 통계
              </span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className={state.showSide ? "title-menu" : "title-menu hide"}>
        {state.showSide ? (
          <span>시스템 설정 </span>
        ) : (
          <img src="/img/disactive.png" />
        )}
      </div>
      <div className="menu-bar">
        <ul>
          <li onClick={() => handleClickItem("/")}>
            <Link
              to="/"
              className={`link-item ${selectedItem === 9 ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img
                src="/img/user-controll-disactive.png"
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                사용자 관리
              </span>
            </Link>
          </li>
          <li onClick={() => handleClickItem("/")}>
            <Link
              to="/"
              className={`link-item ${selectedItem === 9 ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img src="/img/settings-disactive.png" className="icon-menu" />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                설정
              </span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Sidebar;
