import React, {Component} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import img1 from "../images/img1.jpg"
import Colombia from "../images/colombia.svg"
import Map from "../images/map.js"
import data from "../data/data.json"
import styles from "../components/home.module.css"

class SecondPage extends Component {
  constructor() {
    super();
    this.state = {
      isDown:false,
      startX:"",
      scrollLeft:"",
      overflow:"hidden",
      mobile:false,
      description:"",
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
  if(this.state.mobile){
    const anim = document.getElementById("D3Cube");
    anim.classList.remove("reverse");
    anim.classList.add("rotation");
}

data.team.map((people)=>{
  if(people.id === e.target.id){
    this.setState({description:people.info})
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

  render() {



    return (


      <Layout>
        <article style={{overflow:this.state.overflow}} className={styles.gridItem}>

          <section id="item"
           style={{overflow:this.state.overflow}}
          className={styles.items}>

          {this.state.mobile ? 	<div id="D3Cube" className={styles.D3Cube}>
              <div id="side3">
              <Map click={this.handleClick.bind(this)}/>
          </div>

              <div  id="side4"><p className={styles.description}>{this.state.description}</p>
                <button className={styles.begin} onClick={this.handleMenu.bind(this)}>back</button>
              </div>

          </div> : 	<div className={styles.container}>
		<div className={styles.left}>
    <div id="map">
    <Map click={this.handleClick.bind(this)}/>
    </div>
    </div>
		<div className={styles.center}> </div>
    <div className={styles.right}>
      <p className={styles.description}>{this.state.description}</p>
      <h1 className={styles.begin}><Link to="/page-2/"> Commencer l'exposition</Link></h1>
    </div>


</div>


        }



        </section>
        </article>
      </Layout>
    );
  }
}

export default SecondPage;
