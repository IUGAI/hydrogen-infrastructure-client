import "./GraphAttention.scss";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

function GraphAttention({ items }) {


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

        <PieChart width={200} height={200}>
          <Pie
            data={items.data}
            cx={93}
            cy={92}
            stroke={color_stroke}
            innerRadius={55}
            outerRadius={80}
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
