const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/components/postLayout.js`)
  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  if (result.errors) throw result.errors

  result.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `posts/${edge.node.slug}`,
      component: blogPostTemplate,
      context: { slug: edge.node.slug },
    })
  })
}
