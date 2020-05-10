import React, { Component } from "react"
import { Link } from "gatsby"
import styles from './introExpo.module.css'
import img1 from "../images/indigene.jpg"
import title from '../images/title2.svg'
import enterwebsite from '../images/enterwebsite.svg'
import { LadderLoading } from 'react-loadingg';

class IntroExpo extends Component {
  constructor() {
    super();
    this.state={
      load:"inherit"
    }
  }

  componentDidMount(){
    const img = new Image();
    img.src = img1;
    img.onload = ()=>{
      console.log("load")
      this.setState({load:"none"},console.log(this.state.load))
    };
    return;
  }

render() {

    return (
      <>
      <div id="wrap"  className={styles.wrap}>
      <div  style={{display:this.state.load}} className={styles.loader}>
       <LadderLoading stye={{zoom:1.3}} color="#416df7" size="large"></LadderLoading>
     </div>
        <div className={styles.img}  style={{backgroundImage: "url(" +  img1 + ")"}}>
      <img id="title"  className={styles.title} src={title} />
      <Link to="/introduction"><img className={styles.button} src={enterwebsite} /></Link>
      </div>
      </div>
      </>
    );
  }
}

export default IntroExpo;
