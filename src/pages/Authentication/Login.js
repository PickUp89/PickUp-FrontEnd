import * as React from "react";

import { loginWithEmailAsync } from "../../thunks/authThunks";
import { useDispatch, useSelector } from "react-redux";

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
  Divider,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook"; // Import Facebook icon
import GoogleIcon from "@mui/icons-material/Google";
import MicrosoftIcon from "@mui/icons-material/Microsoft"; // Import Microsoft icon
import TwitterIcon from "@mui/icons-material/Twitter";

const defaultTheme = createTheme();

export default function SignIn({ toggleAuthMode }) {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userEmail = data.get("email");
    const userPassword = data.get("password");
    dispatch(loginWithEmailAsync({ email: userEmail, password: userPassword }));
  };

  const apiError = useSelector((state) => state?.user?.error);

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
            backgroundImage: `url(${process.env.PUBLIC_URL}/LoginPage/spikeball.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "170%",
            backgroundPosition: "center right",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography component="h1" variant="h5">
              Welcome to <span style={{ fontWeight: "bold" }}>Pick Up</span>!
            </Typography>
            <Typography component="h1" variant="subtitle2">
              Please sign-in to your account to join our community.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 2, mb: 2 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={toggleAuthMode} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>

            {/* Divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <hr style={{ width: "40%", borderTop: "1px solid #ccc" }} />
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginX: 2, fontWeight: "bold" }}
              >
                OR
              </Typography>
              <hr style={{ width: "40%", borderTop: "1px solid #ccc" }} />
            </div>

            {/* Social Media Icons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
              }}
            >
              {/* Google Icon */}
              <IconButton
                variant="outlined"
                color="primary"
                sx={{ marginRight: 2, alignItems: "center" }}
                size="small"
                onClick={() => {
                  // window.location.href = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
                }}
              >
                <GoogleIcon fontSize="medium" />
              </IconButton>

              {/* Facebook Icon */}
              <IconButton
                size="small"
                variant="outlined"
                color="primary"
                sx={{ marginRight: 2, alignItems: "center" }}
              >
                <FacebookIcon fontSize="medium" />
              </IconButton>

              {/* Microsoft Icon */}
              <IconButton
                variant="outlined"
                color="primary"
                sx={{ marginRight: 2, alignItems: "center" }}
                size="small"
              >
                <MicrosoftIcon fontSize="medium" />
              </IconButton>

              {/* Twitter Icon */}
              <IconButton size="small" variant="outlined" color="primary">
                <TwitterIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
