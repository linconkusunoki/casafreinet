import React from 'react'
import styles from './about.module.css'
import photo from '../../assets/img/perfil.png'

const About = ({ name, status, text }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.perfil} src={photo} alt="perfil"/>
      <h2 className={styles.name}>{name}</h2>
      <h5 className={styles.status}>{status}</h5>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default About
