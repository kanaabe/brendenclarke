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
        <Work>
          {mediaList.map(media => (
            <React.Fragment>
              <ImageContainer>
                <Image alt={media.title} src={media.media} />
              </ImageContainer>
              <Caption>
                <CaptionTitle>{media.title}</CaptionTitle>
                <CaptionContent>{media.caption}</CaptionContent>
              </Caption>
            </React.Fragment>
          ))}
        </Work>
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
  flex-direction: column;
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
  width: 100%;
  height: 10%;
`

const CaptionTitle = styled.h3`
  margin: 0 20px 0 0;
  text-align: right;
`

const CaptionContent = styled.p`
  margin: 0 20px 0 0;
  text-align: right;
`
