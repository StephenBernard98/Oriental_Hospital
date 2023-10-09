import React from "react";
import { useAuth } from "../context/Context";
import { useLocation, Navigate } from "react-router-dom";

interface Child {
  children: React.ReactNode;
}

export const Protect = ({ children }: Child) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    localStorage.setItem("destination", location.pathname);
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Protect;
