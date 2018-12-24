module.exports = {
  siteMetadata: {
    title: "Sample Title",
    description: "Sample Description goes here."
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`
  ]
}
