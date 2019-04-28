import React from "react"
import { LayoutWrapper } from "../components/LayoutWrapper"
import { Body } from "../components/LayoutPrimitives"
import { Nav } from "../components/Nav"
import { IntroCanvas } from "../components/IntroCanvas"

const Home = () => {
  return (
    <LayoutWrapper>
      <Body>
        <Nav />
        <IntroCanvas />
      </Body>
    </LayoutWrapper>
  )
}

export default Home
