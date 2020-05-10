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
import title from '../images/title.svg'
import colombia from '../images/clombia-intro.png'
import Tooltip from "react-simple-tooltip"
import LogoComponent from "../components/logocomponent.js"
import SocialComponent from "../components/socialcomponent.js"
import follow from '../images/follow.svg'

@observer
class Home extends Component {
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
      pass:"inherit"
    }

  }

  componentDidMount(){
    this.checkMobil();
    if(this.state.mobile){
      this.setState({overflow:"scroll"})
    }else{
      this.setState({overflow:"hidden"})
    }
  }


  checkMobil(){
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)){
      this.setState({mobile:true})
    }else{
      this.setState({mobile:false})
    }

  }


  handleClick(e){
    this.setState({color:"#5D4DE1"})
    if(this.state.mobile){
      const anim = document.getElementById("D3Cube");
      anim.classList.remove("reverse");
      anim.classList.add("rotation");
    }

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

handleMenu(e){
  if(this.state.mobile){
    const anim = document.getElementById("D3Cube");
    anim.classList.remove("rotation");
    anim.classList.add("reverse");
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
            <div id="D3Cube" className={styles.D3Cube}>
              <div id="side3">
                <Map click={this.handleClick.bind(this)}/>
              </div>

              <div  id="side4"><p className={styles.description}>{this.state.description}</p>
              <h1 className={styles.begin}>{this.state.title}</h1>
              <button className={styles.begin} onClick={this.handleMenu.bind(this)}>back</button>
              <div className={styles.right}>
                <h1 className={styles.begin}><Link to="/exposition/"> Commencer l'exposition</Link></h1>
              </div>
            </div>

          </div> :

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
            <LogoComponent />
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

export default Home;
