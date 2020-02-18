import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)
  const { edges } = data.allMarkdownRemark

  return (
    <>
      <aside>
        <h3>Archive</h3>
        <ul>
          {edges.map(edge => (
            <Link to={`/posts${edge.node.frontmatter.slug}`}>
              <li>{edge.node.frontmatter.title}</li>
            </Link>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Archive
