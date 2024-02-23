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

const GeneralDetails = () => {
  const [subActiveStep, setSubActiveStep] = useState(0);
  const [date, newDate] = useState(null);
  return (
    <Grid container spacing={2}>
      <Grid item xs={8} sm={4}>
        <TextField
          label="Field 1"
          variant="outlined"
          //   value={field1}
          //   onChange={handleField1Change}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}></Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Email-ID"
          variant="outlined"
          //   value={field2}
          //   onChange={handleField2Change}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Mobile Number"
          variant="outlined"
          //   value={field2}
          //   onChange={handleField2Change}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default GeneralDetails;
