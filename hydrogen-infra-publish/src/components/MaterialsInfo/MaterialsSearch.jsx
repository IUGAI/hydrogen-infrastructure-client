import { CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { useState } from "react";
import { stations } from "../../data/Mapdata";
import ko from "date-fns/locale/ko";
import DatePicker from "react-datepicker";
import "../../style/SearchContainer.scss";
import { useMediaQuery } from "react-responsive";
import SearchButtons from "../SearchButtons/SearchButtons";

function MaterialsSearch() {
  const isSmallScreen = useMediaQuery({ maxWidth: 1200 });
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="search">
      <img className="search-img" src="/img/search.png" />
      <div className="search-input-item">
        <label>사업소</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>

          {stations.map((item, index) => (
            <option key={index}>{item.name}</option>
          ))}
        </select>
      </div>
      <div className="search-input-item">
        <label>대분류</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>
          <option>A-1</option>
          <option>A-2</option>
          <option>A-3</option>
        </select>
      </div>
      <div className="search-input-item">
        <label>중분류</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>
          <option>B-1</option>
          <option>B-2</option>
          <option>B-3</option>
          <option>B-4</option>
        </select>
      </div>
      <div className="search-input-item">
        <label>소분류</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>
          <option>C-1</option>
          <option>C-2</option>
          <option>C-3</option>
          <option>C-4</option>
        </select>
      </div>
      <div className="search-input-item">
        <label>자재명</label>
        <input type="text" className="custom-input-default "></input>
      </div>
      {!isSmallScreen ? <SearchButtons /> : ""}
      <div className="search-input-item">
        <label>시리얼번호</label>
        <input type="text" className="custom-input-default "></input>
      </div>
      <div className="search-input-item">
        <label>LOT번호</label>
        <input type="text" className="custom-input-default "></input>
      </div>
      <div className="search-input-item">
        <label>등록일</label>
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
        <label>내구연한</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>
          <option>1년</option>
          <option>5년</option>
          <option>10년</option>
          <option>20년</option>
        </select>
      </div>

      <div className="search-input-item">
        <label>보관장소</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>
        </select>
      </div>
      {isSmallScreen ? <SearchButtons /> : ""}
    </div>
  );
}

export default MaterialsSearch;
