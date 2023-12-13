import Production from "../../components/MainDashboard/Production/Production";
import AttentionState from "../../components/MainDashboard/AttentionState/AttentionState";
import CurrentSituation from "../../components/MainDashboard/CurrentSituation/CurrentSituation";
import StationList from "../../components/MainDashboard/StationList/StationList";
import AlarmList from "../../components/MainDashboard/AlarmList/AlarmList";
import { useMediaQuery } from "react-responsive";

import "./MainDashboard.scss";
import Map from "../../components/MainDashboard/Map/Map";

function MainDashboard() {
  const isLargeScreen = useMediaQuery({ maxWidth: 1312 });
  return (
    <div className="mainDashboard">
      <div className="item item-1">
        <Production />
      </div>
      <div className="item item-2">

        <Map />
      </div>
      <div className="item item-7">
        <AttentionState/>
      </div>
      <div className="item item-3">
        <CurrentSituation />
      </div>
      <div className="item item-5">
        <StationList />
      </div>
      <div className="item item-6">
        <AlarmList />
      </div>
    </div>
  );
}

export default MainDashboard;
