import Production from "../../../components/MainDashboard/Production/Production";
import AttentionState from "../../../components/MainDashboard/AttentionState/AttentionState";
import CurrentSituation from "../../../components/MainDashboard/CurrentSituation/CurrentSituation";
import StationList from "../../../components/MainDashboard/StationList/StationList";
import AlarmList from "../../../components/MainDashboard/AlarmList/AlarmList";
import { useMediaQuery } from "react-responsive";
import {  useJsApiLoader } from "@react-google-maps/api";
import "./MainDashboard.scss";
import Map from "../../../components/MainDashboard/Map/Map";
const apikey = "AIzaSyChEBMFjqOmWaZk3pixSK7GU0dhEUi_uI0";


function MainDashboard() {
  const isLargeScreen = useMediaQuery({ maxWidth: 1312 });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apikey
  })
  return (
    <div className="mainDashboard">
      <div className="item item-1">
        <Production />
      </div>
      <div className="item item-2">
      {  isLoaded ? <Map/> : <h2>Loading</h2>
  
      }
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
