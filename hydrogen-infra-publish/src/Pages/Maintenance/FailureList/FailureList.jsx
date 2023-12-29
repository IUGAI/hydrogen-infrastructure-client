

import "react-datepicker/dist/react-datepicker.css";
import StationMainList from "../../../components/StationsInfo/StationMainList/StationMainList";
import FailureSearch from "../../../components/FailureList/FailureSearch";
import FailureMainList from "../../../components/FailureList/FailureMainList";


function FailureList() {
    return (
        <div className="stations-dashboard">
        <span>고장 조회</span>
        <FailureSearch />
        <FailureMainList/>
      </div>
    );
    
}

export default FailureList
