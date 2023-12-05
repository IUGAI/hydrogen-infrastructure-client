import "./AlarmWidgets.scss";

function AlarmWidgets({ item }) {
  return (
    <div className="alarm-widgets">
      <div className="left">
        <span className="title-text">{item.title}</span>
      </div>
      <div className="right">
        <span className={item.id === 2 ? "title-text-value active" : "title-text-value"}>{item.value}</span>
      </div>
    </div>
  );
}

export default AlarmWidgets;
