import React from "react";
import Logo from "../assets/Logo";
import Studios from "../assets/Studios";
import Checks from "../Component/Checks";
import Progress from "../Component/Progress";
import { Link } from "react-router-dom";
import styles from "./taskOne.module.css";

function TaskOne() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Progress />
        <div className={styles.head}>
          <p className={styles.paraf}>Wonderful!</p>
          <p className={styles.paraf}>
            We already know how to turn your project into spectacular
            visualization
          </p>

          <p className={styles.lowParaf}>
            The last step is to choose the visualization service/services you
            need, and we’re ready to begin crafting your project.
          </p>
        </div>
        <Checks />
        <div>
          <Link to='/showState'>Show</Link>
        </div>
      </div>

      <div className={styles.logo}>
        <Logo />
        <Studios />
      </div>
    </div>
  );
}

export default TaskOne;
