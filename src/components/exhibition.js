import React, {Component} from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "./exhibition.module.css"
import SEO from "../components/seo"
import Colombia from "../images/colombia.svg"
import Modal from "./picture.js"
import { LadderLoading } from 'react-loadingg';
import logoCarte from "../images/logoCarte.svg"
import {isMobile} from 'react-device-detect';
import {isTablet} from 'react-device-detect';
import ProgressiveImage  from "react-progressive-image";

class SecondPage extends Component {
  constructor() {
    super();
    this.state = {
      isDown:false,
      startX:"",
      scrollLeft:"",
      overflow:"hidden",
      picture:6,
      data:[],
      display:"none",
      src:"",
      load:"inherit",
      width:100
    }
  }

  componentDidMount(){
   const b = document.body;
   b.style.overflowY = "hidden";
    if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i))
 {console.log("You're using Mobile Device!!")
 this.setState({overflow:"scroll"})
}else{console.log("desktop")

}
this.getData();
  }

  async getData(){
    const datas = await  this.props.datas
    datas.push({node:"id"})
    await console.log(datas);
    this.setState({data:datas})
    await this.state.data.map((t)=>{console.log(t)})
    const tot = (700 * (this.state.data.length - 2)) ;
    this.setState({width:tot})
  }

  handleDown(e){
      let name=document.getElementById('item')
      this.setState({isDown:true})
      this.setState({startX:e.pageX - name.offsetLeft})
      this.setState({scrollLeft:name.scrollLeft})
  }

  handleLeave(e){
    this.setState({isDown : false})
  }
  handleUp(e){
    this.setState({isDown : false})
  }
  handleMove(e){

    let name=document.getElementById('item')
    if(!this.state.isDown) return;
  e.preventDefault();
  const x = e.pageX - name.offsetLeft;

  const walk = (x - this.state.startX) * 3;
  name.scrollLeft = this.state.scrollLeft - walk;
  }
  modalClick(e){
  this.setState({src:e.target.src})
  this.state.display === "none"? this.setState({display:"inherit"}) : this.setState({display:"none"})
  }
  handleload(e){


    this.setState({load:"none"})

  }

  render() {
    const height = window.innerHeight
    const width= window.innerWidth
    const calc = height - width;
    let z1;
    if (calc >= 0 ){
     z1 = -1050;
    }
    else{
      z1 = -1050;
    }

    let z2 = -350;
    let x1 = -700;
    let x2 = -700;



    return (
      <Layout>
          <Link to="/carte"><img src={logoCarte} className={styles.logocarte}/>  </Link>
         <div  style={{display:this.state.load}} className={styles.loader}>
          <LadderLoading stye={{zoom:1.3}} color="#416df7" size="large"></LadderLoading>
        </div>

         <Modal url={this.state.src} display={this.state.display} click={this.modalClick.bind(this)}/>
        <article style={{overflowY: "hidden"}} className="grid-item main">
          <section id="item"
           style={{overflow:this.state.overflow}}
           onMouseDown={this.handleDown.bind(this)}
          onMouseLeave={this.handleLeave.bind(this)}
          onMouseUp={this.handleUp.bind(this)}
          onMouseMove={this.handleMove.bind(this)}
          className="items">

  <div style={{width:this.state.width+"px"}} className="D3Cube">



      {
        this.state.data.map((side, index)=>{
         const end = this.state.data.length - 1;
         const calc = window.innerHeight - window.innerWidth;
          z1 = z1 + 700;
          z2 = z2 + 700;
          x1 = x1 + 700;
          x2 = x2 + 700;


          if(index === end ){
            let ctrans = 'rotateY(90deg) translateX(0px) translateY(0px) translateZ('+z1+'px)';
            let css = {
             transform: ctrans
            }
            let ctrans2 = 'translateX('+x1+'px) translateY(0px) translateZ(-350px)';
            let css2 = {
             transform: ctrans2
            }
            let ctrans3 = 'rotateY(90deg) translateX(0px) translateY(0px) translateZ('+z2+'px)';
            let css3= {
             transform: ctrans3
           }
            if (calc < 0){


           return (
            <>
            <div id="side4" style={css}> </div>
            <div id="side7" style={css2}>

             </div>

             <div id="side8" style={css3}>  </div>
            </>
        )
      }else{
        return (
         <>
         <div id="side4" style={css}> </div>
         </>
     )

      }
        }

          else if(index === 0 || index % 3 === 0 ){


            let ctrans = 'rotateY(90deg) translateX(0px) translateY(0px) translateZ('+z1+'px)';
            let css = {
             transform: ctrans
            }
            let ctrans2 = 'translateX('+x1+'px) translateY(0px) translateZ(-350px)';
            let css2 = {
             transform: ctrans2
            }
            let ctrans3 = 'rotateY(90deg) translateX(0px) translateY(0px) translateZ('+z2+'px)';
            let css3= {
             transform: ctrans3
            }
            return(
            <>
            <div id="side4" style={css}> </div>
            <div id="side7" style={css2}>
            {side.node.photo?

              <>
            {side.node.photo.file.details.image.height > side.node.photo.file.details.image.width?
              <img className="exibitPicture" style={{width:"45%"}} onLoad={this.handleload.bind(this)} onClick={this.modalClick.bind(this)} src={side.node.photo.file.url} ></img>

              :
              <img className="exibitPicture"style={{width:"70%"}} onLoad={this.handleload.bind(this)} onClick={this.modalClick.bind(this)} src={side.node.photo.file.url} ></img>

            }
            </>
              :   <p className="infoPicture">{side.node.info.info}</p>

            }
             </div>

             <div id="side8" style={css3}>  </div>
            </>
          )
          } else {

            let ctrans = 'translateX('+x2+'px) translateY(0px) translateZ(350px)';
            let css = {
             transform: ctrans
            }
            return   (<div id="side9" style={css}>

            {side.node.photo?

                            <>
                          {side.node.photo.file.details.image.height > side.node.photo.file.details.image.width?
                            <img className="exibitPicture"style={{width:"45%"}} onLoad={this.handleload.bind(this)} onClick={this.modalClick.bind(this)} src={side.node.photo.file.url} ></img>

                            :
                            <img className="exibitPicture"style={{width:"70%"}} onLoad={this.handleload.bind(this)} onClick={this.modalClick.bind(this)} src={side.node.photo.file.url} ></img>

                          }
                          </>
              :   <div> <p className="infoPicture">{side.node.info.info}</p></div>

            }

            </div>)
          }
        })

      }



</div>




        </section>
        </article>
      </Layout>
    );
  }
}

export default SecondPage;
