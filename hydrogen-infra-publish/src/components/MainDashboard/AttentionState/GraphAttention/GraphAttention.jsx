import "./GraphAttention.scss";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useMediaQuery } from 'react-responsive';

function GraphAttention({ items }) {

  const isLargeScreen = useMediaQuery({ maxWidth: 1536 });
  const {name, color_active,color_disactive,title, percentage,color_stroke} = items;
  const data = [
    { name: "Group A", value: 500 },
    { name: "Group B", value: 500 },
  ];
  const COLORS = [color_disactive, color_active];

  return (
    <div className="graph-content">
      <div className="graph-item">
        <div className="graph-value">
          <span className="text-value">{name}</span>
          <span className="text-percentage">{percentage}%</span>
        </div>

        <PieChart width={isLargeScreen ?  150 : 200} height={isLargeScreen ? 150 : 200}>
          <Pie
            data={items.data}
            cx={isLargeScreen ? 68 : 93}
            cy={isLargeScreen ? 73 :  92}
            stroke={color_stroke}
            innerRadius={ isLargeScreen ? 40 : 55}
            outerRadius={isLargeScreen ? 55 : 80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <span className="text-main-value">{title}</span>
    </div>
  );
}

export default GraphAttention;
