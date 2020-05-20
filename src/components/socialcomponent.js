import React, { Component} from "react"
import survival from '../images/logo/survival2.svg'
import humanconet from '../images/logo/humanconet.svg'
import  igapo from '../images/logo/igapo.svg'
import  cross from '../images/cross.svg'
import link from '../images/link.svg'
import styles from './socialcomponent.module.css'
import {isMobile} from 'react-device-detect';
import {isTablet} from 'react-device-detect';

class SocialComponent extends Component {
  constructor() {
    super();
    this.state={
      open:false,
      width:100,
    }
  }



  handleClick(){
    console.log(isTablet);
    if (isTablet){
      console.log("tablet");
      this.setState({width:52})
    }
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
          <div style={{width:this.state.width+"%"}} className={styles.containerlogoMobile}>
              <img className={styles.logoMobile} onClick={this.handleClick.bind(this)} style={{width:"2rem"}} src={cross} target="_blank"></img>
            <a target="_blank" href="https://www.survivalinternational.fr/"><img className={styles.logoMobile} src={survival} target="_blank"></img></a>
            <a  target="_blank" href='https://igapo-project.jimdofree.com'><img className={styles.logoMobile} src={igapo} target="_blank"></img></a>
            <a  target="_blank" href="https://www.humanconet.org/fr/"><img className={styles.logoMobile} src={humanconet} target="_blank"></img></a>

          </div>
           : <p></p>
        }
        </div>

:
<div>
<a target="_blank" href="https://www.survivalinternational.fr/"><img className={styles.logo} src={survival} target="_blank"></img></a>
<a  target="_blank" href='https://igapo-project.jimdofree.com'><img className={styles.logo} src={igapo} target="_blank"></img></a>
<a target="_blank" href="https://www.humanconet.org/fr/"><img className={styles.logo} src={humanconet} target="_blank"></img></a>

</div>

}
</>
)
}
}

export default SocialComponent
