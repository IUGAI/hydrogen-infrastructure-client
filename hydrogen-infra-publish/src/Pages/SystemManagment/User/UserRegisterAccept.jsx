import UserMainList from "../../../components/UserList/UserMainList";
import UserRegisterAcceptList from "../../../components/UserRegisterAccept/UserRegisterAcceptList";

function UserRegisterAccept() {
  return (
    <div className="stations-dashboard user-register">
      <span>사용자 등록</span>
      <UserRegisterAcceptList />
    </div>
  );
}

export default UserRegisterAccept;
