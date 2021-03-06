import React from "react";
import styles from "./status.module.css";

function Status({ text, cor, ...props }) {
  const [show, setShow] = React.useState(true);

  setTimeout(() => {
    setShow(false);
  }, 1500);
  return (
    <div {...props}>
      {show ? (
        <p style={{ color: `${cor}` }} className={styles.show}>
          {text}
        </p>
      ) : (
        <p style={{ color: `${cor}` }} className={styles.hidden}>
          {text}
        </p>
      )}
    </div>
  );
}

export default Status;
