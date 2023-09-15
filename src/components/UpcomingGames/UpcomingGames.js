import React from "react";
import EventCard from "../EventCard/EventCard";
import mockEventInfos from "./mockEventInfos";

export default function UpcomingGames() {
  return (
    <>
      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {mockEventInfos.map((event, index) => (
          <Container key={`${event.name}-${index}`} info={event} />
        ))}
      </div>
    </>
  );
}

const Container = ({ info }) => {
  return (
    <div style={{ height: "30rem", width: "40rem", margin: "2rem" }}>
      <EventCard eventInfo={info} />
    </div>
  );
};
