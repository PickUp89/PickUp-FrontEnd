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

export default function EventCard() {
  const eventInfo = {
    name: "Soccer Pick Up",
    date: "2023-08-31 17:35:10.895 -0400",
    attendees: ["user1", "user2", "user3"],
    location:
      "Columbia IceField Soccer Field, 220 Columbia St W, Waterloo, ON N2L 0A1",
    coverImage: testImage,
    level: "Advanced",
  };
  const { name, date, attendees, location, coverImage, level } = eventInfo;
  return (
    <Card sx={{ width: 500, backgroundColor: "white" }}>
      <div>
        <Typography level="title-lg">{name}</Typography>
        <Typography level="body-sm">
          {formatISODateToCustomString(date)}
        </Typography>
        <Typography level="body-sm">{location}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
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
            {attendees.length || 0} Attendees
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}
