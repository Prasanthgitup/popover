import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Alert } from "react-bootstrap";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    dob: "",
    phone: "",
  });
  const [severity, setSeverity] = React.useState("");
  const [message, setMessage] = React.useState("");

  const Submit = () => {
    const user = window.sessionStorage.getItem(formData.name);
    if (user) {
      setMessage("User Exist");
      setSeverity("warning");
    } else {
      window.sessionStorage.setItem(formData.name, JSON.stringify(formData));
      setMessage("User Added Successfully");
      setSeverity("success");
      
    }
    const navigate = useNavigate();
    navigate("/aravind");
    
  };

  const handleChange = (event, field) => {
    const data = Object.assign({}, formData);
    data[field] = event.target.value;
    setFormData(data);
  };

  return (
    <Stack component="form" noValidate spacing={3}>
      <Box sx={{ textAlign: "center", marginTop: "7em", marginBottom: "3em" }}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={formData.name}
          sx={{
            width: 350,
            textAlign: "center",
            marginTop: "3em",
            marginBottom: "1.5em",
          }}
          onChange={(e) => handleChange(e, "name")}
        />
        <br></br>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          value={formData.dob}
          sx={{ width: 350 }}
          InputLabelProps={{
            shrink: true,
            textAlign: "center",
            marginTop: "1.5em",
            marginBottom: "1em",
          }}
          onChange={(e) => handleChange(e, "dob")}
        />
        <br></br>
        <TextField
          id="outlined-basic"
          label="Mobile"
          value={formData.phone}
          variant="outlined"
          sx={{
            width: 350,
            textAlign: "center",
            marginTop: "1.5em",
            marginBottom: "1em",
          }}
          onChange={(e) => handleChange(e, "phone")}
        />
        <Box sx={{ paddingLeft: "16em", paddingRight: "0em" }}>
          <Button
            variant="contained"
            onClick={() => {
              Submit();
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
      {/* {message && (
        <Alert severity={severity}>
          <AlertTitle>{severity}</AlertTitle>
          {message}
        </Alert>
      )} */}
      <Snackbar
        open={message ? true : false}
        autoHideDuration={6000}
        message={message}
      />
    </Stack>
  );
};

export default Home;
