const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.jsx")

  const posts = await graphql(`
    {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => result.data.allContentfulPost)

  posts.edges.forEach((post, index) => {
    const previous =
      index === posts.edges.length - 1 ? null : posts.edges[index + 1].node
    const next = index === 0 ? null : posts.edges[index - 1].node
    createPage({
      path: `blog/${post.node.slug}`,
      component: blogTemplate,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })
}
