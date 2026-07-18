import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  // Shared state that can be accessed
  // by any component inside this Provider
  const [user, setUser] = React.useState(null);

  return (
    // Provide the shared state and update function
    // to all child components
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
