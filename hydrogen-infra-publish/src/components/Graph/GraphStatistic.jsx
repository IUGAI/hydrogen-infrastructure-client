import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import { useMediaQuery } from "react-responsive";

function GraphStatistic({ items }) {
  const isLargeScreen = useMediaQuery({ maxWidth: 1536 });
 

  var total = items.data
    .map((items) => items.value)
    .reduce((sum, items) => {
      return (sum += items);
    }, 0);

  const CustomTooltip = ({ active, payload }) => {
    console.log(payload);
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const percentage = (data.value / total) * 100;
      return (
        <div
          style={{
            backgroundColor: "#1c2641",
            border: "1px solid #1d3a63",
           
            fontSize: "13px",
            fontFamily: "gothic 12",
            color: "#fff",
          }}
        >
          <div style={{backgroundColor: "#0070c0",  padding: "5px 20px",}}>{`${data.name}`}</div> 
          <div style={{backgroundColor: "#0b528d",  padding: "5px 20px",}}> {`${data.value} 건 (${percentage.toFixed(1)}%)`}</div>
        </div>
      );
    }
    return null;
  };
  const { color_stroke } = items;
  return (
    <div>
      <PieChart
        width={isLargeScreen ? 200 : 260}
        height={isLargeScreen ? 200 : 260}
      >
        <Tooltip content={<CustomTooltip />} />
        <Pie
          data={items.data}
          cx={isLargeScreen ? 100 : 130}
          cy={isLargeScreen ? 100 : 130}
          stroke={color_stroke}
          innerRadius={isLargeScreen ? 50 : 70}
          outerRadius={isLargeScreen ? 80 : 115}
          dataKey="value"
          startAngle={-270}
        >
          <Cell key={`cell-1`} fill={`#9dc3e6`} />
          <Cell key={`cell-2`} fill={`url(#gradient-3)`} />
          <Cell key={`cell-3`} fill={`url(#gradient-2)`} />
          <Cell key={`cell-4`} fill={`url(#gradient-1)`} />
        </Pie>
        <defs>
          <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#01adef" />
            <stop offset="60%" stopColor="#0c97e7" />
            <stop offset="90%" stopColor="#1b77dc" />
          </linearGradient>
          <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#286dc8" />
            <stop offset="60%" stopColor="#276cc9" />
            <stop offset="90%" stopColor="#2569d1" />
          </linearGradient>
          <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#286dc8" />
            <stop offset="60%" stopColor="#276cc9" />
            <stop offset="90%" stopColor="#2569d1" />
          </linearGradient>
          <linearGradient id="gradient-3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#6897e2" />
            <stop offset="60%" stopColor="#6897e2" />
            <stop offset="90%" stopColor="#6897e2" />
          </linearGradient>
        </defs>
      </PieChart>
    </div>
  );
}

export default GraphStatistic;
