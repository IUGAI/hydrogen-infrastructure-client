import { useState } from "react";
import { useNavigate } from "react-router";
import { FaUserLarge } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";

function LoginComponent() {
  const [visiable, setvisiable] = useState(false);
  const [id, setId] = useState("user");
  const [password, setPassword] = useState("123123");

  const navigate = useNavigate();

  const handleClick = () => {
    if (id === "user" && password === "123123") {
      navigate("/");
    }
  };
  return (
    <div className="login-inputs">
      <span className="login-title-text">Login</span>
      <div className="input-id ">
        <FaUserLarge size={23} />
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="input-type-id"
          placeholder="아이디"
        />
      </div>
      <div className="input-pw">
        <FaLock size={23} />
        <input
          type={visiable ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-type-id"
          placeholder="비밀번호"
        />
        {visiable ? (
          <MdOutlineVisibilityOff
            size={23}
            color="#8faadc"
            style={{ cursor: "pointer" }}
            onClick={() => setvisiable(!visiable)}
          />
        ) : (
          <MdOutlineVisibility
            size={23}
            color="#8faadc"
            style={{ cursor: "pointer" }}
            onClick={() => setvisiable(!visiable)}
          />
        )}
      </div>
      <button className="button-login" onClick={handleClick}>
        로그인
      </button>
    </div>
  );
}

export default LoginComponent;
