import React, { useContext } from "react";
import UserContext from "../ContextAPI/UserContext";

const Profile = () => {
  // Read the user object from Context
  const { user } = useContext(UserContext);

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-96 text-center">

      {/* Show this message if no user has logged in */}
      {!user ? (
        <p className="text-red-500 font-semibold">Please Login!</p>
      ) : (
        <>
          {/* Display logged-in user's information */}
          <h2 className="text-2xl font-bold text-green-600">
            Welcome!{" "}
            <span className="font-semibold text-green-800">
              {user.username}
            </span>
          </h2>
          
        </>
      )}
    </div>
  );
};

export default Profile;
