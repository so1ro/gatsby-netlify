import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import style from "./archive.module.styl"

const POST_ARCHIVE_QUERY = graphql`
  query ContentFulBlogList {
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

const { link } = style

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)
  const { edges } = data.allContentfulBlogPost

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ul>
          {edges.map(edge => (
            <li>
              <Link
                className={link}
                key={edge.node.slug}
                to={`/posts/${edge.node.slug}`}
              >
                {edge.node.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Archive
