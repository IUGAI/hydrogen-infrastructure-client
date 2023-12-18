import CurentSitutationValue from "../../MainDashboard/CurrentSituation/CurentSituationValues/CurentSitutationValue";
import "./StationSoundnessState.scss";
import { useMediaQuery } from "react-responsive";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useMyContextEquipment } from "../../../context/equipmentContext";

function StationSoundnessState() {
  const [selecteditem, setSelectedItem] = useState(1);
  const isLargeScreen = useMediaQuery({ maxWidth: 1536 });

  const { state } = useMyContextEquipment();
  const { equipments } = state.initalStation;

  var current_production = 0;
  var max_production = 0;
  var current_storaging = 0;
  var max_storaging = 0;
  var current_charging = 0;
  var max_charging = 0;
  var percent_production = 0;
  var percent_storaging = 0;
  var percent_charging = 0;

  if (equipments !== undefined && equipments.length > 0) {
    current_production = equipments
      .filter((item) => item.type === 1)
      .reduce((total, element) => (total += element.current_weight), 0);
    max_production = equipments
      .filter((item) => item.type === 1)
      .reduce((total, element) => (total += element.max_capacity), 0);
    if (current_production !== 0 || max_production !== 0) {
      percent_production = (
        (current_production / max_production) *
        100
      ).toFixed(1);
    }
    current_storaging = equipments
      .filter((item) => item.type === 2)
      .reduce((total, element) => (total += element.current_weight), 0);
    max_storaging = equipments
      .filter((item) => item.type === 2)
      .reduce((total, element) => (total += element.max_capacity), 0);
    if (current_storaging !== 0 || max_storaging !== 0) {
      percent_storaging = ((current_storaging / max_storaging) * 100).toFixed(
        1
      );
    }
    current_charging = equipments
      .filter((item) => item.type === 3)
      .reduce((total, element) => (total += element.current_weight), 0);
    max_charging = equipments
      .filter((item) => item.type === 3)
      .reduce((total, element) => (total += element.max_capacity), 0);
    if (current_charging !== 0 || max_charging !== 0) {
      percent_charging = ((current_charging / max_charging) * 100).toFixed(1);
    }
  }

  const handlechange = (event) => {
    setSelectedItem(event.target.value);
  };

  const CustomSelect = styled(Select)({
    width: isLargeScreen ? "90px" : "150px",
    backgroundColor: "#212c4b",
    border: "1px solid #253255",
    height: "70%",
    color: "#8faadc",
    fontFamily: "ghotic 12",
    fontSize: "16px",
    "&:focus": {
      backgroundColor: "#212c4b",
      "& .MuiSelect-icon": {
        color: "red",
      },
    },
    "& .MuiSelect-icon": {
      color: "#8faadc",
      backgroundColor: "#253255",
    },
  });

  const listStyle = {
    backgroundColor: "#212c4b",
    color: "white",
  };

  const itemStyle = {
    fontSize: "14px",
  };

  return (
    <div className="station-soundness-state-content">
      <img src="/img/marker.png" className="" />
      <div className="top">
        <span className="title-text">사업소 가동 현황</span>
        <CustomSelect
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          value={selecteditem}
          MenuProps={{ PaperProps: { style: listStyle } }}
          onChange={handlechange}
        >
          <MenuItem value={1} style={itemStyle}>
            <span>금일</span>
          </MenuItem>
          <MenuItem value={10} style={itemStyle}>
            <span>금주</span>
          </MenuItem>
          <MenuItem value={20} style={itemStyle}>
            <span>금월</span>
          </MenuItem>
          <MenuItem value={30} style={itemStyle}>
            <span>금년</span>
          </MenuItem>
        </CustomSelect>
      </div>
      <div className="bottom">
        <div className="item item-center">
          <span>실제 생산량</span>
        </div>
        <div className="item item-left">
          <span className="text-current">
            {current_production}
            <span className="text-unit">kg</span>
          </span>
        </div>
        <div className="item item-3-state">
          <div className="top-text">가동률</div>
          <div className="bottom-text production">{percent_production}%</div>
        </div>
        <div className="item item-center">
          <span>최대 생산량</span>
        </div>
        <div className="item item-left">
          <span className="text-max">
            {max_production}
            <span className="text-unit">kg</span>
          </span>
        </div>
        <div className="item item-center">
          <span>실제 저장량</span>
        </div>
        <div className="item item-left">
          <span className="text-current">
            {current_storaging}
            <span className="text-unit">kg</span>
          </span>
        </div>
        <div className="item item-8-state">
          <div className="top-text">저장률</div>
          <div className="bottom-text storaging">{percent_storaging}%</div>
        </div>
        <div className="item item-center">
          <span>최대 저장량</span>
        </div>
        <div className="item item-left">
          <span className="text-max">
            {max_storaging}
            <span className="text-unit">kg</span>
          </span>
        </div>
        <div className="item item-center">
          <span>실제 충전량</span>
        </div>
        <div className="item item-left">
          <span className="text-current">
            {current_charging}
            <span className="text-unit">kg</span>
          </span>
        </div>
        <div className="item item-13-state">
          <div className="top-text">사용률</div>
          <div className="bottom-text charging">{percent_charging}%</div>
        </div>
        <div className="item item-center">
          <span>최대 충전량</span>
        </div>
        <div className="item item-left">
          <span className="text-max">
            {max_charging}
            <span className="text-unit">kg</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default StationSoundnessState;
