import React, { Component} from "react"
import survival from '../images/logo/survival2.svg'
import humanconet from '../images/logo/humanconet.svg'
import  igapo from '../images/logo/igapo.svg'
import link from '../images/link.svg'
import styles from './socialcomponent.module.css'
import {isMobile} from 'react-device-detect';
import {isTablet} from 'react-device-detect';

class SocialComponent extends Component {
  constructor() {
    super();
    this.state={
      open:false
    }
  }


  handleClick(){
      this.state.open? this.setState({open:false}) : this.setState({open:true})
    console.log("ok");
  }

  render() {

    return (
  <>
  {isMobile ?
        <div>
        <img className={styles.link} onClick={this.handleClick.bind(this)} src={link}></img>
        {this.state.open?
          <div className={styles.containerlogoMobile}>
            <a href="https://www.survivalinternational.fr/"><img className={styles.logoMobile} src={survival}></img></a>
            <a href='https://igapo-project.jimdofree.com'><img className={styles.logoMobile} src={igapo}></img></a>
            <a href="https://www.humanconet.org/fr/"><img className={styles.logoMobile} src={humanconet}></img></a>
          </div>
           : <p></p>
        }
        </div>

:
<div>
<a href="https://www.survivalinternational.fr/"><img className={styles.logo} src={survival}></img></a>
<a href='https://igapo-project.jimdofree.com'><img className={styles.logo} src={igapo}></img></a>
<a href="https://www.humanconet.org/fr/"><img className={styles.logo} src={humanconet}></img></a>

</div>

}
</>
)
}
}

export default SocialComponent
