import React from "react";
import arTwo from '../assets/arTwo.jpg'
function TaskTwo() {
  return (
    <a-scene>
      <a-assets>
        <img
          crossOrigin="anonymous"
          id="sky"
          src={arTwo}
          alt="Home"
        />
      </a-assets>
      <a-sky src="#sky"></a-sky>
    </a-scene>
  );
}

export default TaskTwo;
