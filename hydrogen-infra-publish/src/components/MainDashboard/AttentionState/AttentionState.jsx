import "./AttentionState.scss";
import GraphAttention from "./GraphAttention/GraphAttention";
import { stations } from "../../../data/Mapdata";

const equipments = stations.flatMap(obj => obj.equipments);
const run_equipments = equipments.filter((obj) => obj.failure === false).length;
const irreversible_equipments = equipments.filter((obj) => obj.failure === true).length;
const percentage_run = (run_equipments / equipments.length * 100).toFixed(0);

const graphItems = [
  {
    id: 1,
    name: "가동",
    type: 10001,
    percentage: percentage_run,
    data: [
      { name: "Group A", value: irreversible_equipments },
      { name: "Group B", value:  run_equipments},
    ],
    color_active: "#1681df",
    color_stroke: "#1f3c74",
    color_disactive: "#9dc3e6",
    title: "가동 상태",
  },
  {
    id: 2,
    name: "생산",
    type: 10001,
    data: [
      { name: "Group A", value: 900 },
      { name: "Group B", value: 1000 },
    ],
    percentage: 66,
    color_active: "#1681df",
    color_disactive: "#9dc3e6",
    color_stroke: "#1f3c74",
    title: "가동률",
  },
  {
    id: 3,
    name: "충전소",
    percentage: 40,
    data: [
      { name: "Group A", value: 500 },
      { name: "Group B", value: 300 },
    ],
    type: 10001,
    color_active: "#8fcc4f",
    color_disactive: "#c5e0b4",
    color_stroke: "#50773d",
    title: "시설물  종류",
  },
  {
    id: 4,
    name: "양호",
    percentage: 65,
    data: [
      { name: "Group A", value: 700 },
      { name: "Group B", value: 1200 },
    ],
    type: 10001,
    color_active: "#8fcc4f",
    color_disactive: "#c5e0b4",
    color_stroke: "#50773d",
    title: "건전도",
  },
];

function AttentionState() {

  return (
    <div className="state-content">
      <img src="./img/marker.png" className="" />
      <div className="top">
        <span className="title-text">주요 상태</span>
      </div>
      <div className="bottom">
        {graphItems.map((graphItem) => (
          <GraphAttention key={graphItem.id} items={graphItem} />
        ))}
      </div>
    </div>
  );
}

export default AttentionState;
