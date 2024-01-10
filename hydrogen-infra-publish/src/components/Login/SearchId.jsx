import { useState } from "react";
import { useNavigate } from "react-router";
import { FaMinus } from "react-icons/fa";

function SearchId({setView}) {




  const handleClick = () => {
       setView("search-id-result")
  };
  return (
    <div className="login-inputs">
      <span className="login-title-text">아이디(ID) 찾기</span>
      <div className="input-id-search ">
        <div className="label">
          <label>이름</label>
        </div>
        <div className="input-search-id">
          <input className="text-name-input" />
        </div>
      </div>
      <div className="input-number-search">
        <div className="label">
          <label>주민 등록번호</label>
        </div>

        <div className="input-search-id">
          <input className="text-name-input text-resident" maxLength={6}/>
          <FaMinus color="#30406f"/>
          <input className="text-name-input text-resident" maxLength={7}/>
        </div>
      </div>
      <button className="button-login" onClick={handleClick}>
        아이디 잧기
      </button>
    </div>
  );
}

export default SearchId;
