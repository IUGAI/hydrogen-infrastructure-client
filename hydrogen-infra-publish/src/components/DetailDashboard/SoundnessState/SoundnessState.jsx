import Graph from "../../Graph/Graph";
import CurentSitutationValue from "../../MainDashboard/CurrentSituation/CurentSituationValues/CurentSitutationValue";
import "./SoundnessState.scss";

function SoundnessState() {
  const item = {
    id: 1,
    name: "가동",
    type: 10001,
    percentage: 75,
    data: [
      { name: "Group A", value: 3 },
      { name: "Group B", value: 4 },
    ],
    color_active: "#8fcc4f",
    color_disactive: "#c5e0b4",
    color_stroke: "#50773d",
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
      quantity: "1",
      type: 2
    },
    {
      id: 8,
      name: "나쁨",
      quantity: "0",
    },
    {
      id: 6,
      name: "양호",
      quantity: "2",
      type: 3
    },
    {
      id: 7,
      name: "매우 양호",
      quantity: "1",
      type: 3
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
