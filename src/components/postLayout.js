import React, { Component } from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "./layout"

export const query = graphql`
  query PostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMM Do, YYYY")
      body {
        json
      }
    }
  }
`

class postLayout extends Component {
  render() {
    const { title, publishDate, body } = this.props.data.contentfulBlogPost
    const { location } = this.props
    const option = {
      renderNode: {
        "embedded-asset-block": node => {
          const alt = node.data.target.fields.title["en-US"]
          const url = node.data.target.fields.file["en-US"].url
          return <img alt={alt} src={url} />
        },
      },
    }
    // function createMarkup() {
    //   return { __html: markdownRemark.html }
    // }
    return (
      <Layout location={location}>
        <div>
          <h1>{title}</h1>
          <p>{publishDate}</p>
          {documentToReactComponents(body.json, option)}
          {/* <div dangerouslySetInnerHTML={createMarkup()} /> */}
        </div>
      </Layout>
    )
  }
}

export default postLayout
