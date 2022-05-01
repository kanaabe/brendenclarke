module.exports = {
  siteMetadata: {
    title: "Brenden Clarke",
    description: "Brenden Clarke",
    authorName: "Brenden Clarke",
    url: "https://brendenclarke.com"
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
