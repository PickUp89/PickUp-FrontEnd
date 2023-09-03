import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => state);
  const isAuthenticated = useSelector((state) => state?.user?.isAuthenticated);
  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/auth" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/auth" element={<Authentication />} />
            <Route path="*" element={<Navigate to="/auth" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
