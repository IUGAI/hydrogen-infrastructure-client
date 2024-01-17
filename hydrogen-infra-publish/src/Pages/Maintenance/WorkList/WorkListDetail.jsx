import { TfiMenuAlt } from "react-icons/tfi";
import WorkDetailComponent from "../../../components/WorkList/WorkDetailComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function WorkListDetail() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const navigate = useNavigate();

  const handleClickReturn = () => {
    navigate("/work-list");
  };

  const handleHover = (index) => {
    setHoveredIcon(index);
  };

  return (
    <div className={`station-regist-content-main`}>
      <div className={`station-regist-header `}>
        <span>작업 조회</span>

        <div
          className="icon-circle-background"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleHover(null)}
          onClick={handleClickReturn}
        >
          {hoveredIcon === 1 && <span className="tooltip">{"목록"}</span>}
          <TfiMenuAlt color="#8da7d9" style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div className="regist-data">
        <WorkDetailComponent />
      </div>
    </div>
  );
}

export default WorkListDetail;
