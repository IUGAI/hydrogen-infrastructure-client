import { SiMicrosoftexcel } from "react-icons/si";
import WorkRegister from "../../../components/WorkRegister/WorkRegister";
import WorkEditComponent from "../../../components/WorkRegister/WorkEditComponent";

function WorkEdit() {
    return (
        <div className="station-regist-content-main">
        <div className={`station-regist-header `}>
          <span>작업 수정</span>
        </div>
        <div className="regist-data">
          <WorkEditComponent/>
        </div>
      </div>
    )
}

export default WorkEdit
