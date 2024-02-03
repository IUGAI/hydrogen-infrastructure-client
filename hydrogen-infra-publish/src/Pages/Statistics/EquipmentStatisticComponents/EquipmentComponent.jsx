import { useMediaQuery } from "react-responsive";
import Soundness from "../../../components/StationStatistic/SoundNess.jsx";
import StationFailureBarStatistic from "../../../components/StationStatistic/StationFailureBarStatistic.jsx";
import StationFailureStatistic from "../../../components/StationStatistic/StationFailureStatistic.jsx";
import StationStatisticProduction from "../../../components/StationStatistic/StationStatisticProduction.jsx";
import SlideBar from "../SlideBar.jsx";
import {
    graphItems,
    graphItemsState,
    data,
    data_production,
    data_soundness,
    data_failure,
    data_work,
  } from "../equipmentData.js";
import EquipmentStatisticComponent from "./EquipmentStatisticAside.jsx";

function EquipmentComponent({handleItemMenuGraph ,handleClickChange, switchbtn, menuState, isSmallScreen, barGraph, lineGraph}) {
    
  const isSmallScreenPc = useMediaQuery({maxWidth: 1536})  

  const ticksNumbers = [];
  for (let i = 0; i <= 160; i++) {

    if (isSmallScreenPc){
      if (i % 20 === 0) {
        ticksNumbers.push(i);
      }
    } else {
      if (i % 10 === 0) {
        ticksNumbers.push(i);
      }
    }

  }

  const ticksNumbersOperation = [];
  for (let i = 0; i <= 100; i++) {
    if (isSmallScreen) {
        if (i % 20 === 0) { 
            ticksNumbersOperation.push(i);
       }
    } else {
        if (i % 10 === 0) { 
            ticksNumbersOperation.push(i);
       }
    } 
  }



  const ticksNumbersFailure = [];
  for (let i = 0; i <= 12; i++) {
    if (i % 2 === 0) {
      ticksNumbersFailure.push(i);
    }
  }
    return (
        <div className="station-statistic-content">
          <EquipmentStatisticComponent
            handleItemMenuGraph={handleItemMenuGraph}
            menuState={menuState}
            isSmallScreen={isSmallScreen}
          />
          {menuState === "operation" ? (
            <StationStatisticProduction
              data={data}
              barGraph={barGraph}
              unit={"kg"}
              ticksNumbers={ticksNumbers}
              lineGraph={lineGraph}
              menuState={menuState}
            />
          ) : menuState === "operationRate" ? (
            <StationStatisticProduction
              data={data_production}
              ticksNumbers={ticksNumbersOperation}
              barGraph={barGraph}
              unit={"%"}
              lineGraph={lineGraph}
              menuState={menuState}
            />
          ) : menuState === "soundness" ? (
            <Soundness
              data={data_soundness}
              barGraph={barGraph}
              unit={"%"}
              ticksNumbers={ticksNumbersOperation}
              lineGraph={lineGraph}
              menuState={menuState}
            />
          ) : menuState === "failure" ? (
            <div className="staion-statistic-graph-failure">
              {isSmallScreen ? (
                <SlideBar
                  switchbtn={switchbtn}
                  handleClickChange={handleClickChange}
                />
              ) : (
                ""
              )}

              {isSmallScreen ? (
                switchbtn ? (
                  <StationFailureBarStatistic
                    graphItems={graphItems}
                    graphItemsState={graphItemsState}
                  />
                ) : (
                  <StationFailureStatistic
                    data={data_failure}
                    barGraph={barGraph}
                    graphName={"고장"}
                    unit={"건"}
                    ticksNumbers={ticksNumbersFailure}
                    lineGraph={lineGraph}
                    menuState={menuState}
                  />
                )
              ) : (
                <>
                  <StationFailureBarStatistic
                    graphItems={graphItems}
                    graphItemsState={graphItemsState}
                  />
                  <StationFailureStatistic
                    data={data_failure}
                    barGraph={barGraph}
                    graphName={"고장"}
                    unit={"건"}
                    ticksNumbers={ticksNumbersFailure}
                    lineGraph={lineGraph}
                    menuState={menuState}
                  />
                </>
              )}
            </div>
          ) : menuState === "work" ? (
            <div className="staion-statistic-graph-failure">
              {isSmallScreen ? (
                <SlideBar
                  switchbtn={switchbtn}
                  handleClickChange={handleClickChange}
                />
              ) : (
                ""
              )}

              {isSmallScreen ? (
                switchbtn ? (
                  <StationFailureBarStatistic
                    graphItems={graphItems}
                    graphItemsState={graphItemsState}
                  />
                ) : (
                  <StationFailureStatistic
                    data={data_failure}
                    barGraph={barGraph}
                    graphName={"고장"}
                    unit={"건"}
                    ticksNumbers={ticksNumbersFailure}
                    lineGraph={lineGraph}
                    menuState={menuState}
                  />
                )
              ) : (
                <>
                  <StationFailureBarStatistic
                    graphItems={graphItems}
                    graphItemsState={graphItemsState}
                  />
                  <StationFailureStatistic
                    data={data_failure}
                    barGraph={barGraph}
                    graphName={"고장"}
                    unit={"건"}
                    ticksNumbers={ticksNumbersFailure}
                    lineGraph={lineGraph}
                    menuState={menuState}
                  />
                </>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
    )
}

export default EquipmentComponent
