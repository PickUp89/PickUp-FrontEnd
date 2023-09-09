function formatISODateToCustomString(isoDate) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  };

  const date = new Date(isoDate);
  const customDateString = date.toLocaleDateString("en-US", options);

  return customDateString;
}

export default formatISODateToCustomString;
