import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Margin } from "@mui/icons-material";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import UpcomingGames from "../../components/UpcomingGames/UpcomingGames";
import EventCard from "../../components/EventCard/EventCard";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [
  {
    id: 1,
    title: "",
    description: "",
    imageUrl: process.env.PUBLIC_URL + "/SportsPhotos/Photo2.png",
    action: "Meet New People",
  },
  {
    id: 2,
    title: "",
    description: "",
    imageUrl: process.env.PUBLIC_URL + "/SportsPhotos/Photo3.jpeg",
    action: "Stay Active",
  },
  {
    id: 3,
    title: "",
    description: "",
    imageUrl: process.env.PUBLIC_URL + "/SportsPhotos/Photo4.webp",
    action: "Try a new sport",
  },
];

const cards2 = [1, 2, 3, 4, 5];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function EntryPage() {
  const [isHovered, setIsHovered] = useState({});
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          maxWidth: "100%",
          display: "flex",
          minHeight: "600px",
          alignItems: "center",
          marginLeft: "7rem",
          paddingTop: "2rem",
        }}
      >
        <Grid
          container
          spacing={6}
          sx={{
            alignItems: "center",
            maxWidth: "100%",
            paddingTop: "2rem",
          }}
        >
          <Grid item xs={12} md={4}>
            <Typography variant="h3" sx={{ paddingBottom: "15px" }}>
              PickUp
            </Typography>
            <Typography
              variant="h6"
              sx={{ opacity: "0.4", paddingBottom: "30px" }}
            >
              Welcome to Pickup, your ultimate destination for connecting with
              local sports enthusiasts! Discover and join pickup games happening
              right in your neighborhood. Whether you're a seasoned athlete or
              just looking to have some fun, Pickup has you covered. Don't miss
              out on the action – join the game today!
            </Typography>
            <Button
              color="primary"
              sx={{ width: "200px", fontSize: "16px" }}
              variant={isHovered ? "contained" : "outlined"}
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
              href="/auth"
            >
              Join Now
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            <img
              src={process.env.PUBLIC_URL + "/SportsPhotos/Photo1.jpeg"}
              alt="My Team"
              sx={{
                width: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <main>
        {/* Headers */}

        {/* FIND NEW FRIENDS, STAY ACTIVE */}
        <Container sx={{ py: 25 }} maxWidth="xl">
          {/* Card Sections */}
          <Grid container spacing={8}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  variant="plain"
                  sx={{
                    height: "100%",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      height: "15rem",
                      borderRadius: "10px",
                    }}
                    image={card.imageUrl}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                  </CardContent>
                  <CardActions sx={{ height: "10px" }}>
                    {card.action}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* How PickUp works*/}
        <Typography variant="h2" align="center">
          How PickUp Works
        </Typography>
        <HowItWorks></HowItWorks>

        <Typography variant="h5" align="center" marginBottom={5}>
          Upcoming PickUp Games
        </Typography>
        <UpcomingGames></UpcomingGames>
      </main>
      {/* Footer */}
      <Footer></Footer>
      {/* End footer */}
    </ThemeProvider>
  );
}
