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
      check:"none",
      tel:"none",
      selection:false,
    }

  }

  componentDidMount(){
    this.checkMobil();
  }


  checkMobil(){
    if(isTablet){
      this.setState({overflow:"hidden"})
      this.setState({check:"inherit"})
      }
    else if(isMobile){
      this.setState({mobile:true})
      this.setState({overflow:"auto"})
      this.setState({check:"inherit"})
    }
    else{
      this.setState({overflow:"hidden"})
      this.setState({check:"inherit"})
    }
  }


  handleClick(e){
      this.setState({selection:true})
    this.setState({color:"#5D4DE1"})
    const ellipse = document.getElementsByClassName("point");
    const point = e.target.id;
const targt = e.target.getAttribute("value");
  const styling = document.querySelector("ellipse#"+point);

    for (var item of ellipse) {
      item.style.fill="#5D4DE1";
    }
    styling.style.fill="F73A60"
    data.team.map((people)=>{
      if(people.id === targt){
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

      <div style={{display:this.state.check}}>

        <Layout>



          <article style={{overflow:this.state.overflow}} className={styles.gridItem}>

            <section id="item"
              style={{overflow:this.state.overflow}}
              className={styles.items}>

              {this.state.mobile ?
                <>

                    <img onClick={() => window.location.reload(false)} className={styles.logo} src={title} />
                  <SocialComponent />
                <div >


                  <div className={styles.mobileMap} >

                    <Map class={styles.mapSvg} click={this.handleClick.bind(this)}/>

                  {this.state.selection?
                    <>
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

                  </>
                  :
                  <div className={styles.ClickMobile}>Cliquez sur un point pour partir à la rencontre d'un peuple</div>

                  }
                  </div>
                  <div className={styles.infoMobile} style={{display:this.state.tel}}>
                    <h1 className={styles.begin}>{this.state.title}</h1>
                    <p className={styles.description}>{this.state.description}</p>
                      <img style={{width: "128px"}} className={styles.followMobile} src={back} onClick={this.handleNext.bind(this)}/>
                    <Link to="/exposition/"><img className={styles.followMobile} src={follow} /></Link>

                </div>

              </div>


            </>

              :

               <>


                  <div className={styles.container}>
                <div className={styles.left}>

                      <img onClick={() => window.location.reload(false)} className={styles.logo} src={title} />
                  <SocialComponent />

                    <div id="map">

                        <Map class={styles.mapSvg} click={this.handleClick.bind(this)}/>
                        {this.state.selection?
                        <div className={styles.pbcontainer}>
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
                        :
                        <>
                        <h1 className={styles.Click}>Cliquez sur un point <br></br> pour partir à la rencontre d'un peuple</h1>

                        </>
                    }

                  </div>


                </div>
                <div className={styles.center}> </div>
                {this.state.selection?
                  <>

                <div className={styles.right}>
                        <Link to="/exposition/"><img className={styles.follow} src={follow} /></Link>
                    <h1 className={styles.begin}>{this.state.title}</h1>
                    <div>
                      <p className={styles.description}>{this.state.description}</p>
                        </div>
                    </div>
                    </>
                  :
                  <>

                <div style={{background:"#e6e6e6"}} className={styles.right}>

                    </div>
                    </>
              }

            </div>



          </>


        }



      </section>
    </article>
    </Layout>

  </div>
);
}
}

export default Carte;
