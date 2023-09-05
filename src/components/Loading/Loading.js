import React from "react";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div style={{ textAlign: "center", padding: "16px" }}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
