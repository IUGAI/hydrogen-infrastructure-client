
import { SiMicrosoftexcel } from "react-icons/si";
import MaterialRegister from "../../../components/MaterialRegister/MaterialRegister";
import { TfiMenuAlt } from "react-icons/tfi";
import WorkDetailComponent from "../../../components/WorkList/WorkDetailComponent";
function WorkListDetail() {
    return (
        <div className={`station-regist-content-main`}>
        <div className={`station-regist-header `}>
          <span>작업 조회</span>
          <div className="icon-circle-background">
            <TfiMenuAlt
              color="#8da7d9"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="regist-data">
          <WorkDetailComponent  />
        </div>
      </div>
    )
}

export default WorkListDetail
