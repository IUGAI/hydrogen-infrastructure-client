import { CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "../../style/SearchContainer.scss";

function WorkSearch() {
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
          <label>시설물</label>
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
          <label>작업 시작일</label>
          <DatePicker
            //   locale={ko}
            selected={startDate}
            placeholderText="선택"
            onChange={(date) => setStartDate(date)}
            className="custom-datepicker"
          />
        </div>
        
        <div className="search-input-item">
          <label>작업 종료일</label>
          <DatePicker
            //   locale={ko}
            selected={startDate}
            placeholderText="선택"
            onChange={(date) => setStartDate(date)}
            className="custom-datepicker"
          />
        </div>
        <div className="search-input-item">
        <label>작업명</label>
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
        <label>작업번호</label>
        <input type="text" className="custom-input-default "></input>
      </div>
      <div className="search-input-item">
          <label>자재 사용유무</label>
          <div className="button-container-custum">
            <button className="custom-button-radio active">안함</button>
            <button className="custom-button-radio">사용</button>
          </div>
        </div>
        <div className="search-input-item">
          <label>상태</label>
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
          <label>결과보고서 작성유무</label>
          <div className="button-container-custum">
            <button className="custom-button-radio active">안함</button>
            <button className="custom-button-radio">완료</button>
          </div>
        </div>
        <div className="search-input-item">
          <label>작업자</label>
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
        <div className="search-input-item row-long">
          <label>등록일</label>
          <DatePicker
            //   locale={ko}
            selected={startDate}
            placeholderText="선택"
            onChange={(date) => setStartDate(date)}
            className="custom-datepicker"
          />
        </div>
      </div>
    )
}

export default WorkSearch
