import React from "react";
import BackArrowMobile from "../assets/mobile/BackArrowMobile";
import ForwardArrowMobile from "../assets/mobile/ForwardArrowMobile";
import styles from "./mobileProgress.module.css";
function MobileProgress() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <BackArrowMobile />
        <span>Back: Interior Model Area</span>
      </div>
      <div className={styles.center}>
        <span> Next:Basic Details</span>
        <ForwardArrowMobile />
      </div>
    </div>
  );
}

export default MobileProgress;
