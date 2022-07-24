import React from "react";
import NoneTick from "../assets/NoneTick";
import Tick from "../assets/Tick";
import styles from "./checkBox.module.css";


function Checkbox({ tour,  image,  video, title,optionColor }) {
  return (
    <div className={styles.inputs} >
      {tour || image || video ? (
        <Tick  optionColor={optionColor}/>
      ) : (
        <NoneTick optionColor={optionColor}/>
      )}
      <label style={{color:optionColor}} htmlFor="choose1">{title}</label>
    </div>
  );
}

export default Checkbox;
