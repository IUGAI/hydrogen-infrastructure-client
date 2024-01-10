import ButtonCustum from "../../Buttons/ButtonCustum";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { useParams, useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "react-responsive";
import MenuItem from "@mui/material/MenuItem";

import "./Detailheader.scss";
import { stations } from "../../../data/Mapdata";
import { useState } from "react";
import { useMyContextEquipment } from "../../../context/equipmentContext";
import StationModalInfo from "./StationModalInfo";

function Detailheader() {
  const { id } = useParams();
  const { state } = useMyContextEquipment();
  const [selecteditem, setSelectedItem] = useState(id === undefined ? 1 : id);
  const [stationInfoModal, setStationInfoModal] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1536 });
  const navigate = useNavigate();

  const CustomSelect = styled(Select)({
    width: isSmallScreen ? "100%" : "100%",
    backgroundColor: "#212c4b",
    border: "1px solid #253255",
    height: "60%",
    color: "#8faadc",
    fontFamily: "ghotic 12",
    fontSize: isSmallScreen ? "13px" : "16px",
    "&:focus": {
      backgroundColor: "#212c4b", // Цвет фона при фокусе
      "& .MuiSelect-icon": {
        color: "red", // Цвет иконки при фокусе
      },
    },
    "& .MuiSelect-icon": {
      color: "#8faadc", // Цвет иконки
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

  const handleClick = () => {
    setStationInfoModal(!stationInfoModal);
  };

  const handlechange = (event) => {
    const newValue = event.target.value;
    setSelectedItem(newValue);
    navigate(`/dashboard/${newValue}`);
  };

  return (
    <div className="detail-header-content">
      <div className="left">
        <span className="detail-header-title">{state.initalStation.name}</span>
        <div
          className="button-container-modal"
          style={{ position: "relative" }}
        >
          {state.initalStation.name && (
            <ButtonCustum handleClick={handleClick}>정보</ButtonCustum>
          )}
          {stationInfoModal ? (
           <StationModalInfo setStationInfoModal={setStationInfoModal}/>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="mid">
        <IoPartlySunnyOutline size={27} color="#8FAADC" />
        <div className="vertical-line"></div>
        <span className="detail-header-celcious">12.6℃ </span>
      </div>
      <div className="right">
        <CustomSelect
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          value={selecteditem}
          MenuProps={{ PaperProps: { style: listStyle } }}
          onChange={handlechange}
        >
          <MenuItem value={1} disabled selected style={itemStyle}>
            사업소 선택
          </MenuItem>
          {stations.map((item, index) => (
            <MenuItem value={item.id} key={index} style={itemStyle}>
              {item.name}
            </MenuItem>
          ))}
          {/* <MenuItem value={10} style={itemStyle}>
            부산 A
          </MenuItem>
          <MenuItem value={20} style={itemStyle}>서울 A</MenuItem>
          <MenuItem value={30} style={itemStyle}>서울 B</MenuItem> */}
        </CustomSelect>
      </div>
    </div>
  );
}

export default Detailheader;
