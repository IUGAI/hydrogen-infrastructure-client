import "./Map.scss";
import React from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { RxOpenInNewWindow } from "react-icons/rx";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { mapOptions } from "../../../data/Optionsformap";
import { stations } from "../../../data/Mapdata";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 37.5665,
  lng: 126.978,
};

function Map() {
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [checkedstate, setProduction] = useState({
    production: true,
    storaging: true,
    charging: true,
    alarm: true,
  });

  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  useEffect(() => {
    const savedMarkers = JSON.parse(localStorage.getItem("savedMarkers"));
    if (savedMarkers) {
      setMarkers(savedMarkers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedMarkers", JSON.stringify(markers));
  }, [markers]);

  useEffect(() => {
    if (markers.length === 0 && checkedstate.production) {
      const defaultMarkers = stations;
      setMarkers(defaultMarkers);
    }
  }, [markers]);

  useEffect(() => {
    filterMapData();
  }, [checkedstate]);

  const handleCheck = (event) => {
    const { name, checked } = event.target;
    setProduction({ ...checkedstate, [name]: checked });
  };

  const filterMapData = () => {
    const filteredData = stations.filter((item) => {
      if (!checkedstate.production && item.type === 1) {
        return false;
      }
      if (!checkedstate.storaging && item.type === 2) {
        return false;
      }
      if (!checkedstate.charging && item.type === 3) {
        return false;
      }

      if (!checkedstate.alarm && item.type === 4) {
        return false;
      }

      return true;
    });
    setMarkers(filteredData);
  };

  return (
    <div className="map-container">
      <span className="title">수소 인프라 현황</span>
      <div className="map-content">
        <GoogleMap
          mapContainerStyle={containerStyle}
          options={mapOptions}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
        
          {markers.map((marker, index) => (
            <Marker
              key={index}
              onClick={() => {
                setSelectedMarker(marker);
              }}
              icon={
                marker.type === 1
                  ? "./img/production-map-icon.png"
                  : marker.type === 2
                  ? "./img/storaging-map-icon.png/"
                  : "./img/charging-map-icon.png"
              }
              position={{ lat: marker.lat, lng: marker.lng }}
              title={marker.title}
            />
          ))}
          {selectedMarker && (
            <InfoWindow
              onCloseClick={() => {
                setSelectedMarker(null);
              }}
              position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            >
              <div className="info-station">
         
                   <h1>Hello</h1>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
        <div className="info-container">
             <div className="top">
              <span>대전 G 사업소</span>
              <RxOpenInNewWindow size={24}/>
             </div>
             <div className="bottom">
            <div className="left">
                 <span>시설</span>
                 <span>연락처</span>
                 <span>알람 내용</span>
            </div>
            <div className="right">
                 <span>시설</span>
                 <span>연락처</span>
                 <span>알람 내용</span>
            </div>
             </div>
        </div>
      </div>
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
