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
           <link rel="icon" href="https://images.ctfassets.net/s8p26a84thqj/7E0zzHFT51dNsdeC8HuKFF/31e571f9cbff8a57627b450a7687ca50/iconsite.png?h=250" />
           <meta name="description" content="Exposition photographique sur les luttes des peuples autochtones en Colombie." />
             <meta property="og:title" content="Luttes autochtones de Colombie" />
               <meta property="og:description" content="Exposition photographique sur les luttes des peuples autochtones en Colombie." />
                 <meta property="og:image" content='https://images.ctfassets.net/s8p26a84thqj/2mRVO9EwbWBtXisT7SXTqU/dde21703232389298d5796612d2753b8/indigene.jpg?h=250' />
                   <meta property="og:url" content="https://luttesautochtonesdecolombie.org//" />
                     <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://luttesautochtonesdecolombie.org/" />
          <meta property="twitter:title" content="Luttes autochtones de Colombie" />
          <meta property="twitter:description" content="Exposition photographique sur les luttes des peuples autochtones en Colombie." />
          <meta property="twitter:image" content='https://images.ctfassets.net/s8p26a84thqj/2mRVO9EwbWBtXisT7SXTqU/dde21703232389298d5796612d2753b8/indigene.jpg?h=250' />
    </Helmet>
  )
}


export default SEO
