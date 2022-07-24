import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useChoose } from "../context/UserContext";
import styles from "./showState.module.css";
import pill from "../assets/pill.jpg";

function ShowState() {
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("a-fullscreen");
  }, []);

  const { tour, image, video } = useChoose();
  const chooseShow = (item) =>
    item ? { display: "flex" } : { display: "none" };

  if (tour === false && image === false && video === false) {
    return (
      <div className={styles.noneChoose}>
        <div className={styles.imgContainer}>
          <img src={pill} alt="Choose" />
          <div className={styles.btnGroup}>
            <button className={styles.btn}>
              <Link to={"/taskone"}>Back And Choose</Link>
            </button>
            <button className={styles.btn}>
              <Link to={"/tasktwo"}>Go to reality</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.chooseOne} ${styles.center}`}
        style={chooseShow(tour)}
      >
        <Link to={"/virtualtour"} className={styles.link}>Virtual Tour</Link>
      </div>
      <div
        className={`${styles.chooseTwo} ${styles.center}`}
        style={chooseShow(image)}
      >
        <Link to={"/renderedimage"} className={styles.link}>Rendered Image</Link>
      </div>

      <div
        className={`${styles.chooseThree} ${styles.center}`}
        style={chooseShow(video)}
      >

        <Link to={"/arvideo"} className={styles.link}>Animated Video</Link>
      </div>
    </div>
  );
}

export default ShowState;
