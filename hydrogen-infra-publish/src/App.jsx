import { RouterProvider, createBrowserRouter } from "react-router-dom"; // eslint-disable-line no-unused-vars
import MainDashboard from "./Pages/Dashboard/MainDashboard/MainDashboard";
import DetailDashboard from "./Pages/Dashboard//DetailDashboard/DetailDashboard";
import { MyequipmentContext } from "./context/equipmentContext";
import "./App.scss";
import AppLayout from "./components/AppLayout/AppLayout";
import { MyProvider } from "./context/menucontext";
import StationDetail from "./Pages/FacilityInfo/StationDetail/StationDetail";
import Stations from "./Pages/FacilityInfo/StationList/Station";
import EquipmentsList from "./Pages/FacilityInfo/EquipmentsList/EquipmentsList";
import EquipmentsDetail from "./Pages/FacilityInfo/EquipmentsDetail/EquipmentsDetail";
import MaterialList from "./Pages/FacilityInfo/MaterialsList/MaterialList";
import MaterialsDetail from "./Pages/FacilityInfo/MaterialsDetail/MaterialsDetail";
import StationRegist from "./Pages/FacilityRegister/StationRegist/StationRegist";
import EquipmentRegist from "./Pages/FacilityRegister/EquipmentRegist/EquipmentRegist";
import MaterialRegist from "./Pages/FacilityRegister/MaterialRegist/MaterialRegist";
import FailureList from "./Pages/Maintenance/FailureList/FailureList"
import WorkRegist from "./Pages/Maintenance/WorkRegister/WorkRegist";
import WorkList from "./Pages/Maintenance/WorkList/WorkList";
import WorkReportRegister from "./Pages/Maintenance/WorkReportRegister/WorkReportRegister";
import StationStatistics from "./Pages/Statistics/StationStatistics";
import EquipmentStatistics from "./Pages/Statistics/EquipmentStatistics";
import UserList from './Pages/SystemManagment/User/UserList'
import UserRegisterAccept from "./Pages/SystemManagment/User/UserRegisterAccept";
import UserInfo from "./Pages/SystemManagment/User/UserInfo";
import CommonSetting from "./Pages/SystemManagment/SystemSettings/CommonSetting";
import PremissionsSetting from "./Pages/SystemManagment/SystemSettings/PremissionsSetting";


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
        },{
          path: "/equipment-regist",
          element: <EquipmentRegist/>
        },
        {
          path: "/material-regist",
          element: <MaterialRegist/>
        },
        {
          path: "/failure-list",
          element:  <FailureList/>
        },
        {
          path: "/work-register",
          element:  <WorkRegist/>
        },
        {
          path: "/work-list",
          element:  <WorkList/>
        },
        {
          path: "/work-report-register",
          element: <WorkReportRegister/>
        },
        {
          path: "/station-statistic",
          element: <StationStatistics/>
        },
        {
          path: "/equipment-statistic",
          element: <EquipmentStatistics/>
        },
        {
          path: "/user-list",
          element: <UserList/>
        },
        {
          path: "/user-accept",
          element: <UserRegisterAccept/>
        },
        {
          path: "/user-info/:id?",
          element: <UserInfo/>
        },
        {
          path: "/common-setting",
          element: <CommonSetting/>
        },
        {
          path: "/premissions-setting",
          element: <PremissionsSetting/>
        },
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
