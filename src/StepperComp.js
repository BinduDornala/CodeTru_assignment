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
  //   IconButton
} from "@mui/material";
import SideNav from "./SideNav";
import GeneralDetails from "./GeneralDetails";

const StepperComp = () => {
  const steps = ["General Details", "Address", "Pay Configuration"];
  const [activeStep, setActiveStep] = useState(0);
  const [addresses, setAddresses] = useState([{ city: "", postalCode: "" }]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [newValue, setNewValue] = useState("");

  const handleGeneralDetails = () => {
    return (
      <div>
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
          <Grid item xs={12} sm={6}>
            <TextField
              label="Field 2"
              variant="outlined"
              //   value={field2}
              //   onChange={handleField2Change}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Field 2"
              variant="outlined"
              //   value={field2}
              //   onChange={handleField2Change}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Field 2"
              variant="outlined"
              //   value={field2}
              //   onChange={handleField2Change}
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
    );
  };

  const handleAddAddress = () => {
    setAddresses([...addresses, { city: "", postalCode: "" }]);
  };

  const handleRemoveAddress = (index) => {
    const newAddresses = [...addresses];
    newAddresses.splice(index, 1);
    setAddresses(newAddresses);
  };

  const handleChangeAddress = (index, field, value) => {
    const newAddresses = [...addresses];
    newAddresses[index][field] = value;
    setAddresses(newAddresses);
  };

  const handleSubmit = () => {
    // You can handle form submission here
    console.log(addresses);
  };

  const handleAddressDetails = () => {
    return (
      <form onSubmit={handleSubmit}>
        {addresses.map((address, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={4}>
              <TextField
                label={`City ${index + 1}`}
                variant="outlined"
                fullWidth
                required={index === 0}
                value={address.city}
                onChange={(e) =>
                  handleChangeAddress(index, "city", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label={`Postal Code ${index + 1}`}
                variant="outlined"
                fullWidth
                required={index === 0}
                value={address.postalCode}
                onChange={(e) =>
                  handleChangeAddress(index, "postalCode", e.target.value)
                }
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleRemoveAddress(index)}
                disabled={addresses.length === 1}
              >
                Minus
              </Button>
            </Grid>
          </Grid>
        ))}
        <Button variant="contained" color="primary" onClick={handleAddAddress}>
          Add
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    );
  };

  const handlePayDetails = () => {
    const options = [
      "Apple",
      "Banana",
      "Orange",
      "Mango",
      "Pineapple",
      "Grapes",
      "Strawberry",
      "Watermelon",
      "Kiwi",
      "Peach",
    ];

    const handleChange = (event) => {
      setSelectedValues(event.target.value);
    };

    // const handleChipDelete = useMemo(
    //   () => (chipToDelete) => () => {
    //     setSelectedValues((chips) =>
    //       chips.filter((chip) => chip !== chipToDelete)
    //     );
    //   },
    //   []
    // );
    const handleAddSelectInput = () => {
      const newInputId = selectedValues.length;
      setSelectedValues([...selectedValues, newInputId]);
    };

    return (
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="multi-select-label">Select</InputLabel>
        <Select
          labelId="multi-select-label"
          multiple
          value={selectedValues}
          onChange={handleChange}
          // renderValue={(selected) => selected.join(", ")}
          renderValue={(selected) => (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  style={{ margin: "2px" }}
                  //   onDelete={handleChipDelete(value)}
                />
              ))}
            </div>
          )}
          inputProps={{
            name: "selectedValues",
            id: "selected-values",
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox checked={selectedValues.indexOf(option) > -1} />
              <ListItemText primary={option} />
            </MenuItem>
          ))}
        </Select>
        {/* <Button onClick={() => setSelectedValues([])}>Clear</Button> */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddSelectInput}
        >
          Add Select Input
        </Button>
      </FormControl>
    );
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
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
          <Box>
            {activeStep == 0 && <GeneralDetails />}{" "}
            {activeStep == 1 && handleAddressDetails()}{" "}
            {activeStep == 2 && handlePayDetails()}
          </Box>
          <Button onClick={handleNext}> Next </Button>
        </Box>
      </Box>
    </>
  );
};

export default StepperComp;
