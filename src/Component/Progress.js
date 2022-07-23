import React from "react";
import styles from "./progress.module.css";

function Progress() {
  return (
    <div className={styles.nav}>
      <div className={styles.center}>
        <svg
          id="Backward_arrow"
          data-name="Backward arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M11.5,0,9.409,2.091l7.916,7.916H0v2.987H17.325L9.409,20.909,11.5,23,23,11.5Z"
            transform="translate(23 23) rotate(180)"
            fill="#0b2554"
          />
        </svg>
        <span>Back: Project concept </span>
      </div>
      <div className={styles.middle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 327 10"
        >
          <g
            id="Progress_1"
            data-name="Progress 1"
            transform="translate(-226 -206)"
          >
            <rect
              id="Rectangle_629"
              data-name="Rectangle 629"
              width="327"
              height="10"
              rx="5"
              transform="translate(226 206)"
              fill="#a3adbe"
            />
            <path
              id="Rectangle_630"
              data-name="Rectangle 630"
              d="M5,0H90a0,0,0,0,1,0,0V10a0,0,0,0,1,0,0H5A5,5,0,0,1,0,5V5A5,5,0,0,1,5,0Z"
              transform="translate(226 206)"
              fill="#0b2554"
            />
          </g>
        </svg>
      </div>
      <div className={styles.center}>
        <span>Next: Basic Details</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
        >
          <g
            id="Backward_arrow"
            data-name="Backward arrow"
            transform="translate(23 23) rotate(180)"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M11.5,0,9.409,2.091l7.916,7.916H0v2.987H17.325L9.409,20.909,11.5,23,23,11.5Z"
              transform="translate(23 23) rotate(180)"
              fill="#0b2554"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Progress;
