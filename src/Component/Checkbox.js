import React from "react";
import NoneTick from "../assets/NoneTick";
import Tick from "../assets/Tick";
import styles from "./checkBox.module.css";

function Checkbox({ tour, image, video, title, optionColor }) {
  return (
    <div className={styles.inputs}>
      {tour || image || video ? (
        <div>
          <Tick optionColor={optionColor} />
        </div>
      ) : (
        <div>
          <NoneTick optionColor={optionColor} />
        </div>
      )}
      <label style={{ color: optionColor,justifySelf:'center' }} htmlFor="choose1">
        {title}
      </label>
    </div>
  );
}

export default Checkbox;
