import React, { useRef } from "react"
import survival from '../images/logo/survival2.svg'
import igapo from '../images/logo/humanconet.svg'
import humanconet from '../images/logo/igapo.svg'
import styles from './logocomponent.module.css'

function LogoComponent () {

return(
  <div className={styles.container}>
  <div>
  <p className={styles.text}>Une exposition proposée par</p>
  <div style={{width: "100%", display: "block", margin: "auto"}}>
  <img className={styles.logo} src={survival}></img>
  <img className={styles.logo} src={humanconet}></img>
  <img className={styles.logo} src={igapo}></img>
  </div>
  </div>
  </div>
)
}

export default LogoComponent
