import React, { useState } from "react";
import Login from "./Login";
import Register from "./SignUp";

export const authModeEnum = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
};
const Authentication = () => {
  const [authMode, setAuthMode] = useState(authModeEnum.LOGIN);
  const toggleAuthMode = () => {
    setAuthMode(
      authMode === authModeEnum.LOGIN
        ? authModeEnum.REGISTER
        : authModeEnum.LOGIN
    );
  };
  return authMode === authModeEnum.LOGIN ? (
    <Login toggleAuthMode={toggleAuthMode} />
  ) : (
    <Register toggleAuthMode={toggleAuthMode} />
  );
};

export default Authentication;
