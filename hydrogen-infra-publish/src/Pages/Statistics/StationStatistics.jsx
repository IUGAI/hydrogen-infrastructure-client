import "./StationStatistics.scss";
import { BsFillLightningFill } from "react-icons/bs";
import { BiSolidFlask } from "react-icons/bi";
import { BsConeStriped } from "react-icons/bs";
import { BsTools } from "react-icons/bs";
import { SiLeaflet } from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import Checkbox from "@mui/material/Checkbox";
import React, { PureComponent, useState, useRef } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Line,
} from "recharts";
import { right } from "@popperjs/core";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const data = [
  {
    name: "1월",
    uv: 250,
    pv: 231,
    amt: 220,
  },
  {
    name: "2월",
    uv: 200,
    pv: 225,
    amt: 237,
  },
  {
    name: "3월",
    uv: 230,
    pv: 290,
    amt: 280,
  },
  {
    name: "4월",
    uv: 270,
    pv: 250,
    amt: 290,
  },
  {
    name: "5월",
    uv: 265,
    pv: 255,
    amt: 300,
  },
  {
    name: "6월",
    uv: 243,
    pv: 260,
    amt: 256,
  },
  {
    name: "7월",
    uv: 260,
    pv: 270,
    amt: 290,
  },
  {
    name: "8월",
    uv: 265,
    pv: 280,
    amt: 270,
  },
  {
    name: "9월",
    uv: 290,
    pv: 232,
    amt: 265,
  },
  {
    name: "10월",
    uv: 230,
    pv: 277,
    amt: 250,
  },
  {
    name: "11월",
    uv: 258,
    pv: 265,
    amt: 280,
  },
  {
    name: "12월",
    uv: 120,
    pv: 130,
    amt: 133,
  },
];

const data_production = [
  {
    name: "1월",
    uv: 88,
    amt: 0,
    pv: 0

  },
  {
    name: "2월",
    uv: 88,
    amt: 0,
    pv: 0
  },
  {
    name: "3월",
    uv: 92,
    amt: 0,
    pv: 0
  },
  {
    name: "4월",
    uv: 88,
    amt: 0,
    pv: 0
  },
  {
    name: "5월",
    uv: 80,
    amt: 0,
    pv: 0
  },
  {
    name: "6월",
    uv: 91,
    amt: 0,
    pv: 0
  },
  {
    name: "7월",
    uv: 82,
    amt: 0,
    pv: 0
  },
  {
    name: "8월",
    uv: 72,
    amt: 0,
    pv: 0
  },
  {
    name: "9월",
    uv: 99,
    amt: 0,
    pv: 0
  },
  {
    name: "10월",
    uv: 86,
    amt: 0,
    pv: 0
  },
  {
    name: "11월",
    uv: 100,
    amt: 0,
    pv: 0
  },
  {
    name: "12월",
    uv: 98,
    amt: 0,
    pv: 0
  },
];

