import React from 'react'
import styles from "./paraf.module.css";

function Paraf({spanSize,parafSize}) {
    const size = (item) => item ? {fontSize : item} :null
    return (
    <div className={styles.head}>
          <p style={ size(parafSize)} className={styles.paraf}>Wonderful!</p>
          <p style={size(parafSize) } className={styles.paraf}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ratione corrupti porro error quod, repudiandae, laboriosam exercitationem, ducimus dolor blanditiis neque quasi rerum vero culpa sint maiores est eius aliquam.
          </p>
          <p style={size(spanSize)} className={styles.lowParaf}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, doloremque!
          </p>
        </div>
  )
}

export default Paraf