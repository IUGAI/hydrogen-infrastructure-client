
import ko from "date-fns/locale/ko";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useMediaQuery } from "react-responsive";
import "../../style/SearchContainer.scss";
import SearchButtons from "../SearchButtons/SearchButtons";

function EquipmentsSearch() {
  const [registDate, setRegistDate] = useState(null);
  const [installationDate, setInstallationDate] = useState(null);
  const [productionDate, setProductionDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 1200 });
  return (
    <div className="search">
      <img className="search-img" src="/img/search.png" />
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

        </select>
      </div>
      <div className="search-input-item">
        <label>사업소</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>

        </select>
      </div>
      <div className="search-input-item">
        <label>시설물명</label>
        <input type="text" className="custom-input-default "></input>
      </div>
      <div className="search-input-item">
        <label>관리번호</label>
        <input type="text" className="custom-input-default "></input>
      </div>
      {!isSmallScreen ? <SearchButtons /> : ""}
      <div className="search-input-item">
        <label>시설종류</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>

        </select>
      </div>
      <div className="search-input-item">
        <label>내구연한</label>
        <select className="custom-select">
          <option selected disabled>
            선택
          </option>

        </select>
      </div>
      <div className="search-input-item" style={{ zIndex: "30" }}>
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
      <div className="search-input-item" style={{ zIndex: "25" }}>
        <label>설치일</label>
        <DatePicker
          locale={ko}
          dateFormat="yyyy-MM-dd"
          selected={installationDate}
          placeholderText="선택"
          onChange={(date) => setInstallationDate(date)}
          className="custom-datepicker"
        />
      </div>
      <div className="search-input-item" style={{ zIndex: "20" }}>
        <label>가동일</label>
        <DatePicker
           locale={ko}
           dateFormat="yyyy-MM-dd"
          selected={productionDate}
          placeholderText="선택"
          onChange={(date) => setProductionDate(date)}
          className="custom-datepicker"
        />
      </div>

      <div className="search-input-item row-long">
        <label>담당자</label>
        <select className="custom-select">
          <option>선택</option>
   
        </select>
      </div>

      {isSmallScreen ? <SearchButtons /> : ""}
    </div>
  );
}

export default EquipmentsSearch;
