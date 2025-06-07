import React from "react";
import { TextField, Box } from "@mui/material";

const ReadOnlyField = ({ label, value, icon, sx }) => (
  <TextField
    label={label}
    value={value}
    fullWidth
    InputProps={{
      readOnly: true,
      startAdornment: (
        <Box sx={{ color: "#fff", mr: 1, display: "flex", alignItems: "center" }}>
          {icon}
        </Box>
      ),
    }}
    variant="outlined"
    sx={{
      ...sx,
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "#E8E8E8" },
        "&:hover fieldset": { borderColor: "#1565c0" },
        "&.Mui-focused fieldset": { borderColor: "#0d47a1" },
      },
      "& .MuiInputBase-input": { color: "#fff" },
      "& .MuiInputLabel-root": { color: "#fff" },
    }}
    InputLabelProps={{
      style: { color: "#fff" },
    }}
  />
);

export default ReadOnlyField;