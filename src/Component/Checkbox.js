import React from "react";
import NoneTick from "../assets/NoneTick";
import Tick from "../assets/Tick";
import styles from "./checkBox.module.css";


function Checkbox({ tour,  image,  video, title }) {
  return (
    <div className={styles.inputs} >
      {tour || image || video ? (
        <Tick/>
      ) : (
        <NoneTick/>
      )}
      <label  htmlFor="choose1">{title}</label>
    </div>
  );
}

export default Checkbox;
