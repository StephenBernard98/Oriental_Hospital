import { useContext, useState } from "react";
import { createContext } from "react";
import { ProviderFunction, User as UserType } from "../types"; 

interface DataType {
  children: React.ReactNode;
}

const userObject: ProviderFunction = {
  user: null,
  login: (user: UserType) => {}, 
  logout: () => {},
};
export const context = createContext<ProviderFunction>(userObject);

export const UserContext = ({ children }: DataType) => {
  const [user, setUser] = useState<null | UserType>(null);

  const login = (user: UserType) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <context.Provider value={{ user, login, logout }}>
      {children}
    </context.Provider>
  );
};

export const useAuth = () => {
  return useContext(context);
};
