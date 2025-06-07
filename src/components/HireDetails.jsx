import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import SkipTypeForm from "@root/components/forms/SkipTypeForm";
import WasteTypeForm from "@root/components/forms/WasteTypeForm";
import { useState } from "react";
import { BsCalendarDate, BsTrash3 } from "react-icons/bs";
import { FaTruckMoving } from "react-icons/fa6";
import { TbCreditCardPay, TbLicense } from "react-icons/tb";
import PermitCheckForm from "@root/components/forms/PermitCheckForm";
import DeliveryDateForm from "@root/components/forms/DeliveryDateForm";
import PaymentForm from "@root/components/forms/PaymentForm";

const steps = [
  {
    label: "Waste Type",
    title: "Select Waste Type",
    content: <WasteTypeForm />,
    icon: <BsTrash3 color="#fff" />,
  },
  {
    label: "Select Skip",
    title: "Select Skip Size",
    content: <SkipTypeForm />,
    icon: <FaTruckMoving color="#fff" />,
  },
  {
    label: "Permit Check",
    title: "Permit Check",
    content: <PermitCheckForm />,
    icon: <TbLicense color="#fff" />,
  },
  {
    label: "Choose Date",
    title: "Choose Date",
    content: <DeliveryDateForm />,
    icon: <BsCalendarDate color="#fff" />,
  },
  {
    label: "Payment",
    title: "Payment",
    content: <PaymentForm />,
    icon: <TbCreditCardPay color="#fff" />,
  },
];

const HireDetails = () => {
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
                  "& .MuiStepLabel-label": { color: "#fff !important" },
                }),
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
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 2 }}
          >
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
