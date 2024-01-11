import { TiEdit } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

function WorkDetailComponent() {
  const navigate = useNavigate();
  const path = useLocation();

  const id = path.pathname.slice(11, 19);

  const handleNavigate = () => {
    navigate(`/work-edit/${id}`);
  };

  const handleNavigateReport = () => {
    navigate(`/work-report-edit/${id}`);
  };
  return (
    <>
      <div className="station-regist-content work-detail-content">
        <div className={`station-regist-station-add full-width}`}>
          <img src="/img/marker.png" className="img-marker" />
          <div className="station-regist-station-add-header">
            <div className="station-regist-header-add-left">
              <span className="station-title-kor">작업</span>
              <MdEdit
                style={{ marginLeft: "25px" }}
                size={20}
                color="#5e76ba"
              />
              <span className="work-write-date">2023.06.01.</span>
              <span className="work-writter"> 홍길동</span>
            </div>
            <span className="station-title-notice">
              <TiEdit
                style={{ cursor: "pointer" }}
                size={30}
                onClick={handleNavigate}
              />
            </span>
          </div>
          <div className="station-regist-station-add-input work-detail">
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">사업소</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">서울 A 사업소</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">대상 시설물</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">서울-A-생산01</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">고장 정보</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">GS20230101</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">작업명</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">서울-A-생산01</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">시작일시</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">2023-06-05 10:00</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">종료일시</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">2023-06-05 17:00</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">작업번호</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">W-20230605001</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">작업자</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">나성실</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">작업종류</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">정기점검</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">알람</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">비정기, 작업 2시간 전</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">작업내용</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">작업 내용...</span>

                <ul style={{ marginTop: "10px" }}>
                  <li>작업 1</li>
                  <li>작업 2</li>
                  <li>작업 3</li>
                  <li>작업 4</li>
                </ul>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">사용자재</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <ul>
                  <li>자재 1</li>
                  <li>자재 2</li>
                  <li>자재 3</li>
                  <li>자재 4</li>
                </ul>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">사용자재</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <ul>
                  <li>참부자료1.jpg</li>
                  <li>참부자료2.jpg</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="station-regist-content work-detail-content">
        <div className={`station-regist-station-add full-width}`}>
          <img src="/img/marker.png" className="img-marker" />
          <div className="station-regist-station-add-header">
            <div className="station-regist-header-add-left">
              <span className="station-title-kor">결과보고서</span>
              <MdEdit
                style={{ marginLeft: "25px", cursor: "pointer" }}
                size={20}
                color="#5e76ba"
              />
              <span className="work-write-date">2023.06.05.</span>
              <span className="work-writter"> 나성실</span>
            </div>
            <span className="station-title-notice">
              <TiEdit
                style={{ cursor: "pointer" }}
                size={30}
                onClick={handleNavigateReport}
              />
            </span>
          </div>
          <div className="station-regist-station-add-input work-detail">
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">사업소</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">서울 A 사업소</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">대상 시설물</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">서울-A-생산01</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">고장 정보</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">GS20230101</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">작업명</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">서울-A-생산01</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">시작일시</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">2023-06-05 10:00</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">종료일시</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">2023-06-05 17:00</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">작업번호</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">W-20230605001</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">작업자</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">나성실</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">작업종류</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">정기점검</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">작업결과</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">이상없음</span>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">작업내용 및 결과</span>
              </div>
              <div className="work-fills-content">
                <span className="work-fills-text">작업 내용 및 결과 ...</span>

                <ul style={{ marginTop: "10px" }}>
                  <li>작업 1 & 결과</li>
                  <li>작업 2 & 결과</li>
                  <li>작업 3 & 결과</li>
                  <li>작업 4 & 결과</li>
                </ul>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">사용자재</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <ul>
                  <li>자재 1</li>
                  <li>자재 2</li>
                  <li>자재 3</li>
                  <li>자재 4</li>
                  <li>자재 5</li>
                </ul>
              </div>
            </div>
            <div className="work-fills">
              <div className="work-fills-label">
                <span className="work-fills-title">사용자재</span>
                <span className="essential-mark"> *</span>
              </div>
              <div className="work-fills-content">
                <ul>
                  <li>참부자료1.pdf</li>
                  <li>참부자료2.jpg</li>
                  <li>참부자료3.hwp</li>
                  <li>참부자료4.xlsx</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkDetailComponent;
