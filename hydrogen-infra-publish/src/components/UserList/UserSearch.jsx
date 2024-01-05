import { CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "../../style/SearchContainer.scss";

function UserSearch() {
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="search">
      <img className="search-img" src="/img/search.png" />
      <div className="search-input-item">
        <label>성명</label>
        <input type="text" className="custom-input-default "></input>
      </div>
      <div className="search-input-item">
        <label>아이디</label>
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
        <label>가입일</label>
        <DatePicker
          //   locale={ko}
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
          <option>서울</option>
          <option>부산</option>
          <option>제주</option>
          <option>광주</option>
        </select>
      </div>
      <div className="search-input-item">
        <label>접근권한</label>
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
    </div>
  );
}

export default UserSearch;
