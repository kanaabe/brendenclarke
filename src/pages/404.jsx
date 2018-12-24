import React from "react"
import { LayoutWrapper } from "../components/LayoutWrapper"
import { Body } from "../components/LayoutPrimitives"

const NotFound = () => {
  return (
    <LayoutWrapper>
      <Body>
        <h1>Sorry! The page you are looking for does not exist.</h1>
        <h2>Please go back and try something else.</h2>
      </Body>
    </LayoutWrapper>
  )
}

export default NotFound
