import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

import Header from "../Header/Header";
import "./AppLayout.scss";
import { useMyContext } from "../../context/menucontext";

function AppLayout() {
  const { state } = useMyContext();

  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className="inner-container">
          <div className={state.showSide || state.mouseEnter ? "sidebar" : "sidebar hide"}>
            <Sidebar />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
