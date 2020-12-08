import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Card from "./card";
import SliderCircle from "./sliderCircle";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { Switch } from "@material-ui/core";
import KitchenIcon from "@material-ui/icons/Kitchen";
import RouterIcon from "@material-ui/icons/Router";
import AlbumIcon from "@material-ui/icons/Album";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import Navigator from "./Navigation";
import BrowserService from "./BrowserService";
import Blah from "./Blah";
import Black from "./Black"
import Avatar from "@material-ui/core/Avatar";
import CloudIcon from "@material-ui/icons/Cloud";

export default class Dialogue extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: true,
      showprops: {},
      item: ["Fool", "Det", "fff"],
    };
  }
  handleCode = (value) => {
    console.log(value, "value");
    this.setState({ showprops: value });
  };

  handleChange = (event) => {
    console.log(event, "event");
    this.setState({ checked: !this.state.checked });
  };
  show = () => {
    return (
      <div style={{ color: "black" }}>
        {this.state.item.map((name, i) => {
          console.log(name, "bnames");
          <div>
            {/* <Avatar>H</Avatar> */}
            <div>ffff</div>
          </div>;
        })}
        {/* dddasasas */}
      </div>
    );
  };

  render() {
    console.log(this.state.showprops, "props");
    console.log(BrowserService.getLocalStorageValue("user"));
    return (
      <div className="divStyle">
        <div className="firstRow">
          <Navigator></Navigator>
        </div>
        {/* <div className="columOnly">columOnly</div> */}
        <div className="SecondRow">
          <div className="block">
            <div style={{ marginLeft: "4em" }}>
              <h2>Hello,{BrowserService.getLocalStorageValue("user")}</h2>
              <div style={{ fontSize: "14px" }}>
                Welcome Home,The Air Quality is good and fresh
              </div>
              <div> you can go out today</div>
            </div>
          </div>
          <h1>{BrowserService.getLocalStorageValue("user")} Home</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* <div style={{display:"flex"}}> */}
            <Card
              openClose="on"
              name="Refrigator"
              color="#793FF2"
              icons={<KitchenIcon />}
              onSelectLanguage={this.handleCode}
            />
            <Card
              openClose="on"
              name="Temperature"
              color="#793FF2"
              icons={<CloudIcon />}
              onSelectLanguage={this.handleCode}
            />
            <Card
              openClose="on"
              name="Lights"
              icons={<EmojiObjectsIcon />}
              color="#793FF2"
              onSelectLanguage={this.handleCode}
            />
            <Card
              openClose="on"
              name="AirConditioner"
              color="#793FF2"
              icons={<AcUnitIcon />}
              onSelectLanguage={this.handleCode}
            />
            {/* </div> */}
          </div>
          <div className="blockSlider">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "3em",
                marginRight: "3em",
                marginTop: "3em",
              }}
            >
              <div style={{ display: "flex", color: "rgb(121, 63, 242)" }}>
                {this.state.showprops.icons}&nbsp;&nbsp;
                <div
                  style={{
                    color: "rgb(121, 63, 242)",
                    fontSize: "19px",
                    fontFamily: "math",
                  }}
                >
                  Living Room {this.state.showprops.name}
                </div>
              </div>
              <FormControlLabel
                value="start"
                control={<Switch color="primary" />}
                onChange={this.handleChange}
                checked={this.state.checked}
                label={this.state.checked ? "On" : "Off"}
                labelPlacement="start"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {this.state.checked &&
              this.state.showprops.name === "Temperature" ? (
                <SliderCircle />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="ThirdRow">
          {/* <div>ssssssssssssssssssssssssssssssssssssssssssss</div> */}
          <div>
            <div style={{ marginLeft: "2em" }}>My Devices</div>
            <div
              style={{
                display: "flex",
                marginBottom: "1em",
                justifyContent: "space-evenly",
              }}
            >
              <Card
                openClose="on"
                name="Refrigator"
                color="#F4C327"
                icons={<EmojiObjectsIcon />}
                onSelectLanguage={this.handleCode}
              />
              <Card
                openClose="on"
                name="Router"
                color="#793FF2"
                icons={<RouterIcon />}
                onSelectLanguage={this.handleCode}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Card
                openClose="on"
                name="Music System"
                color="#FF9060"
                icons={<AlbumIcon />}
                onSelectLanguage={this.handleCode}
              />
              <Card
                openClose="on"
                name="Refrigator"
                color="#39CBE8"
                icons={<KitchenIcon />}
                onSelectLanguage={this.handleCode}
              />
            </div>
            {/* DDd */}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{marginTop:"2em",marginBottom:"2em",marginLeft:"2em",fontSize:"17px"}}>Members</div>
            <div
              style={{
                width: "28em",
                // height: "4em",
                marginLeft: "1em",
                backgroundColor: "white",
                flexDirection: "row",
                borderRadius: "2em",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginTop: "1em",
                  marginLeft: "1em",
                  flexDirection: "column",
                }}
              >
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <div>
                    <Avatar>H</Avatar>
                    <div style={{textAlign:"center"}}>{BrowserService.getLocalStorageValue("user")}</div>
                  </div>
                  <div>
                    <Avatar>H</Avatar>
                    <div style={{textAlign:"center"}}>Vishal</div>
                  </div>
                  <div>
                    <Avatar>H</Avatar>
                    <div style={{textAlign:"center"}}>Ravi</div>
                  </div>
                  <div>
                    <Avatar>H</Avatar>
                    <div style={{textAlign:"center"}}>Raju</div>
                  </div>
                  <div>
                    <Avatar>H</Avatar>
                    <div style={{textAlign:"center"}}>Diju </div>
                  </div>
                </div>
              </div>

              <div style={{marginLeft:"4em",marginTop:"3em",marginBottom:"5em"}}>Power Consumed</div>
              <div className="data"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
