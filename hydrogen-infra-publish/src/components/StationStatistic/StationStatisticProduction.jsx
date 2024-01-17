import { useState } from "react";
import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ComposedChart,
  ResponsiveContainer,
  Line,
} from "recharts";
import { right } from "@popperjs/core";
import { useMediaQuery } from "react-responsive";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function StationStatisticProduction({
  data,
  lineGraph,
  barGraph,
  ticksNumbers,
  unit,
}) {
  const datacharging = data.reduce((sum, item) => {
    return (sum += item.uv);
  }, 0);
  const dataproduction = data.reduce((sum, item) => {
    return (sum += item.pv);
  }, 0);
  const datastoraging = data.reduce((sum, item) => {
    return (sum += item.amt);
  }, 0);

  const isSmallScreen = useMediaQuery({ maxWidth: 1536 });
  const isMediumScreen = useMediaQuery({ maxWidth: 2000 });

  const [checkedstate, setProduction] = useState({
    production: dataproduction === 0 ? false : true,
    storaging: datastoraging === 0 ? false : true,
    charging: datacharging === 0 ? false : true,
  });

  const handleCheck = (event) => {
    const { name, checked } = event.target;
    setProduction((prevState) => ({ ...prevState, [name]: checked }));
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div className="toltip-header">
            <p>{` ${label}`}</p>
          </div>
          <div className="toltip-content">
            {checkedstate.production &&
              payload.find((item) => item.dataKey === "pv") && (
                <p className="production">{`생산량: ${
                  payload.find((item) => item.dataKey === "pv").value
                } ${unit}`}</p>
              )}
            {checkedstate.charging &&
              payload.find((item) => item.dataKey === "uv") && (
                <p className="charging">{`충전량: ${
                  payload.find((item) => item.dataKey === "uv").value
                } ${unit}`}</p>
              )}
            {checkedstate.storaging &&
              payload.find((item) => item.dataKey === "amt") && (
                <p className="storaging">{`저장량: ${
                  payload.find((item) => item.dataKey === "amt").value
                } ${unit}`}</p>
              )}
          </div>
        </div>
      );
    }

    return null;
  };

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
        rx={isSmallScreen ? 10 : 20}
        ry={isSmallScreen ? 10 : 20}
      />
    );
  };

  return (
    <div className="station-statistic-graph">
      <span className="unit">({unit})</span>
      <div className="station-statistic-checkbox">
        {dataproduction !== 0 && (
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
        )}
        {datacharging !== 0 && (
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
        )}
        {datastoraging !== 0 && (
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
        )}
      </div>
      <ResponsiveContainer
        width="99%"
        height="90%"
        style={{ margin: "0 20px" }}
      >
        <ComposedChart
          data={data}
          barCategoryGap={isSmallScreen ? 10 : isMediumScreen ? 20 : 30}
        >
          <CartesianGrid stroke="#2B3A63" />
          <XAxis dataKey="name" stroke="#2B3A63" tick={{ fill: "#8FAADC" }} />
          <YAxis
            ticks={ticksNumbers}
            stroke="#2B3A63"
            tick={{ fill: "#8FAADC" }}
          />

          <Tooltip content={<CustomTooltip checkedstate={checkedstate} />} />
          {barGraph && (
            <>
              {checkedstate.production && (
                <Bar
                  dataKey="pv"
                  shape={<RoundedBar />}
                  fill={`url(#gradient-1)`}
                  activeBar={
                    <RoundedBar fill={`url(#gradient-1)`} stroke="blue" />
                  }
                />
              )}
              {checkedstate.charging && (
                <Bar
                  dataKey="uv"
                  fill={`url(#gradient-2)`}
                  shape={<RoundedBar />}
                  activeBar={
                    <RoundedBar fill={`url(#gradient-2)`} stroke="purple" />
                  }
                />
              )}
              {checkedstate.storaging && (
                <Bar
                  dataKey="amt"
                  fill={`url(#gradient-3)`}
                  shape={<RoundedBar />}
                  activeBar={
                    <RoundedBar fill={`url(#gradient-3)`} stroke="purple" />
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
  );
}

export default StationStatisticProduction;
