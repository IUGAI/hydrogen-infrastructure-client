import "./StationList.scss";

import "react-datepicker/dist/react-datepicker.css";
import SearchContainer from "../../../components/StationsInfo/SearchContainer/SearchContainer";
import StationMainList from "../../../components/StationsInfo/StationMainList/StationMainList";

function Stations() {
  return (
    <div className="stations-dashboard">
      <span>사업소 정보</span>
      <SearchContainer />
      <StationMainList/>
    </div>
  );
}

export default Stations;
