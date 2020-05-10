import React, { useRef } from "react"
import { useEffect } from "react"
import { Link } from "gatsby"
import styles from './introExpo.module.css'
import * as PIXI from 'pixi.js'
import img1 from "../images/indigene.jpg"
import img2 from "../images/indigene-map.png"
import img3 from "../images/depth.png"
import title from '../images/title2.svg'
import enterwebsite from '../images/enterwebsite.svg'

function IntroExpo(props) {
    useEffect(() => {

})

 var style =  {transform: 'translateX(10px)'}

    return (
      <>
      <div id="wrap"  className={styles.wrap}>
      <div className={styles.img}>
      <img id="title" style={style} className={styles.title} src={title} />
      <Link to="/introduction"><img className={styles.button} src={enterwebsite} /></Link>
      </div>
      </div>
      </>
    );

}

export default IntroExpo;
