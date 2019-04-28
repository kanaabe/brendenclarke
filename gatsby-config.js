module.exports = {
  siteMetadata: {
    title: "Brendan Clarke",
    description: "Brendan Clarke",
    authorName: "Brendan Clarke",
    url: "https://example.com"
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
