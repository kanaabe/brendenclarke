import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Nav } from "../components/Nav"
import { ProjectNav } from "../components/ProjectNav"
import { Body } from "../components/LayoutPrimitives"
import { LayoutWrapper } from "../components/LayoutWrapper"
import { IFrame } from "../components/IFrame"
import {
  ImageContainer,
  ProjectTrack,
  ProjectViewport,
} from "../components/ProjectComponents"

export default ({ data, location }) => {
  const { category, mediaList } = data.markdownRemark.frontmatter
  return (
    <LayoutWrapper>
      <Body>
        <Nav location={location} />
        <ProjectViewport>
          <ProjectTrack>
            <ProjectNav category={category} location={location} />
            {mediaList.map((media) => (
              <ImageContainer key={media.title}>
                {media.video ? (
                  <IFrame
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

const Image = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: auto;
  }
`
