import React from "react";
import Images from "../assets/Images";
import Tour from "../assets/Tour";
import Video from "../assets/Video";
import Checkbox from "./Checkbox";
import styles from "./checks.module.css";

function Checks() {
  return (
    <div className={styles.list}>
   
      <div className={styles.listColums}>
        <Tour />
        <div>
          <Checkbox />
        </div>
      </div>
   
      <div className={styles.listColums}>
        <Images />
        <div>
          <Checkbox />
        </div>
      </div>

      <div className={styles.listColums}>
        <Video />
        <div>
          <Checkbox />
        </div>
      </div>
   
    </div>
  );
}

export default Checks;
