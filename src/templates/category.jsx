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
          <>
            <h3>{media.title}</h3>
            <ImageContainer>
              <Image alt={media.title} src={media.media} />
            </ImageContainer>
            <p>{media.caption}</p>
          </>
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

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`
