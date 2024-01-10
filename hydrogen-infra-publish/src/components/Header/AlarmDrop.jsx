import { SlVolumeOff } from "react-icons/sl";
import { IoCheckmark } from "react-icons/io5";

function AlarmDrop() {
    return (
        <div className="alarm-info-drop-modal">
        <img src="/img/marker.png" className="img-marker" />
        <div className="modal-info-header">
          <span className="modal-info-title-text">알람</span>
        </div>
        <div className="mofal-info-content">
          <div className="work-fills">
            <div className="work-fills-label">
              <IoCheckmark color="#2c4062" />
              <span className="work-fills-title important">중요:</span>
              <span className="work-fills-title">A 시설물 압력 저하</span>
            </div>
            <div className="work-fills-content">
              <span className="work-fills-text">1분 전</span>
            </div>
          </div>
          <div className="work-fills">
            <div className="work-fills-label">
              <IoCheckmark color="#2c4062" />
              <span className="work-fills-title">일반:</span>
              <span className="work-fills-title">정기 점검 알림</span>
            </div>
            <div className="work-fills-content">
              <span className="work-fills-text">46분 전</span>
            </div>
          </div>
          <div className="work-fills last">
            <div className="work-fills-label">
              <div style={{ width: "17px" }}>
                {/* <IoCheckmark color="#2c4062" /> */}
              </div>
              <span className="work-fills-title">일반:</span>
              <span className="work-fills-title">새 작업 등록</span>
            </div>
            <div className="work-fills-content">
              <span className="work-fills-text">10:57:33</span>
            </div>
          </div>
          <div className="work-fills last">
            <button className="button-alram">내역 보기</button>
            <button className="button-alram">
              <SlVolumeOff />
              알람음 끄기
            </button>
          </div>
        </div>
      </div>
    )
}

export default AlarmDrop
