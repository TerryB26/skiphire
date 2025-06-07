import React, { useState, useEffect } from "react";
import RequiredField from "@root/components/RequiredField";
import {
  Autocomplete,
  TextField,
  Box,
  Grid,
} from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { SiOpenstreetmap } from "react-icons/si";
import { LuMapPinHouse } from "react-icons/lu";
import ReadOnlyField from "@root/components/ReadOnlyField";
import { FaCity } from "react-icons/fa";
import { fetchLocations } from "../dummyDB/locationsDb"; // <-- import fetchLocations

const LocationForm = () => {
  const [selected, setSelected] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations().then(setLocations);
  }, []);

  return (
    <Box component="form" sx={{ width: "100%" }}>
      <form>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{ p: 2 }}>
            <Grid item xs={12} sm={12}>
              <Box sx={{ mb: 1.5, display: "flex", alignItems: "flex-start" }}>
                <RequiredField title="Location" boldTitle={true} />
              </Box>
              <Autocomplete
                options={locations}
                getOptionLabel={(option) =>
                  selected && option && selected.id === option.id
                    ? option.postcode
                    : option
                    ? `${option.postcode}, ${option.houseFlatNumber} ${option.streetName}, ${option.city}`
                    : ""
                }
                value={selected}
                onChange={(_, newValue) => setSelected(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select your delivery postcode or address"
                    variant="outlined"
                    sx={{
                      mb: 2,
                      width: "500px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#E8E8E8",
                        },
                        "&:hover fieldset": {
                          borderColor: "#1565c0",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#0d47a1",
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#fff",
                      },
                      "& .MuiInputLabel-root": {
                        color: "#fff",
                      },
                    }}
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: (
                        <Box sx={{ color: "#fff", mr: 1, display: "flex", alignItems: "center" }}>
                          <IoSearchOutline />
                          {params.InputProps.startAdornment}
                        </Box>
                      ),
                    }}
                  />
                )}
              />
              {selected && (
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2} direction="column">
                    <Grid item xs={12}>
                      <ReadOnlyField
                        label="City"
                        value={selected.city}
                        icon={<FaCity color="#fff" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ReadOnlyField
                        label="Street Name"
                        value={selected.streetName}
                        icon={<SiOpenstreetmap color="#fff" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ReadOnlyField
                        label="House/Flat Number"
                        value={selected.houseFlatNumber}
                        icon={<LuMapPinHouse color="#fff" />}
                      />
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default LocationForm;