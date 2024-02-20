import App from "@/App";
import AddminLayout from "@/Layout/AddminLayout";
import AddService from "@/Pages/Admin/AddService";
import Dashboard from "@/Pages/Admin/Dashboard";
import ServiceList from "@/Pages/Admin/ServiceList";
import About from "@/Pages/Home/About";
import Home from "@/Pages/Home/Index";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AddminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard/>,
      },
      {
        path: "service-list",
        element: <ServiceList />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
    ],
  },
]);

export default router;
