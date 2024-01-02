import "./StationStatistics.scss";
import { BsFillLightningFill } from "react-icons/bs";
import { BiSolidFlask } from "react-icons/bi";
import { BsConeStriped } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { SiLeaflet } from "react-icons/si";
function StationStatistics() {
  return (
    <div className={`station-statiscit-wrapper`}>
      <div className={`station-statistic-header `}>
        <span>사업소 통계</span>
      </div>
      <div className="station-statistic-inner">
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
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
              <option>광주</option>
            </select>
          </div>
          <div className="search-input-item">
            <label>사업소</label>
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
            <label>기간</label>
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
            <label>연도/날짜</label>
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
          <label>그래프 유형</label>
          <div className="button-container-custum">
            <button className="custom-button-radio active">막대</button>
            <button className="custom-button-radio">신형</button>
          </div>
        </div>
        </div>
        <div className="station-statistic-content">
          <div className="station-statistic-aside">
              <div className="aside-item  active">
                  <span>가동</span>
                  <BsFillLightningFill color="#fff" size={20}/>
              </div>
              <div className="aside-item  ">
                  <span>가동률</span>
                  <BiSolidFlask color="#8faadc" size={20}/>
              </div>
              <div className="aside-item  ">
                  <span>고장</span>
                  <BsConeStriped color="#8faadc" size={20}/>
              </div>
              <div className="aside-item  ">
                  <span>작업</span>
                  <BsTools color="#8faadc" size={20}/>
              </div>
              <div className="aside-item  ">
                  <span>건전도</span>
                  <SiLeaflet color="#8faadc" size={20}/>
              </div>
          </div>
          <div className="station-statistic-graph"></div>
        </div>
      </div>
    </div>
  );
}

export default StationStatistics;
