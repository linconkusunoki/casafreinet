import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logo-karol.png";

const Header = ({ title, text }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logoImg} src={logo} alt="logo" />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Header;
