import React, {Component} from "react"
import { Link } from "gatsby"
import IntroExpo from '../components/introExpo.js'
import Seo from '../components/Seo.js'

class ThirdPage extends Component {

  render() {

    return (

      <div>
      <Seo
      title="Home"
      description="Description of the site/home page."
      pagePath="/"
      schema={`{
            "@context": "http://schema.org",
            "@type": "WebPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Example Company",
              "image": "/iconsite.png"
            }
          }`}
    />
      <IntroExpo />
      </div>

    );
  }
}

export default ThirdPage;
