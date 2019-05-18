import React from "react";
import styles from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.Button}>{children}</button>
    </div>
  );
};

export default Button;
