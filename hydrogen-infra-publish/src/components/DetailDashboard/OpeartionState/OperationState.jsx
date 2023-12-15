import Graph from "../../Graph/Graph";
import CurentSitutationValue from "../../MainDashboard/CurrentSituation/CurentSituationValues/CurentSitutationValue";
import "./OperationState.scss";

function OperationState() {
  const item = {
    id: 1,
    name: "가동",
    type: 10001,
    percentage: 75,
    data: [
      { name: "Group A", value: 3 },
      { name: "Group B", value: 4 },
    ],
    color_active: "#1681df",
    color_stroke: "#1f3c74",
    color_disactive: "#9dc3e6",
    title: "가동 상태",
  };

  const items = [
    {
      id: 1,
      name: "충전",
      quantity: "4",
    },
    {
      id: 4,
      name: "가동",
      quantity: "3",
    },
    {
      id: 5,
      name: "비가동",
      quantity: "1",
    },
  ];

  return (
    <div className="operation-state-content">
      <img src="/img/marker.png" className="" />
      <div className="top">
        <span className="title-text">가동 상태</span>
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

export default OperationState;
