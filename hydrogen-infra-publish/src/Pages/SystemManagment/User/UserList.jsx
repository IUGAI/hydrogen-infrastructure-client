import FailureMainList from "../../../components/FailureList/FailureMainList"
import UserMainList from "../../../components/UserList/UserMainList"
import UserSearch from "../../../components/UserList/UserSearch"

function UserList() {
    return (
        <div className="stations-dashboard">
        <span>사용자 관리</span>
        <UserSearch />
        <UserMainList/>
      </div>
    )
}

export default UserList
