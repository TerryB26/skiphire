import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import RequiredField from "@root/components/RequiredField";
import ReadOnlyField from "@root/components/ReadOnlyField";
import { FaCreditCard, FaUser, FaLock, FaCity } from "react-icons/fa";
import { SiOpenstreetmap } from "react-icons/si";
import { LuMapPinHouse } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";
import waste1 from "../../images/waste1.png";
import { fetchLocations } from "../dummyDB/locationsDb";

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [location, setLocation] = useState(null);
  const { uuid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch location based on UUID
    fetchLocations().then((locations) => {
      const selectedLocation = locations.find((loc) => loc.uuid === uuid);
      setLocation(selectedLocation);
    });
  }, [uuid]);

  const handleSubmit = () => {
    if (cardNumber && cardHolder && expiry && cvv) {
      navigate("/confirmation");
    }
  };


  return (
    <Grid container spacing={2} justifyContent="center" alignItems="flex-start" sx={{ width: "100%" }}>
      <Grid item xs={12} md={4}>
        <Box className="column" sx={{ p: 2, maxWidth: "400px" }}>
          <Box sx={{ mb: 1.5 }}>
            <RequiredField title="Order Summary" boldTitle={true} isRequired={false}/>
          </Box>
          <Typography variant="body1" color="white">Quantity: 1</Typography>
            <Typography variant="body1" color="white">Total: $50.00</Typography>
          {location && (
            <Box sx={{ mt: 2 }}>
              <ReadOnlyField
                label="City"
                value={location.city}
                icon={<FaCity color="#fff" />}
                sx={{ mb: 5 }}
              />
              <ReadOnlyField
                label="Street Name"
                value={location.streetName}
                icon={<SiOpenstreetmap color="#fff" />}
                sx={{ mb: 5 }}
              />
              <ReadOnlyField
                label="House/Flat Number"
                value={location.houseFlatNumber}
                icon={<LuMapPinHouse color="#fff" />}
                sx={{ mb: 1 }}
              />
            </Box>
          )}
        </Box>
      </Grid>

      <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src={waste1}
          alt="Waste"
          style={{ maxWidth: "50%", height: "auto" }}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <Box className="column" sx={{ p: 2, maxWidth: "400px" }}>
          <Box sx={{ mb: 1.5 }}>
            <RequiredField title="Payment Details" boldTitle={true} />
          </Box>
          {/* ...existing payment fields... */}
          <TextField
            label="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#E8E8E8" },
                "&:hover fieldset": { borderColor: "#1565c0" },
                "&.Mui-focused fieldset": { borderColor: "#0d47a1" },
              },
              "& .MuiInputBase-input": { color: "#fff" },
              "& .MuiInputLabel-root": { color: "#fff" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaCreditCard color="#fff" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Card Holder Name"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#E8E8E8" },
                "&:hover fieldset": { borderColor: "#1565c0" },
                "&.Mui-focused fieldset": { borderColor: "#0d47a1" },
              },
              "& .MuiInputBase-input": { color: "#fff" },
              "& .MuiInputLabel-root": { color: "#fff" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaUser color="#fff" />
                </InputAdornment>
              ),
            }}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Expiry Date (MM/YY)"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                variant="outlined"
                fullWidth
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#E8E8E8" },
                    "&:hover fieldset": { borderColor: "#1565c0" },
                    "&.Mui-focused fieldset": { borderColor: "#0d47a1" },
                  },
                  "& .MuiInputBase-input": { color: "#fff" },
                  "& .MuiInputLabel-root": { color: "#fff" },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                variant="outlined"
                fullWidth
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#E8E8E8" },
                    "&:hover fieldset": { borderColor: "#1565c0" },
                    "&.Mui-focused fieldset": { borderColor: "#0d47a1" },
                  },
                  "& .MuiInputBase-input": { color: "#fff" },
                  "& .MuiInputLabel-root": { color: "#fff" },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock color="#fff" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            fullWidth
            sx={{ mt: 2 }}
          >
            Complete Checkout
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}


export default Checkout;