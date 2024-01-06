import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useMediaQuery } from "react-responsive";

function Graph({ items }) {
  const isLargeScreen = useMediaQuery({ maxWidth: 1536 });
  const isLargeScrennHigh = useMediaQuery({ maxHeight: 1233 });
  const data = [
    { name: "Group A", value: 500 },
    { name: "Group B", value: 500 },
  ];
  const {
    name,
    color_active,
    color_disactive,
    title,
    percentage,
    color_stroke,
  } = items;
  const COLORS = [color_disactive, color_active];
  return (
    <div>
      <PieChart
        width={isLargeScreen  ? 150 : 210}
        height={isLargeScreen  ? 130 : 180}
      >
        {/* <Tooltip/> */}
        <Pie
          data={items.data}
          cx={isLargeScreen  ? 68 : 98}
          cy={isLargeScreen  ? 70 : 90}
          stroke={color_stroke}
          innerRadius={isLargeScreen  ? 35 : 53}
          outerRadius={isLargeScreen  ? 55 : 80}
          dataKey="value"
          startAngle={-270}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default Graph;
