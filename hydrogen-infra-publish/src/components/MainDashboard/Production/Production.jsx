import "./Production.scss";
import Switch from "@mui/material/Switch";
import { stations,equipments } from "../../../data/Mapdata";
import ProductionValue from "./ProductionValue/ProductionValue";
import { useEffect, useState } from "react";



function Production() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const currentProduction = equipments
      .filter((equipment) => equipment.type === 1)
      .reduce((total, item) => total + item.current_weight, 0);

    const maxCapacityProduction = equipments
      .filter((equipment) => equipment.type === 1)
      .reduce((total, item) => total + item.max_capacity, 0);

    const quantityProductionPercentage =
      (currentProduction / maxCapacityProduction) * 100;

    const currentStorage = equipments
      .filter((equipment) => equipment.type === 2)
      .reduce((total, item) => total + item.current_weight, 0);

    const maxCapacityStorage = equipments
      .filter((equipment) => equipment.type === 2)
      .reduce((total, item) => total + item.max_capacity, 0);

    const quantityStoragePercentage =
      (currentStorage / maxCapacityStorage) * 100;

    const currentCharging = equipments
      .filter((equipment) => equipment.type === 3)
      .reduce((total, item) => total + item.current_weight, 0);

    const maxCapacityCharging = equipments
      .filter((equipment) => equipment.type === 3)
      .reduce((total, item) => total + item.max_capacity, 0);

    const quantityChargingPercentage =
      (currentCharging / maxCapacityCharging) * 100;

    const updatedItems = [
      {
        id: 1,
        name: "생산량",
        value: currentProduction.toLocaleString(),
        procent: quantityProductionPercentage.toFixed(2),
      },
      {
        id: 2,
        name: "저장랑",
        value: currentStorage.toLocaleString(),
        procent: quantityStoragePercentage.toFixed(2),
      },
      {
        id: 3,
        name: "충전량",
        value: currentCharging.toLocaleString(),
        procent: quantityChargingPercentage.toFixed(2),
      },
    ];

    setItems(updatedItems);
  }, [equipments]);
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
