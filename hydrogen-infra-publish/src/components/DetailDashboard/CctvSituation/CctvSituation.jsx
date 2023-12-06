import "./CctvSituation.scss";

function CctvSituation() {
  return (
    <div className="cctv-situation-content">
      <div className="cctv-item">
        <div className="top">
          <img src="./img/cctv-img.png" alt="cctv" className="img-icon " />
        </div>
        <div className="bottom">
          <span>A - 1 구역</span>
        </div>
      </div>
      <div className="cctv-item">
        <div className="top">
          <img src="./img/cctv2.png" alt="cctv" className="img-icon default" />
        </div>
        <div className="bottom">
          <span>not connected</span>
        </div>
      </div>
      <div className="cctv-item">
        <div className="top">
          <img src="./img/cctv2.png" alt="cctv" className="img-icon default" />
        </div>
        <div className="bottom">
          <span>not connected</span>
        </div>
      </div>
      <div className="cctv-item">
        <div className="top">
          <img src="./img/cctv2.png" alt="cctv" className="img-icon default" />
        </div>
        <div className="bottom">
          <span>not connected</span>
        </div>
      </div>
      <div className="cctv-item">
        <div className="top">
          <img src="./img/cctv2.png" alt="cctv" className="img-icon default" />
        </div>
        <div className="bottom">
          <span>not connected</span>
        </div>
      </div>

      
    </div>
  );
}

export default CctvSituation;
