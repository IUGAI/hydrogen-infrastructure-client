import { SiMicrosoftexcel } from "react-icons/si";
import WorkRegister from "../../../components/WorkRegister/WorkRegister";

function WorkRegist() {
    return (
        <div className="station-regist-content-main">
        <div className={`station-regist-header `}>
          <span>작업 등록</span>
          <SiMicrosoftexcel size={24} style={{cursor: "pointer"}} color="#576dad" />
        </div>
        <div className="regist-data">
          <WorkRegister/>
        </div>
      </div>
    )
}

export default WorkRegist
