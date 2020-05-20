/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function SEO() {


  return (

    <Helmet>
      <meta charSet="utf-8"  />
           <title>Luttes autochtones de Colombie</title>
           <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
           <link rel="canonical" href="http://mysite.com/example" />
           <meta name="description" content="Exposition photographique sur les luttes des peuples autochtones en Colombie." />
             <meta property="og:title" content="Luttes autochtones de Colombie" />
               <meta property="og:description" content="Exposition photographique sur les luttes des peuples autochtones en Colombie." />
                 <meta property="og:image" content='https://images.ctfassets.net/s8p26a84thqj/2QhUD5gBCEA0eZcMS1wI2w/3b0eefab9f51680b386f94efd14cf8b7/site.png?h=250' />
                   <meta property="og:url" content="https://fervent-bardeen-b6b6c9.netlify.app/" />
                     <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="http://myawesomewebsite.com/" />
          <meta property="twitter:title" content="Luttes autochtones de Colombie" />
          <meta property="twitter:description" content="Exposition photographique sur les luttes des peuples autochtones en Colombie." />
          <meta property="twitter:image" content='https://images.ctfassets.net/s8p26a84thqj/2QhUD5gBCEA0eZcMS1wI2w/3b0eefab9f51680b386f94efd14cf8b7/site.png?h=250' />
    </Helmet>
  )
}


export default SEO
