import React from 'react'
import styles from './features.module.css'

const Features = ({Icon, text, className}) => {
  let wrapperClass = styles.wrapper;
  if(className){
    wrapperClass += " " + className;
  }
  return (
    <div className={wrapperClass}>
      <i className={styles.iconCircle}>
        <Icon size="50" fill="#f2994a" />
      </i>
      <h5 className={styles.textCircle}>{text}</h5>
    </div>
  )
}

export default Features