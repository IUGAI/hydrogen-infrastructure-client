import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function BarChart() {
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

  return (
    <>
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
        <Bar dataKey="pv" fill="#00B0F0" width={10} />
      </BarChart>
    </>
  );
}

export default BarChart;
