
import { useState } from "react";
import app from "../../firebase/firebaseConfig";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addDoc, getFirestore, collection } from "firebase/firestore";


export default function AddArticles() {

    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("");
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        const db = getFirestore(app);
        const docRef = await addDoc(collection(db, "articles"), {
            title,
            photo,
            text
        });
      if (docRef) {
        setSuccess(true);
      }
}    

    return (
      <Box>
        {success && <h2>Artykuł dodoany</h2>}
            <form onSubmit={submitHandler}>
        {/* <Typography variant="h2">Rejetsracja</Typography> */}
          <TextField
            required
            id="standard-basic1"
            label="title"
            variant="standard"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            required
            id="standard-basic1"
            label="photo"
            variant="standard"
            value={photo}
            onChange={(e) => {
              setPhoto(e.target.value);
            }}
          />
          <TextField
            required
            id="standard-basic1"
            label="text"
            variant="standard"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <Button type="submit" variant="contained">
            Dodaj artykuł
          </Button>
          </form>
      </Box>
            
    )
}
