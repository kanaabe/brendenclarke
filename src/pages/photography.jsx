import React from "react"
import { LayoutWrapper } from "../components/LayoutWrapper"
import { Body } from "../components/LayoutPrimitives"
import { Nav } from "../components/Nav"
import { ProjectList } from "../components/ProjectList"

export default ({ data, location }) => {
  const allProjects = data.projects.edges
  const sortedProjects = data.order.frontmatter.projects.map(p =>
    allProjects.find(project => project.node.frontmatter.title === p.project)
  )

  return (
    <LayoutWrapper>
      <Body>
        <Nav location={location} />
        <ProjectList projects={sortedProjects} />
      </Body>
    </LayoutWrapper>
  )
}

export const query = graphql`
  {
    order: markdownRemark(frontmatter: { title: { eq: "photographyOrder" } }) {
      frontmatter {
        projects {
          project
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "photography" } }
        fileAbsolutePath: { regex: "/project/" }
      }
    ) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
            thumbnailImage
          }
        }
      }
    }
  }
`
