import DatePicker from "react-datepicker";
import { useState } from "react";
import ko from "date-fns/locale/ko";
const handleclick = () => {
  setshow(!show);
};

function MaterialRegister() {
  const [startDate, setStartDate] = useState(null);
  return (
    <>
      <div className="station-regist-content">
        <div className={`station-regist-station-add full-width}`}>
          <img src="/img/marker.png" className="img-marker" />
          <div className="station-regist-station-add-header">
            <div className="station-regist-header-add-left">
              <span className="station-title-kor">자재</span>
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
                자재명 <span className="essential-mark"> *</span>
              </label>
              <input type="text" className="custom-input-default"></input>
            </div>
            <div className="input-item-station-add">
              <label>
                LOT번호 <span className="essential-mark"> *</span>
              </label>
              <input type="text" className="custom-input-default"></input>
            </div>
            <div className="input-item-station-add">
              <label>시리얼번호</label>
              <input type="text" className="custom-input-default"></input>
            </div>
            <div className="input-item-station-add">
              <label>규격</label>
              <input type="text" className="custom-input-default"></input>
            </div>
            <div className="input-item-station-add">
              <label>
                수량 <span className="essential-mark"> *</span>
              </label>
              <input
                type="text"
                className="custom-input-default-search border-left active"
              ></input>
              <input className="input-weight" value="EA" />
            </div>

            <div className="input-item-station-add">
              <label>단가</label>
              <input
                type="text"
                className="custom-input-default-search border-left active"
              ></input>
              <input className="input-weight" value="원" />
            </div>
            <div className="input-item-station-add">
              <label>공급가액</label>
              <input
                type="text"
                className="custom-input-default-search border-left active"
              ></input>
              <input className="input-weight" value="원" />
            </div>
            <div className="input-item-station-add">
              <label>부가세액</label>
              <input
                type="text"
                className="custom-input-default-search border-left active"
              ></input>
              <input className="input-weight" value="원" />
            </div>
            <div className="input-item-station-add">
              <label>합계</label>
              <input
                type="text"
                className="custom-input-default-search border-left "
              ></input>
              <input className="input-weight" value="원" />
            </div>
          </div>
        </div>
      </div>
      <div className="station-regist-content">
        <div className={`station-regist-station-add full-width}`}>
          <div className="station-regist-station-add-header"></div>
          <div className="station-regist-station-add-input">
            <div className="input-item-station-add">
              <label>
                대분류
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
                중분류
                <span className="essential-mark"> *</span>
              </label>
              <select className="custom-select-default filled">
                <option selected disabled>
                  선택해주세요
                </option>
                <option>서울</option>
              </select>
            </div>
            <div className="input-item-station-add">
              <label>
                소분류
                <span className="essential-mark"> *</span>
              </label>
              <select className="custom-select-default filled">
                <option selected disabled>
                  선택해주세요
                </option>
                <option>서울</option>
              </select>
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
              <label>제조사</label>
              <input type="text" className="custom-input-default"></input>
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
              <label>
                보관장소
              </label>
              <select className="custom-select-default">
                <option selected disabled>
                  선택해주세요 / 해당 보관장소가 없는 경우에는 관리자에게 문의해주세요
                </option>
                <option>서울</option>
              </select>
            </div>
            <button className="button-submit-form add-material">등록하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MaterialRegister;
