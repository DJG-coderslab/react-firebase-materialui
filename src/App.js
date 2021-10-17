import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/common/Navbar";
import Container from "@mui/material/Container";
import app from "./firebase/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import AddArticle from "./components/AddArticle";


function App() {
  const [email, setEmail] = useState("");
  useEffect(() => { 
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("userid: ", user);
        setEmail(user.email);
      }
    })
  }, [])
  return (
    <Router>
      <Navbar email={email}/>
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/add-article" component={AddArticle} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
