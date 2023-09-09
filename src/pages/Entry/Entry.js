import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
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
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

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
    imageUrl: "https://source.unsplash.com/random?card1",
    action: "Meet New People",
  },
  {
    id: 2,
    title: "",
    description: "",
    imageUrl: "https://source.unsplash.com/random?card2",
    action: "Stay Active",
  },
  {
    id: 3,
    title: "",
    description:
      "",
    imageUrl: "https://source.unsplash.com/random?card3",
    action: "Explore",
  },
];

const cards2 = [1, 2, 3];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function EntryPage() {
  const [isHovered, setIsHovered] = useState({});
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Headers */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              PickUp
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Welcome to Pickup, your ultimate destination for connecting with
              local sports enthusiasts! Discover and join pickup games happening
              right in your neighborhood. Whether you're a seasoned athlete or
              just looking to have some fun, Pickup has you covered. Don't miss
              out on the action – join the game today!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href="/auth">
                <Button
                  variant={isHovered ? "contained" : "outlined"}
                  onMouseOver={() => setIsHovered(true)}
                  onMouseOut={() => setIsHovered(false)}
                >
                  Join Now
                </Button>
              </Link>
            </Stack>
          </Container>
        </Box>

        {/* How Does Pick Up Work*/}
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* Add a wrapper div for horizontal scrolling */}
            {/* Card Sections */}
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: "56.25%",
                      }}
                      image="https://source.unsplash.com/random?wallpapers"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography>{card.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined">{card.action}</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
        </Container>

        {/* FIND NEW FRIENDS, STAY ACTIVE */}
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* Card Sections*/}
          <Grid container spacing={4}>
            {cards2.map((card) => (
              <Grid item key={card} xs={18} sm={12} md={12}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* UPCOMING EVENTS */}
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* Card Sections*/}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <h2>Upcoming Games</h2>
        <ImageList
          sx={{
            gridAutoFlow: "column",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(600px,1fr)) !important",
            gridAutoColumns: "minmax(600px, 1fr)",
          }}
        >
          {cards2.map((image) => (
            <ImageListItem>
              <img src='https://source.unsplash.com/random?wallpapers' alt='' />
              <ImageListItemBar title={image.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </main>
      {/* Footer */}
      <Footer></Footer>
      {/* End footer */}
    </ThemeProvider>
  );
