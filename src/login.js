import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import "./login.css";
import Registration from "./Registration";
import BrowserService from "./BrowserService";

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
    this.login(item).then((response) => {
      console.log(response.status, "status");
      this.setState({ error: response.status }, () => {
        if (this.state.error === 200) {
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
          <div className="rightarticle">
            <MuiThemeProvider>
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
