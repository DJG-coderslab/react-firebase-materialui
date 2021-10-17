import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import app from "./../../firebase/firebaseConfig";
import app from "./../../firebase/firebaseConfig";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register = () => {
  const [email, setMail] = useState("");
  const [password, setPasswd] = useState("");
  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log("credential ", userCredential);
            history.push("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error: ", errorMessage);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error: ", errorMessage);
      });
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
            value={email}
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
            value={password}
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
