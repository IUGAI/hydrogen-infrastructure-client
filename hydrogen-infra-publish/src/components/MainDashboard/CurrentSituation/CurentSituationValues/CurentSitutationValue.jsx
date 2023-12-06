import "./CurentSituationValue.scss";

function CurentSitutationValue({ item }) {
  const { id, name, quantity, type,importance } = item;
  return (
    <div className="curent-situation-value">
      <div className="top-value">
        <span className="curent-text-name">{name}</span>
      </div>
      <div className="bottom-value">
        <span
          className={
            id === 4 || importance 
              ? "curent-text-quantity active"
              : id === 5 || type === 2
              ? "curent-text-quantity another"
              : type === 3
              ? "curent-text-quantity soundness"
              : "curent-text-quantity"
          }
        >
          {quantity}
        </span>
      </div>
    </div>
  );
}

export default CurentSitutationValue;
