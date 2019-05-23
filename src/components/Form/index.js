import React from "react";
import styles from "./form.module.css";

const Form = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <form className={styles.form} name="contato" action="">
        <div>
          <label htmlFor="contato" name="name">
            Name
          </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="contato" name="email">
            E-mail
          </label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="contato" name="message">
            Mensagem
          </label>
          <textarea name="message" />
        </div>
        <button className={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
