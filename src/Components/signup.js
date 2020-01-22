import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../Components/logo";
import Axios from "axios";

export class signup extends Component {
  state = {
    name: "",
    pass: "",
    cpass: ""
  };

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkPassword = pass => {
    if (this.state.pass === pass) return true;
    else return false;
  };

  onSubmit = e => {
    if (this.checkPassword(this.state.cpass)) {
      Axios.post("http://localhost:3031/addUser", {
        name: this.state.name,
        pass: this.state.pass
      }).then(res => {
        this.setState({ name: "", pass: "", cpass: "" });
      });
    }
  };

  render() {
    return (
      <div>
        <div className="loginDiv">
          <Logo />
          <br />
          <em className="header">Register your new account with us,</em>
          <div className="loginForm">
            <input
              type="text"
              placeholder="Username"
              value={this.state.name}
              name="name"
              onChange={e => {
                this.change(e);
              }}
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={this.state.pass}
              name="pass"
              onChange={e => {
                this.change(e);
              }}
            ></input>
            <input
              type="password"
              placeholder="Confirm Password"
              value={this.state.cpass}
              name="cpass"
              onChange={e => {
                this.change(e);
              }}
            ></input>
            <br />
            <button onClick={e => this.onSubmit(e)}>Sign Up</button>
            <br />
            <div className="linkSignup">
              <em>Already have an account?</em> &nbsp;&nbsp;
              <Link to="/login" className="loginSignupButton">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default signup;
