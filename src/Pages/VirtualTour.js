import React from "react";
import arThree from "../assets/arThree.jpg";
function VirtualTour() {
  return (
    <a-scene>
      <a-assets>
        <img crossOrigin="anonymous" id="sky" src={arThree} alt="Home" />
      </a-assets>
      <a-sky src="#sky"></a-sky>
    </a-scene>
  );
}

export default VirtualTour;
