import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

const LayoutWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <link rel="canonical" href="https://mysite.com/example" />
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <div>
          <GlobalStyle />
          {children}
        </div>
      </React.Fragment>
    )}
  />
)

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
`

export { LayoutWrapper }
