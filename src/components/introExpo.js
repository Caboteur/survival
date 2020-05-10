import React, { Component } from "react"
import { Link } from "gatsby"
import styles from './introExpo.module.css'
import img1 from "../images/indigene.jpg"
import img2 from "../images/indigene-map.png"
import img3 from "../images/depth.png"
import title from '../images/title2.svg'
import enterwebsite from '../images/enterwebsite.svg'
import BackgroundImageOnLoad from 'background-image-on-load';
import { LadderLoading } from 'react-loadingg';

class IntroExpo extends Component {

  constructor() {
    super();
    this.state={
      bgIsLoaded: false,
      load:"inherit"
    }
  }

render() {
  const { bgIsLoaded } = this.state;
    return (
      <>
      <div id="wrap"  className={styles.wrap}>
      <div style={{display:this.state.load}} className={styles.loader}>
       <LadderLoading stye={{zoom:1.3}} color="#416df7" size="large"></LadderLoading>
     </div>
      <div>
        <BackgroundImageOnLoad
          src={"/indigene.jpg"}
          onLoadBg={() =>
            this.setState({
            bgIsLoaded: true,
            load: "none"
          })
        }
          onError={err => console.log('error', err)}
        />
      </div>
      <div className={styles.img}>
      <img id="title"  className={styles.title} src={title} />
      <Link to="/introduction"><img className={styles.button} src={enterwebsite} /></Link>
      </div>
      </div>
      </>
    );
  }
}

export default IntroExpo;
