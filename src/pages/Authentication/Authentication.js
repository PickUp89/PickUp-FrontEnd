import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const authModelEnum = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
};
const Authentication = () => {
  const [authMode, setAuthMode] = useState(authModelEnum.LOGIN);
  return authMode === authModelEnum.LOGIN ? <Login /> : <Register />;
};

export default Authentication;
