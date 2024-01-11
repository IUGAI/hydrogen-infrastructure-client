import { useMyContextEquipment } from "../../../context/equipmentContext";
import Graph from "../../Graph/Graph";
import CurentSitutationValue from "../../MainDashboard/CurrentSituation/CurentSituationValues/CurentSitutationValue";
import "./OperationState.scss";

function OperationState() {
  const { state } = useMyContextEquipment();
  const { equipments } = state.initalStation;
  var total_equipments = 0;
  var run_equipments = 0;
  var irreversible_equipments = 0;
  var run_percentage = 0;

  if (equipments !== undefined && equipments.length > 0) {
    total_equipments = equipments.length;
    run_equipments = equipments.filter((item) => item.failure === false).length;
    irreversible_equipments = equipments.filter(
      (item) => item.failure === true
    ).length;
    run_percentage = ((run_equipments / total_equipments) * 100).toFixed(0);
  }

  const item = {
    id: 1,
    name: "가동",
    type: 10001,
    percentage: parseInt(run_percentage),
    data: [
      {
        name: "Group A",
        value:
          equipments !== undefined && equipments.length > 0
            ? irreversible_equipments
            : 1,
      },
      { name: "Group B", value: run_equipments },
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
      quantity: equipments === undefined ? 0 : total_equipments,
    },
    {
      id: 4,
      name: "가동",
      quantity: equipments === undefined ? 0 : run_equipments,
    },
    {
      id: 5,
      name: "비가동",
      quantity: equipments === undefined ? 0 : irreversible_equipments,
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

            {item.percentage !== 0  && <div className="circle-dash"></div>}
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
