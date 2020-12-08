import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./cardApp.css";
const backgroundColor = "white";

export default class SimpleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
    };
    console.log(props.color, "props");
  }
  //   backgroundColor = this.props.color;
  Change = (props) => {
    console.log(props, "rrrrr");
    console.log(this.state.checked);
    this.props.onSelectLanguage(props);
    this.setState({ checked: !this.state.checked })
  };
  render() {
    console.log(backgroundColor, "color");
    console.log(this.state.checked, "checked");
    const value = !this.state.checked
      ? {
          backgroundColor: this.props.color,
          color: "white",
          height: "8em",
          width: "14em",
          borderRadius: "25px",
          marginRight: "1em",
          marginTop: "1em",
        }
      : {
          backgroundColor: "white",
          height: "8em",
          width: "14em",
          borderRadius: "25px",
          marginRight: "1em",
          marginTop: "1em",
        };
    return (
      <Card style={value}>
        <CardContent>
          {/* {props.openClose} */}
          <div style={{ display: "flex" ,marginLeft:"-13px"}}>
            <FormControlLabel
              value="start"
              control={
                <Switch
                  style={
                    !this.state.checked
                      ? { color: this.props.color }
                      : { color: "white" }
                  }
                />
              }
              onChange={() => {
                this.Change(this.props);
              }}
              checked={this.state.checked}
              label={!this.state.checked ? "On" : "Off"}
              labelPlacement="start"
            />
          </div>
          {/* <Typography className={classes.pos} color="textSecondary"> */}
          <div>{this.props.icons}</div>
          {/* </Typography> */}
          <Typography variant="body2" component="p">
            {this.props.name}
            <br />
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
