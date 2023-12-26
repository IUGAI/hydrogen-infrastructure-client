import { useState } from "react";
import "./StationDetailEquipments.scss";
import { CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import DatePicker from "react-datepicker";

function StationDetailEquipments() {
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="station-detail-equipments">
      <div className="search-input-item">
        <label>등록일</label>
        <DatePicker
          //   locale={ko}
          selected={startDate}
          placeholderText="선택"
          onChange={(date) => setStartDate(date)}
          className="custom-datepicker"
        />
      </div>
      <div className="search-input-item">
        <label>시도</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>
          <option>서울</option>
          <option>부산</option>
          <option>제주</option>
          <option>광주</option>
        </select>
      </div>
      <div className="search-input-item">
        <label>시도</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>
          <option>서울</option>
          <option>부산</option>
          <option>제주</option>
          <option>광주</option>
        </select>
      </div>
      <div className="search-input-item">
        <label>생산시설</label>
        <div className="input-type-search-production">
          <input type="text" className="custom-input start"></input>
          <input
            type="text"
            className="custom-input disactive"
            value="~"
            disabled
          ></input>
          <input type="text" className="custom-input end"></input>
        </div>
      </div>
      <div className="search-input-item">
        <label>생산시설</label>
        <input type="text" className="custom-input-default "></input>
      </div>
      <div className="search-input-item">
        <button className="button-search">
          <CiSearch size={24} />
          검색
        </button>
      </div>
      <div className="search-input-item">
        <button className="button-search">
          <GrPowerReset size={24} />
          초기화
        </button>
      </div>
    </div>
  );
}

export default StationDetailEquipments;
