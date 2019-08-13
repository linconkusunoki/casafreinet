import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, className, ...props }) => {
  const handleClick = e => {
    let el = document.getElementById('/prices')
    e.preventDefault();
    window.scrollTo({
      top: el.offsetTop,
      behavior: "smooth"
    });
  };

  return (
    <div {...props} className={ `${styles.wrapper} ${className}` }>
      <button onClick={handleClick} className={styles.Button}>
        {children}
      </button>
    </div>
  );
};

export default Button;
