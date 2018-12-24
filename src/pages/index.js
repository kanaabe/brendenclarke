import React from "react"
import { LayoutWrapper } from "../components/LayoutWrapper"
import { Body, Nav, NavLinks } from "../components/LayoutPrimitives"

const Home = () => {
  return (
    <LayoutWrapper>
      <Body>
        <Nav>
          <NavLinks>Photography</NavLinks>
          <NavLinks>Video</NavLinks>
        </Nav>
        <h1>Hello World!</h1>
        <h2>This is the homepage</h2>
      </Body>
    </LayoutWrapper>
  )
}

export default Home
