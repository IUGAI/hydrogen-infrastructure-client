import { RiPhoneFill } from "react-icons/ri";
import "../../components/UserDetail/EditUser.scss";

function BuisnessRegister({ show }) {
  return (
    <div className={`station-regist-buissness-add ${show ? "" : "hide"}`}>
      <div className="station-regist-station-add-header">
        <div className="station-regist-header-add-left">
          <span className="station-title-kor buisness">사업자 추가</span>
        </div>
        <span className="station-title-notice">
          사업소 추가와 함께 동시에 진행됩니다.
        </span>
      </div>
      <div className="station-regist-station-add-input">
        <div className="input-item-station-add">
          <label>
            사업자명 <span className="essential-mark"> *</span>
          </label>
          <input
            type="text"
            placeholder="2~16자 / 한글, 영문, 숫자 사용가능"
            className="custom-input-default"
          ></input>
        </div>
        <div className="input-item-station-add">
          <label>
            사업자등록번호 <span className="essential-mark"> *</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="custom-input-default-search buisness-regist-number"
          ></input>
          <button className="button-search-address">중복확인</button>
        </div>
        <div className="input-item-station-add">
          <label>분사 주소</label>
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
          <label>대표이사</label>
          <input
            type="text"
            placeholder=""
            className="custom-input-default"
          ></input>
        </div>
        <div className="input-item-station-add">
          <label>전화번호</label>
          <input
            type="text"
            placeholder="번호만 입력해주세요"
            className="custom-input-default"
          ></input>
        </div>
        <div className="input-item-station-add">
          <label>실무담당자</label>
          <div className="input-custum-phone">
            <input
              type="text"
              className="custom-input start"
              placeholder="성명"
            />
            <button className="button-input-station-add">
              <RiPhoneFill size={24} color="#8faadc" />
            </button>
            <input
              type="text"
              className="custom-input end"
              placeholder="전화번호/ 번호만 입력해주세요"
            />
          </div>
        </div>
        <button className="button-submit-form add-business ">등록하기</button>
      </div>
    </div>
  );
}

export default BuisnessRegister;
