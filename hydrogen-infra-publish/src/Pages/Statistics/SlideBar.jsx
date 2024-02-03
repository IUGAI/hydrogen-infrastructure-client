import Switch from '@mui/material/Switch';

function SlideBar({switchbtn, handleClickChange}) {
  return (
    <div className="slider-bar">
      <span className="switch-values">막대</span>
      <Switch value={switchbtn} defaultChecked onChange={handleClickChange} />
      <span className="switch-values">바</span>
    </div>
  );
}

export default SlideBar;
