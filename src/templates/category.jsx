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
        <WorkOuter>
          <Work>
            {mediaList.map(media => (
              <MediaContainer>
                <ImageContainer>
                  <Image alt={media.title} src={media.media} />
                </ImageContainer>
                <Caption>
                  <CaptionContent>{media.caption}</CaptionContent>
                </Caption>
              </MediaContainer>
            ))}
          </Work>
        </WorkOuter>
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
  // width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const WorkOuter = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`

const Work = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
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
