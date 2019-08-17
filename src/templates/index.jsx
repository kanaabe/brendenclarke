import React from "react"
import styled from "styled-components"
import { LayoutWrapper } from "../components/LayoutWrapper"
import { Body } from "../components/LayoutPrimitives"
import { Nav } from "../components/Nav"
import { IntroCanvas } from "../components/IntroCanvas"

const Home = ({ location, data }) => {
  const image = data.markdownRemark.frontmatter.image
  const video = data.markdownRemark.frontmatter.video
  console.log(data)
  return (
    <LayoutWrapper>
      <Body>
        <Nav location={location} />
        <IntroCanvas />
        <MobileContainer>
          {image ? (
            <Image src={image} />
          ) : (
            <IFrame frameBorder={0} src={video} />
          )}
        </MobileContainer>
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

const MobileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`

const Image = styled.img`
  width: 90vw;
  height: 90vh;
  object-fit: contain;
`

const IFrame = styled.iframe`
  margin-top: 50px;
  width: 100%;
  height: calc(100vw * 0.56);
`

export default Home
