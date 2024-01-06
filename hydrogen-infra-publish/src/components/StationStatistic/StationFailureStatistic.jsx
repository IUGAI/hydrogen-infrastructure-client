import { useState } from "react";
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
import { useMediaQuery } from "react-responsive";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function StationFailureStatistic({ data, lineGraph, barGraph, ticksNumbers, unit, graphName }) {
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
                <p className="production">{`${graphName}: ${
                  payload.find((item) => item.dataKey === "pv").value
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
    <div className="station-statistic-graph statistic_failure">
      <span className="unit unit-failure">({unit})</span>
      <div className="station-statistic-checkbox checkbox-failure">
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
            <span className="check-text">{graphName}</span>
          </div>
        )}
      </div>
      <ResponsiveContainer width="95%" height="90%">
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
                  fill={`url(#gradient-6)`}
                  activeBar={
                    <RoundedBar fill={`url(#gradient-6)`} stroke="blue" />
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
                  stroke="#92D050"
                  strokeDasharray="3 3"
                />
              )}
            </>
          )}

          <defs>
            <linearGradient id="gradient-6" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="#1f6dd5" />
              <stop offset="60%" stopColor="#0c8bd1" />
              <stop offset="90%" stopColor="#1e2b49" />
            </linearGradient>
          </defs>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StationFailureStatistic;
