import "./CurrentSituation.scss";
import CurentSitutationValue from "./CurentSituationValues/CurentSitutationValue";
import { stations, buisness } from "../../../data/Mapdata";
import ButtonOutline from "../../Buttons/ButtonOutline";

const total_equipments = stations.reduce((total, element) => {
  return total + element.equipments.length;
}, 0);

// const total_run_equipments = stations.map(item => 
//   item.equipments.filter(equipment => equipment.type === 1).length
// )

// const total_run = total_run_equipments.reduce((total, element) => {
//    return total + element
// }, 0)

const total_run = stations
  .map(item => item.equipments.filter(equipment => equipment.type === 1).length)
  .reduce((total, element) => total + element, 0);



const items = [
  {
    id: 1,
    name: "사업자",
    quantity: buisness.length,
  },
  {
    id: 2,
    name: "사업소",
    quantity: stations.length,
  },
  {
    id: 3,
    name: "전체 시설물",
    quantity: total_equipments,
  },
  {
    id: 4,
    name: "가동 시설물",
    quantity: total_run,
  },
];

function CurrentSituation() {
  return (
    <div className="current-content">
      <img src="./img/marker.png" className="" />
      <div className="top">
        <div className="left">
          <span className="title-text">현황</span>
        </div>
        <div className="right">
          <ButtonOutline>전국</ButtonOutline>
        </div>
      </div>
      <div className="bottom no-border-top">
        {items.map((item) => (
          <CurentSitutationValue key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CurrentSituation;
