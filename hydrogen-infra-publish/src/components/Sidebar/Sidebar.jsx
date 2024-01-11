import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import { useEffect, useState } from "react";
import { useMyContext } from "../../context/menucontext";
import { MdDashboard } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TfiDashboard } from "react-icons/tfi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { GiChemicalTank } from "react-icons/gi";
import { BsBoxes } from "react-icons/bs";
import { BsPlusCircleFill } from "react-icons/bs";
import { TbCylinderPlus } from "react-icons/tb";
import { BsCartPlusFill } from "react-icons/bs";
import { TbBellRinging2Filled } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { BsGraphUpArrow } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
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

  const { state, dispatch } = useMyContext();


  const handleShowMenu = () => {

    if (!state.showSide || state.mouseEnter ) {
      dispatch({ type: "toggle-leave" });
    }

  };





  return (
    <div className="sidebar-content" onMouseEnter={handleShowMenu} onMouseLeave={handleShowMenu}>
      <div className={state.showSide || state.mouseEnter || state.MouseEnter ? "title-menu" : "title-menu hide"}>
        {state.showSide || state.mouseEnter  || state.onMouseEnter? (
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
                state.showSide || state.mouseEnter ? "" : "hide"
              }`}
            >
              <MdDashboard
                color={selectedItem === "/" ? "#fff" : "#5E76BA"}
                size={24}
              />
              <span className={state.showSide || state.mouseEnter  ? "text-menu" : "text-menu hide"}>
                전체 현황
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className={`link-item ${
                selectedItem.slice(0, 10) === "/dashboard" ? "active" : ""
              } ${state.showSide || state.mouseEnter ? "" : "hide"}`}
            >
              <TfiDashboard
                color={selectedItem === "/dashboard" ? "#fff" : "#5E76BA"}
                size={24}
              />
              <span className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}>
                사업소 현황
              </span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className={state.showSide || state.mouseEnter ? "title-menu" : "title-menu hide"}>
        {state.showSide || state.mouseEnter ? (
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
          <li>
            <Link
              to="/stations"
              className={`link-item ${
                selectedItem.slice(0, 9) === "/stations" ||
                selectedItem.slice(0, 13) === "/station-edit"
                  ? "active"
                  : ""
              } ${state.showSide || state.mouseEnter ? "" : "hide"}`}
            >
              <TbBuildingFactory2
                color={
                  selectedItem.slice(0, 9) === "/stations" ||
                  selectedItem.slice(0, 13) === "/station-edit"
                    ? "#fff"
                    : "#5E76BA"
                }
                size={24}
              />
              <span className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}>
                사업소 정보
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/equipments"
              className={`link-item ${
                selectedItem.slice(0, 11) === "/equipments" ||
                selectedItem.slice(0, 15) === "/equipment-edit"
                  ? "active"
                  : ""
              } ${state.showSide || state.mouseEnter ? "" : "hide"}`}
            >
              <GiChemicalTank
                color={
                  selectedItem.slice(0, 11) === "/equipments" ||
                  selectedItem.slice(0, 15) === "/equipment-edit"
                    ? "#fff"
                    : "#5E76BA"
                }
                size={24}
              />
              <span className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}>
                시설물 정보
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/materials"
              className={`link-item ${
                selectedItem.slice(0, 10) === "/materials" ||
                selectedItem.slice(0, 14) === "/material-edit"
                  ? "active"
                  : ""
              } ${state.showSide || state.mouseEnter ? "" : "hide"}`}
            >
              <BsBoxes
                color={
                  selectedItem.slice(0, 10) === "/materials" ||
                  selectedItem.slice(0, 14) === "/material-edit"
                    ? "#fff"
                    : "#5E76BA"
                }
                size={24}
              />
              <span className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}>
                자재 정보
              </span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className={state.showSide || state.mouseEnter ? "title-menu" : "title-menu hide"}>
        {state.showSide || state.mouseEnter ? (
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
          <li>
            <Link
              to="/station-regist"
              className={`link-item ${
                selectedItem === "/station-regist" ? "active" : ""
              } ${state.showSide || state.mouseEnter ? "" : "hide"}`}
            >
              <BsPlusCircleFill
                color={selectedItem === "/station-regist" ? "#fff" : "#5E76BA"}
                size={24}
              />

              <span className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}>
                사업소 등록
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/equipment-regist"
              className={`link-item ${
                selectedItem === "/equipment-regist" ? "active" : ""
              } ${state.showSide || state.mouseEnter ? "" : "hide"}`}
            >
              <TbCylinderPlus
                color={
                  selectedItem === "/equipment-regist" ? "#fff" : "#5E76BA"
                }
                size={24}
              />
              <span className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}>
                시설물 등록
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/material-regist"
              className={`link-item ${
                selectedItem === "/material-regist" ? "active" : ""
              } ${state.showSide || state.mouseEnter ? "" : "hide"}`}
            >
              <BsCartPlusFill
                color={selectedItem === "/material-regist" ? "#fff" : "#5E76BA"}
                size={24}
              />
              <span className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}>
                자재 등록
              </span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className={state.showSide || state.mouseEnter ? "title-menu" : "title-menu hide"}>
        {state.showSide || state.mouseEnter ? (
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
          <li>
            <Link
              to="/failure-list"
              className={`link-item ${
                selectedItem === "/failure-list" ? "active" : ""
              } ${state.showSide || state.mouseEnter ? "" : "hide"}`}
            >
              <TbBellRinging2Filled
                color={selectedItem === "/failure-list" ? "#fff" : "#5E76BA"}
                size={24}
              />
              <span className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}>
                고장 조회
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/work-register"
              className={`link-item ${
                selectedItem === "/work-register" ||
                selectedItem.slice(0, 14) === "/work-register" ||
                selectedItem.slice(0, 10) === "/work-edit"
                  ? "active"
                  : ""
              } ${state.showSide || state.mouseEnter ? "" : "hide"}`}
            >
              <GrUserWorker
                color={
                  selectedItem === "/work-register" ||
                  selectedItem.slice(0, 14) === "/work-register" ||
                  selectedItem.slice(0, 10) === "/work-edit"
                    ? "#fff"
                    : "#5E76BA"
                }
                size={24}
              />
              <span className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}>
                {selectedItem.slice(0, 10) === "/work-edit"
                  ? "작업 수정 "
                  : "작업 등록"}
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/work-list"
              className={`link-item ${
                selectedItem.slice(0, 10) === "/work-list" ? "active" : ""
              } ${state.showSide || state.mouseEnter ? "" : "hide"}`}
            >
              <FaTasks
                color={
                  selectedItem.slice(0, 10) === "/work-list"
                    ? "#fff"
                    : "#5E76BA"
                }
                size={23}
              />
              <span className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}>
                작업 조회
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/work-report-register"
              className={`link-item ${
                selectedItem === "/work-report-register" ||
                selectedItem.slice(0, 17) === "/work-report-edit" ||
                selectedItem.slice(0, 21) === "/work-report-register"
                  ? "active"
                  : ""
              } ${state.showSide || state.mouseEnter ? "" : "hide"}`}
            >
              <TfiWrite
                color={
                  selectedItem === "/work-report-register" ||
                  selectedItem.slice(0, 17) === "/work-report-edit" ||
                  selectedItem.slice(0, 21) === "/work-report-register"
                    ? "#fff"
                    : "#5E76BA"
                }
                size={23}
              />
              <span className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}>
                {selectedItem.slice(0, 17) === "/work-report-edit"
                  ? "결과 수정"
                  : "결과 등록"}
              </span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className={state.showSide || state.mouseEnter ? "title-menu" : "title-menu hide"}>
        {state.showSide || state.mouseEnter ? (
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
          <li>
            <Link
              to="/station-statistic"
              className={`link-item ${
                selectedItem === "/station-statistic" ? "active" : ""
              } ${state.showSide || state.mouseEnter ? "" : "hide"}`}
            >
              <BsGraphUpArrow
                color={
                  selectedItem === "/station-statistic" ? "#fff" : "#5E76BA"
                }
                size={23}
              />
              <span className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}>
                사업소 통계
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/equipment-statistic"
              className={`link-item ${
                selectedItem === "/equipment-statistic" ? "active" : ""
              } ${state.showSide || state.mouseEnter ? "" : "hide"}`}
            >
              <VscGraph
                color={
                  selectedItem === "/equipment-statistic" ? "#fff" : "#5E76BA"
                }
                size={23}
              />
              <span className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}>
                시설물 통계
              </span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
      <div className={state.showSide || state.mouseEnter ? "title-menu" : "title-menu hide"}>
        {state.showSide || state.mouseEnter ? (
          <span>시스템 설정 </span>
        ) : selectedItem === "/user-list" ||
                       selectedItem === "/common-setting" ||
                  selectedItem === "/premissions-setting" ||
        selectedItem === "/user-accept" ? (
        <img src="/img/active.png" />
      ) :(
          <img src="/img/disactive.png" />
        )}
      </div>
      <div className="menu-bar">
        <ul>
          <li onClick={handleClickMenu}>
            <div
              to=""
              className={`link-item ${selectedItem === 9 ? "active" : ""} ${
                state.showSide || state.mouseEnter ? "" : "hide"
              }`}
            >
              <FaUser
                color={
                  selectedItem === "/user-list" ||
                  selectedItem === "/user-accept" ||
                  selectedItem.slice(0, 10) === "/user-info"
                    ? "#fff"
                    : "#5E76BA"
                }
                size={23}
              />
              <div className="user-list">
                <span
                  className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}
                >
                  사용자 관리
                </span>
              </div>

              <MdKeyboardArrowRight
                style={{
                  display: state.showSide || state.mouseEnter ? "" : "none",
                  transform: selectedMenu ? "rotate(90deg)" : "rotate(0)",
                  marginLeft: "5px",
                }}
                size={24}
                color="#8497B0"
              />
            </div>
          </li>
          <li style={{ display: state.showSide || state.mouseEnter ? "" : "none" }}>
            <Link
              to="/user-list"
              className={`link-item  link-item-user ${
                selectedMenu ? "" : "hidden"
              }   ${selectedItem === "/user-list" ? "active" : ""} ${
                state.showSide || state.mouseEnter ? "" : "hide"
              }`}
            >
              <div
                style={{
                  width: "3px",
                  display: state.showSide || state.mouseEnter ? "" : "none",
                  height: "3px",
                  backgroundColor: "#b9c1da",
                }}
              ></div>
              <div className="user-list">
                <span
                  className={
                    state.showSide || state.mouseEnter ? "text-menu-hiden" : "text-menu-hiden hide"
                  }
                >
                  사용자 리스트
                </span>
              </div>
            </Link>
          </li>
          <li style={{ display: state.showSide || state.mouseEnter ? "" : "none" }}>
            <Link
              to="/user-accept"
              className={`link-item  link-item-user  ${
                selectedMenu ? "" : "hidden"
              }  ${selectedItem === "/user-accept" ? "active" : ""} ${
                state.showSide || state.mouseEnter ? "" : "hide"
              }`}
            >
              <div
                style={{
                  width: "3px",
                  display: state.showSide || state.mouseEnter ? "" : "none",
                  height: "3px",
                  backgroundColor: "#b9c1da",
                }}
              ></div>
              <div className="user-list">
                <span
                  className={
                    state.showSide || state.mouseEnter ? "text-menu-hiden" : "text-menu-hiden hide"
                  }
                >
                  사용자 등록
                </span>
              </div>
            </Link>
          </li>
          <li style={{ display: state.showSide || state.mouseEnter ? "" : "none" }}>
            <Link
              to="/"
              className={`link-item  link-item-user  ${
                selectedItem.slice(0, 10) === "/user-info" ? "" : "hidden"
              }  ${
                selectedItem.slice(0, 10) === "/user-info" ? "active" : ""
              } ${state.showSide || state.mouseEnter ? "" : "hide"}`}
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
                    state.showSide || state.mouseEnter ? "text-menu-hiden" : "text-menu-hiden hide"
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
                state.showSide || state.mouseEnter ? "" : "hide"
              }`}
            >
              <IoMdSettings
                color={
                  selectedItem === "/common-setting" ||
                  selectedItem === "/premissions-setting"
                    ? "#fff"
                    : "#5E76BA"
                }
                size={23}
              />
              <span className={state.showSide || state.mouseEnter ? "text-menu" : "text-menu hide"}>
                설정
              </span>
              <MdKeyboardArrowRight
                style={{
                  display: state.showSide || state.mouseEnter ? "" : "none",
                  transform: selectedMenAccess ? "rotate(90deg)" : "rotate(0)",
                  marginLeft: "47px",
                }}
                size={24}
                color="#8497B0"
              />
            </div>
          </li>

          <li style={{ display: state.showSide || state.mouseEnter ? "" : "none" }}>
            <Link
              to="/common-setting"
              className={`link-item  link-item-user  ${
                selectedMenAccess ? "" : "hidden"
              }  ${selectedItem === "/common-setting" ? "active" : ""} ${
                state.showSide || state.mouseEnter ? "" : "hide"
              }`}
            >
              <div
                style={{
                  width: "3px",
                  display: state.showSide || state.mouseEnter ? "" : "none",
                  height: "3px",
                  backgroundColor: "#b9c1da",
                }}
              ></div>
              <div className="user-list">
                <span
                  className={
                    state.showSide || state.mouseEnter ? "text-menu-hiden" : "text-menu-hiden hide"
                  }
                >
                  공통 설정
                </span>
              </div>
            </Link>
          </li>
          <li style={{ display: state.showSide || state.mouseEnter ? "" : "none" }}>
            <Link
              to="/premissions-setting"
              className={`link-item  link-item-user  ${
                selectedMenAccess ? "" : "hidden"
              }  ${selectedItem === "/premissions-setting" ? "active" : ""} ${
                state.showSide || state.mouseEnter ? "" : "hide"
              }`}
            >
              <div
                style={{
                  width: "3px",
                  display: state.showSide || state.mouseEnter ? "" : "none",
                  height: "3px",
                  backgroundColor: "#b9c1da",
                }}
              ></div>
              <div className="user-list">
                <span
                  className={
                    state.showSide || state.mouseEnter ? "text-menu-hiden" : "text-menu-hiden hide"
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
