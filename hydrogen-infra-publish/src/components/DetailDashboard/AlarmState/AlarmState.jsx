import './AlarmState.scss'
import { TfiMenuAlt } from "react-icons/tfi";
import CurentSitutationValue from "../../MainDashboard/CurrentSituation/CurentSituationValues/CurentSitutationValue";

function AlarmState() {

    const items = [
        {
          id: 1,
          name: "중요",
          quantity: "4",
          importance: true,

        },
        {
          id: 1,
          name: "일반",
          quantity: "10",
          importance: false
        },
      ];
    return (
        <div className="alarm-state-content">
        <img src="/img/marker.png" className="" />
        <div className="top">
          <span className="title-text">알람</span>
          <TfiMenuAlt size={28} color="#00B0F0" />
        </div>
        <div className="bottom">
          <div className="left">
          </div>
          <div className="right">
            {items.map((item, index) => (
              <CurentSitutationValue item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default AlarmState
