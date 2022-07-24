import React from "react";
import tour from "../assets/tour.jfif";
function VirtualTour() {
  return (
    <a-scene>
      <a-assets>
        <img crossOrigin="anonymous" id="sky" src={tour} alt="Home" />
      </a-assets>
      <a-sky src="#sky"></a-sky>
    </a-scene>
  );
}

export default VirtualTour;
