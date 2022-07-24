import React from "react";
import styles from "./mobileProgress.module.css";
function MobileProgress() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="63"
          height="63"
          viewBox="0 0 63 63"
        >
          <g
            id="Backward_arrow"
            data-name="Backward arrow"
            transform="translate(13.255 12)"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M19.9,0,16.279,3.618l13.7,13.7H0v5.168H29.974l-13.7,13.7L19.9,39.794l19.9-19.9Z"
              transform="translate(39.794 39.793) rotate(180)"
              fill="#0b2554"
            />
          </g>
          <g
            id="Rectangle_1448"
            data-name="Rectangle 1448"
            fill="none"
            stroke="#0b2554"
            stroke-width="2"
          >
            <rect width="63" height="63" rx="10" stroke="none" />
            <rect x="1" y="1" width="61" height="61" rx="9" fill="none" />
          </g>
        </svg>

        <span>Back: Interior Model Area</span>
      </div>
      <div className={styles.center}>
        <span> Next:Basic Details</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="63"
          height="63"
          viewBox="0 0 63 63"
        >
          <g
            id="Backward_arrow"
            data-name="Backward arrow"
            transform="translate(53.092 50.271) rotate(180)"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M19.136,0,15.657,3.479,28.828,16.651H0v4.97H28.828L15.657,34.792l3.479,3.479L38.272,19.136Z"
              transform="translate(38.272 38.272) rotate(180)"
              fill="#0b2554"
            />
          </g>
          <g
            id="Rectangle_1447"
            data-name="Rectangle 1447"
            fill="none"
            stroke="#0b2554"
            stroke-width="2"
          >
            <rect width="63" height="63" rx="10" stroke="none" />
            <rect x="1" y="1" width="61" height="61" rx="9" fill="none" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default MobileProgress;
