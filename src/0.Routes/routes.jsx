import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../0.Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login&Registration/Login";
import Registration from "../Pages/Login&Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../0.Layout/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import HomeOwner from "../Pages/Dashboard/HomeOwner";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },

      {
        path: "registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    // errorElement: <></>
    children: [
      {
        path: "/dashboard/",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/manageHouse",
        element: <HomeOwner></HomeOwner>,
      },
      {
        path: "/dashboard/addHouse",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/bookHouse",
        element: <DashboardHome></DashboardHome>,
      },
    ],
  },
]);
