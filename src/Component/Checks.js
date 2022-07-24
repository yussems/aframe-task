import React from "react";
import Images from "../assets/Images";
import Tour from "../assets/Tour";
import Video from "../assets/Video";
import Checkbox from "./Checkbox";
import styles from "./checks.module.css";
import { useChoose } from "../context/UserContext";

function Checks() {
  const { tour, image, video,tourCheck,
    ımageCheck,
    videoCheck, } = useChoose();
  return (
    <div className={styles.list}>
      <div className={styles.listColums}>
        <Tour />
        <div onClick={() => tourCheck()}>
          <Checkbox tour={tour} title={'Virtual Tour'} />
        </div>
      </div>

      <div className={styles.listColums}>
        <Images />
        <div onClick={() => ımageCheck()}>
          <Checkbox image={image}  title={'Rendered Images'}/>
        </div>
      </div>

      <div className={styles.listColums}>
        <Video />
        <div onClick={() => videoCheck()}>
          <Checkbox video={video} title={'Animated Video'} />
        </div>
      </div>
    </div>
  );
}

export default Checks;
