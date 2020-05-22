import React from "react"
import styled from "styled-components"
import { get } from "lodash"
import { Flex, Box } from "rebass"
import { LayoutWrapper } from "../components/LayoutWrapper"
import { Body } from "../components/LayoutPrimitives"
import { Nav } from "../components/Nav"
import { ProjectList } from "../components/ProjectList"

export default ({ data, location }) => {
  const allProjects = data.projects.edges
  const sortedProjects = data.order.frontmatter.projects.map((p) =>
    allProjects.find((project) => project.node.frontmatter.title === p.project)
  )
  const firstProject = get(
    sortedProjects,
    "[0].node.frontmatter.mediaList[0]",
    {}
  )

  return (
    <LayoutWrapper>
      <Body>
        <Nav location={location} />
        {sortedProjects.length > 1 ? (
          <ProjectList projects={sortedProjects} />
        ) : (
          <Flex alignItems="center" width="100%" height="100%">
            <Box
              width="100%"
              paddingBottom="56.25%"
              style={{ position: "relative" }}
              height="0"
            >
              <IFrame
                frameBorder={0}
                src={firstProject.video}
                title={firstProject.title}
              />
            </Box>
          </Flex>
        )}
      </Body>
    </LayoutWrapper>
  )
}

export const query = graphql`
  {
    order: markdownRemark(frontmatter: { title: { eq: "filmOrder" } }) {
      frontmatter {
        projects {
          project
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: "film" } }
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
            mediaList {
              title
              video
            }
          }
        }
      }
    }
  }
`

const IFrame = styled.iframe`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`
