import { useMyContextEquipment } from "../../../context/equipmentContext";
import "./WorkSituation.scss";
import { TfiMenuAlt } from "react-icons/tfi";
function WorkSituation() {
  var total_weekly = 0;
  var today_plan = 0;
  var today_regist = 0;
  var finish_weekly = 0;
  const { state } = useMyContextEquipment();
  const { work_orders } = state.initalStation;
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  if (work_orders !== undefined && work_orders.length > 0) {
    const startOfWeek = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - currentDate.getDay()
    );
    const endOfWeek = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - currentDate.getDay() + 6
    );

    total_weekly = work_orders.filter((obj) => {
      const objDate = new Date(obj.plan_date);
      return objDate >= startOfWeek && objDate <= endOfWeek;
    }).length;

    finish_weekly = work_orders.filter((obj) => {
      const  objDate = new Date(obj.finish_date);
      return objDate >= startOfWeek && objDate <= endOfWeek;
    }).length

    today_plan = work_orders.filter(
      (obj) => {
        const objDate = new Date(obj.plan_date);
        const formattedObjDate = `${objDate.getFullYear()}-${String(objDate.getMonth() + 1).padStart(2, '0')}-${String(objDate.getDate()).padStart(2, '0')}`;
        return formattedObjDate === formattedDate;
      }
    ).length;

    today_regist  = work_orders.filter(
      (obj) => {
        const objDate = new Date(obj.regist_date);
        const formattedObjDate = `${objDate.getFullYear()}-${String(objDate.getMonth() + 1).padStart(2, '0')}-${String(objDate.getDate()).padStart(2, '0')}`;
        return formattedObjDate === formattedDate;
      }
    ).length;
  }

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
          <span className="item-work-value">{total_weekly}</span>
        </div>
        <div className="item-work">
          <span className="item-work-title">금일 예정</span>
          <span className="item-work-value">{today_plan}</span>
        </div>
        <div className="item-work">
          <span className="item-work-title">금주 완료</span>
          <span className="item-work-value">{finish_weekly}</span>
        </div>
        <div className="item-work">
          <span className="item-work-title">금일 등록</span>
          <span className="item-work-value">{today_regist}</span>
        </div>
      </div>
    </div>
  );
}

export default WorkSituation;
