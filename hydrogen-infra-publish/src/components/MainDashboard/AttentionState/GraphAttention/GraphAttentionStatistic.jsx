import "./GraphAttention.scss";
import GraphStatistic from "../../../Graph/GraphStatistic";

function GraphAttentionStatistic({ items }) {
  const { name, title, percentage } = items;

  return (
    <div className="graph-content graph-content-statistics">
      <div className="graph-item">
        <div className="graph-value">
          <span className="text-value statistics">{name}</span>
          <span className="text-percentage statistics">{percentage}%</span>
        </div>
        <GraphStatistic items={items} />
        <div className="circle"></div>
      </div>
      
    </div>
  );
}

export default GraphAttentionStatistic;
