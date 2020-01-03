import React from "react"
import styled from "styled-components"
import { Text } from "./LayoutPrimitives"

const ProjectList = ({ projects }) => {
  return (
    <Body>
      {projects.map(project => {
        if (!project) return ""
        return (
          <ProjectBlock href={`/project/${project.node.frontmatter.slug}`}>
            <Text size="12px" mono>
              {project.node.frontmatter.title}
            </Text>
          </ProjectBlock>
        )
      })}
    </Body>
  )
}

export { ProjectList }

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 53px auto 0 auto;
  align-content: flex-start;

  @media only screen and (max-width: 500px) {
    margin: 120px auto 0 auto;
    overflow: scroll;
  }
`

const ProjectBlock = styled.a`
  width: 100%;
  margin: 5px 15px;
  text-decoration: none;
  color: black;

  &:hover {
    color: rgb(140, 140, 190);
    font-style: italic;
  }

  @media only screen and (max-width: 500px) {
    margin: 5px;
  }
`
