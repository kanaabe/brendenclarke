import React from "react"
import { graphql } from "gatsby"
import { Nav } from "../components/Nav"
import { Body } from "../components/LayoutPrimitives"

export default ({ data }) => {
  const { title, mediaList } = data.markdownRemark.frontmatter
  return (
    <Body>
      <Nav />
      {title}
      {mediaList.map(media => (
        <>
          <h3>{media.title}</h3>
          <img alt={media.title} src={media.media} />
          <p>{media.caption}</p>
        </>
      ))}
    </Body>
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
