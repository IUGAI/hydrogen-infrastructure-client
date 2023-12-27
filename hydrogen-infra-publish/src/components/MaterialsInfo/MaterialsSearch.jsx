import { CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "../../style/SearchContainer.scss"

function MaterialsSearch() {
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
            <option>서울</option>
            <option>부산</option>
            <option>제주</option>
            <option>광주</option>
          </select>
        </div>
        <div className="search-input-item">
          <label>대분류</label>
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
          <label>중분류</label>
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
          <label>소분류</label>
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
          <label>자재명</label>
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
          //   locale={ko}
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
            <option>서울</option>
            <option>부산</option>
            <option>제주</option>
            <option>광주</option>
          </select>
        </div>

        
        <div className="search-input-item">
          <label>보관장소</label>
          <select className="custom-select">
            <option>선택</option>
            <option>서울</option>
            <option>부산</option>
            <option>제주</option>
            <option>광주</option>
          </select>
        </div>
      </div>
    )
}

export default MaterialsSearch
