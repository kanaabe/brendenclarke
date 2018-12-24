import React from "react"
import { LayoutWrapper } from "../components/LayoutWrapper"
import { Body } from "../components/LayoutPrimitives"
import { Nav } from "../components/Nav"

const Home = () => {
  return (
    <LayoutWrapper>
      <Body>
        <Nav />
        <h1>Hello World!</h1>
        <h2>This is the homepage</h2>
      </Body>
    </LayoutWrapper>
  )
}

export default Home
