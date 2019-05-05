import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Nav } from "../components/Nav"
import { Body, Text } from "../components/LayoutPrimitives"
import { LayoutWrapper } from "../components/LayoutWrapper"

export default ({ data }) => {
  const { mediaList } = data.markdownRemark.frontmatter
  return (
    <LayoutWrapper>
      <Body>
        <Nav />
        <WorkViewport>
          <WorkTrack numberOfWorks={mediaList.length}>
            {mediaList.map(media => (
              <ImageContainer>
                <Image alt={media.title} src={media.media} />
                <Text mono size="14px">
                  {media.caption}
                </Text>
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

const MediaContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
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

const CaptionContent = styled.p`
  font-family: Consolas;
  width: 100%;
  margin: 0 20px 0 0;
  text-align: center;
`

// @keyframes ticker {
//   0% { transform: translate3d(0, 0, 0); }
//   100% { transform: translate3d(-100%, 0, 0); }
// }
// .tcontainer{
//   width: 100%;
//   overflow: hidden;
// }
// .ticker-wrap {
//   width: 100%;
//   padding-left: 100%;
//   background-color: #eee;
// }
// .ticker-move {
//   display: inline-block;
//   white-space: nowrap;
//   padding-right: 100%;
//   animation-iteration-count: infinite;
//   animation-timing-function: linear;
//   animation-name: ticker;
//   animation-duration: 10s;
// }
// .ticker-move:hover{
//   animation-play-state: paused;
// }
// .ticker-item{
//   display: inline-block;
//   padding: 0 2rem;
// }
