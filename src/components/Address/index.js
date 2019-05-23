import React from 'react'
import styles from './address.module.css'

const Address = ({ title, street, city, cep }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.mapBox}></div>
      <div className={styles.address}>
        <h3>{street}</h3>
        <h3>{city}</h3>
        <h3>CEP {cep}</h3>
      </div>
    </div>
  )
}

export default Address