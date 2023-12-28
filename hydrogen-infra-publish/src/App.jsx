import { RouterProvider, createBrowserRouter } from "react-router-dom"; // eslint-disable-line no-unused-vars
import MainDashboard from "./Pages/MainDashboard/MainDashboard";
import DetailDashboard from "./Pages/DetailDashboard/DetailDashboard";
import { MyequipmentContext } from "./context/equipmentContext";
import "./App.scss";
import AppLayout from "./components/AppLayout/AppLayout";
import { MyProvider } from "./context/menucontext";
import StationDetail from "./Pages/StationDetail/StationDetail";
import Stations from "./Pages/StationList/Station";
import EquipmentsList from "./Pages/EquipmentsList/EquipmentsList";
import EquipmentsDetail from "./Pages/EquipmentsDetail/EquipmentsDetail";
import MaterialList from "./Pages/MaterialsList/MaterialList";
import MaterialsDetail from "./Pages/MaterialsDetail/MaterialsDetail";
import StationRegist from "./Pages/StationRegist/StationRegist";


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <MainDashboard />,
        },
        {
          path: "/dashboard/:id?",
          element: <DetailDashboard />,
        },
        {
          path: "/stations",
          element: <Stations/>
        },{
          path: "/stations/:id?",
          element: <StationDetail/>,
        },
        {
          path: "/equipments",
          element: <EquipmentsList/>
        }, {
          path: "/equipments/:id?",
          element: <EquipmentsDetail/>
        },
        {
          path: "/materials",
          element: <MaterialList/>
        },
        {
          path: "/materials/:id?",
          element: <MaterialsDetail/>
        },
        {
          path: "/station-regist",
          element: <StationRegist/>
        }
      ],
    },
  ]);

  return (
    <div>
      <MyProvider>
        <MyequipmentContext>
          <RouterProvider router={router} />
        </MyequipmentContext>
      </MyProvider>
    </div>
  );
}
