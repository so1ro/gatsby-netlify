import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Archive from "./archive"
import "./reset.styl"
import style from "./layout.module.styl"
import Img from "gatsby-image"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { regex: "/astronaut/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  const { main } = style
  const { fluid } = data.file.childImageSharp

  return (
    <>
      <Header siteTitle={title} />
      {location.pathname === "/" && <Img fluid={fluid} />}
      <main className={main}>
        <main>{children}</main>
        <Archive />
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
