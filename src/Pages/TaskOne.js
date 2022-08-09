import React, { useEffect } from "react";
import Logo from "../assets/Logo";
import Studios from "../assets/Studios";
import Checks from "../Component/Checks";
import Progress from "../Component/Progress";
import { Link } from "react-router-dom";
import styles from "./taskOne.module.css";
import Paraf from "../Component/Paraf";
import Mobile from "./Mobile";

function TaskOne() {
  useEffect(() => {
    const html = document.querySelector('html')
    html.classList.remove('a-fullscreen')
  }, [])
  
  return (
    <>
    <Mobile />
      <div className={styles.container}>
        <div className={styles.content}>
          <Progress />
          <Paraf />
          <Checks />
          <div className={styles.btnContainer}>
            <button className={styles.btn}>
              <Link to="/showState">Contınue</Link>
            </button>
          </div>
        </div>

        {/* <div className={styles.logo}>
          <Logo />
          <Studios />
        </div> */}
      </div>
    </>
  );
}

export default TaskOne;
