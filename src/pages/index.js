import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const Home = () => {
  return (
    <div>
      <Head />
      <Body>
        <h1>Hello World!</h1>
        <h2>This is the homepage</h2>
      </Body>
    </div>
  )
}

const Head = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Gatsby Netlify Simple Starter</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  )
}

const Body = styled.div`
  max-width: 1250px;
  margin: auto;
`
export default Home
