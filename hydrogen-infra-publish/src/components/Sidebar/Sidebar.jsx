import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { useEffect, useState } from "react";
import { useMyContext } from "../../context/menucontext";
import { MdKeyboardArrowRight } from "react-icons/md";

function Sidebar() {
  const start = useLocation();
  const [selectedItem, setSelectedItem] = useState(start.pathname);
  const [selectedMenu, setSelectedMenu] = useState(false);
  const [selectedMenAccess, setSelectedMenuAccess] = useState(false);
  // const {state} = useMyContext();
  const handleClickMenu = () => {
    setSelectedMenu(!selectedMenu);
  };

  const handleCilcikMenuAccess = () => {
    setSelectedMenuAccess(!selectedMenAccess);
  };

  useEffect(() => {
    setSelectedItem(start.pathname);
  }, [start.pathname]);

  useEffect(() => {
    if (selectedItem.slice(0, 10) === "/user-info") {
      setSelectedMenu(true);
    }
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
          <li>
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
          <li >
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
        ) : selectedItem.slice(0, 9) === "/stations" ||
          selectedItem.slice(0, 11) === "/equipments" ||
          selectedItem === "/materials" ? (
          <img src="/img/active.png" />
        ) : (
          <img src="/img/disactive.png" />
        )}
      </div>
      <div className="menu-bar">
        <ul>
          <li >
            <Link
              to="/stations"
              className={`link-item ${
                selectedItem.slice(0, 9) === "/stations"  || selectedItem.slice(0,13) === "/station-edit"? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={
                  selectedItem.slice(0, 9) === "/stations" || selectedItem.slice(0,13) === "/station-edit"
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
          <li>
            <Link
              to="/equipments"
              className={`link-item ${
                selectedItem.slice(0, 11) === "/equipments" || selectedItem.slice(0,15) === "/equipment-edit"  ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={
                  selectedItem.slice(0, 11) === "/equipments"  || selectedItem.slice(0,15) === "/equipment-edit" 
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
          <li>
            <Link
              to="/materials"
              className={`link-item ${
                selectedItem.slice(0, 10) === "/materials"  || selectedItem.slice(0, 14) === "/material-edit" ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={
                  selectedItem.slice(0, 10) === "/materials" || selectedItem.slice(0, 14) === "/material-edit" 
                    ? "/img/menu_materials_active.png"
                    : "/img/icon-material-info-disactive.png"
                }
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
        ) : selectedItem === "/station-regist" ||
          selectedItem === "/equipment-regist" ||
          selectedItem === "/material-regist" ? (
          <img src="/img/active.png" />
        ) : (
          <img src="/img/disactive.png" />
        )}
      </div>
      <div className="menu-bar">
        <ul>
          <li >
            <Link
              to="/station-regist"
              className={`link-item ${
                selectedItem === "/station-regist" ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={
                  selectedItem === "/station-regist"
                    ? "/img/station-regist-active.png"
                    : "/img/station-register-disactive.png"
                }
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                사업소 등록
              </span>
            </Link>
          </li>
          <li >
            <Link
              to="/equipment-regist"
              className={`link-item ${
                selectedItem === "/equipment-regist" ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={`${
                  selectedItem === "/equipment-regist"
                    ? "/img/equipment-regist-active.png"
                    : "/img/equipment-register-disactive.png"
                }`}
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                시설물 등록
              </span>
            </Link>
          </li>
          <li >
            <Link
              to="/material-regist"
              className={`link-item ${
                selectedItem === "/material-regist" ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={`${
                  selectedItem === "/material-regist"
                    ? "/img/material-active-icon.png"
                    : "/img/material-register-disactive.png"
                }`}
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
        ) : selectedItem === "/failure-list" ||
          selectedItem === "/work-register" ||
          selectedItem === "/work-report-register" ||
          selectedItem === "/work-list" ? (
          <img src="/img/active.png" />
        ) : (
          <img src="/img/disactive.png" />
        )}
      </div>
      <div className="menu-bar">
        <ul>
          <li >
            <Link
              to="/failure-list"
              className={`link-item ${
                selectedItem === "/failure-list" ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={`${
                  selectedItem === "/failure-list"
                    ? "/img/failure-active-icon.png"
                    : "/img/failure-list-disactive.png"
                }`}
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                고장 조회
              </span>
            </Link>
          </li>
          <li >
            <Link
              to="/work-register"
              className={`link-item ${
                selectedItem === "/work-register" ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={`${
                  selectedItem === "/work-register"
                    ? "/img/work-register-active.png"
                    : "/img/register-task-disactive.png"
                }`}
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                작업 등록
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/work-list"
              className={`link-item ${
                selectedItem.slice(0,10) === "/work-list" ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={
                  selectedItem.slice(0,10) === "/work-list"
                    ? "/img/work-list-active.png"
                    : "/img/task-list-disactive.png"
                }
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                작업 조회
              </span>
            </Link>
          </li>
          <li >
            <Link
              to="/work-report-register"
              className={`link-item ${
                selectedItem === "/work-report-register" ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={
                  selectedItem === "/work-report-register"
                    ? "/img/report-regist-active.png"
                    : "/img/task-report-disactive.png"
                }
                className="icon-menu"
              />
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
        ) : selectedItem === "/station-statistic" ||
          selectedItem === "/equipment-statistic" ? (
          <img src="/img/active.png" />
        ) : (
          <img src="/img/disactive.png" />
        )}
      </div>
      <div className="menu-bar">
        <ul>
          <li >
            <Link
              to="/station-statistic"
              className={`link-item ${
                selectedItem === "/station-statistic" ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={
                  selectedItem === "/station-statistic"
                    ? "/img/station-statisctic-active.png"
                    : "/img/station-statistic-disactive.png"
                }
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                사업소 통계
              </span>
            </Link>
          </li>
          <li >
            <Link
              to="/equipment-statistic"
              className={`link-item ${
                selectedItem === "/equipment-statistic" ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <img
                src={
                  selectedItem === "/equipment-statistic"
                    ? "/img/equipment-statistic-active.png"
                    : "/img/equipment-statistic-disactive.png"
                }
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
          <li onClick={handleClickMenu}>
            <div
              to=""
              className={`link-item ${selectedItem === 9 ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img
                src={
                  selectedItem === "/user-list" ||
                  selectedItem === "/user-accept" ||
                  selectedItem.slice(0, 10) === "/user-info"
                    ? "/img/user-setting-active.png"
                    : "/img/user-controll-disactive.png"
                }
                className="icon-menu"
              />
              <div className="user-list">
                <span
                  className={state.showSide ? "text-menu" : "text-menu hide"}
                >
                  사용자 관리
                </span>
              </div>

              <MdKeyboardArrowRight
                style={{
                  display: state.showSide ? "" : "none",
                  transform: selectedMenu ? "rotate(90deg)" : "rotate(0)",
                  marginLeft: "5px",
                }}
                size={24}
                color="#8497B0"
              />
            </div>
          </li>
          <li

            style={{ display: state.showSide ? "" : "none" }}
          >
            <Link
              to="/user-list"
              className={`link-item  link-item-user ${
                selectedMenu ? "" : "hidden"
              }   ${selectedItem === "/user-list" ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <div
                style={{
                  width: "3px",
                  display: state.showSide ? "" : "none",
                  height: "3px",
                  backgroundColor: "#b9c1da",
                }}
              ></div>
              <div className="user-list">
                <span
                  className={
                    state.showSide ? "text-menu-hiden" : "text-menu-hiden hide"
                  }
                >
                  사용자 리스트
                </span>
              </div>
            </Link>
          </li>
          <li
         
            style={{ display: state.showSide ? "" : "none" }}
          >
            <Link
              to="/user-accept"
              className={`link-item  link-item-user  ${
                selectedMenu ? "" : "hidden"
              }  ${selectedItem === "/user-accept" ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <div
                style={{
                  width: "3px",
                  display: state.showSide ? "" : "none",
                  height: "3px",
                  backgroundColor: "#b9c1da",
                }}
              ></div>
              <div className="user-list">
                <span
                  className={
                    state.showSide ? "text-menu-hiden" : "text-menu-hiden hide"
                  }
                >
                  사용자 등록
                </span>
              </div>
            </Link>
          </li>
          <li
        
            style={{ display: state.showSide ? "" : "none" }}
          >
            <Link
              to="/"
              className={`link-item  link-item-user  ${
                selectedItem.slice(0, 10) === "/user-info" ? "" : "hidden"
              }  ${
                selectedItem.slice(0, 10) === "/user-info" ? "active" : ""
              } ${state.showSide ? "" : "hide"}`}
            >
              <div
                style={{
                  width: "3px",
                  height: "3px",
                  backgroundColor: "#b9c1da",
                }}
              ></div>
              <div className="user-list">
                <span
                  className={
                    state.showSide ? "text-menu-hiden" : "text-menu-hiden hide"
                  }
                >
                  사용자 정보
                </span>
              </div>
            </Link>
          </li>
          <li onClick={() => handleCilcikMenuAccess()}>
            <div
              className={`link-item ${selectedItem === 9 ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <img
                src={
                  selectedItem === "/common-setting" ||
                  selectedItem === "/premissions-setting"
                    ? "/img/common-settings-active.png"
                    : "/img/settings-disactive.png"
                }
                className="icon-menu"
              />
              <span className={state.showSide ? "text-menu" : "text-menu hide"}>
                설정
              </span>
              <MdKeyboardArrowRight
                style={{
                  display: state.showSide ? "" : "none",
                  transform: selectedMenAccess ? "rotate(90deg)" : "rotate(0)",
                  marginLeft: "47px",
                }}
                size={24}
                color="#8497B0"
              />
            </div>
          </li>

          <li
      
            style={{ display: state.showSide ? "" : "none" }}
          >
            <Link
              to="/common-setting"
              className={`link-item  link-item-user  ${
                selectedMenAccess ? "" : "hidden"
              }  ${selectedItem === "/common-setting" ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <div
                style={{
                  width: "3px",
                  display: state.showSide ? "" : "none",
                  height: "3px",
                  backgroundColor: "#b9c1da",
                }}
              ></div>
              <div className="user-list">
                <span
                  className={
                    state.showSide ? "text-menu-hiden" : "text-menu-hiden hide"
                  }
                >
                  공통 설정
                </span>
              </div>
            </Link>
          </li>
          <li

            style={{ display: state.showSide ? "" : "none" }}
          >
            <Link
              to="/premissions-setting"
              className={`link-item  link-item-user  ${
                selectedMenAccess ? "" : "hidden"
              }  ${selectedItem === "/premissions-setting" ? "active" : ""} ${
                state.showSide ? "" : "hide"
              }`}
            >
              <div
                style={{
                  width: "3px",
                  display: state.showSide ? "" : "none",
                  height: "3px",
                  backgroundColor: "#b9c1da",
                }}
              ></div>
              <div className="user-list">
                <span
                  className={
                    state.showSide ? "text-menu-hiden" : "text-menu-hiden hide"
                  }
                >
                  권한 설정
                </span>
              </div>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default Sidebar;
