import "./GraphAttention.scss";
import Graph from "../../../Graph/Graph";

function GraphAttention({ items }) {
  const { name, title, percentage } = items;

  return (
    <div className="graph-content">
      <div className="graph-item">
        <div className="graph-value">
          <span className="text-value">{name}</span>
          <span className="text-percentage">{percentage}%</span>
        </div>
        <Graph items={items} />
      </div>
      <span className="text-main-value">{title}</span>
    </div>
  );
}

export default GraphAttention;
