import React from "react";
import styles from "./list.module.css";
import { IoMdCheckmark } from "react-icons/io";

const List = ({ title, list }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <ul>{renderItems(list)}</ul>
    </div>
  );
};

function renderItems(list) {
  if (list.length === 0) {
    return null;
  }

  return list.map(item => (
    <li>
      <i className={styles.icon}>
        <IoMdCheckmark className={styles.check} size="27" fill="#27ae60" />
      </i>
      <p className={styles.item}>{item}</p>
    </li>
  ));
}

export default List;
