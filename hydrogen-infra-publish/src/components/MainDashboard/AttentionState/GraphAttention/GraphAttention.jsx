import "./GraphAttention.scss";
import Graph from "../../../Graph/Graph";

function GraphAttention({ items }) {
  const { name, title, percentage } = items;

  console.log(items);

  return (
    <div className="graph-content">
      <div className="graph-item">
        <div className="graph-value">
          <span className="text-value">{name}</span>
          <span className="text-percentage">{percentage}%</span>
        </div>
        <Graph items={items} />
        {percentage !== "0" && (
          <div
            className={
              name === "양호" || name === "충전소"
                ? "circle-dash cirlce-dash-color"
                : "circle-dash"
            }
          ></div>
        )}
      </div>
      <span className="text-main-value">{title}</span>
    </div>
  );
}

export default GraphAttention;
