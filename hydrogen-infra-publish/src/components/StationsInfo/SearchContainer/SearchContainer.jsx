// import ko from "date-fns/locale/ko";
import { CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "./SearchContainer.scss";

function SearchContainer() {
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="search">
      <img className="search-img" src="/img/search.png" />
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
        <label>사업자</label>
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
        <label>사업소</label>
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
        <label>개시일</label>
        <DatePicker
        //   locale={ko}
          selected={startDate}
          placeholderText="선택"
          onChange={(date) => setStartDate(date)}
          className="custom-datepicker"
        />
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
    </div>
  );
}

export default SearchContainer;
