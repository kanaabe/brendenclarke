import React from "react"
import styled from "styled-components"

const ProjectList = ({ projects }) => {
  return (
    <Body>
      {projects.map(project => (
        <ProjectBlock
          backgroundUrl={project.node.frontmatter.thumbnailImage}
          href={`/project/${project.node.frontmatter.slug}`}
        />
      ))}
    </Body>
  )
}

export { ProjectList }

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 53px auto;
  max-width: 1250px;

  @media only screen and (max-width: 500px) {
    margin: 93px auto;
  }
`

const ProjectBlock = styled.a`
  width: 200px;
  height: 100px;
  margin: 20px;
  background-image: url('${props => props.backgroundUrl}');
  background-color: lightgrey;
  background-size: cover;
  background-position: center;

  :hover {
    filter: invert(1);
  }

  @media only screen and (max-width: 500px){
    width: 100%;
  }
`
