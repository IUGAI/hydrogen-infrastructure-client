import { IoMdClose } from "react-icons/io";

function StationModalInfo({setStationInfoModal}) {
    return (
        <div className="modal-info">
        <div className="modal-info-wrapper">
          <img src="/img/marker.png" className="img-marker" />
          <div className="modal-info-header">
            <span className="modal-info-title-text">사업소 정보</span>
            <IoMdClose
              size={24}
              onClick={() => setStationInfoModal(false)}
              color="#3c4f85"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="mofal-info-content">
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">사업소</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">서울 A 사업소</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">관리주체</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">국토부</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">소재지</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">
                  부산광역시 XX구 XX로 000-00
                </span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">사업자등록번호</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">987-65-43210</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">인가일</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">2023.01.01</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">개시일</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">2023.02.01</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">관리자(정)</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">
                  이몽룡 | 010-9999-8888
                </span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">관리자(부)</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">
                  성춘향 | 010-7777-6666
                </span>
              </div>
            </div>
            <div className="work-fills last">
              <div className="work-fills-label">
                <span className="work-fills-title">전화번호</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">051-1234-5678</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default StationModalInfo
