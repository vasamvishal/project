import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import "./login.css";
// import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Registration from "./Registration";
import Dialogue from "./Dialogue";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import BrowserService from "./BrowserService";

import { AlertAddAlert } from "material-ui/svg-icons";
// import {
//   login,
//   loginFailure,
//   LOGINFAILURE,
//   loginSucess,
//   LOGINSUCESS,
//   setInitialState,
// } from "../../../redux/action/LoginAction";

class Login extends React.PureComponent {
  didMount = false;

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      userName: "",
      password: "",
      isLoading: false,
      error: 200,
      book:false
    };
    this.back = this.back.bind(this);
    this.renderButtonEffect = this.renderButtonEffect.bind(this);
  }

  back = () => {
    this.setState({ error: 200 }, () => {
      //   this.props.onClose();
    });
  };

  renderRegisterPage = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    // this.props.setInitialState();
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps, "prevProps");
    if (prevProps.status === 400 && this.didMount === false) {
      this.didMount = true;
      //   this.setState({ error: this.props.status });
    }
  }

  userName = (e) => {
    this.setState({ userName: e.target.value });
  };

  password = (e) => {
    this.setState({ password: e.target.value });
  };

  closeRegistration = () => {
    this.setState({ show: !this.state.show });
  };

  renderButtonEffect = () => {
    this.setState({ isLoading: true });
  };

  renderMainPage = () => {
    let userName = this.state.userName;
    let password = this.state.password;
    let item = { userName, password };
    // const value =
    // console.log(value,"value");
    this.login(item).then((response) => {
      console.log(response.status, "status");
      this.setState({ error: response.status }, () => {
        if (this.state.error === 200) {
          //   this.props.onClose();
        //   alert("Done")
        this.setState({book:true})
        }
      });
    });
  };

  login = (item) => {
    const url = "https://springbootbackendjava.herokuapp.com/login";
    return fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      mode: "cors",
      credentials: "include",
      body: JSON.stringify(item),
    })
      .then((response) => {
        for (var pair of response.headers.entries()) {
          if (pair[0] === "token") {
            BrowserService.setLocalStorageValue("token", pair[1]);
          }
        }
        // console.log(response.text(),"response");
        let responseText = response.text();
        return [responseText, response];
      })
      .then((data) => {
        data[0].then((data) =>
          BrowserService.setLocalStorageValue("user", data)
        );
        var response = data[1];
        return response;
      })
      .catch((err) => {
        return Promise.reject("Error Occured while Fetching Customers " + err);
      });
  };

  render() {
    //   console.log(styles,"styles");
    if(this.state.book){
        BrowserService.changeLocation("/home")
    }
    let loginButton =
      this.state.userName !== "" && this.state.password !== ""
        ? "buttontext"
        : "buttontext backgroundbuttontext";

    if (this.state.show) {
      return <Registration onClose={this.closeRegistration} />;
    }
    return (
      <React.Fragment>
        <div className="flex">
          {/* <div className={styles.leftarticle}>
            <h2 style={{ color: "white", marginTop: "69%", marginLeft: "2em" }}>
              XBAY&nbsp;&nbsp;&nbsp;&nbsp;
            </h2>
          </div> */}
          <div className="rightarticle">
            <MuiThemeProvider>
              {/* <h3 className="companyname">
                <CloseOutlinedIcon onClick={this.back} />
              </h3> */}
              <div className="loginbutton">
                <div className="logo">Log&nbsp;In</div>
                <TextField
                  hintText="Enter your Username"
                  floatingLabelText="Username"
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  onChange={this.userName}
                />
                <br />
                <TextField
                  hintText="Enter your Password"
                  floatingLabelText="Password"
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  type="password"
                  onChange={this.password}
                />
                <br></br>
                <br></br>
                {this.state.error !== 200 ? (
                  <p>
                    Your login credentials could not be verified, please try
                    again.
                  </p>
                ) : (
                  ""
                )}
                <button
                  disabled={
                    this.state.userName === "" && this.state.password === ""
                  }
                  className={loginButton}
                  onClick={this.renderMainPage}
                >
                  <div onClick={this.renderButtonEffect}>Log&nbsp;In</div>
                </button>
                <br />
                <br />
                <div className="forgotpassword">
                  Forgot&nbsp;password?
                </div>
                <br />
                <br />
                <div
                  className="account"
                  onClick={this.renderRegisterPage}
                >
                  Create your Account
                </div>
                <br />
                <br />
              </div>
            </MuiThemeProvider>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Login;
