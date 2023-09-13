import React from "react";
import map from "lodash/map";
import range from "lodash/range";
import Typography from "@mui/material/Typography";
import EventCard from "../EventCard/EventCard";

export default function UpcomingGames() {
  return (
    <>
      <Typography variant="h2" align="center" marginBottom={5} marginTop={5}>
        Upcoming PickUp Games
      </Typography>
      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {map(range(6), (_) => (
          <Container />
        ))}
      </div>
    </>
  );
}

const Container = () => {
  return (
    <div style={{ height: "30rem", width: "40rem", margin: "2rem" }}>
      <EventCard />
    </div>
  );
};
