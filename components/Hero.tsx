import { Box, TextField, Typography, Snackbar, Alert } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import Image from "next/image";
import React from "react";
import axios from "axios";

const HomeHero = () => {
  const [email, setEmail] = React.useState("");
  const [warning, setWarning] = React.useState(false);
  const [wrongEmail, setWrongEmail] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const isEmailValid = (check: string) => {
    return check.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      setWrongEmail(true);
      return;
    }
    setWarning(false);
    setLoading(true);
    try {
      await axios.post(
        "http://api.zingymusic.com/v1/misc/early-access-request",
        { email },
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
    } catch (err) {
      setLoading(false);
      setError(true);
      setEmail("");
    }
  };

  return (
    <Box className="p-8 md:p-20 min-h-screen gap-12 flex flex-col-reverse md:flex-row items-center justify-center">
      <Box className="max-w-lg">
        <h2 className="font-semibold text-4xl md:text-6xl mb-8">
          India's first social music-creators platform
        </h2>
        <Typography variant="body1">
          Zingy aspires to be India's first musicians based community platform
          helping them to connect-create-collaborate.
        </Typography>
        <TextField
          value={email}
          onChange={(e) => {
            setError(false);
            setSuccess(false);
            setWarning(false);
            setEmail(e.target.value);
          }}
          type="text"
          variant="outlined"
          placeholder="Enter your email"
          className="input-field w-2/4"
        />
        <button
          className="submit-button"
          onClick={(e) => {
            if (email.length) {
              handleSubmit(e);
            } else {
              setWarning(true);
            }
          }}
        >
          Apply for early access
        </button>
      </Box>
      <Box className="mt-20 md:mt-0">
        <Image width={348} height={433} src="/hero.png" alt="hero" />
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
          Registered Successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={error}
        onClose={() => setError(false)}
        autoHideDuration={4000}
      >
        <Alert
          onClose={() => setError(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Already Registered!
        </Alert>
      </Snackbar>
      <Snackbar
        open={wrongEmail}
        onClose={() => setWrongEmail(false)}
        autoHideDuration={4000}
      >
        <Alert
          onClose={() => setWrongEmail(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Invalid EmailId!
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
          Email Required!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default HomeHero;
