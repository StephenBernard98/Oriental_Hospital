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
    return <Navigate to="/signin" state={{ path: location.pathname }} />;
  }
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Protect;
