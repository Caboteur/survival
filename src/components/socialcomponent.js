import React, { Component} from "react"
import survival from '../images/logo/survival2.svg'
import igapo from '../images/logo/humanconet.svg'
import humanconet from '../images/logo/igapo.svg'
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
          <img className={styles.logoMobile} src={survival}></img>
          <img className={styles.logoMobile} src={humanconet}></img>
          <img className={styles.logoMobile} src={igapo}></img>
          </div>
           : <p></p>
        }
        </div>
:
<div>
<img className={styles.logo} src={survival}></img>
<img className={styles.logo} src={humanconet}></img>
<img className={styles.logo} src={igapo}></img>
</div>

}
</>
)
}
}

export default SocialComponent
