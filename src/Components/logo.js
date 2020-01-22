import React, { Component } from "react";
import "../Styles/logo.css";

export class logo extends Component {
  render() {
    return (
      <div className="logos">
        <span className="logoText">
          <h1 className="m">m</h1>
          <h1 className="ovi">ovi</h1>
          <h1 className="m">io</h1>
        </span>
      </div>
    );
  }
}

export default logo;
