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

const GeneralDetails = ({
  contactDetails,
  setContactDetails,
  setBasicDetails,
  basicDetails,
  type,
}) => {
  const [subActiveStep, setSubActiveStep] = useState(0);
  const [date, newDate] = useState(null);

  const handleField1Change = (fieldName, value) => {
    // setDetails((prevState) => ({
    //   ...prevState,
    //   [fieldName]: value,
    // }));
  };

  // console.log("contactDetails", contactDetails);

  return (
    <>
      <Typography sx={{ mb: 2, textAlign: "start" }} variant="h6">
        {type === "basic" ? "Basic Details" : "Contact Details"}
      </Typography>
      <Grid container spacing={2}>
        {type === "basic" ? (
          <Box>
            <Grid item xs={8} sm={4}>
              <TextField
                label="Field 1"
                variant="outlined"
                //   value={field1}
                // onChange={handleField1Change}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
          </Box>
        ) : (
          <Box>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email-ID"
                variant="outlined"
                // value={details.emailId}
                onChange={(e) => handleField1Change("emailId", e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Mobile Number"
                variant="outlined"
                // value={details.phoneNumber}
                onChange={(e) =>
                  handleField1Change("phoneNumber", e.target.value)
                }
                fullWidth
              />
            </Grid>
          </Box>
        )}
      </Grid>
    </>
  );
};

export default GeneralDetails;
