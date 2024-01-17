import { useState } from "react";
import "./Register.scss";
import ModalDefault from "../../components/Modal/ModalDefault";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Register() {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleRegist = () => {
    setOpen(true);
  };

  const handleClickGoToLogin = () => {
    setOpen(false);
    navigate("/login");
  };

  return (
    <div className="register-content">
      <ModalDefault
        open={open}
        state={"success"}
        handleClose={handleClose}
        modalTitle={"가입 신청 성공"}
        modalDsecriptions={
          <div
            dangerouslySetInnerHTML={{
              __html: `가입 신청이 완료되었습니다.  </p>  이메일이 발송됩니다`,
            }}
          />
        }
        handleClickGoToLogin={handleClickGoToLogin}
      />
      <div className="register-content-wrapper">
        <div className="header">
          <img src="/img/logo.png" alt="logo" />
          <span className="title-hydrogen">수소 </span>
          <span className="title-hydrogen-fx">인프라 관리 시스템</span>
        </div>

        <div className="register-content-inner">
          <div className="left">
            <img src="./img/marker.png" className="img-marker" />
            <div className="station-regist-station-add-header">
              <div className="station-regist-header-add-left">
                <span className="station-title-kor">회원가입</span>
                <span className="station-tile-eng">REGISTER</span>
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
                  placeholder="4-16/자 / 영문, 숫자 사용가능"
                  className="custom-input-default-search border-left active"
                ></input>
                <button className="button-search-address">찾기</button>
              </div>

              <div className="input-item-station-add">
                <label>
                  비밀번호 <span className="essential-mark">*</span>
                </label>
                <input
                  type="text"
                  placeholder="2~16자 / 한글, 영문, 숫자 사용가능"
                  className="custom-input-default "
                ></input>
              </div>
              <div className="input-item-station-add">
                <label>
                  비밀번호 확인 <span className="essential-mark">*</span>
                </label>
                <input
                  type="text"
                  placeholder="비밀번호 다시 확인"
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
                    value="010-"
                    className="custom-input-default-search border-left active"
                  ></input>
                  <button className="button-search-address">인증</button>
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

                  <input type="text" className="custom-input-default-start" />
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
                  className="button-submit-form-edit-user"
                  onClick={handleRegist}
                >
                  가입하기
                </button>
              </div>
            </div>
          </div>
          {isSmallScreen ? (
            ""
          ) : (
            <div className="right">
              <img
                src="/img/register-1.png"
                className="img-regist-1"
                alt="register-1"
              />
              <img
                src="/img/register-2.png"
                className="img-regist-2"
                alt="register-2"
              />
              <img
                src="/img/register-6.png"
                className="img-regist-6"
                alt="register-6"
              />
              <img
                src="/img/register-3.png"
                className="img-regist-3"
                alt="register-3"
              />
              <img
                src="/img/register-4.png"
                className="img-regist-4"
                alt="register-4"
              />
              <img
                src="/img/register-5.png"
                className="img-regist-5"
                alt="register-5"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
