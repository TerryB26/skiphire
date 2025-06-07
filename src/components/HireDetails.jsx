import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Stepper, Step, StepLabel, Button, Box, Typography } from "@mui/material";
import { FaCity } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa6";
import { TbLicense } from "react-icons/tb";
import { BsCalendarDate } from "react-icons/bs";
import { TbCreditCardPay } from "react-icons/tb";
import WasteTypeForm from "@root/components/forms/WasteTypeForm";

const steps = [
  { label: "Waste Type", title: "Select Waste Type", content: <WasteTypeForm />, icon: <BsTrash3 color="#fff" /> },
  { label: "Select Skip", title: "Select Skip Size", content: "Pick the skip size that fits your needs.", icon: <FaTruckMoving color="#fff" /> },
  { label: "Permit Check", title: "Permit Check", content: "Check if you need a permit for your skip.", icon: <TbLicense color="#fff" /> },
  { label: "Choose Date", title: "Choose Date", content: "Select your preferred delivery and collection dates.", icon: <BsCalendarDate color="#fff" /> },
  { label: "Payment", title: "Payment", content: "Complete your booking by making a payment.", icon: <TbCreditCardPay color="#fff" /> }
];

const HireDetails = () => {
  const { uuid } = useParams();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const currentStep = steps[activeStep];

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, idx) => (
          <Step key={step.label}>
            <StepLabel
              icon={step.icon}
              sx={{
                ...(activeStep === idx && {
                  color: "#fff !important",
                  "& .MuiStepLabel-label": { color: "#fff !important" }
                })
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
        <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#fff" }}>
          {currentStep.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {currentStep.content}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 2 }}>
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HireDetails;