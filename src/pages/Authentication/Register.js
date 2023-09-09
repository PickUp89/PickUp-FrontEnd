import React, { useState } from "react";
import {
  Avatar,
  Button,
  Alert,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const defaultTheme = createTheme();

const creationStatusEnum = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
  INVALID: "invalid",
};

export default function Register({ toggleAuthMode }) {
  const [registerStatus, setRegisterStatus] = useState(null);

  const handleSubmit = async (event) => {
    const data = new FormData(event.currentTarget);
    event.preventDefault();
    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(data.get("email"));

    // Password Validation
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");
    const isPasswordValid =
      password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password);
    const isPasswordConsistent = password === confirmPassword;

    if (!isPasswordConsistent || !isEmailValid || !isPasswordValid) {
      setRegisterStatus(creationStatusEnum.INVALID);
      return;
    }
    try {
      const apiUrl = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${apiUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.get("email"),
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          password: data.get("password"),
        }),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData);
      }
      setRegisterStatus(creationStatusEnum.SUCCESS);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toggleAuthMode();
    } catch (error) {
      console.error(error);
      setRegisterStatus(creationStatusEnum.ERROR);
    }
  };

  const renderStatusAlert = () => {
    if (!registerStatus) return;
    if (registerStatus === creationStatusEnum.LOADING) return; // Should have a gif of loading here;
    if (registerStatus === creationStatusEnum.SUCCESS) {
      return (
        <Alert severity="success">
          Your account has been created, please log in
        </Alert>
      );
    }
    if (registerStatus === creationStatusEnum.ERROR) {
      return (
        <Alert severity="error">
          This email is already used, please use a different email
        </Alert>
      );
    }
    if (registerStatus === creationStatusEnum.INVALID) {
      return (
        <Alert severity="error">
          Your email or password is invalid, please try again
        </Alert>
      );
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/LoginPage/basketball.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "30% center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginTop: "0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography component="h1" variant="h5">
                Welcome to <span style={{ fontWeight: "bold" }}>Pick Up</span>!
              </Typography>
              <Typography component="h1" variant="subtitle2">
                Please sign-in to your account to start your journey with us.
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link onClick={toggleAuthMode} variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
              {renderStatusAlert()}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
