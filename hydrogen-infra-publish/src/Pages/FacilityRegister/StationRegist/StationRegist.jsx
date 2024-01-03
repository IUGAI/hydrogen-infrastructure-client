import { SiMicrosoftexcel } from "react-icons/si";
// import { useForm, SubmitHandler } from "react-hook-form"
import { RiPhoneFill } from "react-icons/ri";
import "./StationRegist.scss";

import StationRegister from "../../../components/StationRegister/StationRegister";
import BuisnessRegister from "../../../components/StationRegister/BuisnessRegister";
import { useState } from "react";

function StationRegist() {
  const [show, setshow] = useState(true);
  return (
    <div
      className={`station-regist-content-main`}
    >
      <div className={`station-regist-header ${show ? "hide" : ""} `}>
        <span>사업소 등록</span>
        <SiMicrosoftexcel size={24} color="#576dad" />
      </div>
      <div className="regist-data">
      <div className="station-regist-content">
        <StationRegister show={show} setshow={setshow} />
      </div>
      <div className={`station-regist-content ${show ? "hide" : ""}`}>
        <BuisnessRegister show={show} />
      </div>
      </div>

    </div>
  );
}

export default StationRegist;
