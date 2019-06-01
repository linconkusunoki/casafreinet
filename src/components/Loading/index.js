import React from "react";
import styles from "./loading.module.css";

function Loading({...props}) {
  
  return (
    <div {...props}>
      <div className={styles.loader} />
    </div>
  );
}

export default Loading;