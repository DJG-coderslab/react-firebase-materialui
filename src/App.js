import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/common/Navbar";
import Container from "@mui/material/Container";

function App() {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
