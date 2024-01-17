import { FaPlus } from "react-icons/fa";
import { IoSaveOutline } from "react-icons/io5";

function CommonSettingsEtc() {
  return (
    <div className="common-settings-alarm">
      <div className="common-settings-alarm-left-etc">
        <span className="text-instructions">
          시설물에 관한 중요 또는 일반 알람에 대해 사용자에게 메시지를
          전달합니다. <p>소리, 주기, 메시지, 대상 등을 설정할 수 있습니다.</p>
        </span>

        <div className="item-sections">
          <div className="common-title">
            <span className="title-label">내구연한</span>
          </div>
          <div className="common-settings">
            <div className="commons-settings-inner">
              <ul>
                <li>1년</li>
                <li>2년</li>
              </ul>
            </div>
            <div className="common-inner-add">
              <input className="common-add"></input>
              <div className="button-conatiner">
                <button className="common-button text">년</button>
                <button className="common-button">
                  <FaPlus size={20} color="#8FAADC" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="item-sections">
          <div className="common-title">
            <span className="title-label">작업 종류</span>
          </div>
          <div className="common-settings">
            <div className="commons-settings-inner">
              <ul>
                <li>정기점검</li>
                <li>단순수리</li>
              </ul>
            </div>
            <div className="common-inner-add">
              <input className="common-add"></input>
              <div className="button-conatiner">
                <button className="common-button">
                  <FaPlus size={20} color="#8FAADC" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="item-sections">
          <div className="common-title">
            <span className="title-label">작업 종류</span>
          </div>
          <div className="common-settings">
            <div className="commons-settings-inner">
              <ul>
                <li>수리 완료</li>
                <li>수리 불가</li>
              </ul>
            </div>
            <div className="common-inner-add">
              <input className="common-add"></input>
              <div className="button-conatiner">
                <button className="common-button">
                  <IoSaveOutline size={20} color="#8FAADC" />
                </button>
                <button className="common-button">
                  <FaPlus size={20} color="#8FAADC" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="item-sections">
          <div className="common-title">
            <span className="title-label">작업 종류</span>
          </div>
          <div className="common-settings">
            <div className="commons-settings-inner">
              <ul>
                <li>A type</li>
                <li>B type</li>
              </ul>
            </div>
            <div className="common-inner-add">
              <input className="common-add"></input>
              <div className="button-conatiner">
                <button className="common-button">
                  <FaPlus size={20} color="#8FAADC" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CommonSettingsEtc;
