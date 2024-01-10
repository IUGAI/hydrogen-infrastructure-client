
import { SiMicrosoftexcel } from "react-icons/si";
import EquipmentRegister from "../../../components/EquipmentRegister/EquipmentRegister";
import MaterialRegister from "../../../components/MaterialRegister/MaterialRegister";
import MaterialEditComponent from "../../../components/MaterialRegister/MaterialEditComponent";


function MaterialEdit() {
    return (
        <div className={`station-regist-content-main`}>
        <div className={`station-regist-header `}>
          <span>자재 수정</span>
        </div>
        <div className="regist-data">
          <MaterialEditComponent  />
        </div>
      </div>
    )
}

export default MaterialEdit
