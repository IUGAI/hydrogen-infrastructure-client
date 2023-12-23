import "./StationList.scss";

import "react-datepicker/dist/react-datepicker.css";
import SearchContainer from "../../components/StationsInfo/SearchContainer/SearchContainer";
import { IoMdSearch } from "react-icons/io";
import { DiMootoolsBadge } from "react-icons/di";
import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SiMicrosoftexcel } from "react-icons/si";
import StationMainList from "../../components/StationsInfo/StationMainList/StationMainList";

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
