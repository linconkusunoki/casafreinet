import React from "react";
import styles from "./copyright.module.css";
import { ReactComponent as Sato } from "../../assets/icon/sato-logo.svg";

function Copyright() {
  const year = new Date().getFullYear();
  return (
    <div className={styles.wrapper}>
      <p className={styles.copyright}>
        Copyright © Casafreinet {year}, All Rights Reserved{" "}
      </p>
      <p className={styles.powered}>
        {" "}
        Powered by
        <a
          className={styles.link}
          href="https://rusterson.github.io/rusterson"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Sato className={styles.logo__svg} />
        </a>
      </p>
    </div>
  );
}
export default Copyright;
