import React, {Component} from "react"
import { Link } from "gatsby"
import Home from '../components/home.js'

class MainPage extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div>
      <Home />
      </div>
    );
  }
}

export default MainPage;
