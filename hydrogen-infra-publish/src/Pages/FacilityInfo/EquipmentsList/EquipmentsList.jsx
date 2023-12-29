import EquipmentsMainList from "../../../components/EquipmentsList/EquipmentsMainList";
import EquipmentsSearch from "../../../components/EquipmentsList/EquipmentsSearch";
function EquipmentsList() {
    return (
        <div className="stations-dashboard">
        <span>시설물 정보</span>
        <EquipmentsSearch />
        <EquipmentsMainList/>
      </div>
    )
}

export default EquipmentsList
