import "./EquipmentStateItem.scss";
import { RxDotFilled } from "react-icons/rx";
import { styled, keyframes } from "styled-components";
import { BsSpeedometer } from "react-icons/bs";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";

function EquipmentStateItem({ item }) {
  const {
    type,
    failure,
    max_capacity,
    procentage,
    temperature,
    equipment_name,
    current_weight,
    soundness,
  } = item;

  const moveAndFade = keyframes`
  0% {
    top: 100px;
    opacity: 1;
  }
  100% {
    top: 10px;
    opacity: 0;
  }
`;

  const StyledSoundness = styled.div`
    height: 18px;
    width: 75px;
    border-radius: 10px;
    border: 1px solid #35477b;
    background: linear-gradient(to left, #92d050 0%, #212c4b ${soundness}%);
  `;

  const BatteryLiquid = styled.div`
    z-index: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${(props) => props.procentage}%;
    background: ${(props) =>
      props.x === 1
        ? "linear-gradient(to top, #118be3 20%, #00b0f0 91%)"
        : props.x === 2
        ? "linear-gradient(to top, #ffc926 20%, #ffe594 91%)"
        : "linear-gradient(to top, #62943b 20% , #92d050 91%)"};
    transition: 0.3s;
    box-shadow: ${(props) =>
      props.x === 1
        ? "0 0 10px 5px rgba(17, 139, 227, 0.5)"
        : props.x === 2
        ? "0 0 10px 5px rgba(115,98,47,255)"
        : "0 0 10px 5px rgba(77,109,77,25)"};

    img {
      width: 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      animation: ${moveAndFade} 3s ease infinite;
    }
  `;

  const BatteryPill = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 3rem;
    background: #1c2641;
    border: 1px solid #253255;
    justify-self: flex-end;
  `;

  const BatteryLevel = styled.div`
    position: absolute;
    inset: 0;
    padding: 30px;
    border-radius: 3rem;
    overflow: hidden;
  `;

  const StyledOuter = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    position: relative;
    border-radius: 3rem;
    align-items: flex-end;
    background: #1c2641;
    border: 1px solid #253255;

    .inner {
      width: 100%;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      border-radius: 0 0 3rem 3rem;
      height: ${(props) => props.procentage}%;
      position: relative;
      background: ${(props) =>
        props.x === 1
          ? "linear-gradient(to top, #118be3 20%, #00b0f0 91%)"
          : props.x === 2
          ? "linear-gradient(to top, #ffc926 20%, #ffe594 91%)"
          : "linear-gradient(to top, #62943b 20% , #92d050 91%)"};
      box-shadow: ${(props) =>
        props.x === 1
          ? "0 0 10px 5px rgba(17, 139, 227, 0.5)"
          : props.x === 2
          ? "0 0 10px 5px rgba(115,98,47,255)"
          : "0 0 10px 5px rgba(77,109,77,25)"};

      img {
        width: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        animation: ${moveAndFade} 3s ease infinite;
      }
    }
  `;

  const colorFailure = failure ? "#fe609a" : "#00B0F0";

  return (
    <div className="equipment-item-content">
      <div className="top">
        <div className="title-name">
          <RxDotFilled color={colorFailure} size={36} />
          {type === 1 ? (
            <span>생산</span>
          ) : type === 2 ? (
            <span>저장</span>
          ) : (
            <span>충전</span>
          )}
        </div>
        <StyledSoundness />
      </div>
      <div className="mid">
        <BatteryPill>
          <BatteryLevel x={type}>
            <BatteryLiquid x={type} procentage={procentage}>
              {type === 1 ? (
                <img src="./img/buble_big.png" alt="img" />
              ) : type === 2 ? (
                <img src="./img/buble_big_2.png" alt="img" />
              ) : (
                <img src="./img/buble_big_3.png" alt="img" />
              )}
            </BatteryLiquid>
          </BatteryLevel>
        </BatteryPill>

        {/* <StyledOuter procentage={procentage} x={type}>
          <div className="inner">
            {type === 1 ? (
              <img src="./img/buble_big.png" alt="img" />
            ) : type === 2 ? (
              <img src="./img/buble_big_2.png" alt="img" />
            ) : (
              <img src="./img/buble_big_3.png" alt="img" />
            )}
          </div>
        </StyledOuter> */}
        <div className="middle-values">
          <span className="text-current">
            {current_weight}
            <span className="text-unit">kg</span>
          </span>
          <div className="vertical-line"></div>
          <div
            className={
              type === 1
                ? "bottom-text production"
                : type == 2
                ? "bottom-text storaging"
                : "bottom-text charging"
            }
          >
            {procentage}%
          </div>
        </div>
      </div>
      <div className="bottom-values">
        <div className="header-values">
          <div className="right-value">
            <BsSpeedometer size={21} color="#284f7b" />
            <span className="item-value-cnt">{max_capacity}</span>
            <span>bar</span>
          </div>
          <div className="left-value">
            <FaTemperatureThreeQuarters size={21} color="#284f7b" />
            <span className="item-value-cnt">{temperature}</span>
            <span>℃</span>
          </div>
        </div>
        <div className="title-name">{equipment_name}</div>
      </div>
    </div>
  );
}

export default EquipmentStateItem;
