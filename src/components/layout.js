import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Archive from "./archive"
import "./layout.css"

const MainLayout = styled.main`
  margin: 0 auto;
  max-width: 90%;
  display: grid;
  grid-template-columns: 4fr 1fr;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <>
      <Header siteTitle={title} />
      <MainLayout>
        <main>{children}</main>
        <Archive />
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </MainLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
