import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Nav } from "../components/Nav"
import { ProjectNav } from "../components/ProjectNav"
import { Body } from "../components/LayoutPrimitives"
import { LayoutWrapper } from "../components/LayoutWrapper"

export default ({ data, location }) => {
  const { category, mediaList } = data.markdownRemark.frontmatter
  return (
    <LayoutWrapper>
      <Body>
        <Nav location={location} />
        <ProjectNav category={category} location={location} />
        <ProjectViewport>
          <ProjectTrack numberOfWorks={mediaList.length}>
            {mediaList.map(media => (
              <ImageContainer key={media.title}>
                {media.video ? (
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    src={media.video}
                    title={media.title}
                  />
                ) : (
                  <Image alt={media.title} src={media.media} />
                )}
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
        category
        mediaList {
          media
          title
          video
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

  @media only screen and (max-width: 500px) {
    width: 100%;
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0 30px;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
