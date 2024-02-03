import { BsFillLightningFill } from "react-icons/bs";
import { BiSolidFlask } from "react-icons/bi";
import { BsConeStriped } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { SiLeaflet } from "react-icons/si";


function StationStatisticAside({menuState, isSmallScreen, handleItemMenuGraph}) {
    return (
        <div className="station-statistic-aside">
        <div
          className={`aside-item ${
            menuState === "operation" ? "active" : ""
          }`}
          onClick={() => handleItemMenuGraph("operation")}
        >
          {isSmallScreen ? "" : <span>가동</span>}
          <BsFillLightningFill
            color={`${menuState === "operation" ? "#fff" : "#8faadc"}`}
            size={20}
          />
        </div>
        <div
          className={`aside-item ${
            menuState === "operationRate" ? "active" : ""
          }`}
          onClick={() => handleItemMenuGraph("operationRate")}
        >
          {isSmallScreen ? "" : <span>가동률</span>}

          <BiSolidFlask
            color={`${menuState === "operationRate" ? "#fff" : "#8faadc"}`}
            size={20}
          />
        </div>
        <div
          className={`aside-item ${
            menuState === "failure" ? "active" : ""
          }`}
          onClick={() => handleItemMenuGraph("failure")}
        >
          {isSmallScreen ? "" : <span>고장</span>}

          <BsConeStriped
            color={`${menuState === "failure" ? "#fff" : "#8faadc"}`}
            size={20}
          />
        </div>
        <div
          className={`aside-item ${menuState === "work" ? "active" : ""}`}
          onClick={() => handleItemMenuGraph("work")}
        >
          {isSmallScreen ? "" : <span>작업</span>}
          <BsTools
            color={`${menuState === "work" ? "#fff" : "#8faadc"}`}
            size={20}
          />
        </div>
        <div
          className={`aside-item ${
            menuState === "soundness" ? "active" : ""
          }`}
          onClick={() => handleItemMenuGraph("soundness")}
        >
          {isSmallScreen ? "" : <span>건전도</span>}
          <SiLeaflet
            color={`${menuState === "soundness" ? "#fff" : "#8faadc"}`}
            size={20}
          />
        </div>
      </div>
    )
}

export default StationStatisticAside
