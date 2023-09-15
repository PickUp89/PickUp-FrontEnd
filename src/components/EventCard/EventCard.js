import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import formatISODateToCustomString from "../../utils/formatISODateToCustomString";
import testImage from "./testImage";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function EventCard({ eventInfo, height, width }) {
  const isAuthenticated = useSelector((state) => state?.user?.isAuthenticated);
  const navigate = useNavigate();
  const defaultEventInfo = {
    name: "Soccer Pick Up",
    date: "2023-08-31 17:35:10.895 -0400",
    attendees: ["user1", "user2", "user3"],
    location:
      "Columbia IceField Soccer Field, 220 Columbia St W, Waterloo, ON N2L 0A1",
    coverImage: testImage,
    level: "Advanced",
  };

  const renderLocation = (location) => {
    const locationParts = location.split(","); // Split the location string at the first comma
    const firstPart = locationParts[0].trim(); // Trim to remove any leading/trailing spaces
    const secondPart = locationParts.slice(1).join(",").trim(); // Join the remaining parts and trim

    // Then in your JSX code:
    return (
      <>
        <Typography level="body-sm">{firstPart}</Typography>
        <Typography level="body-sm">{secondPart}</Typography>
      </>
    );
  };

  const handleGoToPost = () => {
    if (!isAuthenticated) navigate('/auth');;
  };

  const handleAttendEvent = () => {
    if (!isAuthenticated) navigate('/auth');;
  };
  const { name, date, attendees, location, coverImage, level } =
    eventInfo || defaultEventInfo;
  return (
    <Card
      sx={{
        width: width || 500,
        height: height || null,
        backgroundColor: "white",
      }}
    >
      <div>
        <Typography level="title-lg">{name}</Typography>
        <Typography level="body-sm">
          {formatISODateToCustomString(date)}
        </Typography>
        {renderLocation(location)}
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
          onClick={handleAttendEvent}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img src={coverImage} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div style={{ marginTop: "auto" }}>
          <Typography fontSize="sm" fontWeight="lg">
            {level}
          </Typography>
          <Typography fontSize="sm" level="body-xs">
            {eventInfo?.attendeesNumber || attendees.length || 0} Attendees
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          onClick={handleGoToPost}
          sx={{
            ml: "auto",
            alignSelf: "center",
            fontWeight: 600,
            marginTop: "auto",
          }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}
