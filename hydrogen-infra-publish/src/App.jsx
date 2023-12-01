import {RouterProvider, createBrowserRouter } from "react-router-dom"; // eslint-disable-line no-unused-vars
import MainDashboard from "./Pages/MainDashboard/MainDashboard";
import DetailDashboard from "./Pages/DetailDashboard/DetailDashboard";
import "./App.scss";
import AppLayout from "./components/AppLayout/AppLayout";

export default function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <MainDashboard />
        },
        {
          path: "/dashboard",
          element: <DetailDashboard />
        }
  
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


