import "./EquipmentState.scss";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { BsArrows } from "react-icons/bs";
import EquipmentStateItem from "./EquipmentStateItem/EquipmentStateItem";

function EquipmentState() {
  const equipmenst = [
    {
      id: 10001,
      type: 1,
      failure: false,
      max_capacity: 350,
      procentage: 73.5,
      soundness: 100,
      temperature: 730,
      equipment_name: "생산 1호기",
      current_weight: 220,
    },
    {
      id: 10002,
      type: 1,
      failure: true,
      max_capacity: 300,
      procentage: 58.7,
      soundness: 10,
      temperature: 755,
      equipment_name: "생산 2호기",
      current_weight: 176,
    },
    {
      id: 10003,
      type: 2,
      failure: false,
      max_capacity: 50,
      procentage: 91.7,
      soundness: 87,
      temperature: -253,
      equipment_name: "저장 1호기",
      current_weight: 486,
    },
    {
      id: 10004,
      type: 3,
      failure: false,
      max_capacity: 900,
      procentage: 34.5,
      soundness: 74,
      temperature: -253,
      equipment_name: "충전 1호기",
      current_weight: 528,
    },
    {
      id: 100005,
      type: 1,
      failure: true,
      max_capacity: 350,
      procentage: 73.5,
      soundness: 1,
      temperature: 730,
      equipment_name: "생산 1호기",
      current_weight: 220,
    },
    // {
    //   id: 100006,
    //   type: 3,
    //   failure: false,
    //   max_capacity: 900,
    //   procentage: 34.5,
    //   soundness: 74,
    //   temperature: -253,
    //   equipment_name: "충전 1호기",
    //   current_weight: 528,
    // },
    // {
    //   id: 100007,
    //   type: 1,
    //   failure: true,
    //   max_capacity: 350,
    //   procentage: 73.5,
    //   soundness: 1,
    //   temperature: 730,
    //   equipment_name: "생산 1호기",
    //   current_weight: 220,
    // },
  ];

  const [selectedItemId, setSelectedItemId] = useState('default');
 const [defaultvalue, setdefaultvalue] = useState('');

  const handleItemClick = (clickedItemId) => {
    setSelectedItemId(clickedItemId); // Установка ID выбранного элемента
    setdefaultvalue('reduce');
  };

  const reset = () => {
     setSelectedItemId('default');
     setdefaultvalue('');
  }

  return (
    <div className="equipments-state-content">
      <img src="./img/marker.png" className="" />
      <div className="top">
        <span className="title-text">시설물 상태</span>
        <div className="icons-left">
          <BsArrows size={28} color="#00B0F0"  onClick={reset}/>
          <FiPlus size={28} color="#00B0F0" />
        </div>
      </div>
      <div className="bottom">
        <div className="flex-container">
          {equipmenst.map((item, index) => (
            <div className="item" key={index}>
              <EquipmentStateItem item={item}
              onClick={handleItemClick}
              isSelected={selectedItemId === item.id ? 'clicked'  : defaultvalue === 'reduce' ?  "reduce" : 'default'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EquipmentState;
