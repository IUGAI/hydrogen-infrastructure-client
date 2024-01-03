
import { SiMicrosoftexcel } from "react-icons/si";
import EquipmentRegister from "../../../components/EquipmentRegister/EquipmentRegister";

function EquipmentRegist() {
  return (
    <div className="station-regist-content-main">
      <div className={`station-regist-header `}>
        <span>시설물 등록</span>
        <SiMicrosoftexcel size={24} color="#576dad" />
      </div>
      <div className="regist-data">
        <EquipmentRegister  />
      </div>
    </div>
  );
}

export default EquipmentRegist;
