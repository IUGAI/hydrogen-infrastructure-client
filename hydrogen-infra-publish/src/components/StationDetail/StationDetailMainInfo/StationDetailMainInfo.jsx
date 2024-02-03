import "./StationDetailMainInfo.scss";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { mapOptions } from "../../../data/OptionsMapDetail";
const apikey = "AIzaSyChEBMFjqOmWaZk3pixSK7GU0dhEUi_uI0";
import { useJsApiLoader } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function StationDetailMainInfo({
  item_info,
  item_info_mid,
  center,
  buisness_st,
}) {

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apikey,
  });

  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  return (
    <div className="station-detail-info">
      <div className="station-detail-info-left">
        <div className="station-detail-info-left-inner">
          {item_info.map((item, index) => (
            <div key={index} className="station-detail-info-left-item">
              <div className="station-detail-info-left-item-icon">
                {item.icon}
              </div>
              <div className="station-detail-info-left-item-value">
                <span className="station-detail-info-title">{item.title}</span>
                <span className="station-detail-info-content">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="station-img-container">
          <span className="default-text">사업소 사진</span>
          <img
            className="img_station_logo"
            src="/img/photo_station.png"
            alt="default-img"
          />
        </div>
      </div>
      <div className="station-detail-info-left">
        <div className="station-detail-info-left-inner">
          {item_info_mid.map((item, index) => (
            <div key={index} className="station-detail-info-left-item">
              <div className="station-detail-info-left-item-icon">
                {item.icon}
              </div>
              <div className="station-detail-info-left-item-value">
                <span className="station-detail-info-title">{item.title}</span>
                <span className="station-detail-info-content">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="station-img-container">
          <span className="default-text">사업소 사진</span>
          <img
            className="img_station_logo"
            src="/img/photo_station.png"
            alt="default-img"
          />
        </div>
      </div>
      <div className="station-detail-info-right">
        <div className="station-detail-location">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              options={mapOptions}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              <MarkerF
                icon="/img/marker_detail_station.png"
                position={center}
                title="사업소"
              />
              {buisness_st && (
                <MarkerF
                  icon="/img/marker_detail_business.png"
                  position={buisness_st}
                  title=""
                />
              )}
            </GoogleMap>
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default StationDetailMainInfo;
