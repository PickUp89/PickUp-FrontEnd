import React, { useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
const UserId = "";

const Home = () => {
  const itemsPerPage = 5;
  const [page, setPage] = useState(1);

  const handleChange = (e, p) => {
    console.log(e, p);
    setPage(p);
  };

  const tempData = [
    {
      name: "Event1",
      date: "2023-10-2 17:35:10.895 -0400",
      attendees: [],
      location: "234 Street",
      coverImage: "",
      level: "Advanced",
    },
    {
      name: "Event2",
      date: "2023-10-2 17:35:10.895 -0400",
      attendees: [],
      location: "234 Street",
      coverImage: "",
      level: "Advanced",
    },
    {
      name: "Event3",
      date: "2023-10-2 17:35:10.895 -0400",
      attendees: [],
      location: "234 Street",
      coverImage: "",
      level: "Advanced",
    },
    {
      name: "Event4",
      date: "2023-10-2 17:35:10.895 -0400",
      attendees: [],
      location: "234 Street",
      coverImage: "",
      level: "Advanced",
    },
    {
      name: "Event5",
      date: "2023-10-2 17:35:10.895 -0400",
      attendees: [],
      location: "234 Street",
      coverImage: "",
      level: "Advanced",
    },
    {
      name: "Event6",
      date: "2023-10-2 17:35:10.895 -0400",
      attendees: [],
      location: "234 Street",
      coverImage: "",
      level: "Advanced",
    },
  ];

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsForCurrentPage = tempData.slice(startIndex, endIndex);
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "7rem",
        }}
      >
        <Grid sx={{ margin: "0 auto", maxWidth: "600px" }}>
          {itemsForCurrentPage.map((data, index) => (
            <div key={data.name} style={{ marginBottom: "6rem" }}>
              <EventCard eventInfo={data} width={700} height={375} />
            </div>
          ))}
        </Grid>

        <Pagination
          count={Math.ceil(tempData.length / itemsPerPage)}
          color="primary"
          onChange={handleChange}
          page={page}
        ></Pagination>
      </div>
    </>
  );
};

export default Home;
