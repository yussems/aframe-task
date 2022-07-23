import React from "react";
import { useChoose } from "../context/UserContext";
import styles from "./showState.module.css";

function ShowState() {
  const { tour, image, video } = useChoose();
  console.log(tour, image, video);
  return (
    <div className={styles.container}>
      <div
        className={`${styles.chooseOne} ${styles.center}`}
        style={tour ? { display: "flex" } : { display: "none" }}
      >
        Virtual Tour
      </div>
      <div
        className={`${styles.chooseTwo} ${styles.center}`}
        style={image ? { display: "flex" } : { display: "none" }}
      >
        Rendered Image
      </div>

      <div
        className={`${styles.chooseThree} ${styles.center}`}
        style={video ? { display: "flex" } : { display: "none" }}
      >
        Animated Video
      </div>
      
    </div>
  );
}

export default ShowState;
