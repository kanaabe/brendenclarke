import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Nav } from "../components/Nav"
import { Body } from "../components/LayoutPrimitives"
import { LayoutWrapper } from "../components/LayoutWrapper"
import Masonry from "react-masonry-component"
import { Box, Flex } from "rebass"
import { ProjectNav } from "../components/ProjectNav"

export default ({ data, location }) => {
  const { mediaList, format, category } = data.markdownRemark.frontmatter
  const [currentIndex, setCurrentIndex] = useState(0)

  const setNext = () => {
    if (currentIndex === mediaList.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const setPrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(mediaList.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <LayoutWrapper>
      <Body>
        <Nav location={location} />
        <ProjectNav width="200px" category={category} location={location} />
        {format === "grid" && (
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
                {!media.video && (
                  <GridImg alt={media.title} src={media.media} />
                )}
              </Box>
            ))}
          </Masonry>
        )}
        {format === "carousel" && (
          <Flex
            width="100%"
            justifyContent="center"
            style={{ position: "relative" }}
          >
            <Image
              alt={mediaList[currentIndex].title}
              src={mediaList[currentIndex].media}
            />
            <Trigger isLeft onClick={setPrev} />
            <Trigger onClick={setNext} />
          </Flex>
        )}
        {/* Horizontal Project List */}
        {/* <ProjectViewport>
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
        </ProjectViewport> */}
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
        format
        mediaList {
          media
          title
          video
        }
      }
    }
  }
`

const GridImg = styled.img`
  width: 100%;
  height: auto;
`

const Image = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
  margin: 64px auto auto;

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: auto;
  }
`

const Trigger = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  left: ${(props) => (props.isLeft ? 0 : "unset")};
  right: ${(props) => (props.isLeft ? "unset" : 0)};
  cursor: ${(props) => (props.isLeft ? "w-resize" : "e-resize")};
`
