import React from "react";
import { Typography, TextField, Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const AddressDetails = ({ addresses, setAddresses }) => {
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
  return (
    <div>
      <Typography sx={{ mb: 2, textAlign: "start" }} variant="h6">
        Address
      </Typography>
      {addresses.map((address, index) => (
        <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
          <Grid item xs={5}>
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
          <Grid item xs={5}>
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
          {addresses.length > 1 && index < addresses.length - 1 && (
            <Grid item xs={2}>
              <IconButton onClick={() => handleRemoveAddress(index)}>
                <RemoveIcon fontSize="large" sx={{ color: "#a83232" }} />
              </IconButton>
            </Grid>
          )}
          {index === addresses.length - 1 && (
            <Grid item xs={2}>
              <IconButton onClick={handleAddAddress}>
                <AddIcon fontSize="large" />
              </IconButton>
            </Grid>
          )}
        </Grid>
      ))}
    </div>
  );
};

export default AddressDetails;
