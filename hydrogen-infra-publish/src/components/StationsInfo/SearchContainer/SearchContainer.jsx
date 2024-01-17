
import { useState } from "react";
import { stations } from "../../../data/Mapdata";
import ko from "date-fns/locale/ko";
import DatePicker from "react-datepicker";
import { useMediaQuery } from "react-responsive";
import SearchButtons from "../../SearchButtons/SearchButtons";

function SearchContainer() {
  const [startDate, setStartDate] = useState(null);
  const [registDate, setRegistDate] = useState(null);
  
  const isSmallScreen = useMediaQuery({ maxWidth: 1100 });
  return (
    <div className="search">
      <img className="search-img" src="/img/search.png" />
      <div className="search-input-item" style={{ zIndex: "20" }}>
        <label>등록일</label>
        <DatePicker
          locale={ko}
          dateFormat="yyyy-MM-dd"
          selected={registDate}
          placeholderText="선택"
          onChange={(date) => setRegistDate(date)}
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
        <label>사업자</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>
          <option>좋은솔루션(주)</option>
        </select>
      </div>
      <div className="search-input-item" style={{ zIndex: "20" }}>
        <label>개시일</label>
        <DatePicker
          locale={ko}
          dateFormat="yyyy-MM-dd"
          selected={startDate}
          placeholderText="선택"
          onChange={(date) => setStartDate(date)}
          className="custom-datepicker"
        />
      </div>
      <div className="search-input-item">
        <label>사업소</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>
          {
            stations.map((item, index) => (
              <option>{item.name}</option>
            ))
          }
 
        </select>
      </div>
      {
        !isSmallScreen ? <SearchButtons/>: ""
      }

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
        <label>저장시설</label>
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
        <label>충전시설</label>
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
        <label>관리자(정)</label>
        <select className="custom-select">
          <option>선택</option>
          <option>서울</option>
          <option>부산</option>
          <option>제주</option>
          <option>광주</option>
        </select>
      </div>

      {
        isSmallScreen ? <SearchButtons/> : ""
      }
    </div>
  );
}

export default SearchContainer;
