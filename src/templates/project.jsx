import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Nav } from "../components/Nav"
import { Body } from "../components/LayoutPrimitives"
import { LayoutWrapper } from "../components/LayoutWrapper"
import Masonry from "react-masonry-component"
import { Box } from "rebass"
import { ProjectNav } from "../components/ProjectNav"

export default ({ data, location }) => {
  const { mediaList } = data.markdownRemark.frontmatter

  return (
    <LayoutWrapper>
      <Body>
        <Nav location={location} />
        <ProjectNav width="200px" location={location} />
        <Masonry
          style={{
            width: "100%",
            marginTop: "64px",
          }}
          options={{
            horizontalOrder: true,
            percentPosition: true,
            columnWidth: ".grid-item",
            gutter: 5,
          }}
        >
          {mediaList.map((media) => (
            <Box className="grid-item" width="49%" key={media.title}>
              <GridImg alt={media.title} src={media.media} />
            </Box>
          ))}
        </Masonry>
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
          title
        }
      }
    }
  }
`

const GridImg = styled.img`
  width: 100%;
  height: auto;
`