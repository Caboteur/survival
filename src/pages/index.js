import React, {Component} from "react"
import { Link } from "gatsby"
import IntroExpo from '../components/introExpo.js'
import { Helmet } from "react-helmet"
import site from '../images/site.png'
import Seo from '../components/seo.js'

class ThirdPage extends Component {

  render() {

    return (

      <div>
        <Seo />
      <IntroExpo />

      </div>

    );
  }
}

export default ThirdPage;
