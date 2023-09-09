import React from "react";
import { Alert } from "@mui/material";

const GenericErrorBanner = () => {
  return (
    <div>
      <Alert severity="error">
        Something gone wrong, please refresh the page. We are sorry for the
        inconvenience
      </Alert>
    </div>
  );
};

export default GenericErrorBanner;
