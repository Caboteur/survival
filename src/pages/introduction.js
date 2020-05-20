import React, {Component} from "react"
import { Link } from "gatsby"
import Home from '../components/home.js'
import Seo from '../components/seo.js'

class MainPage extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>
      <Seo />
      <Home />
      </div>
    );
  }
}

export default MainPage;
