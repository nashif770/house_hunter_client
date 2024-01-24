import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../0.providers/AuthProvider";

const SideBar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const [isActive, setActive] = useState("false");

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  return (
    <>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 md:bg-[#6b7cff1d] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div>
            <div className="w-full md:flex py-2 justify-center items-center mx-auto">
              {/* <img className="w-40 mx-auto" src={Logo} alt="Logo" /> */}
              img
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <Link to="/dashboard">
                <img
                  className="object-cover w-24 h-24 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <Link to="/dashboard">
                <h4 className="mx-2 mt-2 font-medium text-gray-800  hover:underline">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="/dashboard">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600  hover:underline">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <ul>
              <li>
                  <NavLink
                  to="/dashboard/manageHouse"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                      isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                    }`
                  }
                >
                  <span className="mx-4 font-medium">Manage Houses</span>
                </NavLink>
                <NavLink
                  to="/dashboard/manageBooking"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                      isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                    }`
                  }
                >
                  <span className="mx-4 font-medium">Manage Bookings</span>
                </NavLink>
                <NavLink
                  to="/dashboard/addHouse"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                      isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                    }`
                  }
                >
                  <span className="mx-4 font-medium">Add Houses</span>
                </NavLink>
              </li>
              {/* <li>
                  <NavLink
                  to="/dashboard/bookHouse"
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]   hover:text-white ${
                      isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
                    }`
                  }
                >
                  <span className="mx-4 font-medium">Manage Bookings</span>
                </NavLink>
              </li> */}
            </ul>
          </nav>
        </div>
        <div className="divider"></div>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-[#6b7cff]  hover:text-white ${
                isActive ? "bg-[#6b7cff] text-white" : "text-gray-600"
              }`
            }
          >
            <span className="mx-4 font-medium">Home</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-[#6b7cff] hover:text-white transition-colors duration-300 transform"
          >
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
