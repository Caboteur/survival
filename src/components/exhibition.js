import React, {Component} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import img1 from "../images/img1.jpg"
import Colombia from "../images/colombia.svg"

class SecondPage extends Component {
  constructor() {
    super();
    this.state = {
      isDown:false,
      startX:"",
      scrollLeft:"",
      overflow:"hidden",
      picture:6,
      tab:[0, 1, 2, 3, 4, 5, 6 , 7 , 8 , 9 , 10 , 11 , 12]
    }
  }

  componentDidMount(){
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

  }

  handleMapClick(){
    console.log("ok")
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
    console.log("move")
    let name=document.getElementById('item')
    if(!this.state.isDown) return;
  e.preventDefault();
  const x = e.pageX - name.offsetLeft;
  const walk = (x - this.state.startX) * 3;
  name.scrollLeft = this.state.scrollLeft - walk;
  }

  render() {
    let z1 = -350;
    let z2 = 350;
    let x1 = 0;
    let x2 = 0;



    return (
      <Layout>
        <article className="grid-item main">
          <section id="item"
           style={{overflow:this.state.overflow}}
           onMouseDown={this.handleDown.bind(this)}
          onMouseLeave={this.handleLeave.bind(this)}
          onMouseUp={this.handleUp.bind(this)}
          onMouseMove={this.handleMove.bind(this)}
          className="items">

  <div className="D3Cube">

      {
        this.state.tab.map((side)=>{

          z1 = z1 + 700;
          z2 = z2 + 700;
          x1 = x1 + 700;
          x2 = x2 + 700;

          if(side === 0 || side % 3 === 0 ){


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
            <img className="exibitPicture" src={img1} ></img>
            <p className="infoPicture">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
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
            <img className="exibitPicture" src={img1} />
            <div>
            <p className="infoPicture">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
            </div>
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
