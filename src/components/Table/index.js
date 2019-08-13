import React from "react";
import styles from "./table.module.css";

function Table({ title, data }) {
  return (
    <div id="/prices" className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>
        {data.map(({ head, rows }, i) => (
          <div className={styles.column} key={i}>
            <h4 className={styles.head}>{head}</h4>
            {rows.map((value, j) => (
              <span className={styles.row} key={j}>
                {value}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Table;
