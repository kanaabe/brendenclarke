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
  overflow: scroll;
`

const ImageContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 80%;
  z-index: -1;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const Caption = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`

const CaptionContent = styled.p`
  margin: 0 20px 0 0;
  text-align: right;
`
