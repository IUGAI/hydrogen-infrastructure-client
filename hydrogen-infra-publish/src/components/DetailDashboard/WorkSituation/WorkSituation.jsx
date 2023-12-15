import "./WorkSituation.scss";
import { TfiMenuAlt } from "react-icons/tfi";
function WorkSituation() {
  return (
    <div className="work-situation-state-content">
      <img src="/img/marker.png" className="" />
      <div className="top">
        <span className="title-text">유지 관리 작업</span>
        <TfiMenuAlt size={28} color="#00B0F0" />
      </div>
      <div className="bottom">
        <div className="item-work">
          <span className="item-work-title">금주 작업</span>
          <span className="item-work-value">10</span>
        </div>
        <div className="item-work">
          <span className="item-work-title">금일 예정</span>
          <span className="item-work-value">2</span>
        </div>
        <div className="item-work">
          <span className="item-work-title">금주 완료</span>
          <span className="item-work-value">15</span>
        </div>
        <div className="item-work">
          <span className="item-work-title">금일 등록</span>
          <span className="item-work-value">20</span>
        </div>
      </div>
    </div>
  );
}

export default WorkSituation;
