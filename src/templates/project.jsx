import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Nav } from "../components/Nav"
// import { ProjectNav } from "../components/ProjectNav"
import { Body } from "../components/LayoutPrimitives"
import { LayoutWrapper } from "../components/LayoutWrapper"

export default ({ data, location }) => {
  const { mediaList } = data.markdownRemark.frontmatter
  return (
    <LayoutWrapper>
      <Body>
        <Nav location={location} />
        {/* <ProjectNav location={location} /> */}
        <ProjectViewport>
          <ProjectTrack numberOfWorks={mediaList.length}>
            {mediaList.map(media => (
              <ImageContainer key={media.title}>
                <Image alt={media.title} src={media.media} />
              </ImageContainer>
            ))}
          </ProjectTrack>
        </ProjectViewport>
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

const ProjectViewport = styled.div`
  display: inline-grid;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`

const ProjectTrack = styled.div`
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
