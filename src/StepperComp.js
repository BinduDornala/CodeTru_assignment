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
    dateOfBirth: "",
  });
  const [contactDetails, setContactDetails] = useState({
    emailId: "",
    phoneNumber: "",
  });
  const [detailsType, setDetailsType] = useState("basic");
  const [payDetails, setPayDetails] = useState([{ approvers: [] }]);
  const [errors, setErrors] = useState("");
  const [button, setButton] = useState("Next");
  const [modalDisplay, setModalDisplay] = useState(false);

  const contactDetailsValidation = (details) => {
    let isValid = true;
    // if (!contactDetails.emailId) {
    //   isValid = false;
    // }

    // if (!contactDetails.phoneNumber) {
    //   isValid = false;
    // }
    // if(addresses.)
    // if (!isValid) {
    //   setErrors("All the Details are required");
    // }
    // setErrors(errors);

    if (
      details === "address" &&
      !addresses[0].city &&
      !addresses[0].postalCode
    ) {
      isValid = false;
      setErrors("At least one city and postal code is required");
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
    if (activeStep == 0) {
      // if (contactDetailsValidation()) {
      setActiveStep((prevStep) => prevStep + 1);
      setErrors("");
      // }
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

  return (
    <>
      <Box
        sx={{
          display: "flex",
          // justifyContent: "center",
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
            <Card sx={{ m: 2, p: 3, minWidth: "90vh" }}>
              {activeStep == 0 &&
                (subActiveStep == 0 ? (
                  <GeneralDetails
                    basicDetails={basicDetails}
                    setBasicDetails={setBasicDetails}
                    type={detailsType}
                  />
                ) : (
                  <GeneralDetails
                    contactDetails={contactDetails}
                    setContactDetails={setContactDetails}
                    type={detailsType}
                  />
                ))}{" "}
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
