import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Card from "./card";
import Avatar from "@material-ui/core/Avatar";
import SliderCircle from "./sliderCircle";
// import { Switch } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import Navigator from "./Navigation";
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
        {/* <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/" />;
          }} */}
        {/* /> */}
        <Route path={"/"} exact component={Login} />
        <Route path={"/home"} exact component={Dialogue} />
        <Login />
      </Switch>
      </Router>
    );
  }
}

export default App;
