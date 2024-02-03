import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import '../../components/UserDetail/EditUser.scss'

function EquipmentRegister() {
  const [startDate, setStartDate] = useState(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 1200 });

  return (
    <>
      <div className="station-regist-content">
        <div className={`station-regist-station-add full-width}`}>
          <img src="./img/marker.png" className="img-marker" />
          <div className="station-regist-station-add-header">
            <div className="station-regist-header-add-left">
              <span className="station-title-kor">시설물</span>
              <span className="station-tile-eng">REGISTER</span>
            </div>
            <span className="station-title-notice">
              <span className="essential-mark">*</span> 표시는 필수항목입니다
            </span>
          </div>
          <div className="station-regist-station-add-input">
            <div className="input-item-station-add">
              <label>
                사업소
                <span className="essential-mark"> *</span>
              </label>
              <select className="custom-select-default">
                <option selected disabled>
                  선택해주세요
                </option>
                <option>서울</option>
              </select>
            </div>
            <div className="input-item-station-add">
              <label>
                시설물명 <span className="essential-mark"> *</span>
              </label>
              <input
                type="text"
                placeholder="2~16자 / 한글, 영문, 숫자 사용가능"
                className="custom-input-default"
              ></input>
            </div>
            <div className="input-item-station-add">
              <label>
                시설종류 <span className="essential-mark"> *</span>
              </label>
              <div className="button-container-custum">
                <button className="custom-button-radio active">생산시설</button>
                <button className="custom-button-radio">저장시설</button>
                <button className="custom-button-radio">충전시설</button>
              </div>
            </div>
            <div className="input-item-station-add">
              <label>관리번호</label>
              <input type="text" className="custom-input-default"></input>
            </div>
            <div className="input-item-station-add">
              <label>
                최대용량 <span className="essential-mark"> *</span>
              </label>
              <input
                disabled
                type="text"
                className="custom-input-default-search border-left active"
              ></input>
              <input className="input-weight" disabled value="kg" />
            </div>
            <div className="input-item-station-add">
              <label>
                직정압력 <span className="essential-mark"> *</span>
              </label>
              <div className="input_item_lat_lng">
                <input
                  type="text"
                  placeholder="최소"
                  className="custom-input-default-start start"
                />
                <input
                  type="text"
                  value="~"
                  disabled
                  className="custom-input-default-start-title "
                />

                <input
                  type="text"
                  placeholder="최대"
                  className="custom-input-default-start "
                />
                <input
                  type="text"
                  disabled
                  value="bar"
                  className="custom-input-default-start-title"
                />
              </div>
            </div>
            <div className="input-item-station-add">
              <label>
                직정온도 <span className="essential-mark"> *</span>
              </label>
              <div className="input_item_lat_lng">
                <input
                  type="text"
                  placeholder="최소"
                  className="custom-input-default-start start"
                />
                <input
                  type="text"
                  value="~"
                  disabled
                  className="custom-input-default-start-title "
                />

                <input
                  type="text"
                  placeholder="최대"
                  className="custom-input-default-start "
                />
                <input
                  type="text"
                  disabled
                  value="°C"
                  className="custom-input-default-start-title "
                />
              </div>
            </div>
            <div className="input-item-station-add">
              <label>
                내구연한
                <span className="essential-mark"> *</span>
              </label>
              <select className="custom-select-default">
                <option selected disabled>
                  선택해주세요
                </option>
                <option>서울</option>
              </select>
            </div>
            <div className="input-item-station-add">
              <label>
                설치일 <span className="essential-mark"> *</span>
              </label>
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
              <label>가동일</label>
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
          </div>
        </div>
      </div>
      <div className="station-regist-content">
        <div className={`station-regist-station-add full-width}`}>
          <div className="station-regist-station-add-header"></div>
          <div className="station-regist-station-add-input">
            <div className="input-item-station-add">
              <label>제조사</label>
              <input
                type="text"
                placeholder="2~16자 / 한글, 영문, 숫자 사용가능"
                className="custom-input-default"
              ></input>
            </div>
            <div className="input-item-station-add">
              <label>제조일</label>
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
              <label>구매처</label>
              <input type="text" className="custom-input-default"></input>
            </div>
            <div className="input-item-station-add">
              <label>
                구매일 <span className="essential-mark"> *</span>
              </label>
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
              <label>담당자</label>
              <select className="custom-select-default">
                <option selected disabled>
                  선택해주세요
                </option>
                <option>서울</option>
              </select>
            </div>
            <button className={ isSmallScreen ? "button-submit-form" : "button-submit-form add-equipm"}>등록하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EquipmentRegister;
