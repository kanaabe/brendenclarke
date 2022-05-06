const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode,
      basePath:
        node.frontmatter.title === "filmOrder" ||
        node.frontmatter.title === "photographyOrder"
          ? "utils"
          : "pages",
    });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: "/",
    toPath: "/project/overview",
    isPermanent: true,
    redirectInBrowser: true,
  });

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/pages/" } }) {
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
    `).then((result) => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(
            `./src/templates/${String(node.frontmatter.templateKey)}.jsx`
          ),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        });
      });

      resolve();
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
