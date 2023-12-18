import { RouterProvider, createBrowserRouter } from "react-router-dom"; // eslint-disable-line no-unused-vars
import MainDashboard from "./Pages/MainDashboard/MainDashboard";
import DetailDashboard from "./Pages/DetailDashboard/DetailDashboard";
import { MyequipmentContext } from "./context/equipmentContext";
import "./App.scss";
import AppLayout from "./components/AppLayout/AppLayout";
import { MyProvider } from "./context/menucontext";

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
