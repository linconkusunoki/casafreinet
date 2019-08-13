import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/logo-karol.png";
import Button from "../Button";
// import { Desktop } from "../responsive";

const Header = ({ title, text }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.logoImg} src={logo} alt="logo" />
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
        <Button className={styles.button}>Conheça nossos preços</Button>
    </div>
  );
};

export default Header;
