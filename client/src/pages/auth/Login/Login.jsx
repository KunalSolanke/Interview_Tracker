import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { login } from "./LoginStyles";
import InputAdornment from "@material-ui/core/InputAdornment";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  TextField,
} from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import axios from "axios";
import { connect } from "react-redux";
import { authLogin,socialAuth } from "../../../store/actions/auth";
import "./animation.js";
import "./styles.css";
import BasicInput from "../../../components/Input/Input";
import Separator from "../../../components/Separator/Separator";
import { GoogleLogin } from "react-google-login";
import GitHubLogin from "react-github-login";
import MicrosoftLogin from "react-microsoft-login";
import {withRouter} from 'react-router-dom'
import config from '../../../config/social_auth'


class Login extends Component {
  state = {
    email: "",
    password: "",
    hidePassword: true,
    error: null,
    errorOpen: false,
  };

  errorClose = (e) => {
    this.setState({
      errorOpen: false,
    });
  };

  azureAuthHandler =async (err, data) => {
    console.log(err, data);
    let token = JSON.stringify({access_token: data.idToken.rawIdToken})
    await this.props.socialAuth(token,"outlook")
  };
 

 onGithubSuccess = async (response) => {
   console.log(response);
   
    await this.props.socialAuth(response,"github")
 }
 onFailure = (response) => console.error(response);
  responseGoogle = async (response) => {
    console.log(response);
    let token = this.getToken(response)
    await this.props.socialAuth(token,"google")
  };

  handleChange = (name) => (e) => {
    this.setState({
      [name]: e.target.value,
    });
  };

  getToken = (response)=>{
    return JSON.stringify({access_token: response.accessToken}, null,2)
  }

  validateEmail(str) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str))
    {
      return (true)
    }
    //alert("You have entered an invalid email address!")
    return (false) 
  }

  showPassword = () => {
    this.setState((prevState) => ({ hidePassword: !prevState.hidePassword }));
  };

  isValid = () => {
    if (this.state.email === "") {
      return false;
    }
    return true;
  };

  formValidation = () => {
    if (!this.validateEmail(this.state.email)) {
      this.setState({
        errorOpen: true,
        error: "Invalid email format",
      });
      return false;
    } else if (this.state.password.length < 6) {
      console.log("Am i coming here");
      this.setState({
        errorOpen: true,
        error: "Password length must be atleast 6",
      });
      return false;
    } 
    return true;
  };

  submitRegistration = async (e) => {
    e.preventDefault();
    console.log("Aa gya mai");
    if (!this.formValidation()) {
      console.log("hjk,mbgyuikmnbvgfhjk");
    } else {
      const newUserCredentials = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        passwordConfirm: this.state.passwordConfirm,
      };
      console.log("this.props.newUserCredentials", newUserCredentials);
      //dispath to userActions
      const { email, password } = this.state;
      try {
        const { Login } = this.props;
        await Login({ email, password });
        this.props.history.push('/');
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  render() {
    console.log("state is ", this.state);
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <h1 align="center" style={{ fontSize: "30px", color: "" }}>
            Login to continue
          </h1>
          <form
            id="form"
            className={classes.form}
            onSubmit={this.submitRegistration}
          >
            <FormControl required fullWidth margin="normal">
              <BasicInput
                name="email"
                type="email"
                onChange={this.handleChange("email")}
                label="Email"
              >
                Email
              </BasicInput>
            </FormControl>

            <FormControl required fullWidth margin="normal">
              <BasicInput
                endAdorment
                showPassword={this.showPassword}
                hidePassword={this.state.hidePassword}
                name="passowrd"
                type={this.state.hidePassword ? "password" : "text"}
                onChange={this.handleChange("password")}
                label="Password"
                htmlFor="email"
              >
                Password
              </BasicInput>
            </FormControl>
            <Button
              disableRipple
              fullWidth
              variant="outlined"
              className={classes.button}
              type="submit"
            >
              <span style={{ color: "white", fontWeight: "bold" }}>
                Log in
              </span>
            </Button>
          </form>

          <Separator data="OR" />
          <div className="social-login" style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"100%"}}>
            <GoogleLogin
              clientId={config.google.clientId}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
                </button>
              )}
              buttonText="Login"
              onSuccess={this.responseGoogle}
              onFailure={this.onFailure}
              cookiePolicy={config.google.cookiePolicy}
            />
            <GitHubLogin
              clientId={config.github.clientId}
              onSuccess={this.onGithubSuccess}
              onFailure={this.onFailure}
              buttonText=""
               redirectUri={config.github.redirectUri}
            >
              <img src="https://img.icons8.com/ios-glyphs/52/000000/github.png" />
            </GitHubLogin>
            <MicrosoftLogin
              clientId={config.outlook.clientId}
              validateAuthority={config.outlook.validateAuthority}
              redirectUri={config.outlook.redirectUri}
              authCallback={this.azureAuthHandler}
              tenantUrl={config.outlook.tenantUrl}
            >
              <img src="https://img.icons8.com/color/48/000000/microsoft-outlook-2019--v2.png" />
            </MicrosoftLogin>
          </div>
          {this.state.error ? (
            <Snackbar
              variant="error"
              key={this.state.error}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              open={this.state.errorOpen}
              onClose={this.errorClose}
              autoHideDuration={3000}
            >
              <SnackbarContent
                className={classes.error}
                message={
                  <div>
                    <span style={{ marginRight: "8px" }}>
                      <ErrorIcon fontSize="large" color="error" />
                    </span>
                    <span> {this.state.error} </span>
                  </div>
                }
                action={[
                  <IconButton
                    key="close"
                    aria-label="close"
                    onClick={this.errorClose}
                  ></IconButton>,
                ]}
              />
            </Snackbar>
          ) : null}
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Login: async (user) => await dispatch(authLogin(user)),
    socialAuth : async (data,provider)=>await dispatch(socialAuth(data,provider))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(withStyles(login)(Login)));

