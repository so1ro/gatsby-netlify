import React, { Component } from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data
    function createMarkup() {
      return { __html: markdownRemark.html }
    }
    const { location } = this.props
    return (
      <Layout location={location}>
        <div>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </Layout>
    )
  }
}

export default postLayout
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
