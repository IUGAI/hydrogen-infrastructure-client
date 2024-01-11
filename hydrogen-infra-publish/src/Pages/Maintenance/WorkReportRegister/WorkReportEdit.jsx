import { SiMicrosoftexcel } from "react-icons/si";
import WorkReportRegisterComponent from "../../../components/WorkReportRegister/WorkReportRegisterComponent";
import WorkReportEditComponent from "../../../components/WorkReportRegister/WorkReportEditComponent";

function WorkReportEdit() {
    return (
        <div className="station-regist-content-main">
        <div className={`station-regist-header `}>
          <span>결과 수정</span>
          <SiMicrosoftexcel size={24} color="#576dad" />
        </div>
        <div className="regist-data">
          <WorkReportEditComponent/>
        </div>
      </div>
    )
}

export default WorkReportEdit
