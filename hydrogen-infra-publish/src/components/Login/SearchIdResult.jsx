function SearchPasswordResult({setView}) {
  return (
    <div className="login-inputs">
      <span className="login-title-text">아이디(ID) 찾기</span>
      <div className="input-id-search ">
        <span className="span-title">홍길동 님의 아이디는.</span>
      </div>
      <div className="input-id-search">
        <span className="span-result">hongkildong_007.</span>
      </div>
      <button className="button-login" onClick={()=> setView('login')}>로그인</button>
    </div>
  );
}

export default SearchPasswordResult;
