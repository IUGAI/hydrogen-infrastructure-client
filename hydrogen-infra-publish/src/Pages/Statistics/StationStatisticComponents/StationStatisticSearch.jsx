function StationStatisticSearch({lineGraph, barGraph, handelClickBar, handelClickLine}) {
    return (
        <div className="station-statistic-search">
          <div className="search-input-item">
            <label>시도</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
              <option>광주</option>
            </select>
          </div>
          <div className="search-input-item">
            <label>사업자</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>

            </select>
          </div>
          <div className="search-input-item">
            <label>사업소</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>

            </select>
          </div>
          <div className="search-input-item">
            <label>기간</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>

            </select>
          </div>
          <div className="search-input-item">
            <label>연도/날짜</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>

            </select>
          </div>
          <div className="search-input-item">
            <label>그래프 유형</label>
            <div className="button-container-custum">
              <button
                className={`custom-button-radio ${barGraph ? "active" : ""}`}
                onClick={handelClickBar}
              >
                막대
              </button>
              <button
                className={`custom-button-radio ${lineGraph ? "active" : ""}`}
                onClick={handelClickLine}
              >
                선형
              </button>
            </div>
          </div>
        </div>
    )
}

export default StationStatisticSearch
