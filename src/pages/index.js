import React from "react"
import { Head } from "../components/Head"
import { Body, Nav, NavLinks } from "../components/LayoutPrimitives"

const Home = () => {
  return (
    <div>
      <Head />
      <Body>
        <Nav>
          <NavLinks>Photography</NavLinks>
          <NavLinks>Video</NavLinks>
        </Nav>
        <h1>Hello World!</h1>
        <h2>This is the homepage</h2>
      </Body>
    </div>
  )
}

export default Home
