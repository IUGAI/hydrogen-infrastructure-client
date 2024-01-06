import "./EditUser.scss";
import { useNavigate } from "react-router-dom";

function EditUser({ setEdituser }) {
  const handleclickreturn = () => {
    setEdituser(false);
  };
  return (
    <>
      <div className="station-regist-content">
        <div className="station-regist-station-add full-width">
          <img src="/img/marker.png" className="img-marker" />
          <div className="station-regist-station-add-header">
            <div className="station-regist-header-add-left">
              <span className="station-title-kor">수정</span>
              <span className="station-tile-eng">EDIT</span>
            </div>
            <span className="station-title-notice">
              <span className="essential-mark">*</span> 표시는 필수항목입니다
            </span>
          </div>
          <div className="station-regist-station-add-input">
            <div className="input-item-station-add">
              <label>
                아디디
                <span className="essential-mark"> *</span>
              </label>
              <input
                type="text"
                disabled
                value={"hongkildong_1"}
                className="custom-input-default input-edit-user"
              />
            </div>
            <div className="input-item-station-add">
              <label>기존 비밀번호</label>
              <input type="text" className="custom-input-default "></input>
            </div>
            <div className="input-item-station-add">
              <label>새 비밀번호</label>
              <input
                type="text"
                placeholder="2~16자 / 한글, 영문, 숫자 사용가능"
                className="custom-input-default "
              ></input>
            </div>
            <div className="input-item-station-add">
              <label>새 비밀번호 확인</label>
              <input
                type="text"
                placeholder="2~16자 / 한글, 영문, 숫자 사용가능"
                className="custom-input-default "
              ></input>
            </div>
            <div className="input-item-station-add">
              <label>
                성명 <span className="essential-mark"> *</span>{" "}
              </label>
              <input type="text" className="custom-input-default"></input>
            </div>

            <div className="input-item-station-add">
              <label>
                주민등록번호 <span className="essential-mark"> *</span>
              </label>
              <div className="input_item_lat_lng">
                <input
                  type="text"
                  className="custom-input-default-start start"
                />
                <input
                  type="text"
                  value="-"
                  disabled
                  className="custom-input-default-start-title "
                />

                <input type="text" className="custom-input-default-start " />
                <button className="custom-input-default-start-title end">
                  확인
                </button>
              </div>
            </div>
            <div className="input-item-station-add">
              <label>
                휴대전화 <span className="essential-mark"> *</span>
              </label>
              <div className="input_item_lat_lng">
                <input
                  type="text"
                  className="custom-input-default-start start"
                />
                <input
                  type="text"
                  value="-"
                  disabled
                  className="custom-input-default-start-title "
                />

                <input type="text" className="custom-input-default-start " />
                <button className="custom-input-default-start-title end">
                  인증
                </button>
              </div>
            </div>
            <div className="input-item-station-add">
              <label>
                이메일
                <span className="essential-mark"> *</span>
              </label>
              <div className="input_item_lat_lng">
                <input
                  type="text"
                  className="custom-input-default-start start"
                />
                <input
                  type="text"
                  value="@"
                  disabled
                  className="custom-input-default-start-title "
                />

                <input type="text" className="custom-input-default-start " />
              </div>
            </div>
            <div className="input-item-station-add">
              <label>
                소속(사업소)
                <span className="essential-mark"> *</span>
              </label>
              <select className="custom-select-default">
                <option selected disabled>
                  선택해주세요
                </option>
                <option>서울</option>
              </select>
            </div>

            <div className="input-item-station-buttons">
              <button
                className="button-submit-form-edit-user-cancel"
                onClick={handleclickreturn}
              >
                취소하기
              </button>
              <button className="button-submit-form-edit-user">등록하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUser;
