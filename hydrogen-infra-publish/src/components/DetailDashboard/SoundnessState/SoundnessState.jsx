import { useMyContextEquipment } from "../../../context/equipmentContext";
import Graph from "../../Graph/Graph";
import CurentSitutationValue from "../../MainDashboard/CurrentSituation/CurentSituationValues/CurentSitutationValue";
import "./SoundnessState.scss";

function SoundnessState() {
  const { state } = useMyContextEquipment();
  const { equipments } = state.initalStation;
  var total = 0;
  var very_bad = 0;
  var bad = 0;
  var good = 0;
  var very_good = 0;
  var percantage = 0;

  if (equipments !== undefined && equipments.length > 0) {
    total = equipments.length;
    very_bad = equipments.filter((item) => item.soundness <= 25).length;
    bad = equipments.filter(
      (item) => item.soundness > 25 && item.soundness <= 50
    ).length;
    good = equipments.filter(
      (item) => item.soundness > 50 && item.soundness <= 75
    ).length;
    very_good = equipments.filter(
      (item) => item.soundness > 75 && item.soundness <= 100
    ).length;
    percantage = (((good + very_good) / total) * 100).toFixed(0);
  }

  const item = {
    id: 1,
    name: "가동",
    type: 10002,
    percentage: parseInt(percantage),
    data: [
      {
        name: "Group A",
        value:
          equipments !== undefined && equipments.length > 0
            ? very_bad + bad
            : 1,
      },
      { name: "Group B", value: very_good + good },
    ],
    color_active: "#8fcc4f",
    color_stroke: "#50773d",
    color_disactive: "#c5e0b4",
    title: "가동 상태",
  };


  const items = [
    {
      id: 1,
      name: "N/A",
      quantity: "0",
    },
    {
      id: 3,
      name: "매우 나쁨",
      quantity: equipments === undefined ? 0 : very_bad,
      type: 2,
    },
    {
      id: 8,
      name: "나쁨",
      quantity: equipments === undefined ? 0 : bad,
    },
    {
      id: 6,
      name: "양호",
      quantity: equipments === undefined ? 0 : good,
      type: 3,
    },
    {
      id: 7,
      name: "매우 양호",
      quantity: equipments === undefined ? 0 : very_good,
      type: 3,
    },
  ];

  return (
    <div className="soundness-state-content">
      <img src="/img/marker.png" className="" />
      <div className="top">
        <span className="title-text">건전도 상태</span>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="graph-item">
            <span className="text-percentage">{item.percentage}%</span>
            <Graph items={item} />
            {item.percentage !== 0  && (
              <div className="circle-dash cirlce-dash-color"></div>
            )}
          </div>
        </div>
        <div className="right">
          {items.map((item, index) => (
            <CurentSitutationValue item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SoundnessState;
