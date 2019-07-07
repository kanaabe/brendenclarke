import React from "react"
import { LayoutWrapper } from "../components/LayoutWrapper"
import { Body } from "../components/LayoutPrimitives"
import { Nav } from "../components/Nav"
import { ProjectList } from "../components/ProjectList"

export default ({ data, location }) => {
  return (
    <LayoutWrapper>
      <Body>
        <Nav location={location} />
        <ProjectList projects={data.allMarkdownRemark.edges} />
      </Body>
    </LayoutWrapper>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "film" } }
        fileAbsolutePath: { regex: "/project/" }
      }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            slug
            thumbnailImage
          }
        }
      }
    }
  }
`
