import React from "react"
import { Helmet } from "react-helmet"

export const Head = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Gatsby Netlify Simple Starter</title>
      <link rel="canonical" href="https://mysite.com/example" />
    </Helmet>
  )
}
