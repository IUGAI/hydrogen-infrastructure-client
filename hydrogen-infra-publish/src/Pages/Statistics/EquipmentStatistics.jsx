import "./StationStatistics.scss";
import React, { PureComponent, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import EquipmentSearch from "./EquipmentStatisticComponents/EquipmentSearch";
import EquipmentComponent from "./EquipmentStatisticComponents/EquipmentComponent";

function EquipmentStatistics() {
  const [lineGraph, setlineGraph] = useState(true);
  const [barGraph, setbarGraph] = useState(true);
  const [menuState, setMenuState] = useState("operation");
  const [switchbtn, setSwtich] = useState(false);

  const isSmallScreen = useMediaQuery({ maxWidth: 800 });


  const handleClickChange = () => {
    setSwtich(!switchbtn);
  };

  const handleItemMenuGraph = (state) => {
    setMenuState(state);
  };

  const handelClickBar = () => {
    setbarGraph(!barGraph);
  };

  const handelClickLine = () => {
    setlineGraph(!lineGraph);
  };

  return (
    <div className={`station-statistic-wrapper`}>
      <div className={`station-statistic-header `}>
        <span>시설물 통계</span>
      </div>
      <div className="station-statistic-inner">
        <EquipmentSearch
          lineGraph={lineGraph}
          barGraph={barGraph}
          handelClickLine={handelClickLine}
          handelClickBar={handelClickBar}
        />
        <EquipmentComponent 
        menuState={menuState}
        handleClickChange={handleClickChange}
        barGraph={barGraph}
        lineGraph={lineGraph}
        switchbtn={switchbtn}
        isSmallScreen={isSmallScreen}
        handleItemMenuGraph={handleItemMenuGraph}
        />
      </div>
    </div>
  );
}

export default EquipmentStatistics;
