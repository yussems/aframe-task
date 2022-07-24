import React, { useEffect } from "react";
import Checkbox from "../Component/Checkbox";
import MobileProgress from "../Component/MobileProgress";
import Paraf from "../Component/Paraf";
import Progress from "../Component/Progress";
import { useChoose } from "../context/UserContext";
import styles from "./mobile.module.css";
import { Link } from "react-router-dom";
import Monitoring from "../assets/mobile/Monitoring";
import Logo from "../assets/Logo";
import Studios from "../assets/Studios";

function Mobile() {
  useEffect(() => {
    const html = document.querySelector('html')
    html.classList.remove('a-fullscreen')
  }, [])

  const { tour, image, video, tourCheck, ımageCheck, videoCheck } = useChoose();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <MobileProgress />
        </div>
        <div className={styles.progress}>
          <svg
            id="Group_157"
            data-name="Group 157"
            xmlns="http://www.w3.org/2000/svg"
            width="499"
            height="15"
            viewBox="0 0 499 15"
          >
            <rect
              id="Rectangle_629"
              data-name="Rectangle 629"
              width="499"
              height="15"
              rx="7.5"
              fill="#a3adbe"
            />
            <path
              id="Rectangle_630"
              data-name="Rectangle 630"
              d="M7.5,0H137a0,0,0,0,1,0,0V15a0,0,0,0,1,0,0H7.5A7.5,7.5,0,0,1,0,7.5v0A7.5,7.5,0,0,1,7.5,0Z"
              fill="#0b2554"
            />
          </svg>
        </div>
        <div className={styles.progress}>
          <Monitoring />
        </div>
        {/* spanSize={40} parafSize={45} */}
        <Paraf  />
        <div className={styles.buttons}>
          <button onClick={() => tourCheck()} className={styles.button}>
            <Checkbox  optionColor={'white'} tour={tour} title={"Virtual Tour"} />
          </button>
          <button onClick={() => ımageCheck()} className={styles.button}>
            <Checkbox  optionColor={'white'} image={image} title={"Rendered Images"} />
          </button>
          <button onClick={() => videoCheck()} className={styles.button}>
            <Checkbox  optionColor={'white'} video={video} title={"Animated Video"} />
          </button>
          <button  className={styles.button}><Link to='/showState'>Continue</Link></button>
        </div>
        <div className={styles.logo}>
          <Logo />
          <Studios />
        </div>
      </div>
    </div>
  );
}

export default Mobile;
