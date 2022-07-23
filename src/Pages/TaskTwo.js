import React from "react";

function TaskTwo() {
  return (
    <a-scene>
      <a-assets>
        <img
          crossOrigin="anonymous"
          id="sky"
          src="https://cdn.elta360.com/1619279734104.jpg"
          alt="Home"
        />
      </a-assets>
      <a-sky src="#sky"></a-sky>
    </a-scene>
  );
}

export default TaskTwo;
