import React, {Component} from "react"
import { Link } from "gatsby"
import Cartecomponent from '../components/cartecomponent.js'
import Seo from '../components/seo.js'

class CartePage extends Component {

  render() {

    return (
      <div>
        <Seo />
      <Cartecomponent />
      </div>
    );
  }
}

export default CartePage;
