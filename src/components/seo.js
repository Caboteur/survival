/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet>
         <meta charSet="utf-8"  />
         <title>Luttes autochtones de Colombie</title>
         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
         <link rel="canonical" href="http://mysite.com/example" />
         <meta name="description" content="Exposition photographique sur les luttes des peuples autochtones en Colombie." />
           <meta property="og:title" content="Luttes autochtones de Colombie" />
             <meta property="og:description" content="Exposition photographique sur les luttes des peuples autochtones en Colombie." />
               <meta property="og:image" content='/site.png' />
                 <meta property="og:url" content="http://euro-travel-example.com/index.htm" />
                   <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://myawesomewebsite.com/" />
        <meta property="twitter:title" content="Luttes autochtones de Colombie" />
        <meta property="twitter:description" content="Exposition photographique sur les luttes des peuples autochtones en Colombie." />
        <meta property="twitter:image" content={site} />
   </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
