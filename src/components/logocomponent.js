import React, { useRef } from "react"
import humanConnect from '../images/logo/humanConnect.png'
import survival from '../images/logo/survival.svg'
import igapo from '../images/logo/igapo.jpg'
import styles from './logocomponent.module.css'

function LogoComponent () {

return(
  <div className={styles.container}>
  <div>
  <p className={styles.text}>Une exposition proposée par</p>
  <img className={styles.logo} src={survival}></img>
  <img className={styles.logo} src={humanConnect}></img>
  <img className={styles.igapo} src={igapo}></img>
  </div>
  </div>
)
}

export default LogoComponent
