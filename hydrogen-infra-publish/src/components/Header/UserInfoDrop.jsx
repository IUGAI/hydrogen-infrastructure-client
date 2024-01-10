import { SlVolumeOff } from "react-icons/sl";
import { IoCheckmark } from "react-icons/io5";

function UserInfoDrop() {
    return (
        <div className="alarm-info-drop-modal user-info-drop-modal">
        <img src="/img/marker.png" className="img-marker" />
        <div className="circle-avatar">
        <img className="img-avatar" src="/img/user-detail-avatar.png" />
                </div>
        <div className="modal-info-header">

          <span className="modal-info-title-text">내정보</span>
        </div>
        <div className="mofal-info-content modal-info-content-user">
          <div className="work-fills">
            <div className="work-fills-label">
            <div style={{ width: "17px" }}>
                <IoCheckmark color="#2c4062" />
              </div>
              <span className="work-fills-title">관리자</span>

            </div>

          </div>
          <div className="work-fills">
            <div className="work-fills-label">
            <div style={{ width: "17px" }}>
                <IoCheckmark color="#2c4062" />
              </div>
              <span className="work-fills-title">홍길동(hongkildong_007)</span>
       
            </div>
   
          </div>
          <div className="work-fills last">
            <div className="work-fills-label">
              <div style={{ width: "17px" }}>
                <IoCheckmark color="#2c4062" />
              </div>
              <span className="work-fills-title">010-9876-5432</span>

            </div>
  
          </div>
          <div className="work-fills last">
            <button className="button-alram">정보 보기</button>
            <button className="button-alram">
              내 작업
            </button>
          </div>
        </div>
      </div>
    )
}

export default UserInfoDrop
