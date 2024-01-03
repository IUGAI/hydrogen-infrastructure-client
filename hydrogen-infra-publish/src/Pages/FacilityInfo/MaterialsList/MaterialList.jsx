import EquipmentsMainList from "../../../components/EquipmentsList/EquipmentsMainList";
import MaterialMainList from "../../../components/MaterialsInfo/MaterialMainList";
import MaterialsSearch from "../../../components/MaterialsInfo/MaterialsSearch";
function MaterialList() {
  return (
    <div className="stations-dashboard">
      <span>자재 정보</span>
      <MaterialsSearch />
      <MaterialMainList />
    </div>
  );
}

export default MaterialList;
