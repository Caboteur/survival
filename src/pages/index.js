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

        <Helmet>
             <meta charSet="utf-8"  />
             <title>Luttes autochtones de Colombie</title>
             <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
             <link rel="canonical" href="http://mysite.com/example" />
             <meta name="description" content="Exposition photographique sur les luttes des peuples autochtones en Colombie." />
               <meta property="og:title" content="Luttes autochtones de Colombie" />
                 <meta property="og:description" content="Exposition photographique sur les luttes des peuples autochtones en Colombie." />
                   <meta property="og:image" content='https://images.ctfassets.net/s8p26a84thqj/2QhUD5gBCEA0eZcMS1wI2w/3b0eefab9f51680b386f94efd14cf8b7/site.png?h=250' />
                     <meta property="og:url" content="http://euro-travel-example.com/index.htm" />
                       <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="http://myawesomewebsite.com/" />
            <meta property="twitter:title" content="Luttes autochtones de Colombie" />
            <meta property="twitter:description" content="Exposition photographique sur les luttes des peuples autochtones en Colombie." />
            <meta property="twitter:image" content={site} />
       </Helmet>
      <IntroExpo />
      </div>

    );
  }
}

export default ThirdPage;
