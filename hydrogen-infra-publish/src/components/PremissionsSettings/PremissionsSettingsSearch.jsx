import { CiSearch } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "./PremissonsSettingsSearch.scss";

function PremissionsSettingsSearch() {
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="search-premissons">
      <div className="input-items">
      <div className="search-input-item">
          <label>메뉴열</label>
          <input type="text" className="custom-input-default "></input>
        </div>
        <div className="search-input-item">
          <label>구분</label>
          <select className="custom-select">
            <option selected disabled>
              선택
            </option>

          </select>
        </div>
      </div>

      <div className="input-items buttons">
      <div className="search-input-item buttons">
          <button className="button-search">
            <CiSearch size={24} />
            검색
          </button>
        </div>
        <div className="search-input-item buttons">
          <button className="button-search">
            <GrPowerReset size={24} />
            초기화
          </button>
        </div>
      </div>
    </div>
  );
}

export default PremissionsSettingsSearch;
