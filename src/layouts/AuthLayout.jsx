import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <h2>Auth SECTION</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
