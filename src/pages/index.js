import React from "react"
import { LayoutWrapper } from "../components/LayoutWrapper"
import { Body } from "../components/LayoutPrimitives"
import { Nav } from "../components/Nav"

const Home = () => {
  return (
    <LayoutWrapper>
      <Body>
        <Nav />
      </Body>
    </LayoutWrapper>
  )
}

export default Home
