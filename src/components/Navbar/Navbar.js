import MenuIcon from "@mui/icons-material/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const headersData = [
  {
    label: "Sign Up",
    href: "/auth",
  },
  {
    label: "Log In",
    href: "/auth",
  },
];

const authenticatedHeadersData = [
  {
    label: "My Profile",
    href: "/auth",
    icon: <PersonOutlineIcon />,
  },
  {
    label: "Log Out",
    href: "",
  },
];

export default function Navbar() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  const isAuthenticated = useSelector((state) => state?.user?.isAuthenticated);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {PickUpLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div sx={{ padding: "20px 30px" }}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{PickUpLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    const data = isAuthenticated ? authenticatedHeadersData : headersData;
    return data.map(({ label, href }) => {
      return (
        <Link
          key={label}
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const PickUpLogo = (
    // <img src={process.env.PUBLIC_URL + "/Logos/Logo1.png"} alt="logo" />
    <Typography
      variant="h6"
      component="h1"
      sx={{
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
      }}
    >
      PickUp
    </Typography>
  );

  const getMenuButtons = () => {
    const data = isAuthenticated ? authenticatedHeadersData : headersData;
    return data.map(({ label, href, icon }) => {
      return (
        <Button
          key={`button${label}`}
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
          }}
        >
          {icon ? icon : label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar
        sx={{
          backgroundColor: "#7550af",
          paddingRight: "79px",
          paddingLeft: "118px",
        }}
      >
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
