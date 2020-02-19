const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/components/postLayout.js`)
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) throw result.errors

  result.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `posts${edge.node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: { slug: edge.node.frontmatter.slug },
    })
  })
}
