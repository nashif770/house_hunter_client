import React, { useContext } from "react";
import { AuthContext } from "../../0.providers/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center mt-8">
      <img
        src={user?.profileImage || "/default-profile-image.jpg"} // Replace with the actual path to the user's profile image
        alt="Profile"
        className="rounded-full h-20 w-20 mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{user?.displayName}</h2>
      <p className="text-gray-600">{user?.email}</p>

      {/* Add more user information if needed */}

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
