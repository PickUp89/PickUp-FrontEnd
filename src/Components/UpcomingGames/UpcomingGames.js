import React from "react";
import map from "lodash/map";
import range from "lodash/range";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import EventCard from "../EventCard/EventCard";


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

export default function UpcomingGames() {
  return (
    <div style={{ width: "100%", overflow: "auto", display: "flex",}}>
      {map(range(10), (_) => (
        <Container />
      ))}
    </div>
  );
}

const Container = () => {
  return (
    <div style={{ height: "13rem", width: "25rem", margin: "1rem" }}>
      <Paper style={{ height: "100%", width: "20rem" }}>Hello</Paper>
    </div>
  );
};
