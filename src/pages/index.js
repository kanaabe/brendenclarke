import React from "react"
import { LayoutWrapper } from "../components/LayoutWrapper"
import { Body } from "../components/LayoutPrimitives"
import { Nav } from "../components/Nav"

const Home = () => {
  return (
    <LayoutWrapper>
      <Body>
        <Nav />
        <h1>Pablo Picasso</h1>
      </Body>
    </LayoutWrapper>
  )
}

export default Home
