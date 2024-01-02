
import WorkSearch from "../../../components/WorkList/WorkSearch";
import WorkMainList from "../../../components/WorkList/WorkMainList";

function WorkList() {
    return (
        <div className="stations-dashboard">
        <span>작업 조회</span>
        <WorkSearch />
        <WorkMainList/>
      </div>
    )
}

export default WorkList
