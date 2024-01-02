import { SiMicrosoftexcel } from "react-icons/si";
import WorkReportRegisterComponent from "../../../components/WorkReportRegister/WorkReportRegisterComponent";

function WorkReportRegister() {
    return (
        <div className="station-regist-content-main">
        <div className={`station-regist-header `}>
          <span>결과 등록</span>
          <SiMicrosoftexcel size={24} color="#576dad" />
        </div>
        <div className="regist-data">
          <WorkReportRegisterComponent/>
        </div>
      </div>
    )
}

export default WorkReportRegister
