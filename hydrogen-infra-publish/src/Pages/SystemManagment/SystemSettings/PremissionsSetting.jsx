import MaterialMainList from "../../../components/MaterialsInfo/MaterialMainList"
import MaterialsSearch from "../../../components/MaterialsInfo/MaterialsSearch"
import PremissionsSettingsSearch from "../../../components/PremissionsSettings/PremissionsSettingsSearch"

function PremissionsSetting() {
    return (
        <div className="stations-dashboard premmisions">
        <span>권한 설정</span>
        <PremissionsSettingsSearch />
        <MaterialMainList />
      </div>
    )
}

export default PremissionsSetting
