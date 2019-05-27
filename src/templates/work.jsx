import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Nav } from "../components/Nav"
import { WorkNav } from "../components/WorkNav"
import { Body } from "../components/LayoutPrimitives"
import { LayoutWrapper } from "../components/LayoutWrapper"

export default ({ data, location }) => {
  const { mediaList } = data.markdownRemark.frontmatter
  return (
    <LayoutWrapper>
      <Body>
        <Nav location={location} />
        <WorkNav location={location} />
        <WorkViewport>
          <WorkTrack numberOfWorks={mediaList.length}>
            {mediaList.map(media => (
              <ImageContainer key={media.title}>
                <Image alt={media.title} src={media.media} />
              </ImageContainer>
            ))}
          </WorkTrack>
        </WorkViewport>
      </Body>
    </LayoutWrapper>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        mediaList {
          media
          caption
          title
        }
      }
    }
  }
`

const WorkViewport = styled.div`
  display: inline-grid;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`

const WorkTrack = styled.div`
  display: flex;
  width: calc(70vw * ${props => props.numberOfWorks});
  height: 70vh;
  margin: auto;
`

const ImageContainer = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0 30px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
