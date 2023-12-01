import "./CurrentSituation.scss";
import CurentSitutationValue from "./CurentSituationValues/CurentSitutationValue";
import Button from "@mui/material/Button";

const items = [
  {
    id: 1,
    name: "사업자",
    quantity: "6",
  },
  {
    id: 2,
    name: "사업소",
    quantity: "50",
  },
  {
    id: 3,
    name: "전체 시설물",
    quantity: "3,255",
  },
  {
    id: 4,
    name: "가동 시설물",
    quantity: "3,007",
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
          <Button variant="outlined" className="button-outline">
            전국
          </Button>
        </div>
      </div>
      <div className="bottom no-border-top">
        {items.map((item) => (
          <CurentSitutationValue key={items.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CurrentSituation;
