
import { SiMicrosoftexcel } from "react-icons/si";
import EquipmentRegister from "../../../components/EquipmentRegister/EquipmentRegister";
import EquipmentEditComponent from "../../../components/EquipmentRegister/EquipmentEditComponent";

function EquipmentEdit() {
  return (
    <div className="station-regist-content-main">
      <div className={`station-regist-header `}>
        <span>시설물 수정</span>
        <SiMicrosoftexcel size={24} color="#576dad" />
      </div>
      <div className="regist-data">
        <EquipmentEditComponent  />
      </div>
    </div>
  );
}

export default EquipmentEdit;
