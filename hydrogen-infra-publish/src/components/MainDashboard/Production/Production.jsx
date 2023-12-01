import "./Production.scss";
import Switch from "@mui/material/Switch";
import ProductionValue from "./ProductionValue/ProductionValue";

const items = [
  {
    id: 1,
    name: "생산량",
    value: "2,071,000",
    procent: "92.15%",
  },
  {
    id: 2,
    name: "저장랑",
    value: "32,557,193",
    procent: "94.76%",
  },
  {
    id: 3,
    name: "충전량",
    value: "3,807,481",
    procent: "84.22%",
  },
];

function Production() {
  return (
    <div className="production-content">
      <img src="./img/marker.png" className="" />
      <div className="top">
        <div className="left">
          <span className="title-text">생산/저장/충전량</span>
        </div>
        <div className="right">
          <span className="switch-text">단위: t(톤)</span>{" "}
          <Switch name="gilad" />
        </div>
      </div>
      <div className="bottom no-border-top">
          {items.map((itemss) => (
            <ProductionValue key={itemss.id} item={itemss} />
          ))}
      </div>
    </div>
  );
}

export default Production;
