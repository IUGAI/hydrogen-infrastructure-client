import "./login.scss";
import { PiUserLight } from "react-icons/pi";
import LoginComponent from "../../components/Login/LoginComponent";
import SearchId from "../../components/Login/SearchId";
import { useNavigate } from "react-router";
import { useState } from "react";
import SearchPassword from "../../components/Login/SearchPassword";
import SearchIdResult from "../../components/Login/SearchIdResult";
import SearchPasswordResult from "../../components/Login/SearchPasswordResult";

function Login() {
  const [view, setView] = useState("login");
  const navigate = useNavigate();

  return (
    <div className="login-content">
      <div className="login-wrapper">
        <img src="/img/hyfa.png" alt="hydra" className="hyfa-img" />
        <div className="login-conatiner">
          <div className="circle">
            <PiUserLight size={50} color="#3370a8" />
          </div>
          <div className="header">
            <img src="/img/logo.png" alt="logo" />
            <span className="title-hydrogen">수소</span>
            <span className="title-hydrogen-fx">인프라 관리 시스템</span>
          </div>
          <hr />
          {view === "login" ? (
            <LoginComponent />
          ) : view === "search-id" ? (
            <SearchId setView={setView} />
          ) : view === "search-password" ? (
            <SearchPassword setView={setView} />
          ) : view === "search-id-result" ? (
            <SearchIdResult setView={setView} />
          ) : view === "search-password-result" ? (
            <SearchPasswordResult setView={setView} />
          ) : (
            ""
          )}

          <div className="footer-buttons">
            <ul>
              <li
                className={
                  view === "search-id-result" ||
                  view === "search-password-result"
                    ? "hide"
                    : ""
                }
                onClick={() => navigate("/register") }
              >
                가입하기
              </li>
              <li
                className={
                  view === "login" ||
                  view === "search-password-result" ||
                  view === "search-id-result"
                    ? "hide"
                    : ""
                }
                onClick={() => setView("login")}
              >
                로그인
              </li>
              {view === "search-id" || view === "search-id-result" ? (
                ""
              ) : (
                <li
                  className={
                    view === "search-id" || view === "search-id-result"
                      ? "hide"
                      : ""
                  }
                  onClick={() => setView("search-id")}
                >
                  아이디 찾기
                </li>
              )}

    

              {view !== "search-password" &&
              view !== "search-password-result" ? (
                <li onClick={() => setView("search-password")}>
                  비밀번호 찾기
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
