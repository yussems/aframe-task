import React from "react";
import BackArrow from "../assets/BackArrow";
import Bar from "../assets/Bar";
import ForwardArrow from "../assets/ForwardArrow";
import styles from "./progress.module.css";

function Progress() {
  return (
    <div className={styles.nav}>
      <div className={styles.center}>
        <BackArrow />
        <span>Back: Project concept </span>
      </div>
      <div className={styles.middle}>
        <Bar  />
      </div>
      <div className={styles.center}>
        <span>Next: Basic Details</span>
        <ForwardArrow />
      </div>
    </div>
  );
}

export default Progress;
