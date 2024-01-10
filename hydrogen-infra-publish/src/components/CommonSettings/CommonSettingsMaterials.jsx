import { IoSaveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
function CommonSettingsMaterials() {
  return (
    <div className="common-settings-alarm">
      <div className="common-settings-materials">
        <span className="text-instructions">
          시설물에 관한 중요 또는 일반 알람에 대해 사용자에게 메시지를
          전달합니다. <p>소리, 주기, 메시지, 대상 등을 설정할 수 있습니다.</p>
        </span>
        <div className="common-settings-classifications-inner">
          <div className="major_classification classification">
            <div className="classification-inner">
              <div className="classification-header">대분류</div>
              <div className="classification-inner-content">
                <ul>
                  <li>A-1</li>
                  <li>A-2</li>
                  <li>A-3</li>
                </ul>
              </div>
            </div>
            <div className="classification-inner-current">
              <input className="classification-edit"></input>
              <div className="button-conatiner">
              <button className="classification-button">
                <IoSaveOutline size={20} color="#8FAADC" />
              </button>
              <button className="classification-button">
                <RiDeleteBin6Line size={20} color="#8FAADC" />
              </button>
              </div>
            </div>
            <div className="classification-inner-add">
            <input className="classification-add"></input>
            <div className="button-conatiner">
            <button className="classification-button">
                <FaPlus size={20} color="#8FAADC" />
              </button>
            </div>

            </div>
          </div>
          <div className="middle_classification classification">
            <div className="classification-inner">
              <div className="classification-header">중분류</div>
              <div className="classification-inner-content">
                <ul>
                  <li>B-1</li>
                  <li>B-2</li>
                  <li>B-3</li>
                </ul>
              </div>
            </div>
            <div className="classification-inner-current">
              <input className="classification-edit"></input>
              <div className="button-conatiner">
              <button className="classification-button">
                <IoSaveOutline size={20} color="#8FAADC" />
              </button>
              <button className="classification-button">
                <RiDeleteBin6Line size={20} color="#8FAADC" />
              </button>
              </div>
            </div>
            <div className="classification-inner-add">
            <input className="classification-add"></input>
            <div className="button-conatiner">
            <button className="classification-button">
                <FaPlus size={20} color="#8FAADC" />
              </button>
            </div>

            </div>
          </div>
          <div className="small_classification classification">
            <div className="classification-inner">
              <div className="classification-header">소분류</div>
              <div className="classification-inner-content">
                <ul>
                  <li>C-1</li>
                  <li>C-2</li>
                  <li>C-3</li>
                  <li>C-4</li>
                  <li>C-5</li>
                  <li>C-6</li>
                  <li>C-7</li>
                  <li>C-8</li>
                </ul>
              </div>
            </div>
            <div className="classification-inner-current">
              <input className="classification-edit"></input>
              <div className="button-conatiner">
              <button className="classification-button">
                <IoSaveOutline size={20} color="#8FAADC" />
              </button>
              <button className="classification-button">
                <RiDeleteBin6Line size={20} color="#8FAADC" />
              </button>
              </div>
            </div>
            <div className="classification-inner-add">
            <input className="classification-add"></input>
            <div className="button-conatiner">
            <button className="classification-button">
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

export default CommonSettingsMaterials;
