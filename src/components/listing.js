import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import style from "./listing.module.styl"

// import Image from "../components/image"

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMM Do, YYYY")
        }
      }
    }
  }
`

const { article, read_more } = style

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allContentfulBlogPost }) =>
      allContentfulBlogPost.edges.map(({ node }) => (
        <article className={article} key={node.slug}>
          <Link to={`/posts/${node.slug}`}>
            <h2>{node.title}</h2>
          </Link>
          <p>{node.publishDate}</p>
          <p>{node.excerpt}</p>
          <Link className={read_more} to={`/posts/${node.slug}`}>
            Read more
          </Link>
        </article>
      ))
    }
  />
)

export default Listing
