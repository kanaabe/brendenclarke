import React from "react"
import styled from "styled-components"
import { Text } from "./LayoutPrimitives"

const ProjectList = ({ projects }) => {
  return (
    <Body>
      {projects.map(project => (
        <ProjectBlock href={`/project/${project.node.frontmatter.slug}`}>
          <ProjectImage src={project.node.frontmatter.thumbnailImage} />
          <Text size="12px" mono>
            {project.node.frontmatter.title}
          </Text>
        </ProjectBlock>
      ))}
    </Body>
  )
}

export { ProjectList }

const ProjectImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;

  :hover {
    filter: invert(1);
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 53px auto 0 auto;
  max-width: 1250px;
  align-content: flex-start;

  @media only screen and (max-width: 500px) {
    margin: 93px auto 0 auto;
    overflow: scroll;
  }
`

const ProjectBlock = styled.a`
  width: 200px;
  height: 200px;
  margin: 20px;
  background-image: url('${props => props.backgroundUrl}');
  background-color: lightgrey;
  background-size: cover;
  background-position: center;
  text-decoration: none;
  color: black;

  @media only screen and (max-width: 500px){
    width: 100%;
  }
`
