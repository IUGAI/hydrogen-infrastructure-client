import { SiMicrosoftexcel } from "react-icons/si";

import "./StationRegist.scss";

import StationRegister from "../../../components/StationRegister/StationRegister";
import BuisnessRegister from "../../../components/StationRegister/BuisnessRegister";
import { useState } from "react";
import StationEditComponent from "../../../components/StationRegister/StationEdit";

function StationEdit() {
  const [show, setshow] = useState(true);
  return (
    <div
      className={`station-regist-content-main`}
    >
      <div className={`station-regist-header ${show ? "hide" : ""} `}>
        <span>사업소 정보</span>
      </div>
      <div className="regist-data">
      <div className="station-regist-content">
        <StationEditComponent show={show} setshow={setshow} />
      </div>
      {/* <div className={`station-regist-content`}> */}
        {/* <BuisnessRegister show={show} /> */}
      {/* </div> */}
      </div>

    </div>
  );
}

export default StationEdit;
