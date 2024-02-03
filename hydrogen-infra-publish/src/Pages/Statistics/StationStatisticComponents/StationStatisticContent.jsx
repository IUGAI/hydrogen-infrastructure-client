import StationStatisticProduction from "../../../components/StationStatistic/StationStatisticProduction";
import StationStatisticAside from "./StationStatisticAside";
import { Switch } from "@mui/material";
import {
  graphItems,
  graphItemsState,
  data,
  data_production,
  data_soundness,
  data_failure,
} from "../graphData.js";
import SlideBar from "../SlideBar.jsx";
import StationFailureBarStatistic from "../../../components/StationStatistic/StationFailureBarStatistic.jsx";
import StationFailureStatistic from "../../../components/StationStatistic/StationFailureStatistic.jsx";
import Soundness from "../../../components/StationStatistic/SoundNess.jsx";
function StationStatisticContent({
  menuState,
  lineGraph,
  handleClickChange,
  handleItemMenuGraph,
  isSmallScreen,
  switchbtn,
  barGraph,
}) {
  const ticksNumbers = [];
  for (let i = 0; i <= 300; i++) {
    if (i % 25 === 0) {
      ticksNumbers.push(i);
    }
  }
  const ticksNumbersOperation = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 10 === 0) {
      ticksNumbersOperation.push(i);
    }
  }

  const ticksNumbersFailure = [];
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      ticksNumbersFailure.push(i);
    }
  }

  return (
    <div className="station-statistic-content">
      <StationStatisticAside
        menuState={menuState}
        handleItemMenuGraph={handleItemMenuGraph}
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
            <div className="slider-bar">
              <span className="switch-values">막대</span>
              <Switch
                value={switchbtn}
                defaultChecked
                onChange={handleClickChange}
              />
              <span className="switch-values">바</span>
            </div>
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
  );
}

export default StationStatisticContent;
