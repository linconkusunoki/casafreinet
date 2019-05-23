import React from "react";
import styles from "./table.module.css";

const Table = ({ body, title, thead }) => {
  if (body === "table1") {
    body = tableOne();
  } else {
    body = tableTwo();
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <table>
        <thead>
          <tr>{renderTh(thead)}</tr>
        </thead>
        {body}
      </table>
    </div>
  );
};

const tableTwo = () => {
  return (
    <tbody className={styles.tableTwo}>
      <tr>
        <td>R$ 70,00</td>
        <td>R$ 120,00</td>
        <td>R$ 150,00</td>
      </tr>
      <tr>
        <td>R$ 60,00(cada irmão)</td>
        <td>R$ 100,00(cada irmão)</td>
        <td>R$ 120,00(cada irmão)</td>
      </tr>
      <tr>
        <td>R$ 17,50 / hora</td>
        <td>R$ 15,00 / hora</td>
        <td>R$ 12,50 / hora</td>
      </tr>
    </tbody>
  );
};

const tableOne = () => {
  return (
    <tbody className={styles.tableOne}>
      <tr>
        <td>R$ 20,00</td>
        <td>R$ 55,00</td>
      </tr>
      <tr>
        <td>R$ 15,00(cada irmão)</td>
        <td>R$ 40,00(cada irmão)</td>
      </tr>
    </tbody>
  );
};

function renderTh(e) {
  if (e.length === 0) {
    return null;
  }
  return e.map(value => <th>{value}</th>);
}

export default Table;
