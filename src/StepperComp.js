import React, { useState, useMemo } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Grid,
  FormControl,
  Chip,
  Select,
  InpurLabel,
  MenuItem,
  Checkbox,
  InputLabel,
  ListItemText,
  Card,
  //   IconButton
} from "@mui/material";
import SideNav from "./SideNav";
import GeneralDetails from "./GeneralDetails";
import AddressDetails from "./AddressDetails";
import PayDetails from "./PayDetails";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Margin } from "@mui/icons-material";

const StepperComp = () => {
  const steps = ["General Details", "Address", "Pay Configuration"];
  const [activeStep, setActiveStep] = useState(0);
  const [subActiveStep, setSubActiveStep] = useState(0);
  const [addresses, setAddresses] = useState([{ city: "", postalCode: "" }]);
  const [basicDetails, setBasicDetails] = useState({
    firstName: "",
    dateOfBirth: null,
  });
  const [contactDetails, setContactDetails] = useState({
    emailId: "",
    phoneNumber: "",
  });
  const [payDetails, setPayDetails] = useState([{ approvers: [] }]);
  const [errors, setErrors] = useState("");
  const [button, setButton] = useState("Next");
  const [modalDisplay, setModalDisplay] = useState(false);

  const contactDetailsValidation = (details) => {
    let isValid = true;
    if (
      details === "basic" &&
      (!basicDetails?.firstName || !basicDetails.dateOfBirth)
    ) {
      console.log("inside");
      isValid = false;
      setErrors("Both firstName and date of birth are required");
    }

    if (
      details === "contact" &&
      (!contactDetails.emailId || !contactDetails.phoneNumber)
    ) {
      isValid = false;
      setErrors("Both Email and phone Number are required");
    }

    if (
      details === "address" &&
      (!addresses[0].city || !addresses[0].postalCode)
    ) {
      isValid = false;
      setErrors("Both city and postal code are required");
    }
    if (details === "pay" && !payDetails[0].approvers.length >= 1) {
      isValid = false;
      setErrors("At Least One Approver is required");
    }

    if (isValid) {
      setErrors("");
    }
    return isValid;
  };

  const handleNext = () => {
    if (activeStep == 0 && subActiveStep == 0) {
      if (contactDetailsValidation("basic")) {
        setSubActiveStep((prevStep) => prevStep + 1);
      }
    }
    if (activeStep == 0 && subActiveStep == 1) {
      if (contactDetailsValidation("contact")) {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
    if (activeStep == 1) {
      if (contactDetailsValidation("address")) {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
    if (activeStep == 2) {
      if (contactDetailsValidation("pay")) {
        setButton("Finish");
      }
    }
    if (button == "Finish") {
      setModalDisplay(true);
    }
  };

  const renderSteps = () => {
    const steps = 2;

    return Array.from({ length: steps }, (_, index) => (
      <div
        key={index}
        className={`step ${index === subActiveStep ? "active" : ""}`}
      />
    ));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
        }}
      >
        <SideNav />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "60vh",
              // mt: 10,
            }}
          >
            {activeStep == 0 && (
              <div className="horizontal-stepper">{renderSteps()}</div>
            )}
            <Card sx={{ m: 2, p: 3, minWidth: "90vh" }}>
              {activeStep == 0 && (
                <>
                  <GeneralDetails
                    contactDetails={contactDetails}
                    setContactDetails={setContactDetails}
                    basicDetails={basicDetails}
                    setBasicDetails={setBasicDetails}
                    type={subActiveStep == 0 ? "basic" : "contact"}
                  />
                </>
              )}{" "}
              {activeStep == 1 && (
                <AddressDetails
                  addresses={addresses}
                  setAddresses={setAddresses}
                />
              )}{" "}
              {activeStep == 2 && (
                <PayDetails
                  payDetails={payDetails}
                  setPayDetails={setPayDetails}
                />
              )}
            </Card>
            {errors && <div style={{ margin: "1rem" }}> {errors} </div>}
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              sx={{ float: "right" }}
            >
              {" "}
              {button}{" "}
            </Button>
          </Box>

          {modalDisplay && (
            <Dialog open={modalDisplay} onClose={() => setModalDisplay(false)}>
              <DialogTitle>Congratulations</DialogTitle>
              <Typography> Forms Submitted Successfully </Typography>
            </Dialog>
          )}
        </Box>
      </Box>
    </>
  );
};

export default StepperComp;
