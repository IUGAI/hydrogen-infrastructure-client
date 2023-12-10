import CurentSitutationValue from "../../MainDashboard/CurrentSituation/CurentSituationValues/CurentSitutationValue";
import "./StationSoundnessState.scss";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

function StationSoundnessState() {

    const [selecteditem, setSelectedItem] = useState(1);

    const handlechange = (event) => {
      setSelectedItem(event.target.value);
    };

    const CustomSelect = styled(Select)({
        width: "150px",
        backgroundColor: "#212c4b",
        border: "1px solid #253255",
        height: "70%",
        color: "#8faadc",
        fontFamily: "ghotic 12",
        fontSize: "16px",
        '&:focus': {
          backgroundColor: '#212c4b', // Цвет фона при фокусе
          '& .MuiSelect-icon': {
            color: 'red', // Цвет иконки при фокусе
          },
        },
        '& .MuiSelect-icon': {
          color: '#8faadc', // Цвет иконки
          backgroundColor: '#253255'
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
      <img src="./img/marker.png" className="" />
      <div className="top">
        <span className="title-text">사업소 가동 현황</span>
        <CustomSelect
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          value={selecteditem}
          MenuProps={{ PaperProps: { style: listStyle } }}
          onChange={handlechange}
        >
          <MenuItem value={1}  style={itemStyle}>
          금일
          </MenuItem>
          <MenuItem value={10} style={itemStyle}>
            금주
          </MenuItem>
          <MenuItem value={20} style={itemStyle}>금월</MenuItem>
          <MenuItem value={30} style={itemStyle}>금년</MenuItem>
        </CustomSelect>
      </div>
      <div className="bottom">
        <div className="item item-center">
          <span>실제 생산량</span>
        </div>
        <div className="item item-left">
          <span className="text-current">
            396<span className="text-unit">kg</span>
          </span>
        </div>
        <div className="item item-3-state">
               <div className="top-text">가동률</div>
               <div className="bottom-text production">66.1%</div>
        </div>
        <div className="item item-center">
          <span>최대 생산량</span>
        </div>
        <div className="item item-left">
          <span className="text-max">
            600<span className="text-unit">kg</span>
          </span>
        </div>
        <div className="item item-center">
          <span>실제 저장량</span>
        </div>
        <div className="item item-left">
          <span className="text-current">
            486<span className="text-unit">kg</span>
          </span>
        </div>
        <div className="item item-8-state">
        <div className="top-text">저장률</div>
               <div className="bottom-text storaging">91.7%</div>
        </div>
        <div className="item item-center">
          <span>최대 저장량</span>
        </div>
        <div className="item item-left">
          <span className="text-max">
            530<span className="text-unit">kg</span>
          </span>
        </div>
        <div className="item item-center">
          <span>실제 충전량</span>
        </div>
        <div className="item item-left">
          <span className="text-current">
            528<span className="text-unit">kg</span>
          </span>
        </div>
        <div className="item item-13-state">
        <div className="top-text">사용률</div>
               <div className="bottom-text charging">75.5%</div>
        </div>
        <div className="item item-center">
          <span>최대 충전량</span>
        </div>
        <div className="item item-left">
          <span className="text-max">
            700<span className="text-unit">kg</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default StationSoundnessState;