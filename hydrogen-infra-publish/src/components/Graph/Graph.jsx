import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useMediaQuery } from "react-responsive";

function Graph({ items }) {
  const isLargeScreen = useMediaQuery({ maxWidth: 1536 });

  const {
    name,
    color_active,
    color_disactive,
    type,
    percentage,
    color_stroke,
  } = items;
  const COLORS = [color_disactive, color_active];
  return (
    <div>
      <PieChart
        width={isLargeScreen ? 150 : 210}
        height={isLargeScreen ? 130 : 180}
      >
        {/* <Tooltip/> */}
        <Pie
          data={items.data}
          cx={isLargeScreen ? 68 : 98}
          cy={isLargeScreen ? 70 : 90}
          stroke={color_stroke}
          innerRadius={isLargeScreen ? 35 : 53}
          outerRadius={isLargeScreen ? 55 : 80}
          dataKey="value"
          startAngle={-270}
        >
          <Cell
            key={`cell-1`}
            fill={
              name === "양호" || name === "충전소" || type === 10002
                ? "#c5e0b4"
                : "#9dc3e6"
            }
          />
          <Cell
            key={`cell-2`}
            fill={
              name === "양호" || name === "충전소" || type === 10002
                ? `url(#gradient-32)`
                : `url(#gradient-31)`
            }
          />
        </Pie>
        <defs>
          <linearGradient id="gradient-31" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#01adef" />
            <stop offset="60%" stopColor="#0c97e7" />
            <stop offset="90%" stopColor="#1b77dc" />
          </linearGradient>
          <linearGradient id="gradient-32" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#91ce4f" />
            <stop offset="60%" stopColor="#76ad44" />
            <stop offset="90%" stopColor="#699d3e" />
          </linearGradient>

        </defs>
      </PieChart>
    </div>
  );
}

export default Graph;
