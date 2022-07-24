import React, { useEffect } from "react";
import Checkbox from "../Component/Checkbox";
import MobileButtons from "../Component/MobileButton";
import MobileButton from "../Component/MobileButton";
import MobileProgress from "../Component/MobileProgress";
import Paraf from "../Component/Paraf";
import Progress from "../Component/Progress";
import { useChoose } from "../context/UserContext";
import styles from "./mobile.module.css";
import { Link } from "react-router-dom";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="234.037"
            height="234.037"
            viewBox="0 0 234.037 234.037"
          >
            <g
              id="Group_215"
              data-name="Group 215"
              transform="translate(-569 -518)"
            >
              <path
                id="Path_110"
                data-name="Path 110"
                d="M218.435,64v7.8a7.8,7.8,0,0,1,7.8,7.8V196.621H7.8V79.6a7.8,7.8,0,0,1,7.8-7.8V64A15.6,15.6,0,0,0,0,79.6V212.224a15.6,15.6,0,0,0,15.6,15.6h76.67l-9.361,31.2h-8.8v7.8h85.814v-7.8h-8.8l-9.361-31.2h76.67a15.6,15.6,0,0,0,15.6-15.6V79.6a15.6,15.6,0,0,0-15.6-15.6ZM142.98,259.031H91.057l9.361-31.2h33.2Zm83.256-46.807a7.8,7.8,0,0,1-7.8,7.8H15.6a7.8,7.8,0,0,1-7.8-7.8v-7.8H226.236Zm0,0"
                transform="translate(569 485.205)"
                fill="#0b2554"
              />
              <path
                id="Path_111"
                data-name="Path 111"
                d="M55.8,15.6a7.8,7.8,0,0,1,7.8-7.8H219.627a7.8,7.8,0,0,1,7.8,7.8V156.025h7.8V15.6A15.6,15.6,0,0,0,219.627,0H63.6A15.6,15.6,0,0,0,48,15.6V156.025h7.8Zm0,0"
                transform="translate(544.404 518)"
                fill="#0b2554"
              />
              <path
                id="Path_112"
                data-name="Path 112"
                d="M80,32h7.8v7.8H80Zm0,0"
                transform="translate(528.006 501.602)"
                fill="#0b2554"
              />
              <path
                id="Path_113"
                data-name="Path 113"
                d="M112,32h7.8v7.8H112Zm0,0"
                transform="translate(511.609 501.602)"
                fill="#0b2554"
              />
              <path
                id="Path_114"
                data-name="Path 114"
                d="M144,32h7.8v7.8H144Zm0,0"
                transform="translate(495.211 501.602)"
                fill="#0b2554"
              />
              <path
                id="Path_115"
                data-name="Path 115"
                d="M122.531,165.375l62.41,23.4a.29.29,0,0,1,.137.023,3.532,3.532,0,0,0,2.792-.139c.063-.029.137,0,.2-.048l46.807-23.4a3.9,3.9,0,0,0,2.141-3.491V114.912a3.734,3.734,0,0,0-.1-.781V114a3.933,3.933,0,0,0-.672-1.381c-.03-.04-.034-.093-.065-.137l-31.2-39.006a3.9,3.9,0,0,0-4.79-1.053l-78.012,39.006A3.9,3.9,0,0,0,120,114.912V161.72A3.9,3.9,0,0,0,122.531,165.375Zm24.937.781V143.293l7.8,2.925V169.1Zm81.749-6.847-39.006,19.5V140.727l39.006-19.5Zm-28.38-78.5,26.219,32.765-39.669,19.836-26.219-32.767ZM127.8,117.323l26.228-13.115,28.38,35.477V179.5l-19.339-7.243V143.515a3.9,3.9,0,0,0-2.531-3.651l-15.6-5.851a3.9,3.9,0,0,0-5.27,3.651v25.8L127.8,159.017Zm0,0"
                transform="translate(507.51 481.1)"
                fill="#0b2554"
              />
              <path
                id="Path_116"
                data-name="Path 116"
                d="M80,288v11.7a3.9,3.9,0,0,0,3.9,3.9H95.6v-7.8H87.8V288Zm0,0"
                transform="translate(528.006 370.422)"
                fill="#0b2554"
              />
              <path
                id="Path_117"
                data-name="Path 117"
                d="M95.6,64H83.9A3.9,3.9,0,0,0,80,67.9V79.6h7.8V71.8h7.8Zm0,0"
                transform="translate(528.006 485.205)"
                fill="#0b2554"
              />
              <path
                id="Path_118"
                data-name="Path 118"
                d="M375.8,295.8H368v7.8h11.7a3.9,3.9,0,0,0,3.9-3.9V288h-7.8Zm0,0"
                transform="translate(380.429 370.422)"
                fill="#0b2554"
              />
              <path
                id="Path_119"
                data-name="Path 119"
                d="M383.6,67.9a3.9,3.9,0,0,0-3.9-3.9H368v7.8h7.8v7.8h7.8Zm0,0"
                transform="translate(380.429 485.205)"
                fill="#0b2554"
              />
            </g>
          </svg>
        </div>
        <Paraf spanSize={40} parafSize={45} />
        <div className={styles.buttons}>
          <button onClick={() => tourCheck()} className={styles.button}>
            <Checkbox optionColor={'white'} tour={tour} title={"Virtual Tour"} />
          </button>
          <button onClick={() => ımageCheck()} className={styles.button}>
            <Checkbox optionColor={'white'} image={image} title={"Rendered Images"} />
          </button>
          <button onClick={() => videoCheck()} className={styles.button}>
            <Checkbox optionColor={'white'} video={video} title={"Animated Video"} />
          </button>
          <button  className={styles.button}><Link to='/showState'>Continue</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
