import React, { Component } from "react";

import Navbar from "../Components/navbar";
import Carousel from "../Components/carousel";

export class welcome extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar />
        <span className="carouselDiv">
          <Carousel />
          <div>
            <h1>
              <em>Welcome to Moviio</em>
            </h1>
            <p>
              an online database of information related to films, television
              programs, home videos, video games, and streaming content online –
              including cast, production crew and personal biographies, plot
              summaries, trivia, fan and critical reviews, and ratings
            </p>
          </div>
        </span>
      </div>
    );
  }
}

export default welcome;
