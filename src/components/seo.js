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
      
   </Helmet>
  )
}



export default SEO
