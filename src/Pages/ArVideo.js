import React from "react";
import video from "../assets/video.mp4";

function ArVideo() {
  return (
    <a-scene background="color: purple">
      <a-assets>
        <video id="underwater" autoPlay loop={true} src={video}></video>
      </a-assets>
      <a-video
        src="#underwater"
        width="16"
        height="9"
        rotation='0 45 0'
        position="-20 0 -20"
      ></a-video>
      <a-video
        src="#underwater"
        width="16"
        height="9"
        position="0 0 -25"
      ></a-video>
      <a-video
        src="#underwater"
        width="16"
        height="9"
        position="20 0 -20"
        rotation='0 -45 0'

      ></a-video>
    </a-scene>
  );
}

export default ArVideo;
