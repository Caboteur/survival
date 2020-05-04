import React, {Component} from "react"
import { Link } from "gatsby"
import styles from './picture.module.css'

class Picture extends Component {

  render() {

    return (
      <div style={{display:this.props.display}} onClick={this.props.click} className={styles.modal}>
      <button onClick={this.props.click}>click click click </button>
      <img className={styles.img} src={this.props.url} />
      </div>
    );
  }
}

export default Picture;
