import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register = () => {
  const [mail, setMail] = useState("");
  const [passwd, setPasswd] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
    console.log("submit: ", mail, passwd);
  };

  return (
    <>
      <h1>Register</h1>
          <Box>
              {/* <Typography variant="h2">Rejetsracja</Typography> */}
        <form onSubmit={submitHandler}>
          <TextField
            required
            id="standard-basic1"
            label="e-mail"
            variant="standard"
            value={mail}
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
          <TextField
            required
            id="standard-basic2"
            label="password"
            variant="standard"
            type="password"
            value={passwd}
            onChange={(e) => {
              setPasswd(e.target.value);
            }}
          />
          <Button type="submit" variant="contained">
            Zarejestruj
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Register;