function StationStatistics() {

  const prod_data = data_production.reduce(( accumulator,item) => {
    return accumulator + item.amt
  }, 0)


  console.log(prod_data);

  const [lineGraph, setlineGraph] = useState(true);
  const [barGraph, setbarGraph] = useState(true);
  const [menuState, setMenuState] = useState("operation");
  const [checkedstate, setProduction] = useState({
    production: true,
    storaging:  true,
    charging: true,
  });
  const ticksNumbers = [];
  for (let i = 0; i <= 300; i++) {
    if (i % 25 === 0) {
      ticksNumbers.push(i);
    }
  }

  const ticksNumbersOperation = [];
  for (let i = 0; i <= 100; i++){
    if (i % 10 === 0) {
        ticksNumbersOperation.push(i);
    }
  }

  const handleItemMenuGraph = (state) => {
    setMenuState(state);
  };

  const handelClickBar = () => {
    setbarGraph(!barGraph);
  };

  const handelClickLine = () => {
    setlineGraph(!lineGraph);
  };

  const handleCheck = (event) => {
    const { name, checked } = event.target;
    setProduction((prevState) => ({ ...prevState, [name]: checked }));
  };

  const isSmallScreen = useMediaQuery({ maxWidth: 1536 });
  const isMediumScreen = useMediaQuery({ maxWidth: 2000 });

  const CustomTooltip = ({ active, payload, label }) => {
    console.log(payload);
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div className="toltip-header">
            <p>{` ${label}`}</p>
          </div>
          <div className="toltip-content">
            {(checkedstate.production && payload[0]) && (
              <p className="production">{`생산량: ${payload[0].value}kg`}</p>
            )}
            {(checkedstate.charging && payload[1] && payload) &&  (
              <p className="charging">{`충전량: ${payload[1].value}kg`}</p>
            )}
            {(checkedstate.storaging && payload[2]) && (
              <p className="storaging">{`저장량: ${payload[2].value}kg`}</p>
            )} 
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={`station-statistic-wrapper`}>
      <div className={`station-statistic-header `}>
        <span>사업소 통계</span>
      </div>
      <div className="station-statistic-inner">
        <div className="station-statistic-search">
          <div className="search-input-item">
            <label>시도</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
              <option>광주</option>
            </select>
          </div>
          <div className="search-input-item">
            <label>사업자</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
              <option>광주</option>
            </select>
          </div>
          <div className="search-input-item">
            <label>사업소</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
              <option>광주</option>
            </select>
          </div>
          <div className="search-input-item">
            <label>기간</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
              <option>광주</option>
            </select>
          </div>
          <div className="search-input-item">
            <label>연도/날짜</label>
            <select className="custom-select">
              <option selected disabled>
                선택
              </option>
              <option>서울</option>
              <option>부산</option>
              <option>제주</option>
              <option>광주</option>
            </select>
          </div>
          <div className="search-input-item">
            <label>그래프 유형</label>
            <div className="button-container-custum">
              <button
                className={`custom-button-radio ${barGraph ? "active" : ""}`}
                onClick={handelClickBar}
              >
                막대
              </button>
              <button
                className={`custom-button-radio ${lineGraph ? "active" : ""}`}
                onClick={handelClickLine}
              >
                선형
              </button>
            </div>
          </div>
        </div>
        <div className="station-statistic-content">
          <div className="station-statistic-aside">
            <div
              className={`aside-item ${
                menuState === "operation" ? "active" : ""
              }`}
              onClick={() => handleItemMenuGraph("operation")}
            >
              <span>가동</span>
              <BsFillLightningFill color={`${menuState === "operation" ? "#fff": "#8faadc"}`} size={20} />
            </div>
            <div
              className={`aside-item ${
                menuState === "operationRate" ? "active" : ""
              }`}
              onClick={() => handleItemMenuGraph("operationRate")}
            >
              <span>가동률</span>
              <BiSolidFlask  color={`${menuState === "operationRate" ? "#fff": "#8faadc"}`}size={20} />
            </div>
            <div className="aside-item">
              <span>고장</span>
              <BsConeStriped color="#8faadc" size={20} />
            </div>
            <div className="aside-item  ">
              <span>작업</span>
              <BsTools color="#8faadc" size={20} />
            </div>
            <div className="aside-item  ">
              <span>건전도</span>
              <SiLeaflet color="#8faadc" size={20} />
            </div>
          </div>
          <div className="station-statistic-graph">
            <span className="unit">({ menuState === "operationRate"  ?  "%" :"kg" })</span>
            <div className="station-statistic-checkbox">
              <div className="checkBox-item">
                <Checkbox
                  {...label}
                  name="production"
                  onChange={handleCheck}
                  defaultChecked
                  // onChange={handleCheck}
                  sx={{
                    color: "#00B0F0",
                    "&.Mui-checked": {
                      color: "#00B0F0",
                    },
                  }}
                />
                <span className="check-text">생산시설</span>
              </div>
              <div className="checkBox-item">
                <Checkbox
                  {...label}
                  onChange={handleCheck}
                  name="charging"
                  defaultChecked
                  sx={{
                    color: "#92D050",
                    "&.Mui-checked": {
                      color: "#92D050",
                    },
                  }}
                />
                <span className="check-text">충전량</span>
              </div>
              <div className="checkBox-item">
                <Checkbox
                  {...label}
                  defaultChecked
                  onChange={handleCheck}
                  name="storaging"
                  sx={{
                    color: "#FFC000 ",
                    "&.Mui-checked": {
                      color: "#FFC000 ",
                    },
                  }}
                />
                <span className="check-text">저장량</span>
              </div>
            </div>
            <ResponsiveContainer width="99%" height="90%">
              <ComposedChart
                data={menuState === 'operation' ? data : data_production}
                barCategoryGap={isSmallScreen ? 10 : isMediumScreen ? 20 : 30}
              >
                <CartesianGrid stroke="#2B3A63" />
                <XAxis
                  dataKey="name"
                  stroke="#2B3A63"
                  tick={{ fill: "#8FAADC" }}
                />
                <YAxis
                  ticks={menuState === 'operationRate' ? ticksNumbersOperation : ticksNumbers}
                  stroke="#2B3A63"
                  tick={{ fill: "#8FAADC" }}
                />

                <Tooltip
                  content={<CustomTooltip checkedstate={checkedstate} />}
                />
                {barGraph && (
                  <>
                    {(checkedstate.production ) && (
                      <Bar
                        dataKey="pv"
                        shape={<RoundedBar />}
                        fill={`url(#gradient-1)`}
                        activeBar={
                          <RoundedBar fill={`url(#gradient-1)`} stroke="blue" />
                        }
                      />
                    )}
                    {(checkedstate.charging ) && (
                      <Bar
                        dataKey="uv"
                        fill={`url(#gradient-2)`}
                        shape={<RoundedBar />}
                        activeBar={
                          <RoundedBar
                            fill={`url(#gradient-2)`}
                            stroke="purple"
                          />
                        }
                      />
                    )}
                    {(checkedstate.storaging ) && (
                      <Bar
                        dataKey="amt"
                        fill={`url(#gradient-3)`}
                        shape={<RoundedBar />}
                        activeBar={
                          <RoundedBar
                            fill={`url(#gradient-3)`}
                            stroke="purple"
                          />
                        }
                      />
                    )}
                  </>
                )}

                {lineGraph && (
                  <>
                    {checkedstate.production && (
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#0c8bd1"
                        strokeDasharray="3 3"
                      />
                    )}
                    {checkedstate.charging && (
                      <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#1fb750"
                        strokeDasharray="3 3"
                      />
                    )}
                    {checkedstate.storaging && (
                      <Line
                        type="monotone"
                        dataKey="amt"
                        stroke="#eab104"
                        strokeDasharray="3 3"
                      />
                    )}
                  </>
                )}

                <defs>
                  <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="30%" stopColor="#1f6dd5" />
                    <stop offset="60%" stopColor="#0c8bd1" />
                    <stop offset="90%" stopColor="#1e3759" />
                  </linearGradient>
                  <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="30%" stopColor="#1fb750" />
                    <stop offset="60%" stopColor="#8ccf50" />
                    <stop offset="90%" stopColor="#293a3d" />
                  </linearGradient>
                  <linearGradient id="gradient-3" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="30%" stopColor="#cc9a00" />
                    <stop offset="60%" stopColor="#eab104" />
                    <stop offset="90%" stopColor="#393832" />
                  </linearGradient>
                </defs>
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

// Custom shape for bars with rounded corners
const RoundedBar = (props) => {
  const { x, y, width, height, fill } = props;

  const isSmallScreen = useMediaQuery({ maxWidth: 1536 });
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      rx={isSmallScreen ? 10 : 20} // Border radius for rounded corners (adjust as needed)
      ry={isSmallScreen ? 10 : 20} // Border radius for rounded corners (adjust as needed)
    />
  );
};
export default StationStatistics;
