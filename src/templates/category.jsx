import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Nav } from "../components/Nav"
import { Body } from "../components/LayoutPrimitives"
import { LayoutWrapper } from "../components/LayoutWrapper"

export default ({ data }) => {
  const { mediaList } = data.markdownRemark.frontmatter
  return (
    <LayoutWrapper>
      <Body>
        <Nav />
        {mediaList.map(media => (
          <Work>
            <Caption>
              <h3>{media.title}</h3>
              <p>{media.caption}</p>
            </Caption>
            <ImageContainer>
              <Image alt={media.title} src={media.media} />
            </ImageContainer>
          </Work>
        ))}
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

const Work = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 90%;
  z-index: -1;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const Caption = styled.div`
  position: absolute;
  width: 100%;
  height: 10%;
  bottom: 0;
`
