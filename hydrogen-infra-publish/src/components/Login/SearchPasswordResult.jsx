function SearchPasswordResult({ setView }) {
  return (
    <div className="login-inputs">
      <span className="login-title-text">비밀번호(password) 찾기</span>
      <div className="input-id-search ">
        <span className="span-title">홍길동 님의 비밀번호.</span>
      </div>
      <div className="input-id-search">
        <span className="span-result">*hong_123!#</span>
      </div>
      <button className="button-login" onClick={() => setView("login")}>
        로그인
      </button>
    </div>
  );
}

export default SearchPasswordResult;
