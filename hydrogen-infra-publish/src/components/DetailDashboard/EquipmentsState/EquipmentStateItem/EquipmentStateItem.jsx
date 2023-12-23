/* eslint-disable react/jsx-key */
import "./EquipmentStateItem.scss";
import { RxDotFilled } from "react-icons/rx";
import { styled, keyframes } from "styled-components";
import { BsSpeedometer } from "react-icons/bs";
import Switch from "@mui/material/Switch";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { useState } from "react";
const label = { inputProps: { "aria-label": "Switch demo" } };
import { PieChart, Pie, Cell } from "recharts";
import { statisticbyhours } from "../../../../data/statisticData";
import { useMediaQuery } from "react-responsive";

function EquipmentStateItem({ item, index, onClick, isSelected }) {
  const [detail, setDetail] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 1536 });
  const isMediumScreen = useMediaQuery({maxWidth: 1987});

  const RADIAN = Math.PI / 180;
  const data = [
    { name: "A", value: 200, dip: 100 },
    { name: "B", value: 200, dip: 300 },
    { name: "C", value: 200, dip: 500 },
    { name: "D", value: 200, dip: 700 },
  ];

  const cx = isSmallScreen ? 90 : 90;
  const cy = isSmallScreen ? 130 : 130;
  const iR = isSmallScreen ? 50 : 50;
  const oR = isSmallScreen ? 70 : 70;

  const needle = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    const textX = x0;
    const textY = y0 + r + 13;

    return [
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />, // eslint-disable-next-line react/jsx-key
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} // eslint-disable-next-line react/jsx-key
        stroke="#none"
        fill={color}
      />,
      <text
        key="text"
        x={textX}
        y={textY}
        textAnchor="middle"
        fill="#fff"
        style={{ fontSize: isSmallScreen ? "10px" : "14px" }}
      >
        bar
      </text>,
    ];
  };

  const needle_temperature = (value, data, cx, cy, iR, oR, color) => {
    let total = 0;
    data.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    const textX = x0;
    const textY = y0 + r + 15;

    return [
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />, // eslint-disable-next-line react/jsx-key
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} // eslint-disable-next-line react/jsx-key
        stroke="#none"
        fill={color}
      />,
      <text
        key="text"
        x={textX}
        y={textY}
        textAnchor="middle"
        fill="#fff"
        style={{ fontSize: isSmallScreen ? "10px" : "14px" }}
      >
        ℃
      </text>,
    ];
  };
  const handleClick = () => {
    onClick(item.id, index);
  };

  let backgroundColor =
    isSelected === "clicked"
      ? "clicked-item"
      : isSelected === "reduce"
      ? "reduce"
      : "";

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
    height: ${isSmallScreen ? "15px" : "18px"};
    width: ${isSmallScreen ? "40px" : "75px"};
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
    width: ${(props) =>
      props.isSelected === "reduce"
        ? "40px"
        : isSmallScreen
        ? "100px"
        : " 160px"};
    height: ${isSmallScreen ? "120px" : "180px"};
    border-radius: ${isSmallScreen ? "2rem" : "3rem"};
    background: #1c2641;
    box-shadow: ${(props) =>
      props.x === 1
        ? "0 0 10px 5px rgba(17, 139, 227, 0.5)"
        : props.x === 2
        ? "0 0 10px 5px rgba(115,98,47,255)"
        : "0 0 10px 5px rgba(77,109,77,25)"};
    border: 1px solid #253255;
    justify-self: flex-end;
  `;

  const BatteryLevel = styled.div`
    position: absolute;
    inset: 0;
    border-radius: ${isSmallScreen ? "2rem" : "3rem"};
    overflow: hidden;
  `;

  const StyledItem = styled.div`
    height:  75%;
    border-radius: 3rem;
    background-color: #2b3a63;
    width: 60%;
    ${(props) => (props.x === 0 ? "opacity: 0.8;" : "")}
    margin-right: 5%;
    position: relative;

    .battery__level {
      position: absolute;
      inset: 0;
      border-radius: 3rem;
      border: none;
      overflow: hidden;

      .battery__liquid {
        position: absolute;
        bottom: 0;
        left: 0;
        ${(props) => (props.x === 0 ? "" : "border-top: 2px solid;")}

        right: 0;
        height: ${(props) => props.x}%;
        background: linear-gradient(
          to top,
          #206cd5 20%,
          #0796cf 61%,
          #127aaf 91%
        );
        ${(props) => (props.x === 0 ? "" : "box-shadow:  0 0 10px 1px #fff;")}
      }
    }
  `;

  const colorFailure = failure ? "#fe609a" : item.type === null ? "#35477b" :  "#00B0F0";

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    dip,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.5;

    // Угол для середины сегмента
    const mainAngle = midAngle > 180 ? midAngle - 360 : midAngle;
    const sinMain = Math.sin(-mainAngle * RADIAN);
    const cosMain = Math.cos(-mainAngle * RADIAN);

    const labelX = cx + radius * cosMain;
    const labelY = cy + radius * sinMain;

    return (
      <text
        x={labelX}
        y={labelY}
        fill="#fff"
        textAnchor={cosMain > 0 ? "start" : "end"}
        dominantBaseline="central"
        style={{ fontSize: isSmallScreen ? "10px" : "14px" }}
      >
        {dip}
      </text>
    );
  };

  return (
    <div
      className={`equipment-item-content ${backgroundColor}`}
      onClick={item.type === null ? () => {} : handleClick}
    >
      <div className={`top ${backgroundColor}`}>
        <div className="title-name">
          <RxDotFilled color={colorFailure} size={isSmallScreen ? 12 : 30} />
          {type === 1 ? (
            <span>생산</span>
          ) : type === 2 ? (
            <span>저장</span>
          ) : type === 3 ? (
            <span>충전</span>
          ) : (
            <span></span>
          )}
        </div>
        {isSelected === "reduce" ? (
          ""
        ) : isSelected === "clicked" ? (
          <div className="switch-soundess">
            <Switch
              {...label}
              onChange={(event) => {
                setDetail(event.target.checked);
              }}
            />
            <StyledSoundness />
          </div>
        ) : (
          <StyledSoundness />
        )}
      </div>

      <div className={`items-mid ${backgroundColor}`}>
        <div className={`mid`}>
          {item.type === null ? (
            <div className="imgs">
              <img
                src="/img/equipment-empty.png"
                alt="empty"
                className="empty-img"
              />
            </div>
          ) : (
            <BatteryPill isSelected={isSelected} x={type}>
              <BatteryLevel x={type}>
                <BatteryLiquid x={type} procentage={procentage}>
                  {type === 1 ? (
                    <img src="/img/buble_big.png" alt="img" />
                  ) : type === 2 ? (
                    <img src="/img/buble_big_2.png" alt="img" />
                  ) : (
                    <img src="/img/buble_big_3.png" alt="img" />
                  )}
                </BatteryLiquid>
              </BatteryLevel>
            </BatteryPill>
          )}
          {item.type === null ? (
            " "
          ) : (
            <div className="middle-values">
              {isSelected === "reduce" ? (
                <></>
              ) : (
                <span className="text-current">
                  {current_weight}
                  <span className="text-unit">kg</span>
                </span>
              )}

              {isSelected === "reduce" ? (
                <></>
              ) : (
                <div className="vertical-line"></div>
              )}
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
          )}
        </div>

        {isSelected === "clicked" ? (
          <div className="mid-values-graph">
            {!detail ? (
              <div className="mid-values-chart">
                <div className="mid-vlues-chart-one">
                  <PieChart
                    width={isSmallScreen ? 200 : 210}
                    height={isSmallScreen ? 160 : 200}
                  >
                    <defs>
                      <linearGradient
                        id="gradient1"
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="30%" stopColor="#35aaa8" />
                        <stop offset="60%" stopColor="#1b8eb4" />
                        <stop offset="90%" stopColor="#0778bd" />
                      </linearGradient>
                      <linearGradient
                        id="gradient2"
                        x1="0"
                        y1="1"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="30%" stopColor="#39afa7" />
                        <stop offset="60%" stopColor="#53c295" />
                        <stop offset="90%" stopColor="#73c973" />
                      </linearGradient>
                      <linearGradient
                        id="gradient3"
                        x1="0"
                        y1="1"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="30%" stopColor="#81cc62" />
                        <stop offset="60%" stopColor="#b1cb38" />
                        <stop offset="90%" stopColor="#d5c61f" />
                      </linearGradient>
                      <linearGradient
                        id="gradient4"
                        x1="0"
                        y1="1"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="30%" stopColor="#f49e00" />
                        <stop offset="60%" stopColor="#dd5900" />
                        <stop offset="90%" stopColor="#c12305" />
                      </linearGradient>
                    </defs>
                    <Pie
                      labelLine={false}
                      dataKey="value"
                      startAngle={180}
                      endAngle={0}
                      data={data}
                      cx={cx}
                      cy={cy}
                      innerRadius={iR}
                      outerRadius={oR}
                      stroke="#5e76ba"
                      label={renderCustomizedLabel}
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={`url(#${
                            index % 4 === 0
                              ? "gradient1"
                              : index % 4 === 1
                              ? "gradient2"
                              : index % 4 === 2
                              ? "gradient3"
                              : "gradient4"
                          })`}
                        />
                      ))}
                    </Pie>
                    {needle(350, data, cx, cy, iR, oR, "#5e76ba")}
                  </PieChart>
                  <div className="text-graph-container">
                    <span className="graph-text-value">350</span>
                    <span className="grapht-text-unit"> bar</span>
                  </div>
                </div>

                <div className="mid-vlues-chart-one">
                  <PieChart
                    width={isSmallScreen ? 190 : 200}
                    height={isSmallScreen ? 160 : 200}
                  >
                    <defs>
                      <linearGradient
                        id="gradient-1"
                        x1="0"
                        y1="1"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="30%" stopColor="#2889a2" />
                        <stop offset="60%" stopColor="#49a088" />
                        <stop offset="90%" stopColor="#60af76" />
                      </linearGradient>
                      <linearGradient
                        id="gradient-2"
                        x1="0"
                        y1="1"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="30%" stopColor="#8dcd54" />
                        <stop offset="60%" stopColor="#c2c92c" />
                        <stop offset="90%" stopColor="#d4c61f" />
                      </linearGradient>
                      <linearGradient
                        id="gradient-3"
                        x1="0"
                        y1="1"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="30%" stopColor="#fcb600" />
                        <stop offset="60%" stopColor="#f5a400" />
                        <stop offset="90%" stopColor="#e36d00" />
                      </linearGradient>
                      <linearGradient
                        id="gradient-4"
                        x1="0"
                        y1="1"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="30%" stopColor="#dd5a00" />
                        <stop offset="60%" stopColor="#d13500" />
                        <stop offset="90%" stopColor="#c51000" />
                      </linearGradient>
                    </defs>
                    <Pie
                      dataKey="value"
                      startAngle={180}
                      endAngle={0}
                      data={data}
                      cx={cx}
                      cy={cy}
                      label={renderCustomizedLabel}
                      innerRadius={iR}
                      labelLine={false}
                      outerRadius={oR}
                      fill="#8884d8"
                      stroke="#5e76ba"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={`url(#${
                            index % 4 === 0
                              ? "gradient-1"
                              : index % 4 === 1
                              ? "gradient-2"
                              : index % 4 === 2
                              ? "gradient-3"
                              : "gradient-4"
                          })`}
                        />
                      ))}
                    </Pie>
                    {needle_temperature(730, data, cx, cy, iR, oR, "#5e76ba")}
                  </PieChart>
                  <div className="text-graph-container">
                    <span className="graph-text-value">730</span>
                    <span className="graph-text-unit"> ℃</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mid-vlues-chart-one-bar">
                <div className="wrap-container">
                  <div className="text-container">
                    <p>32kg</p>
                  </div>
                  <div className="vertical-line-s"></div>
                </div>
                <div className="wrap-container">
                  <div className="text-container">
                    <p>{isSmallScreen ? "28kg"  : "28kg"}</p>
                  </div>
                  <div className="vertical-line-s"></div>
                </div>
                <div className="wrap-container">
                  <div className="text-container">
                    <p>24kg</p>
                  </div>
                  <div className="vertical-line-s"></div>
                </div>
                <div className="wrap-container">
                  <div className="text-container">
                    <p>{isSmallScreen ? "18kg"  : "20kg"}</p>
                  </div>
                  <div className="vertical-line-s"></div>
                </div>

                <div className="wrap-container">
                  <div className="text-container">
                    <p>{isSmallScreen ? "12kg"  : "16kg"}</p>
                  </div>
                  <div className="vertical-line-s"></div>
                </div>
                {isSmallScreen ? (
                  ""
                ) : (
                  <div className="wrap-container">
                    <div className="text-container">
                      <p>12kg</p>
                    </div>
                    <div className="vertical-line-s"></div>
                  </div>
                )}
                <div className="wrap-container">
                  <div className="text-container">
                    <p>{isSmallScreen ? "6kg"  : "8kg"}</p>
                  </div>
                  <div className="vertical-line-s"></div>
                </div>
                {isSmallScreen ? (
                  ""
                ) : (
                  <div className="wrap-container">
                    <div className="text-container">
                      <p>4kg</p>
                    </div>
                    <div className="vertical-line-s"></div>
                  </div>
                )}
                <div className="wrap-container">
                  <div className="text-container">
                    <p className="none-text">0kg</p>
                  </div>
                  <div className="vertical-line-s"></div>
                </div>
                <div className="graphs-value-item">
                  {statisticbyhours.map((item, index) => (
                    <div className="item-value">
                      <StyledItem x={item.quantity}>
                        <div className="battery__level">
                          <div className="battery__liquid" />
                        </div>
                      </StyledItem>
                      <span className="time-graph-text">{item.time}h</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="bottom-values">
        <div className="header-values">
          <div className="right-value">
            <BsSpeedometer size={21} color="#284f7b" />
            <span className="item-value-cnt">{max_capacity}</span>
            <span>bar</span>
          </div>
          {isSelected === "reduce" ? (
            <></>
          ) : (
            <div className="left-value">
              <FaTemperatureThreeQuarters size={21} color="#284f7b" />
              <span className="item-value-cnt">{temperature}</span>
              <span>℃</span>
            </div>
          )}
        </div>
        <div className="title-name">{equipment_name}</div>
      </div>
    </div>
  );
}

export default EquipmentStateItem;
