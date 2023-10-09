import { useContext, useState, createContext, useEffect } from "react";
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

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("username");

    if (isLoggedIn && username) {
      const userData = JSON.parse(username);
      setUser(userData);
    }
  }, []);

  const login = (user: UserType) => {
    setUser(user);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
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
