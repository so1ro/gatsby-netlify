import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

// import Image from "../components/image"

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMM Do, YYYY")
          }
        }
      }
    }
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link to={`/posts${node.frontmatter.slug}`}>Read more</Link>
        </article>
      ))
    }
  />
)

export default Listing
