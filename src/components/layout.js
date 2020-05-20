import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Seo from "./seo.js"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query pMyQuery {
    contentfulAsset {
      id
      title
      description
      file {
        url
      }
    }
  }

  `)

  return (
    <>
     <Seo />
      <div>
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
