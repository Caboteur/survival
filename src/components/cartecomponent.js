import React, {Component} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Colombia from "../images/colombia.svg"
import Map from "../images/map.js"
import data from "../data/data.json"
import styles from "../components/home.module.css"
import { observer } from 'mobx-react';
import mobx from "mobx";
import myStore from '../store/store.js'
import ContainerIntro from "./containerIntro.js"
import ContainerIntroMobile from "./containerIntroMobile.js"
import title from '../images/title.svg'
import colombia from '../images/clombia-intro.png'
import Tooltip from "react-simple-tooltip"
import SocialComponent from "../components/socialcomponent.js"
import follow from '../images/follow.svg'
import next from '../images/next.svg'
import back from '../images/back.svg'
import {isMobile} from 'react-device-detect';
import {isTablet} from 'react-device-detect';

@observer
class Carte extends Component {
  constructor() {
    super();
    this.state = {
      isDown:false,
      startX:"",
      scrollLeft:"",
      overflow:"hidden",
      mobile:false,
      description:data.team[0].info,
      title:data.team[0].id,
      icon:data.team[0].icon,
      pass:"inherit",
      tel:"none"
    }

  }

  componentDidMount(){
    this.checkMobil();
  }


  checkMobil(){
    if(isTablet){
      this.setState({overflow:"hidden"})
      }
    else if(isMobile){
      this.setState({mobile:true})
      this.setState({overflow:"auto"})
    }
    else{
      this.setState({overflow:"hidden"})
    }
    
  }


  handleClick(e){
    this.setState({color:"#5D4DE1"})


    const ellipse = document.getElementsByTagName("ellipse");
    const point = e.target.id;
    for (var item of ellipse) {
      item.style.fill="#5D4DE1";
    }
    e.target.style.fill="F73A60"
    data.team.map((people)=>{
      if(people.id === point){
        this.setState({title:people.id})
        this.setState({description:people.info})
        this.setState({icon:people.icon}, console.log(people.icon))
        myStore.changeExpo(people.id)
      }
    }
  )

}

handleNext(){
  if(this.state.mobile){
    if(this.state.tel==="inherit"){this.setState({tel:"none"})}
    else{this.setState({tel:"inherit"})}
  }
}


handleIntro(){
  this.setState({pass:"none"})
}

render() {



  return (


    <Layout>



      <article style={{overflow:this.state.overflow}} className={styles.gridItem}>

        <section id="item"
          style={{overflow:this.state.overflow}}
          className={styles.items}>

          {this.state.mobile ?
            <>
              <img className={styles.logo} src={title} />
              <SocialComponent />
            <div >


              <div className={styles.mobileMap} >

                <Map class={styles.mapSvg} click={this.handleClick.bind(this)}/>

                <div className={styles.pbMobileContainer}>
                <h1 className={styles.pbMobile}>Problématiques</h1>
                {
                  this.state.icon.map((icon)=>{

                    return(
                       <Tooltip
                         style={{display:"block",float: "left", background:"#ffff"}}
                         content={icon.title}>
                      <img className={styles.iconMap} src={icon.url} />
                      </Tooltip>
                    )
                  })
                }

                </div>
                <img className={styles.next} src={next} onClick={this.handleNext.bind(this)}/>
              </div>

              <div className={styles.infoMobile} style={{display:this.state.tel}}>
                <h1 className={styles.begin}>{this.state.title}</h1>
                <p className={styles.description}>{this.state.description}</p>
                  <img className={styles.follow} src={back} onClick={this.handleNext.bind(this)}/>
                <Link to="/exposition/"><img className={styles.follow} src={follow} /></Link>

            </div>

          </div>


        </>

          :

           <>

              <div className={styles.container}>
            <div className={styles.left}>

              <img className={styles.logo} src={title} />
              <SocialComponent />

              <div id="map">

                  <Map class={styles.mapSvg} click={this.handleClick.bind(this)}/>

                  <div>
                  <h1 className={styles.pb}>Problématiques</h1>
                  {
                    this.state.icon.map((icon)=>{

                      return(
                         <Tooltip
                           style={{display:"block",float: "left", background:"#ffff"}}
                           content={icon.title}>
                        <img className={styles.iconMap} src={icon.url} />
                        </Tooltip>
                      )
                    })
                  }

                  </div>

            </div>


          </div>
          <div className={styles.center}> </div>
          <div className={styles.right}>
                  <Link to="/exposition/"><img className={styles.follow} src={follow} /></Link>
              <h1 className={styles.begin}>{this.state.title}</h1>
              <div>
                <p className={styles.description}>{this.state.description}</p>
              </div>


        </div>
        </div>


      </>


    }



  </section>
</article>
</Layout>
);
}
}

export default Carte;
