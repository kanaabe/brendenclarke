const _ = require("lodash")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                templateKey
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(
            `./src/templates/${String(node.frontmatter.templateKey)}.jsx`
          ),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        })
      })

      // Create the /work page
      const firstWork = result.data.allMarkdownRemark.edges.filter(
        page => page.node.frontmatter.templateKey === "work"
      )[0]
      if (firstWork) {
        createPage({
          path: "work",
          component: path.resolve("./src/templates/work.jsx"),
          context: { slug: firstWork.node.fields.slug }
        })
      }

      resolve()
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  })
}
