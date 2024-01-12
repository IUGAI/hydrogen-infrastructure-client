
import React, { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function MaterialMainInfo({ item_info, item_info_mid }) {
  return (
    <div className="station-detail-info">
      <div></div>
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
      </div>
      <div className="station-detail-info-right-material">

      <div  className="station-detail-info-left-item">
              <div className="station-detail-info-left-item-icon">
              <FaBookmark color="#8da7d9" />
              </div>
              <div className="station-detail-info-left-item-value">
                <span className="station-detail-info-title"> 보관장소</span>
                <span className="station-detail-info-content">STORAGE-01</span>
              </div>
            </div>
 
      <div className="station-img-container">
          <span className="default-text">자재 사진</span>
          <img
            className="img_station_logo"
            src="/img/photo_station.png"
            alt="default-img"
          />
        </div>
        <div className="station-img-container">
          <span className="default-text">자재 사진</span>
          <img
            className="img_station_logo"
            src="/img/photo_station.png"
            alt="default-img"
          />
        </div>
        <div className="station-img-container">
          <span className="default-text">자재 사진</span>
          <img
            className="img_station_logo"
            src="/img/photo_station.png"
            alt="default-img"
          />
        </div>
      </div>
    </div>
  );
}

export default MaterialMainInfo;
