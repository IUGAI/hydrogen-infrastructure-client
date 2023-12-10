/* eslint-disable react/jsx-key */
import "./EquipmentStateItem.scss";
import { RxDotFilled } from "react-icons/rx";
import { styled, keyframes } from "styled-components";
import { BsBorder, BsSpeedometer } from "react-icons/bs";
import Switch from "@mui/material/Switch";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { useState, PureComponent } from "react";
const label = { inputProps: { "aria-label": "Switch demo" } };
import { PieChart, Pie, Cell } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function EquipmentStateItem({ item, onClick, isSelected }) {
  const [detail, setDetail] = useState(false);

  const RADIAN = Math.PI / 180;
  const data = [
    { name: "A", value: 30, color: "#2194b2" },
    { name: "B", value: 25, color: "#68c77f" },
    { name: "C", value: 35, color: "#f49e00" },
  ];

  const data_Plot = [
    {
      name: "1월",
      pv: 2400,
    },
    {
      name: "2월",
      pv: 1398,
    },
    {
      name: "3월",
      pv: 9800,

    },
    {
      name: "4월",
      pv: 3908,
    },
    {
      name: "5월",
      pv: 4800,
    },
    {
      name: "6월",
      pv: 3800,
    },
    {
      name: "7월",
      pv: 4300,
    },
    {
      name: "8월",
      pv: 4300,
    },
    {
      name: "9월",
      pv: 4800,
    },
    {
      name: "10월",
      pv: 4300,
    },
    {
      name: "11월",
      pv: 4300,
    },
    {
      name: "12월",
      pv: 4300,
    },
    
  ];
  const cx = 145;
  const cy = 130;
  const iR = 70;
  const oR = 100;
  const value = 23;

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

    return [
      <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />, // eslint-disable-next-line react/jsx-key
      <path
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} // eslint-disable-next-line react/jsx-key
        stroke="#none"
        fill={color}
      />,
    ];
  };
  const handleClick = () => {
    onClick(item.id);
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
    width: ${(props) => (props.isSelected === "reduce" ? "60px" : "160px")};
    height: 180px;
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

  const colorFailure = failure ? "#fe609a" : "#00B0F0";

  return (
    <div
      className={`equipment-item-content ${backgroundColor}`}
      onClick={handleClick}
    >
      <div className={`top ${backgroundColor}`}>
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
          <BatteryPill isSelected={isSelected}>
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
        </div>

        {isSelected === "clicked" ? (
          <div className="mid-values-graph">
            {!detail ? (
              <div className="mid-values-chart">
                <div className="mid-vlues-chart-one">
                  <PieChart width={290} height={200}>
                    <Pie
                      dataKey="value"
                      startAngle={180}
                      endAngle={0}
                      data={data}
                      cx={cx}
                      cy={cy}
                      innerRadius={iR}
                      outerRadius={oR}
                      fill="#8884d8"
                      stroke="none"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    {needle(value, data, cx, cy, iR, oR, "#d0d000")}
                  </PieChart>
                  <div className="text-graph-container">
                    <span className="graph-text-value">350</span>
                    <span className="grapht-text-unit"> bar</span>
                  </div>
                </div>

                <div className="mid-vlues-chart-one">
                  <PieChart width={290} height={200}>
                    <Pie
                      dataKey="value"
                      startAngle={180}
                      endAngle={0}
                      data={data}
                      cx={cx}
                      cy={cy}
                      innerRadius={iR}
                      outerRadius={oR}
                      fill="#8884d8"
                      stroke="none"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    {needle(value, data, cx, cy, iR, oR, "#d0d000")}
                  </PieChart>
                  <div className="text-graph-container">
                    <span className="graph-text-value">730</span>
                    <span className="grapht-text-unit"> ℃</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mid-vlues-chart-one">
              <BarChart
                width={500}
                height={300}
                data={data_Plot}
                margin={{
                  top: 5,
                  right: 20,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#00B0F0" 
                width={10}
                />
              </BarChart>
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
