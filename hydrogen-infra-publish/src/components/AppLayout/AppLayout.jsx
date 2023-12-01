import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

import Header from "../Header/Header";
import "./AppLayout.scss";

function AppLayout() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className="inner-container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="contents">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
