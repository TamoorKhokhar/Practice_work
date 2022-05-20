import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShippingAddress from "./shippingAddress";
import Grid from "@mui/material/Grid";
import PaymentMethod from "./paymentMethod";
import OrderSummary from "./orderSummary";
const steps = ["Shipping address", "Payment details", "Review your order"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length - 3 && (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <ShippingAddress />
          </Typography>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "10px",
            }}
          >
          <Button onClick={handleNext}
           variant="contained">
            Next
          </Button>
          </Grid>
        </React.Fragment>
      )}
      {activeStep === steps.length - 2 && (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}><PaymentMethod/></Typography>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "10px",
            }}
          >
            <Button
             
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, }}
            >
              Back
            </Button>
            <Button onClick={handleNext}
            variant="contained"
            >
            Next
          </Button>
          </Grid>
         
        </React.Fragment>
      )}

      {activeStep === steps.length - 1 && (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
          <OrderSummary/>
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
             
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, }}
            >
              Back
            </Button>
            <Button onClick={handleNext}
             variant="contained">Place Holder</Button>
          </Box>
        </React.Fragment>
      ) }

{activeStep === steps.length && (
        <React.Fragment>
          <Box sx={{
           marginTop:"4%"
          }}>
          <Typography variant="text5">Thank you for your order.</Typography>
          </Box>
          <Typography variant="text6">Your order number is #2001539. We have emailed 
          your order confirmation and will send 
          you an update when your order has shipped.</Typography>
        </React.Fragment>
      ) }
      
    </Box>
  );
}
