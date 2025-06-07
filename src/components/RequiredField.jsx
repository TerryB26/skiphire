import { Typography } from "@mui/material";
import React from "react";

const RequiredField = ({
  asteriskColor = "red",
  variant = "body1",
  title,
  isRequired = true,
  boldTitle = false,
}) => {
  return (
    <Typography variant={variant} sx={{ color: "#E8E8E8" }}>
      <span style={{ fontWeight: boldTitle ? "bold" : "normal" }}>{title}</span>
      {isRequired && (
        <span style={{ color: asteriskColor, fontWeight: "bold" }}> *</span>
      )}
    </Typography>
  );
};

export default RequiredField;
