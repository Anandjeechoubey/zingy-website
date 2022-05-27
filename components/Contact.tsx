import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";

const Contact = () => {
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [errmsg, setErrmsg] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [warning, setWarning] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const isEmailValid = (check: string) => {
    return check.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWarning(false);
    setLoading(true);
    if (!isEmailValid(email)) {
      setLoading(false);
      setErrmsg("Please enter a valid email address");
      setError(true);
      return;
    }
    try {
      await axios.post(
        "http://api.zingymusic.com/v1/misc/form-query",
        { email, subject, text: message },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "b70e1cd3-8133-450b-827b-0ab3fcddee54",
          },
        }
      );
      setLoading(false);
      setSuccess(true);
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setLoading(false);
      setError(true);
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <Box
      id="contact"
      className="p-8 md:p-20 min-h-screen flex flex-col gap-16 items-center justify-center"
    >
      <h2 className="font-bold uppercase text-center">
        Get in <span style={{ color: "#7B36FA" }}>touch</span>
      </h2>
      <Box className="w-full max-w-lg">
        <TextField
          variant="outlined"
          fullWidth
          label="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <Box className="my-6">
          <TextField
            variant="outlined"
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            fullWidth
            placeholder="Subject"
          />
        </Box>
        <TextField
          variant="outlined"
          multiline
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          label="Message"
          required
          placeholder="Message"
        />
        <button
          onClick={(e) => {
            if (email === "" || message === "") {
              setWarning(true);
            } else {
              handleSubmit(e);
            }
          }}
          className="submit-button w-full"
        >
          Submit
        </button>
      </Box>
      <Snackbar
        open={success}
        onClose={() => setSuccess(false)}
        autoHideDuration={4000}
      >
        <Alert
          onClose={() => setSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Messege Sent!
        </Alert>
      </Snackbar>
      <Snackbar
        open={error}
        onClose={() => setError(false)}
        autoHideDuration={4000}
      >
        <Alert
          onClose={() => {
            setErrmsg("");
            setError(false);
          }}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errmsg === "" ? "Some Error Occured!" : errmsg}
        </Alert>
      </Snackbar>
      <Snackbar
        open={warning}
        onClose={() => setWarning(false)}
        autoHideDuration={4000}
      >
        <Alert
          onClose={() => setWarning(false)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Email and Messege are Required!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
