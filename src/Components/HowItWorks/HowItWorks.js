import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SearchIcon from "@mui/icons-material/Search";

const sectionItems = [
    {
      id: 1,
      icon: <GroupAddIcon sx={{ fontSize: 100 }} color="primary" />,
      title: "Join a Group",
      sentence: "Connect with sports enthusiasts and make new friends by joining groups of like-minded players.",
    },
    {
      id: 2,
      icon: <SearchIcon sx={{ fontSize: 100 }} color="primary" />,
      title: "Find a PickUp Game",
      sentence: "Discover nearby pickup games, match your schedule and skill level, and join the action.",
    },
    {
      id: 3,
      icon: <SportsTennisIcon sx={{ fontSize: 100 }} color="primary" />,
      title: "Host a PickUp Game",
      sentence: "Organize your own pickup game, set the details, and invite others to join in on the fun.",
    },
  ];
  

export default function HowItWorks() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, minHeight: "400px" }}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            minHeight: "500px",
          }}
        >
          {sectionItems.map((item) => (
            <Grid
              item
              xs={12}
              md={3.5}
              minHeight={300}
              key={item.id}
              sx={{
                backgroundColor: "#f2f0f1",
                textAlign: "center",
                padding: "30px",
                width: "200px",
                borderRadius: "10px",
                margin: "10px !important",
              }}
            >
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              {item.icon}
              <Typography>{item.sentence}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
