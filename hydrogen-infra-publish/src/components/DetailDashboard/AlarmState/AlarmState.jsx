import './AlarmState.scss'
import { TfiMenuAlt } from "react-icons/tfi";
import CurentSitutationValue from "../../MainDashboard/CurrentSituation/CurentSituationValues/CurentSitutationValue";
import { useMyContextEquipment } from '../../../context/equipmentContext';

function AlarmState() {
  const { state } = useMyContextEquipment();
  const {alarms} = state.initalStation; 
  var important_alarm = 0;
  var default_alarm = 0;

  if (alarms !== undefined && alarms.length > 0) {
    important_alarm = alarms.filter((item) => item.importance === 2).length;
    default_alarm = alarms.filter((item) => item.importance === 1).length;
  }



    const items = [
        {
          id: 1,
          name: "중요",
          quantity: important_alarm,
          importance: true,

        },
        {
          id: 1,
          name: "일반",
          quantity: default_alarm,
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
