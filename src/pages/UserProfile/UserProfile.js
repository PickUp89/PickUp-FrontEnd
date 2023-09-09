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
import EventCard from "../../components/EventCard/EventCard";

const UserStats = (userData) => {
  const gamesPlayed = 40;
  const maxGames = 100;
  const tournamentsPlayed = 5;
  const maxTournaments = 10;

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Grid container alignItems="center">
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ width: 60, height: 60 }}
          >
            <CircularProgress
              variant="determinate"
              value={((userData?.sports?.length || 0) / 30) * 100}
              size={40}
              thickness={6}
            />
          </Grid>
          <Grid item>
            {" "}
            <Typography variant="h5" color="inherit">
              Sports
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container alignItems="center">
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ width: 60, height: 60 }}
          >
            <CircularProgress
              variant="determinate"
              value={(gamesPlayed / maxGames) * 100}
              size={40}
              thickness={6}
            />
          </Grid>
          <Grid item>
            {" "}
            <Typography variant="h5" color="inherit">
              Games
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container alignItems="center">
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ width: 60, height: 60 }}
          >
            <CircularProgress
              variant="determinate"
              value={(tournamentsPlayed / maxTournaments) * 100}
              size={40}
              thickness={6}
            />
          </Grid>
          <Grid item>
            <Typography variant="h5" color="inherit">
              Tournaments
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

function UserProfile() {
  const { userId } = useParams();
  const [userData, setUserData] = useState();
  const [status, setStatus] = useState(pageStatus.LOADING);

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

      {UserStats(userData)}

      {userData.biography && (
        <Grid style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Grid>
            <Typography variant="h6" color="primary">
              {`About ${userData.firstName}`}
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              {userData.biography}
            </Typography>
          </Grid>
        </Grid>
      )}
      <Grid style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Typography variant="h6" color="primary">
          {`${userData.firstName}'s recent events`}
        </Typography>
        <Grid sx={{ paddingTop: "1rem" }}>
          <EventCard style={{ marginTop: "1rem" }} />
        </Grid>
        <Grid sx={{ paddingTop: "1rem" }}>
          <EventCard style={{ marginTop: "1rem" }} />
        </Grid>
        <Grid sx={{ paddingTop: "1rem" }}>
          <EventCard style={{ marginTop: "1rem" }} />
        </Grid>
      </Grid>
    </>
  );
}

export default UserProfile;
