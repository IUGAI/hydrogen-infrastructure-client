
import { SiMicrosoftexcel } from "react-icons/si";
import EquipmentRegister from "../../../components/EquipmentRegister/EquipmentRegister";
import MaterialRegister from "../../../components/MaterialRegister/MaterialRegister";


function MaterialRegist() {
    return (
        <div className={`station-regist-content-main`}>
        <div className={`station-regist-header `}>
          <span>자재 등록</span>
          <SiMicrosoftexcel size={24} color="#576dad" />
        </div>
        <div className="regist-data">
          <MaterialRegister  />
        </div>
      </div>
    )
}

export default MaterialRegist
