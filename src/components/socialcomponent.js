import React, { useRef } from "react"
import facebook from '../images/socialmedia/facebook.svg'
import insta from '../images/socialmedia/instagram.svg'
import styles from './socialcomponent.module.css'

function SocialComponent () {

return(
  <div>
  <img className={styles.logo} src={facebook}></img>
  <img className={styles.logo} src={insta}></img>
  </div>
)
}

export default SocialComponent
