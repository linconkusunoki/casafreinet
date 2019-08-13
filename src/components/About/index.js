import React from "react";
import styles from "./about.module.css";
import photo from "../../assets/img/perfil.png";

const About = ({ name, status, text }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.perfil} src={photo} alt="perfil" />
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.name}>{name}</h2>
          <h5 className={styles.status}>{status}</h5>
        </div>
        <div className={styles.text}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
