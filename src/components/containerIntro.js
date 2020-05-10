import React, {Component} from "react"
import { Link } from "gatsby"
import styles from "../components/containerIntro.module.css"
import title from '../images/title.svg'
import next from '../images/next.svg'
import Intro from "./intro.js"
import LogoComponent from "../components/logocomponent.js"
import SocialComponent from "../components/socialcomponent.js"

class ContainerIntro extends Component {
  constructor() {
    super();
  }


render() {



  return (


          <div style={{display:this.props.display}} className={styles.container}>
            <div className={styles.leftSide}>
              <SocialComponent />
              <img className={styles.logo} src={title} />
              <div id={styles.containText}>
                <Intro  />

                </div>
                  <LogoComponent />
          </div>
          <div className={styles.centerSide}> </div>
          <div className={styles.rightSide}>
          <img src={next} onClick={this.props.click} />
          </div>


        </div>
);
}
}

export default ContainerIntro;
