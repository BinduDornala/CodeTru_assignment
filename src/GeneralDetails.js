import React, { useState } from "react";
// import DatePicker from "@mui/lab/DatePicker";
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
  //   IconButton
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const GeneralDetails = ({
  contactDetails,
  setContactDetails,
  setBasicDetails,
  basicDetails,
  type,
}) => {
  const handleContactChange = (fieldName, value) => {
    if (type == "basic") {
      setBasicDetails((prevState) => ({
        ...prevState,
        [fieldName]: value,
      }));
    } else {
      setContactDetails((prevState) => ({
        ...prevState,
        [fieldName]: value,
      }));
    }
  };

  console.log("basic12", basicDetails);

  return (
    <>
      <Typography sx={{ mb: 2, textAlign: "start" }} variant="h6">
        {type === "basic" ? "Basic Details" : "Contact Details"}
      </Typography>
      {type === "basic" ? (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Field 1"
              variant="outlined"
              value={basicDetails?.firstName}
              onChange={(e) => handleContactChange("firstName", e.target.value)}
              fullWidth
              sx={{ pt: "8px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Date Of Birth"
                  value={basicDetails?.dateOfBirth}
                  onChange={(val) => handleContactChange("dateOfBirth", val)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email-ID"
              variant="outlined"
              value={contactDetails.emailId}
              onChange={(e) => handleContactChange("emailId", e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mobile Number"
              variant="outlined"
              value={contactDetails.phoneNumber}
              onChange={(e) =>
                handleContactChange("phoneNumber", e.target.value)
              }
              fullWidth
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default GeneralDetails;
