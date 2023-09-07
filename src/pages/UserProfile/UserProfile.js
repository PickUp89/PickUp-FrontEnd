import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Paper,
  Typography,
  Grid,
  Box,
  Avatar,
  CircularProgress,
} from "@mui/material";
import pageStatus from "../../utils/pageStatusEnum";
import Loading from "../../components/Loading/Loading";
import GenericErrorBanner from "../../components/Banner/GenericErrorBanner";

const UserStats = (userData, isHovered, setIsHovered) => {
  const gamesPlayed = 40;
  const maxGames = 100;
  const tournamentsPlayed = 5;
  const maxTournaments = 10;

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Grid item>
        <Typography variant="h5" color="inherit" paragraph>
          <Grid container alignItems="center">
            <Grid item>
              <CircularProgress
                variant="determinate"
                value={((userData?.sports?.length || 0) / 30) * 100}
                size={60}
                thickness={6}
                style={{ visibility: isHovered ? "hidden" : "visible" }}
              />
              <span
                style={{
                  fontSize: "2rem",
                  marginRight: "8px",
                  visibility: isHovered ? "visible" : "hidden",
                }}
              >
                {userData?.sports?.length || 0}
              </span>
            </Grid>
            <Grid item>Sports</Grid>
          </Grid>
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="h5" color="inherit" paragraph>
          <Grid container alignItems="center">
            <Grid item>
              <CircularProgress
                variant="determinate"
                value={(gamesPlayed / maxGames) * 100}
                size={60}
                thickness={6}
                style={{ visibility: isHovered ? "hidden" : "visible" }}
              />
              <span
                style={{
                  fontSize: "2rem",
                  margin: "0 8px",
                  visibility: isHovered ? "visible" : "hidden",
                }}
              >
                {gamesPlayed}
              </span>
            </Grid>
            <Grid item>Games</Grid>
          </Grid>
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="h5" color="inherit" paragraph>
          <Grid container alignItems="center">
            <Grid item>
              <CircularProgress
                variant="determinate"
                value={(tournamentsPlayed / maxTournaments) * 100}
                size={60}
                thickness={6}
                style={{ visibility: isHovered ? "hidden" : "visible" }}
              />
              <span
                style={{
                  fontSize: "2rem",
                  marginLeft: "8px",
                  visibility: isHovered ? "visible" : "hidden",
                }}
              >
                {tournamentsPlayed}
              </span>
            </Grid>
            <Grid item>Tournaments</Grid>
          </Grid>
        </Typography>
      </Grid>
    </Grid>
  );
};

function UserProfile() {
  const { userId } = useParams();
  const [userData, setUserData] = useState();
  const [status, setStatus] = useState(pageStatus.LOADING);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const apiHost = process.env.REACT_APP_BACKEND_URL;
        const url = `${apiHost}/users/get?id=${userId}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching user data: ${response.statusText}`);
        }
        const data = await response.json();
        setUserData(data);
        setStatus(pageStatus.SUCCESS);
      } catch (e) {
        console.error(e);
        setStatus(pageStatus.ERROR);
      }
    };

    fetchUserData();
  }, [userId]);

  if (status === pageStatus.LOADING) return <Loading />;
  if (status === pageStatus.ERROR) return <GenericErrorBanner />;
  console.log(userData.profilePicture);
  return (
    <>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(https://source.unsplash.com/random?wallpapers)`,
        }}
      >
        {
          <img
            style={{ display: "none" }}
            src="https://source.unsplash.com/random?wallpapers"
            alt="Nothing"
          />
        }
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item md={9}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h2"
                color="inherit"
                gutterBottom
              >
                {`${userData.firstName} ${userData.lastName}`}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {`${userData.location || "Charlottetown, Canada"}`}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Avatar
              alt="User Profile"
              src={`data:image/jpeg;base64,${userData.profilePicture}`}
              sx={{ width: 200, height: 200, borderRadius: "50%", margin: 2 }}
            />
          </Grid>
        </Grid>
      </Paper>

      {UserStats(userData, isHovered, setIsHovered)}

      {userData.biography && (
        <Grid style={{ marginLeft: "4rem", marginRight: "4rem" }}>
          <Typography variant="h6" color="primary">
            {`About ${userData.firstName}`}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {userData.biography}
          </Typography>
        </Grid>
      )}
    </>
  );
}

export default UserProfile;
