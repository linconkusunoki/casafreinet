import React from "react";
import styles from "./form.module.css";
import axios from "axios";
import Loading from "../Loading";
import Status from "../Status";

const Form = ({ url, title }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [bolean, setBolean] = React.useState(false);
  const [resp, setResp] = React.useState(null);
  const [color, setColor] = React.useState(null);

  function Result() {
    if (resp === null) {
      return null;
    }
    return <Status className={styles.status} text={resp} cor={color} />;
  }

  async function submit() {
    await setBolean(true);

    await axios
      .post(url, {
        name: name,
        email: email,
        message: message
      })
      .then(function(response) {
        setBolean(false);
        setResp("Sucesso");
        setColor("green");
      })
      .catch(function(error) {
        setBolean(false);
        setResp("Error");
        setColor("red");
      });
  }

  function handlerValue(e) {
    e.preventDefault();
    return e.target.value;
  }

  function handlerSubmit(e) {
    e.preventDefault();
    submit();
    resetValues();
  }

  function resetValues() {
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <form onSubmit={handlerSubmit} className={styles.form} name="contato">
        {bolean ? <Loading className={styles.loading} /> : Result()}
        <div>
          <label htmlFor="contato" name="name">
            Nome
          </label>
          <input
            value={name}
            onChange={e => setName(handlerValue(e))}
            required
            type="text"
            name="name"
          />
        </div>
        <div>
          <label htmlFor="contato" name="email">
            E-mail
          </label>
          <input
            value={email}
            onChange={e => setEmail(handlerValue(e))}
            required
            type="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="contato" name="message">
            Mensagem
          </label>
          <textarea
            value={message}
            onChange={e => setMessage(handlerValue(e))}
            maxLength="285"
            required
            name="message"
          />
        </div>
        <button type="submit" value="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
