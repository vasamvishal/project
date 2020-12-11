import "./App.css";
import React from "react";
// import { Switch } from "@material-ui/core";
import Login from "./login";
import Dialogue from "./Dialogue";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: true,
    };
  }

  handleChange = (event) => {
    this.setState({ checked: event.target.checked });
  };
  render() {
    return (
      <Router>
      <Switch>
        <Route path={"/"} exact component={Login} />
        <Route path={"/home"} exact component={Dialogue} />
        <Login />
      </Switch>
      </Router>
    );
  }
}

export default App;
