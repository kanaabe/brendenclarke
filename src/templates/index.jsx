import React from "react"
import { LayoutWrapper } from "../components/LayoutWrapper"
import { Body } from "../components/LayoutPrimitives"
import { Nav } from "../components/Nav"
import { IntroCanvas } from "../components/IntroCanvas"

const Home = ({ location }) => {
  return (
    <LayoutWrapper>
      <Body>
        <Nav location={location} />
        <IntroCanvas />
      </Body>
    </LayoutWrapper>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        image
        video
      }
    }
  }
`

export default Home
