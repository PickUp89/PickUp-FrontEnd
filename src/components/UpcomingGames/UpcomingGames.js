import React from "react";
import map from "lodash/map";
import range from "lodash/range";
import EventCard from "../EventCard/EventCard";

export default function UpcomingGames() {
  return (
    <>
      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {map(range(6), (_) => (
          <Container key={_} />
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
