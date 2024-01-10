import PremissionsSettingsSearch from "../../../components/PremissionsSettings/PremissionsSettingsSearch";
import PremissionsSettingsMainList from "../../../components/PremissionsSettings/PremissionsSettingsMainList";

function PremissionsSetting() {
  return (
    <div className="stations-dashboard premmisions">
      <span>권한 설정</span>
      <PremissionsSettingsSearch />
      <PremissionsSettingsMainList />
    </div>
  );
}

export default PremissionsSetting;
