import "./EquipmentState.scss";
import { TfiMenuAlt } from "react-icons/tfi";

function EquipmentState() {
  return (
    <div className="equipments-state-content">
      <img src="./img/marker.png" className="" />
      <div className="top">
        <span className="title-text">시설물 상태</span>
        <TfiMenuAlt size={28} color="#00B0F0" />
      </div>
      <div className="bottom">
        <div className="flex-container">
          <div className="item"> 1</div>
          <div className="item"> 2</div>
          <div className="item"> 3</div>
          <div className="item"> 4</div>
          <div className="item"> 5</div>
          <div className="item"> 6</div>
          <div className="item"> 7</div>
        </div>
      </div>
    </div>
  );
}

export default EquipmentState;
