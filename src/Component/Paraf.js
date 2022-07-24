import React from 'react'
import styles from "./paraf.module.css";

function Paraf({spanSize,parafSize}) {
    const size = (item) => item ? {fontSize : item} :null
    return (
    <div className={styles.head}>
          <p style={ size(parafSize)} className={styles.paraf}>Wonderful!</p>
          <p style={size(parafSize) } className={styles.paraf}>
            We already know how to turn your project into spectacular
            visualization
          </p>
          <p style={size(spanSize)} className={styles.lowParaf}>
            The last step is to choose the visualization service/services you
            need, and we’re ready to begin crafting your project.
          </p>
        </div>
  )
}

export default Paraf