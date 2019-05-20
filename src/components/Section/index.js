import React from "react";
import styles from "./section.module.css";

const Section = ({ title, text, image, alt }) => {
  return (
    <section className={styles.wrapper}>
      <img className={styles.img} src={image} alt={alt} />
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  );
};

export default Section;
