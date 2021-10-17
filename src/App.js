import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
<Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
</Router>


  );
}

export default App;
