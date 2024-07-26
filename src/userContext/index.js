import { createContext, useContext } from "react"

const UserContext = createContext()

export const UserContextProvider = UserContext.Provider;
export const useUser = () => useContext(UserContext)