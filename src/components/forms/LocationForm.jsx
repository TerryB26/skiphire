import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import ReadOnlyField from "@root/components/ReadOnlyField";
import RequiredField from "@root/components/RequiredField";
import { useEffect, useState } from "react";
import { FaCity } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { LuMapPinHouse } from "react-icons/lu";
import { SiOpenstreetmap } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { fetchLocations } from "../dummyDB/locationsDb";

const LocationForm = () => {
  const [selected, setSelected] = useState(null);
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLocations().then(setLocations);
  }, []);

  const handleProceed = () => {
    if (selected && selected.uuid) {
      navigate(`/hire-details/${selected.uuid}`);
    }
  };

  return (
    <Box
      component="form"
      sx={{ width: "100%", maxWidth: { xs: "100%", md: "100%" } }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          p: { xs: 1, sm: 2 },
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} sx={{ width: "100%", maxWidth: "600px" }}>
          <Box sx={{ mb: 1.5, textAlign: "center" }}>
            <RequiredField title="Location" boldTitle />
          </Box>
          <Autocomplete
            options={locations}
            getOptionLabel={(option) =>
              option
                ? selected && selected.id === option.id
                  ? option.postcode
                  : `${option.postcode}, ${option.houseFlatNumber} ${option.streetName}, ${option.city}`
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
                  width: "100%",
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    minWidth: "300px",
                    width: "100%",
                    color: "#fff",
                    "& fieldset": { borderColor: "#fff" },
                    "&:hover fieldset": { borderColor: "#fff" },
                    "&.Mui-focused fieldset": { borderColor: "#fff" },
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  },
                  "& .MuiInputLabel-root": { color: "#fff" },
                }}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <Box
                      sx={{
                        color: "#fff",
                        mr: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <IoSearchOutline size={20} />
                      {params.InputProps.startAdornment}
                    </Box>
                  ),
                }}
              />
            )}
          />
          {selected && (
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Grid container spacing={1.5} direction="column">
                <Grid item xs={12}>
                  <ReadOnlyField
                    label="City"
                    value={selected.city}
                    icon={<FaCity color="#fff" size={18} />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ReadOnlyField
                    label="Street Name"
                    value={selected.streetName}
                    icon={<SiOpenstreetmap color="#fff" size={18} />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ReadOnlyField
                    label="House/Flat Number"
                    value={selected.houseFlatNumber}
                    icon={<LuMapPinHouse color="#fff" size={18} />}
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleProceed}
                    sx={{
                      width: { xs: "100%", sm: "auto" },
                      minWidth: "120px",
                      minHeight: "44px",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    Proceed
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default LocationForm;
