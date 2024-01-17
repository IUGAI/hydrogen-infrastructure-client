
import React, { PureComponent, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import StationStatisticSearch from "./StationStatisticComponents/StationStatisticSearch.jsx";
import StationStatisticContent from "./StationStatisticComponents/StationStatisticContent.jsx";

function StationStatistics() {
  const [lineGraph, setlineGraph] = useState(true);
  const [barGraph, setbarGraph] = useState(true);
  const [switchbtn, setSwtich] = useState(false);
  const [menuState, setMenuState] = useState("operation");

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
        <span>사업소 통계</span>
      </div>
      <div className="station-statistic-inner">
        <StationStatisticSearch
          lineGraph={lineGraph}
          barGraph={barGraph}
          handelClickLine={handelClickLine}
          handelClickBar={handelClickBar}
        />
        <StationStatisticContent
          menuState={menuState}
          switchbtn={switchbtn}
          handleClickChange={handleClickChange}
          barGraph={barGraph}
          lineGraph={lineGraph}
          isSmallScreen={isSmallScreen}
          handleItemMenuGraph={handleItemMenuGraph}
        />
      </div>
    </div>
  );
}

export default StationStatistics;
