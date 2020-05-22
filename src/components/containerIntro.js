import React, {Component} from "react"
import { Link } from "gatsby"
import styles from "../components/containerIntro.module.css"
import title from '../images/title.svg'
import next from '../images/next.svg'
import Intro from "./intro.js"
import SocialComponent from "../components/socialcomponent.js"

class ContainerIntro extends Component {

render() {



  return (


          <div style={{display:this.props.display}} className={styles.container}>
            <div className={styles.leftSide}>
              <SocialComponent />
                <Link to="/introduction/"><img className={styles.logo} src={title} /></Link>
              <div id={styles.containText}>
                <Intro  />

                </div>

          </div>
          <div className={styles.centerSide}> </div>
          <div className={styles.rightSide}>
          <img style={{width:"50%"}} src={next} onClick={this.props.click} />
          </div>


        </div>
);
}
}

export default ContainerIntro;
