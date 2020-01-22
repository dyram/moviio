import React, { Component } from "react";
import "../Styles/login.css";
import { Link } from "react-router-dom";

import Logo from "../Components/logo";
import Axios from "axios";

export class login extends Component {
  state = {
    name: "",
    pass: ""
  };

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    Axios.post("http://localhost:3031/loginUser", {
      name: this.state.name,
      pass: this.state.pass,
      role: "user"
    }).then(res => {
      if (res.data.validity) {
        localStorage.setItem("userToken", JSON.stringify(res.data));
        let obj = this.refs.redirect;
        obj.click();
      } else {
        alert("Invalid Login Credentials");
        this.setState({ name: "", pass: "" });
      }
    });
  };

  render() {
    return (
      <div>
        <form action="/moviesList" style={{ display: "none" }}>
          <button id="redirect" ref="redirect" type="submit">
            Subs
          </button>
        </form>

        <div className="loginDiv">
          <Logo />
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
            <br />
            <button
              onClick={e => {
                this.onSubmit(e);
              }}
            >
              Sign In
            </button>
            <br />
            <div className="linkSignup">
              <em>New user?</em> &nbsp;&nbsp;
              <Link to="/signup" className="loginSignupButton">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
