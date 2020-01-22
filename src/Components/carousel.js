import React, { Component } from "react";

import SimpleImageSlider from "react-simple-image-slider";

export class carousel extends Component {
  render() {
    const images = [
      { url: "moon.jpg" },
      { url: "star.jpg" },
      { url: "iq.jpg" },
      { url: "black.jpg" }
    ];

    return (
      <div>
        <SimpleImageSlider
          width={876}
          height={504}
          images={images}
          slideDuration={1}
        />
      </div>
    );
  }
}

export default carousel;
