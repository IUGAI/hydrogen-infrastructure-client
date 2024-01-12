import DatePicker from "react-datepicker";
import { useState } from "react";
import ko from "date-fns/locale/ko";
import '../../components/UserDetail/EditUser.scss'
function StationRegister({ show, setshow }) {
  const [startDate, setStartDate] = useState(null);
  const handleclick = () => {
    setshow(!show);
  };
  return (
    <div className={`station-regist-station-add ${show ? "" : "full-width"}`}>
      <img src="/img/marker.png" className="img-marker" />
      <div className="station-regist-station-add-header">
        <div className="station-regist-header-add-left">
          <span className="station-title-kor">사업소</span>
          <span className="station-tile-eng">REGISTER</span>
        </div>
        <span className="station-title-notice">
          <span className="essential-mark">*</span> 표시는 필수항목입니다
        </span>
      </div>
      <div className="station-regist-station-add-input">
        <div className="input-item-station-add">
          <label>
            사업소명 <span className="essential-mark"> *</span>
          </label>
          <input
            type="text"
            placeholder="2~16자 / 한글, 영문, 숫자 사용가능"
            className="custom-input-default"
          ></input>
        </div>
        <div className="input-item-station-add">
          <label>
            사업자
            <span className="essential-mark"> *</span>
          </label>
          <select className="custom-select">
            <option selected disabled>
              선택
            </option>
            <option>서울</option>
          </select>
          <button
            onClick={handleclick}
            className="button-search"
            style={{ marginLeft: "10px" }}
          >
            사업자 추가
          </button>
        </div>
        <div className="input-item-station-add">
          <label>
            주소 <span className="essential-mark"> *</span>
          </label>
          <input
            disabled
            type="text"
            placeholder="찾기를 클릭해주세요"
            className="custom-input-default-search border-left"
          ></input>
          <button className="button-search-address">찾기</button>
        </div>
        <div className="input-item-station-add">
          <label>상세주소</label>
          <input
            type="text"
            placeholder="정확히 가입해주세요"
            className="custom-input-default"
          ></input>
        </div>
        <div className="input-item-station-add">
          <label>
            좌표 <span className="essential-mark"> *</span>
          </label>
          <div className="input_item_lat_lng">
            <input
              type="text"
              value="위도"
              disabled
              className="custom-input-default-start-title start"
            />
            <input
              type="text"
              placeholder=""
              className="custom-input-default-start"
            />

            <input
              type="text"
              disabled
              value="경도"
              className="custom-input-default-start-title"
            />
            <input
              type="text"
              placeholder=""
              className="custom-input-default-start end"
            />
          </div>
        </div>
        <div className="input-item-station-add">
          <label>
            전화번호 <span className="essential-mark"> *</span>
          </label>
          <input
            type="text"
            placeholder="번호만 입력해주세요"
            className="custom-input-default"
          ></input>
        </div>
        <div className="input-item-station-add">
          <label>
            관리자(정)
            <span className="essential-mark"> *</span>
          </label>
          <select className="custom-select-default">
            <option selected disabled>
              선택
            </option>
            <option>서울</option>
          </select>
        </div>
        <div className="input-item-station-add">
          <label>
            관리자(부)
            <span className="essential-mark"> *</span>
          </label>
          <select className="custom-select-default">
            <option selected disabled>
              선택
            </option>
            <option>서울</option>
          </select>
        </div>
        <div className="input-item-station-add">
          <label>인가일</label>
          <div className="input_item_lat_lng">
            <DatePicker
              locale={ko}
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              placeholderText="선택"
              onChange={(date) => setStartDate(date)}
              className="custom-datepicker"
            />
          </div>
        </div>
        <div className="input-item-station-add">
          <label>개시일</label>
          <div className="input_item_lat_lng">
            <DatePicker
              locale={ko}
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              placeholderText="선택"
              onChange={(date) => setStartDate(date)}
              className="custom-datepicker"
            />
          </div>
        </div>
        <button className="button-submit-form">등록하기</button>
      </div>
    </div>
  );
}

export default StationRegister;
