import React, { Component } from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";

import Logo from "../Components/logo";

export class navbar extends Component {
  logout = e => {
    localStorage.removeItem("userToken");
  };
  render() {
    return (
      <div className="navbar">
        <Logo />
        <Link
          to="/login"
          className="navbarButton"
          onClick={e => {
            this.logout(e);
          }}
        >
          Sign in
        </Link>
      </div>
    );
  }
}

export default navbar;
