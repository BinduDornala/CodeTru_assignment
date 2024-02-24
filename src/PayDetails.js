import React from "react";
import {
  Button,
  Typography,
  FormControl,
  Chip,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";

const PayDetails = ({ payDetails, setPayDetails }) => {
  const options = [
    "React",
    "Java",
    "Javascript",
    "MongoDB",
    "Python",
    "Angular",
    "Spring Boot",
    "Django",
    "Typescript",
    "CSS",
  ];

  const handleChange = (index, selectedValues) => {
    setPayDetails((prevPayDetails) => {
      const newPayDetails = [...prevPayDetails];
      newPayDetails[index] = { approvers: selectedValues };
      return newPayDetails;
    });
  };
  const handleAddSelectInput = () => {
    setPayDetails([...payDetails, { approvers: [] }]);
  };

  return (
    <>
      <Typography sx={{ mb: 2, textAlign: "start" }} variant="h6">
        Pay Configuration
      </Typography>
      <FormControl sx={{ m: 1, minWidth: "70vh", textAlign: "start" }}>
        {payDetails?.map((payDetail, index) => (
          <div style={{ marginBottom: "16px" }}>
            <Select
              labelId={`multi-select-label-${index}`}
              multiple
              value={payDetail.approvers}
              onChange={(e) => handleChange(index, e.target.value)}
              renderValue={(selected) => (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} style={{ margin: "2px" }} />
                  ))}
                </div>
              )}
              sx={{ minWidth: "90vh" }}
            >
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  <Checkbox
                    checked={payDetail.approvers.indexOf(option) > -1}
                  />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>
          </div>
        ))}
        <Button color="primary" onClick={handleAddSelectInput} sx={{ mt: 2 }}>
          Add Select Input
        </Button>
      </FormControl>
    </>
  );
};

export default PayDetails;
