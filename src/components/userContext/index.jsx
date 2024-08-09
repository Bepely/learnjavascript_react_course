import { createContext, useContext, useState, useCallback } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const toggleUser = useCallback(() => {
    setUser((current) => (current === null ? "USERNAME" : null));
  });

  return (
    <UserContext.Provider value={{ value: user, toggleUser }}>
      {" "}
      {children}{" "}
    </UserContext.Provider>
  );
};
