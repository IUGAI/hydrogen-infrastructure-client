import { CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ko from "date-fns/locale/ko";
import DatePicker from "react-datepicker";
import "../../style/SearchContainer.scss";
import SearchButtons from "../SearchButtons/SearchButtons";

function UserSearch() {
  const [startDate, setStartDate] = useState(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 1200 });
  return (
    <div className="search">
      <img className="search-img" src="/img/search.png" />
      <div className="search-input-item">
        <label>성명</label>
        <input type="text" className="custom-input-default "></input>
      </div>
      <div className="search-input-item">
        <label>아이디</label>
        <input type="text" className="custom-input-default "></input>
      </div>
      <div className="search-input-item">
        <label>생년월일</label>
        <input type="text" className="custom-input-default "></input>
      </div>
      <div className="search-input-item">
        <label>전화번호</label>
        <input type="text" className="custom-input-default "></input>
      </div>
      <div className="search-input-item">
        <label>이메일</label>
        <input type="text" className="custom-input-default "></input>
      </div>
    {
      !isSmallScreen ? <SearchButtons/> : ""
    }
      <div className="search-input-item" style={{ zIndex: "20" }}>
        <label>가입일</label>
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
        <label>소속(사업소)</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>
          <option>좋은솔루션</option>
        </select>
      </div>
      <div className="search-input-item">
        <label>접근권한</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>
          <option>1등</option>
          <option>2등</option>
          <option>3등</option>
          <option>4등</option>
        </select>
      </div>
      {
      isSmallScreen ? <SearchButtons/> : ""
    }
    </div>
  );
}

export default UserSearch;
