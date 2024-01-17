import { SiMicrosoftexcel } from "react-icons/si";
import "./StationRegist.scss";
import { useMediaQuery } from "react-responsive";
import StationRegister from "../../../components/StationRegister/StationRegister";
import BuisnessRegister from "../../../components/StationRegister/BuisnessRegister";
import { useRef, useState } from "react";

function StationRegist() {
  const [show, setshow] = useState(true);
  const buinessRef = useRef(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 1200 });
  return (
    <div
      className={`station-regist-content-main`}
    >
      <div className={`station-regist-header ${!isSmallScreen ? "hide" : ""} `}>
        <span>사업소 등록</span>
        <SiMicrosoftexcel size={24} color="#576dad" />
      </div>
      <div className="regist-data">
      <div className="station-regist-content">
        <StationRegister show={show} setshow={setshow} />
      </div>
      <div className={`station-regist-content ${show ? "hide" : ""}`}>
        <BuisnessRegister show={show} ref={buinessRef} />
      </div>
      </div>

    </div>
  );
}

export default StationRegist;
