import "./ProductionValue.scss";

function ProductionValue({ item }) {
  const { id, name, value, procent } = item;
  return (
    <div className="production-value-content">
      <div className="prod-item">
        <span className="prod-text-name">{name}</span>
      </div>
      <div className="prod-item">
        <span
          className={
            id === 1
              ? "prod-text-value production"
              : id === 2
              ? "prod-text-value storaging"
              : "prod-text-value charging"
          }
        >
          {value}
        </span>
      </div>
      <div className="prod-item">
        <span className="prod-text-percentage">{procent}%</span>
      </div>
    </div>
  );
}

export default ProductionValue;
