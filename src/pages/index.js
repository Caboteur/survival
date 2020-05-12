import React, {Component} from "react"
import { Link } from "gatsby"
import IntroExpo from '../components/introExpo.js'
import { Helmet } from "react-helmet"

class ThirdPage extends Component {

  render() {

    return (

      <div>
          <Helmet>
               <meta charSet="utf-8"  />
               <title>Luttes autochtones de colombie</title>
               <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
               <link rel="canonical" href="http://mysite.com/example" />
               <meta name="description" content="Exposition photo sur les luttes des peuples autochtones en Colombie." />
           </Helmet>
      <IntroExpo />
      </div>

    );
  }
}

export default ThirdPage;
