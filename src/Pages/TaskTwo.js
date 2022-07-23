import React from "react";
import ar from '../assets/ar.jpg'
function TaskTwo() {
  return (
    <a-scene>
      <a-assets>
        <img
          crossOrigin="anonymous"
          id="sky"
          src={ar}
          alt="Home"
        />
      </a-assets>
      <a-sky src="#sky"></a-sky>
    </a-scene>
  );
}

export default TaskTwo;
