import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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
      props: [],
    };
  }

  Change = (props) => {
    console.log(props, "rrrrr");
    console.log(this.state.checked);
    if (this.state.checked === false) {
      this.props.onSelectLanguage({});
    } else {
      this.props.onSelectLanguage(props);
    }
    this.setState({ checked: !this.state.checked });
  };
  render() {
    console.log(backgroundColor, "color");
    console.log(this.state.checked, "checked");
    console.log("props", this.state.props);
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
          <div style={{ display: "flex", marginLeft: "-13px" }}>
            <FormControlLabel
              value="start"
              control={
                <Switch
                  disabled={this.state.props.length > 0}
                  style={
                    !this.state.checked
                      ? { color: this.props.color}
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
          <div>{this.props.icons}</div>
          <Typography variant="body2" component="p">
            {this.props.name}
            <br />
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
