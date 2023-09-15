const mockEventInfos = [
  {
    name: "Soccer Pick Up",
    date: "2023-08-24 17:35:10.895 -0400",
    attendees: ["", "", "", "", "", "", ""],
    attendeesNumber: 13,
    location:
      "Columbia IceField Soccer Field, 220 Columbia St W, Waterloo, ON N2L 0A1",
    coverImage:
      "https://www.espressoenglish.net/wp-content/uploads/2014/01/soccer-field.jpg",
    level: "Advanced",
  },
  {
    name: "Kitchener Rangers Watch Party",
    date: "2023-11-10 19:00:00.000 -0500",
    attendees: ["user31", "user32", "user33"],
    location: "Waterloo Sports Pub, 123 King St N, Waterloo, ON N2J 2Y9",
    coverImage:
      "https://static01.nyt.com/images/2012/06/03/sports/YBAR1/YBAR1-jumbo.jpg?quality=75&auto=webp",
    level: "Casual",
    teamSupport: "Waterloo Regional Hockey Team",
    attendeesNumber: 11,
  },
  {
    name: "Basketball Game",
    date: "2023-09-10 14:00:00.000 -0400",
    attendees: ["user4", "user5", "user6"],
    location:
      "Waterloo Recreation Center, 101 Father David Bauer Dr, Waterloo, ON N2L 6M2",
    coverImage: "https://www.parkin.ca/files/WEC09246-1.jpg",
    level: "Intermediate",
    attendeesNumber: 5,
  },
  {
    name: "Hiking Adventure",
    date: "2023-09-15 09:00:00.000 -0400",
    attendees: ["user7", "user8", "user9"],
    location:
      "Elora Gorge Conservation Area, 7400 Wellington County Rd 21, Elora, ON N0B 1S0",
    coverImage:
      "https://images.squarespace-cdn.com/content/v1/53774b19e4b02c5d20514493/1434497877635-E7P4VTILBL7MSPSGBV8N/image-asset.jpeg",
    level: "Beginner",
    attendeesNumber: 3,
  },
  {
    name: "Tennis Tournament",
    date: "2023-09-20 16:30:00.000 -0400",
    attendees: ["user10", "user11", "user12"],
    location: "Waterloo Tennis Club, 17 Columbia St W, Waterloo, ON N2L 3K2",
    coverImage:
      "https://www.waterlootennis.com/wp-content/uploads/2018/04/467882_626770884018042_218873931_o.jpg",
    level: "Advanced",
    attendeesNumber: 23,
  },
  {
    name: "Yoga in the Park",
    date: "2023-09-25 18:00:00.000 -0400",
    attendees: ["user13", "user14", "user15"],
    location: "Waterloo Park, 50 Young St W, Waterloo, ON N2L 2Z4",
    coverImage:
      "https://scontent.fyzd1-3.fna.fbcdn.net/v/t39.30808-6/276306060_5083346768371412_6788674213107985714_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=bcc5cc&_nc_ohc=9Wk5sMLHBUcAX_yWXK5&_nc_ht=scontent.fyzd1-3.fna&oh=00_AfADN5cA0fqqeXc03-FNQ4XI9Fs1HNVq0uv9wgXGzhjX2w&oe=6509B51D",
    level: "Intermediate",
    attendeesNumber: 10,
  },
  {
    name: "Badminton Match",
    date: "2023-10-05 19:00:00.000 -0400",
    attendees: ["user16", "user17", "user18"],
    location:
      "Waterloo Badminton Club, 170 Columbia St W, Waterloo, ON N2L 3L3",
    coverImage:
      "https://scontent.fyzd1-3.fna.fbcdn.net/v/t39.30808-6/298219857_3153167601563695_90033750255200503_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=813123&_nc_ohc=7yW1ec97_TQAX9QTR_l&_nc_ht=scontent.fyzd1-3.fna&oh=00_AfDrOpYFCg6jvt84lAHtO5bpscid2zakFS6PGzla23dcMg&oe=65097582",
    level: "Intermediate",
    attendeesNumber: 30,
  },
  {
    name: "Running Club Meetup",
    date: "2023-10-12 07:30:00.000 -0400",
    attendees: ["user19", "user20", "user21"],
    location: "Bechtel Park, 185 Bridge St W, Waterloo, ON N2K 1K9",
    coverImage:
      "https://scontent.fyzd1-2.fna.fbcdn.net/v/t39.30808-6/219764868_205119341620544_5904986439465057767_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=52f669&_nc_ohc=44iWWAggh9wAX_gaGPK&_nc_ht=scontent.fyzd1-2.fna&oh=00_AfDWJspiRAEHv9JzRj5I4DN15RUs_YkSApL3VLC_K61U8w&oe=65095104",
    level: "Beginner",
    attendeesNumber: 7,
  },
  {
    name: "Golf Tournament",
    date: "2023-10-18 11:00:00.000 -0400",
    attendees: ["user22", "user23", "user24"],
    location:
      "Grey Silo Golf Course, 2001 University Ave E, Waterloo, ON N2K 4K4",
    coverImage:
      "https://image-tc.galaxy.tf/wijpeg-8ifidt2ovrgndagaz941pzt3k/grey-silo-golf.jpg?width=1920",
    level: "Advanced",
    attendeesNumber: 40,
  },
  {
    name: "Chess Club Meeting",
    date: "2023-10-22 19:30:00.000 -0400",
    attendees: ["user25", "user26", "user27"],
    location: "Waterloo Public Library, 35 Albert St, Waterloo, ON N2L 5E2",
    coverImage:
      "https://haverblog-media.s3.amazonaws.com/wp-content/uploads/2019/04/15152115/blog-chess-club-3418-junior-nguyen-22.jpg",
    level: "Intermediate",
    attendeesNumber: 53,
  },
];

export default mockEventInfos;
