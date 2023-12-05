import Icon from "./Icon";
import "./Map.scss";
import mapdata from "../../../data/Mapdata";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Map() {
  const [checkedstate, setProduction] = useState({
    production: true,
    storaging: true,
    charging: true,
    alarm: true,
  });

  const [filteredDatas, setFilteredDatas] = useState(mapdata);

  const handleCheck = (event) => {
    const { name, checked } = event.target;
    setProduction({ ...checkedstate, [name]: checked });
  };

  useEffect(() => {
    filterMapData();
  }, [checkedstate]);

  const filterMapData = () => {
    const filteredData = mapdata.filter((item) => {
      if (
        !checkedstate.production &&
        item.src === "./img/production-map-icon.png"
      ) {
        return false;
      }
      if (
        !checkedstate.storaging &&
        item.src === "./img/storaging-map-icon.png"
      ) {
        return false;
      }
      if (
        !checkedstate.charging &&
        item.src === "./img/charging-map-icon.png"
      ) {
        return false;
      }

      if (!checkedstate.alarm && item.src === "./img/alarm-map-icon.png") {
        return false;
      }

      return true;
    });
    setFilteredDatas(filteredData);
  };

  return (
    <div className="map-container">
      <span className="title">수소 인프라 현황</span>
      <img src="./img/korea_map_black.png" alt="map" />
      {filteredDatas.map((item) => (
        <Icon key={item.id} data={item} />
      ))}
      <div className="map-filter">
        <div className="production-check check-container">
          <Checkbox
            {...label}
            name="production"
            defaultChecked
            onChange={handleCheck}
            sx={{
              color: "#00B0F0",
              "&.Mui-checked": {
                color: "#00B0F0",
              },
            }}
          />
          <span className="check-text">생산시설</span>
        </div>
        <div className="straging-check check-container">
          <Checkbox
            {...label}
            defaultChecked
            onChange={handleCheck}
            name="storaging"
            sx={{
              color: "#FFC000 ",
              "&.Mui-checked": {
                color: "#FFC000 ",
              },
            }}
          />
          <span className="check-text">저장시설</span>
        </div>
        <div className="charging-check check-container">
          <Checkbox
            {...label}
            onChange={handleCheck}
            name="charging"
            defaultChecked
            sx={{
              color: "#92D050",
              "&.Mui-checked": {
                color: "#92D050",
              },
            }}
          />
          <span className="check-text ">충전시설</span>
        </div>
        <div className="alarm-check check-container">
          <Checkbox
            {...label}
            onChange={handleCheck}
            name="alarm"
            defaultChecked
            sx={{
              color: "#FE609A ",
              "&.Mui-checked": {
                color: "#FE609A ",
              },
            }}
          />
          <span className="check-text">알람건</span>
        </div>
      </div>
    </div>
  );
}

export default Map;
