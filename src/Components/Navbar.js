import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar'
import { CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar style={{ display: "flex" }}>
        <Typography variant="h4" style={{ flexGrow: 1, cursor: "pointer" }}>
          Navbar
        </Typography>
        <div style={{ marginLeft: "auto", display: "flex" }}>
          <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "20px", marginLeft: "20px" }}>
            Home
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "white", fontSize: "20px", marginLeft: "20px", "&:hover": { color: "yellow", borderBottom: "1px solid white" } }}>
            About
          </Link>
          <Link to="/contact" style={{ textDecoration: "none", color: "white", fontSize: "20px", marginLeft: "20px", "&:hover": { color: "yellow", borderBottom: "1px solid white" } }}>
            Contact
          </Link>
          <Link to="/faq" style={{ textDecoration: "none", color: "white", fontSize: "20px", marginLeft: "20px", "&:hover": { color: "yellow", borderBottom: "1px solid white" } }}>
            FAQ
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
