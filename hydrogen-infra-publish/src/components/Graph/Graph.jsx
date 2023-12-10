import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useMediaQuery } from 'react-responsive';


function Graph({items}) {
    const isLargeScreen = useMediaQuery({ maxWidth: 1536 });
    const data = [
        { name: "Group A", value: 500 },
        { name: "Group B", value: 500 },
      ];
    const {name, color_active,color_disactive,title, percentage,color_stroke} = items;
    const COLORS = [color_disactive, color_active];
    return (
        <div>
             <PieChart width={isLargeScreen ?  150 : 200} height={isLargeScreen ? 150 : 220}>
          <Pie
            data={items.data}
            cx={isLargeScreen ? 68 : 93}
            cy={isLargeScreen ? 70 :  110}
            stroke={color_stroke}
            innerRadius={ isLargeScreen ? 40 : 55}
            outerRadius={isLargeScreen ? 55 : 78}
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
    )
}

export default Graph
