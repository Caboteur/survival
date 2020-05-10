import React, { useRef } from "react"
import humanConnect from '../images/logo/humanConnect.png'
import survival from '../images/logo/survival.svg'
import styles from './logocomponent.module.css'

function LogoComponent () {

return(
  <div className={styles.container}>
  <p className={styles.text}>Une exposition proposée par</p>
  <img className={styles.logo} src={survival}></img>
  <img className={styles.logo} src={humanConnect}></img>
  </div>
)
}

export default LogoComponent
