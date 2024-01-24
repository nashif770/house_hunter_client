import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../0.Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login&Registration/Login";
import Registration from "../Pages/Login&Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../0.Layout/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import HomeOwner from "../Pages/Dashboard/HomeOwner";
import UserProfile from "../Pages/Dashboard/UserProfile";
import ManageHouses from "../Pages/Dashboard/ManageHouses";
import AddHouses from "../Pages/Dashboard/AddHouses";
import ManageBookings from "../Pages/Dashboard/ManageBookings";

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
        path: "/dashboard",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/dashboard/manageHouse",
        element: <ManageHouses></ManageHouses>,
      },
      {
        path: "/dashboard/addHouse",
        element: <AddHouses></AddHouses>,
      },
      {
        path: "/dashboard/manageBooking",
        element: <ManageBookings></ManageBookings>,
      },
    ],
  },
]);
