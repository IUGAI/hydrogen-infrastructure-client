import { useEffect, useState } from "react";
import AlarmState from "../../../components/DetailDashboard/AlarmState/AlarmState";
import CctvSituation from "../../../components/DetailDashboard/CctvSituation/CctvSituation";
import Detailheader from "../../../components/DetailDashboard/DetailHeader/Detailheader";
import EquipmentState from "../../../components/DetailDashboard/EquipmentsState/EquipmentState";
import OperationState from "../../../components/DetailDashboard/OpeartionState/OperationState";
import SoundnessState from "../../../components/DetailDashboard/SoundnessState/SoundnessState";
import StationSoundnessState from "../../../components/DetailDashboard/StationSoundnessState/StationSoundnessState";
import WorkSituation from "../../../components/DetailDashboard/WorkSituation/WorkSituation";
import { stations } from "../../../data/Mapdata";
import "./DetailDashboard.scss";
import { useParams } from "react-router-dom";

function DetailDashboard() {
  const [selectedstation, setselectedStaion] = useState();
  const { id } = useParams();


  useEffect(() => {
    const findStation = stations.find((obj) => obj.id === parseInt(id));
    if (!findStation) {
      return;
    }
    setselectedStaion(findStation)
  }, [id, stations]);

  return (
    <div className="detail-dashboard">
      <div className="detail-header">
        <Detailheader station={selectedstation}/>
      </div>
      <div className="detail-dashboard-conetent">
        <div className="item-1 item">
          <OperationState />
        </div>
        <div className="item-2 item">
          <SoundnessState />
        </div>
        <div className="item-3 item">
          <AlarmState />
        </div>
        <div className="item-4 item">
          <EquipmentState />
        </div>
        <div className="item-5 item">
          <StationSoundnessState />
        </div>
        <div className="item-6 item">
          <CctvSituation />
        </div>
        <div className="item-7 item">
          <WorkSituation />
        </div>
        {/* <div className="item-8 item"><EquipmentStateTest/></div> */}
      </div>
    </div>
  );
}

export default DetailDashboard;
