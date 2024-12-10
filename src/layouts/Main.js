import React from "react";
import { Outlet } from "react-router-dom";
import AuthIndex from "../modules/LoginPage/Auth";

function MainIndex() {
  return (
    <div style={{ height: "100vh" }}>
      {/* <AuthIndex /> */}
      <Outlet />
    </div>
  );
}

export default MainIndex;
