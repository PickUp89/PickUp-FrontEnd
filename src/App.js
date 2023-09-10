import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/UserProfile/UserProfile";
import { useSelector } from "react-redux";
import ForgotPassword from "./pages/Authentication/ForgotPassword";

const App = () => {
  const state = useSelector((state) => state);
  console.debug("Current App State", state);
  const isAuthenticated = useSelector((state) => state?.user?.isAuthenticated);
  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/user/:userId" element={<UserProfile />} />
            <Route path="/auth" element={<Navigate to="/home" />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </>
        ) : (
          <>
            <Route path="/auth" element={<Authentication />} />
            <Route path="*" element={<Navigate to="/auth" />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
